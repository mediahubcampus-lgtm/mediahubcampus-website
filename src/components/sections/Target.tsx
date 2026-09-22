"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Clock, ShoppingBag, Dumbbell } from "lucide-react";
import {
  TARGET_DEMOGRAPHICS,
  STUDENT_HABITS,
  STUDENT_INTERESTS,
} from "@/lib/constants";
import { useMascots } from "@/context/MascotContext";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n/translations";
import {
  blurRevealVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/useScrollAnimations";

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

const demographicIcons = [Users, Clock, ShoppingBag, Dumbbell];

export default function Target() {
  const { MASCOTS } = useMascots();
  const { t } = useLanguage();

  return (
    <section id="cible" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={blurRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("target.heading.pre")}{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              {t("target.heading.highlight")}
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t("target.subtitle")}
          </p>
          {/* Mascot student - Desktop */}
          {MASCOTS.target && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-0 -top-6 hidden lg:block"
            >
              <Image
                src="/images/cat-mascot/chat-tasse-en-main.png"
                alt="Chat mascotte avec tasse"
                width={170}
                height={170}
                className="w-36 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Demographics with mascot behind on mobile */}
        <div className="relative mb-12">
          {/* Mascot - Mobile (centered behind cards, overlapping) */}
          {MASCOTS.target && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden z-0"
            >
              <Image
                src="/images/cat-mascot/chat-tasse-en-main.png"
                alt="Chat mascotte avec tasse"
                width={140}
                height={140}
                className="w-28 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TARGET_DEMOGRAPHICS.map((item, index) => {
            const Icon = demographicIcons[index];
            return (
              <motion.div
                key={item.label}
                variants={staggerItemVariants}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 text-center hover:border-[var(--primary)]/50 transition-colors duration-300"
              >
                <Icon
                  size={24}
                  className="mx-auto mb-3 text-[var(--accent-cyan)]"
                />
                <div className="text-3xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-[var(--text-muted)] text-sm">
                  {t(`target.demographics.${index}.label` as TranslationKey)}
                </div>
              </motion.div>
            );
          })}
          </motion.div>
        </div>

        {/* Habits & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Habits */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: easeOutQuart }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">{t("target.habits.title")}</h3>
            <div className="space-y-4">
              {STUDENT_HABITS.map((item, index) => (
                <div key={item.habit}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[var(--text-muted)] text-sm">
                      {t(`target.habits.${index}` as TranslationKey)}
                    </span>
                    <span className="text-[var(--accent-cyan)] font-semibold">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--bg-dark)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[var(--text-muted)] text-xs mt-4">
              {t("target.habits.source")}
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: easeOutQuart, delay: 0.1 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">
              {t("target.interests.title")}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {STUDENT_INTERESTS.map((item, index) => (
                <motion.div
                  key={item.interest}
                  variants={staggerItemVariants}
                  className="bg-[var(--bg-dark)] rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[var(--accent-purple)] mb-1">
                    {item.percentage}%
                  </div>
                  <div className="text-[var(--text-muted)] text-sm">
                    {t(`target.interests.${index}` as TranslationKey)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
