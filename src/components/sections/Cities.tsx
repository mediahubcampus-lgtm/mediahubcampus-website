"use client";

import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import { CITIES, TARGET_LOCATIONS } from "@/lib/constants";

function formatStudents(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${Math.floor(num / 1000)}k`;
  }
  return num.toString();
}

export default function Cities() {
  return (
    <section id="reseau" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        {/* Cities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12"
        >
          {CITIES.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-3 text-center hover:border-[var(--primary)]/50 transition-colors"
            >
              <div className="text-lg font-semibold text-white truncate">
                {city.name}
              </div>
              <div className="text-[var(--accent-cyan)] text-sm font-medium">
                {formatStudents(city.students)}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: CITIES.length * 0.03 }}
            className="bg-[var(--primary)]/20 border border-[var(--primary)]/30 rounded-xl p-3 text-center flex items-center justify-center"
          >
            <span className="text-[var(--accent-purple)] font-medium">
              +40 autres
            </span>
          </motion.div>
        </motion.div>

        {/* Target Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={24} className="text-[var(--accent-cyan)]" />
            <h3 className="text-xl font-semibold">Nos implantations</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {TARGET_LOCATIONS.map((location, index) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="inline-flex items-center gap-2 bg-[var(--bg-dark)] rounded-full px-4 py-2"
              >
                <MapPin size={14} className="text-[var(--accent-purple)]" />
                <span className="text-sm text-[var(--text-muted)]">
                  {location}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
