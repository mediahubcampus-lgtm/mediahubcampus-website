"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import type { TranslationKey } from "@/lib/i18n/translations";
import { trackEvent } from "@/lib/gtag";

const NAV_KEY_BY_HREF: Record<string, TranslationKey> = {
  "/#services": "nav.services",
  "/#cible": "nav.cible",
  "/#reseau": "nav.reseau",
  "/references": "nav.references",
  "/simulateur-devis": "nav.simulateur",
  "/#contact": "nav.contact",
};

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll progress for indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-dark)]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] origin-left"
        style={{ scaleX, opacity: isScrolled ? 1 : 0 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - larger than header, uses overflow */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logos/brand/logo-cropped.svg"
                alt="MediaHub Campus"
                width={320}
                height={80}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>
            {/* Language switcher - visible directly next to the logo on mobile */}
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-white transition-colors"
              >
                {t(NAV_KEY_BY_HREF[link.href] ?? "nav.services")}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={SITE_CONFIG.pdfUrl}
              download
              onClick={() => trackEvent("brochure_download", { location: "header_desktop" })}
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              <Download size={18} />
              <span>{t("nav.plaquette")}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t("nav.toggleMenu")}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-[var(--card-border)] relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Photos de première page.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[var(--bg-dark)]/85 backdrop-blur-sm" />
          <nav className="flex flex-col p-4 gap-4 relative z-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(NAV_KEY_BY_HREF[link.href] ?? "nav.services")}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.pdfUrl}
              download
              onClick={() => {
                trackEvent("brochure_download", { location: "header_mobile" });
                setIsMobileMenuOpen(false);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-5 py-3 rounded-lg font-medium transition-colors mt-2"
            >
              <Download size={18} />
              <span>{t("nav.plaquetteMobile")}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
