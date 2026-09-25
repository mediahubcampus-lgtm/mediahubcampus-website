"use client";

import Script from "next/script";
import { useCookieConsent } from "@/context/CookieConsentContext";

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const { status } = useCookieConsent();

  if (status !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
