import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaHub Campus - Régie Publicitaire Universitaire",
  description:
    "Touchez 2,1 millions d'étudiants dans 65+ villes universitaires. Affichage, digital, événementiel sur les campus de France.",
  keywords: [
    "publicité universitaire",
    "affichage campus",
    "communication étudiante",
    "régie publicitaire",
    "marketing étudiant",
  ],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/logos/brand/favicon.png" },
    ],
    apple: "/logos/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
