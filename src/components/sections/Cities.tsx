"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
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
import CityPieChart from "@/components/ui/CityPieChart";
import { useMascots } from "@/context/MascotContext";
import { CITIES } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const steps = 50;
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

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

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
  const { MASCOTS } = useMascots();

  const totalStudents = useMemo(
    () => CITIES.reduce((sum, c) => sum + c.students, 0),
    []
  );

  return (
    <div className="relative">
      {/* Full-width background */}
      <div className="absolute inset-0 -mx-[calc(50vw-50%)] bg-[var(--primary)]/10 border-y border-[var(--primary)]/20" />
      <section id="reseau" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Notre{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Réseau
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Plus de 60 villes universitaires couvertes à travers la France
          </p>
          {/* Mascot - Desktop (behind text) */}
          {MASCOTS.cities && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute right-[calc(50%-410px)] -top-0 hidden lg:block -z-10"
            >
              <Image
                src="/images/cat-mascot/chat-chapeau-graduate-sur-vélo.png"
                alt="Chat mascotte sur vélo"
                width={260}
                height={260}
                className="w-56 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Animated network stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-10"
        >
          {[
            {
              value: CITIES.length,
              suffix: "",
              decimals: 0,
              label: "villes universitaires",
            },
            {
              value: Math.round((totalStudents / 1000000) * 100) / 100,
              suffix: "M",
              decimals: 2,
              label: "étudiants touchés",
            },
            {
              value: IMPLANTATIONS.length,
              suffix: "",
              decimals: 0,
              label: "types d'implantations",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl py-5 px-2"
            >
              <div className="text-2xl sm:text-4xl font-bold text-[var(--accent-cyan)] mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-muted)] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Répartition par région (camembert) with mascot behind on mobile */}
        <div className="relative mb-12">
          {/* Mascot - Mobile (bigger, behind chart) */}
          {MASCOTS.cities && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:hidden z-0"
            >
              <Image
                src="/images/cat-mascot/chat-chapeau-graduate-sur-vélo.png"
                alt="Chat mascotte sur vélo"
                width={160}
                height={160}
                className="w-32 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOutQuart }}
            className="relative z-10"
          >
            <CityPieChart />
          </motion.div>
        </div>

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
    </div>
  );
}
