"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Smartphone,
  Bike,
  Gamepad2,
  Coffee,
  Download,
  Zap,
} from "lucide-react";
import { PACK_360, SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Megaphone,
  Smartphone,
  Bike,
  Gamepad2,
  Coffee,
};

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easeOutQuart,
    },
  },
};

export default function Pack360() {
  return (
    <section id="pack360" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[var(--primary)]/20 border border-[var(--primary)]/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Zap size={16} className="text-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-medium">
              Offre complète
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pack{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              360°
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Pour ceux qui veulent tout, d&apos;un coup.
          </p>
        </motion.div>

        {/* Pack Components */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent-purple)]/10 border border-[var(--card-border)] rounded-3xl p-6 md:p-10"
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PACK_360.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 text-center hover:border-[var(--primary)]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-[var(--primary)]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {Icon && (
                      <Icon size={20} className="text-[var(--accent-cyan)]" />
                    )}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-[var(--text-muted)] mb-4">
              Découvrez tous les détails dans notre plaquette
            </p>
            <a
              href={SITE_CONFIG.pdfUrl}
              download
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              <Download size={18} />
              <span>Télécharger la Plaquette</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
