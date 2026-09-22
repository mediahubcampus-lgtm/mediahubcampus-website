"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale, type TranslationKey } from "@/lib/i18n/translations";

const STORAGE_KEY = "mhc_locale";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Traduit une clé, avec repli sur le français si la clé ou la langue manque. */
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
  isHydrated: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function interpolate(text: string, vars?: Record<string, string | number>): string {
  if (!vars) return text;
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{{${key}}}`, String(value)),
    text
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [isHydrated, setIsHydrated] = useState(false);

  // Lit la langue choisie précédemment (persistée en local, comme les mascottes)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (
        stored === "fr" ||
        stored === "en" ||
        stored === "zh" ||
        stored === "zhTW" ||
        stored === "es" ||
        stored === "ar"
      ) {
        setLocaleState(stored);
      }
    } catch {
      // localStorage indisponible (navigation privée, etc.)
    }
    setIsHydrated(true);
  }, []);

  // Garde l'attribut lang (SEO/accessibilité) synchronisé
  useEffect(() => {
    if (!isHydrated) return;
    const langByLocale: Record<Locale, string> = {
      fr: "fr",
      en: "en",
      zh: "zh-CN",
      zhTW: "zh-TW",
      es: "es",
      ar: "ar",
    };
    document.documentElement.lang = langByLocale[locale];
  }, [locale, isHydrated]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage indisponible : la langue reste active pour la session en cours
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      const entry = translations[key];
      if (!entry) return key;
      const text = entry[locale] ?? entry.fr;
      return interpolate(text, vars);
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
