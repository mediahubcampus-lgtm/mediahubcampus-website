import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MascotProvider } from "@/context/MascotContext";
import { LanguageProvider } from "@/context/LanguageContext";
import PeekingMascot from "@/components/ui/PeekingMascot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaHub Campus - Régie Publicitaire Universitaire",
  description:
    "Touchez plus de 2,19 millions d'étudiants dans 60 villes universitaires. Affichage, digital, événementiel sur les campus de France.",
  keywords: [
    "publicité universitaire",
    "affichage campus",
    "communication étudiante",
    "régie publicitaire",
    "marketing étudiant",
  ],
  authors: [{ name: "MediaHub Campus" }],
  creator: "MediaHub Campus",
  metadataBase: new URL("https://mediahubcampus.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mediahubcampus.com",
    siteName: "MediaHub Campus",
    title: "MediaHub Campus - Régie Publicitaire Universitaire",
    description:
      "Touchez plus de 2,19 millions d'étudiants dans 60 villes universitaires. Affichage, digital, événementiel sur les campus de France.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MediaHub Campus - La Régie des Universités",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaHub Campus - Régie Publicitaire Universitaire",
    description:
      "Touchez plus de 2,19 millions d'étudiants dans 60 villes universitaires.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/logos/brand/favicon.png" },
    ],
    apple: "/logos/brand/favicon.png",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mediahubcampus.com/#organization",
      name: "MediaHub Campus",
      url: "https://mediahubcampus.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mediahubcampus.com/logos/brand/logo.png",
      },
      description:
        "Régie publicitaire universitaire leader en France. Affichage, digital et événementiel sur les campus.",
      email: "team@mediahubcampus.com",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://mediahubcampus.com/#website",
      url: "https://mediahubcampus.com",
      name: "MediaHub Campus",
      description:
        "Touchez plus de 2,19 millions d'étudiants dans 60 villes universitaires",
      publisher: {
        "@id": "https://mediahubcampus.com/#organization",
      },
      inLanguage: "fr-FR",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mediahubcampus.com/#localbusiness",
      name: "MediaHub Campus",
      description:
        "Régie publicitaire spécialisée dans la communication sur les campus universitaires, écoles et lycées en France.",
      url: "https://mediahubcampus.com",
      email: "team@mediahubcampus.com",
      priceRange: "€€",
      image: "https://mediahubcampus.com/og-image.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      serviceType: [
        "Publicité universitaire",
        "Affichage campus",
        "Marketing digital étudiant",
        "Événementiel campus",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <MascotProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <PeekingMascot />
          </MascotProvider>
        </LanguageProvider>
        <Analytics />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2HS4P2C6DV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2HS4P2C6DV');
          `}
        </Script>
      </body>
    </html>
  );
}
