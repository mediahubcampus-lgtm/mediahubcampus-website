"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/i18n/translations";

const LOCALES: { value: Locale; short: string; flag: string }[] = [
  { value: "fr", short: "FR", flag: "🇫🇷" },
  { value: "en", short: "EN", flag: "🇬🇧" },
  { value: "zh", short: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const current = LOCALES.find((l) => l.value === locale) ?? LOCALES[0];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t("lang.switcherLabel")}
        aria-expanded={isOpen}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-white border border-[var(--card-border)] hover:border-[var(--primary)]/50 rounded-lg px-3 py-2 transition-colors"
      >
        <Globe size={16} />
        <span aria-hidden>{current.flag}</span>
        <span className="font-medium">{current.short}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl shadow-xl overflow-hidden z-50">
          {LOCALES.map((l) => (
            <button
              key={l.value}
              onClick={() => {
                setLocale(l.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                l.value === locale
                  ? "bg-[var(--primary)]/15 text-white"
                  : "text-[var(--text-muted)] hover:bg-[var(--bg-dark)] hover:text-white"
              }`}
            >
              <span aria-hidden>{l.flag}</span>
              <span className="flex-grow">{t(`lang.${l.value}` as const)}</span>
              {l.value === locale && <Check size={14} className="text-[var(--accent-cyan)]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
