"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const { status, isHydrated, isSettingsOpen, acceptAll, declineAll, closeSettings } =
    useCookieConsent();
  const { t } = useLanguage();

  if (!isHydrated) return null;
  const shouldShow = status === null || isSettingsOpen;
  if (!shouldShow) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.title")}
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="font-semibold text-white mb-1">{t("cookies.title")}</h2>
          <p className="text-sm text-[var(--text-muted)]">
            {t("cookies.description")}{" "}
            <a
              href="/politique-confidentialite"
              className="underline hover:text-white transition-colors"
            >
              {t("cookies.learnMore")}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {isSettingsOpen && status !== null && (
            <button
              type="button"
              onClick={closeSettings}
              className="text-sm text-[var(--text-muted)] hover:text-white transition-colors px-3 py-2"
            >
              {t("cookies.close")}
            </button>
          )}
          <button
            type="button"
            onClick={declineAll}
            className="text-sm font-medium border border-[var(--card-border)] rounded-lg px-4 py-2 hover:bg-white/5 transition-colors"
          >
            {t("cookies.decline")}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="text-sm font-medium bg-[var(--accent-purple)] text-white rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
