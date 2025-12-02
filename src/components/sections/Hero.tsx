"use client";

import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--accent-purple)]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full px-4 py-2 mb-8">
            <span className="text-[var(--accent-cyan)] text-sm font-medium">
              OOH • Digital • Événementiel
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">La Régie des</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Universités & Campus
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto mb-12">
            Touchez plus de{" "}
            <span className="text-white font-semibold">2,1 millions d&apos;étudiants</span>{" "}
            dans{" "}
            <span className="text-white font-semibold">65+ villes universitaires</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.pdfUrl}
              download
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            >
              <Download size={22} />
              <span>Télécharger la Plaquette</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--card-bg)] hover:bg-[var(--card-border)] border border-[var(--card-border)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              <span>Nous Contacter</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a
            href="#services"
            className="text-[var(--text-muted)] hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
