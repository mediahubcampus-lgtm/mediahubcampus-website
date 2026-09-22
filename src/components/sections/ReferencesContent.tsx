"use client";

import Image from "next/image";
import { CLIENT_CATEGORIES, CLIENT_LOGOS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n/translations";

const CATEGORY_KEY: Record<string, TranslationKey> = {
  "Institutions & Collectivités": "clientCategory.institutions",
  "Écoles & Formation": "clientCategory.ecoles",
  "Grandes Marques & Entreprises": "clientCategory.marques",
  "Culture & Médias": "clientCategory.culture",
};

export default function ReferencesContent() {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("references.heading.pre")}{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              {t("references.heading.highlight")}
            </span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t("references.subtitle")}
          </p>
        </div>

        {CLIENT_CATEGORIES.map((category) => {
          const clients = CLIENT_LOGOS.filter((c) => c.category === category);
          if (clients.length === 0) return null;

          return (
            <div key={category} className="mb-14">
              <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-[var(--card-border)]">
                {t(CATEGORY_KEY[category] ?? "clientCategory.institutions")}
                <span className="text-[var(--text-muted)] font-normal text-base ml-2">
                  ({clients.length})
                </span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="bg-white rounded-xl p-4 flex items-center justify-center h-28 sm:h-32 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                  >
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={220}
                        height={110}
                        className="max-h-20 sm:max-h-24 w-auto max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-gray-700 text-xs sm:text-sm font-medium text-center leading-tight line-clamp-3 px-2">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <p className="text-[var(--text-muted)] text-sm text-center mt-8">
          {t("references.notFoundPre")}{" "}
          <a href="/#contact" className="text-[var(--accent-cyan)] hover:underline">
            {t("references.notFoundLink")}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
