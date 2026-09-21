"use client";

import { Download, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax for background blobs
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blob1X = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const blob2X = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Content parallax (slower)
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Background image parallax
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Smooth springs
  const smoothBlob1Y = useSpring(blob1Y, { stiffness: 50, damping: 20 });
  const smoothBlob2Y = useSpring(blob2Y, { stiffness: 50, damping: 20 });
  const smoothBlob1X = useSpring(blob1X, { stiffness: 50, damping: 20 });
  const smoothBlob2X = useSpring(blob2X, { stiffness: 50, damping: 20 });
  const smoothBgY = useSpring(bgY, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[120%]"
          style={{ y: smoothBgY, scale: bgScale }}
        >
          {/* Mobile background image */}
          <Image
            src="/images/Photos de première page.jpeg"
            alt="Campus universitaire"
            fill
            className="object-cover md:hidden"
            style={{ objectPosition: "left top" }}
            priority
          />
          {/* Desktop background image */}
          <Image
            src="/images/gallery/Photos MediaHub Campus - 17.jpeg"
            alt="Campus universitaire"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)]/80 via-[var(--bg-dark)]/70 to-[var(--bg-dark)]" />
        </motion.div>
      </div>

      {/* Background decoration with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl"
          style={{ y: smoothBlob1Y, x: smoothBlob1X }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--accent-purple)]/20 rounded-full blur-3xl"
          style={{ y: smoothBlob2Y, x: smoothBlob2X }}
        />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-[var(--accent-cyan)] text-sm font-medium">
              OOH • Digital • Événementiel
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-white">La Régie des</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Universités & Campus
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Touchez plus de{" "}
            <span className="text-white font-semibold">2,19 millions d&apos;étudiants</span>{" "}
            dans{" "}
            <span className="text-white font-semibold">60 villes universitaires</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
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
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, delay: 1 },
          }}
        >
          <a
            href="#services"
            className="text-[var(--text-muted)] hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
