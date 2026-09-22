"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { STATS } from "@/lib/constants";
import { useMascots } from "@/context/MascotContext";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n/translations";

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  decimalSeparator = ".",
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  decimalSeparator?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals).replace(".", decimalSeparator)
      : Math.floor(count);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export default function Statistics() {
  const { MASCOTS } = useMascots();
  const { t, locale } = useLanguage();

  return (
    <div className="relative">
      {/* Full-width background */}
      <div className="absolute inset-0 -mx-[calc(50vw-50%)] bg-[var(--primary)]/15 border-y border-[var(--accent-purple)]/30" />
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("statistics.heading.pre")}{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              {t("statistics.heading.highlight")}
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t("statistics.subtitle")}
          </p>
          {/* Mascot - Desktop */}
          {MASCOTS.statistics && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-0 -top-6 hidden lg:block"
            >
              <Image
                src="/images/cat-mascot/chat-applaudit-souriant.png"
                alt="Chat mascotte applaudit"
                width={160}
                height={160}
                className="w-36 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Stats cards with mascot behind on mobile */}
        <div className="relative">
          {/* Mascot - Mobile (behind cards, overlapping) */}
          {MASCOTS.statistics && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -top-20 left-1/2 -translate-x-1/2 lg:hidden z-0"
            >
              <Image
                src="/images/cat-mascot/chat-applaudit-souriant.png"
                alt="Chat mascotte applaudit"
                width={120}
                height={120}
                className="w-20 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 text-center hover:border-[var(--primary)]/50 transition-colors duration-300"
            >
              <div className="text-5xl sm:text-6xl font-bold text-[var(--accent-cyan)] mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  decimalSeparator={locale === "fr" ? "," : "."}
                />
              </div>
              <div className="text-[var(--text-muted)]">
                {t(`stats.${i}.label` as TranslationKey)}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
        </div>
      </section>
    </div>
  );
}
