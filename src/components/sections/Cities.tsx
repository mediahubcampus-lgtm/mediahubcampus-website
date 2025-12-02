"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  GraduationCap,
  School,
  UtensilsCrossed,
  Home,
  Users,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import FranceMap from "@/components/ui/FranceMap";

// Location types with their specific icons
const IMPLANTATIONS: { label: string; icon: LucideIcon }[] = [
  { label: "Campus universitaires publics", icon: Landmark },
  { label: "Écoles du supérieur sélectives", icon: GraduationCap },
  { label: "Écoles du supérieur privées", icon: School },
  { label: "Restaurants universitaires", icon: UtensilsCrossed },
  { label: "Résidences universitaires", icon: Home },
  { label: "Lieux de vie étudiants", icon: Users },
  { label: "Lycées", icon: BookOpen },
];

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

// Animation variants for staggered items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: easeOutQuart,
    },
  },
};

export default function Cities() {
  return (
    <section id="reseau" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Notre{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Réseau
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Plus de 65 villes universitaires couvertes à travers la France
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: easeOutQuart }}
          className="mb-12"
        >
          <FranceMap />
        </motion.div>

        {/* Target Locations - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Nos implantations
          </h3>
          <motion.div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:flex-wrap md:justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {IMPLANTATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="group flex-shrink-0 snap-center w-36 md:w-40"
                >
                  <div className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-5 text-center hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary)]/10">
                    {/* Icon with gradient background */}
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent-purple)] flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                      <Icon
                        size={28}
                        className="text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Label - fixed height for 2 lines */}
                    <span className="text-sm text-white/90 leading-tight font-medium mt-4 h-10 flex items-center justify-center">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
