"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  GraduationCap,
  Smartphone,
  Bike,
  Coffee,
  PartyPopper,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Megaphone,
  GraduationCap,
  Smartphone,
  Bike,
  Coffee,
  PartyPopper,
};

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nos{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Des solutions complètes pour toucher la cible étudiante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)] transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[var(--primary)]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-[var(--primary)] group-hover:text-white transition-colors"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
