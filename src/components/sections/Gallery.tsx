"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const PLACEHOLDER_COUNT = 6;

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
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
              Réalisations
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Aperçu de nos campagnes et opérations terrain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-[4/3] bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl flex flex-col items-center justify-center gap-3 text-[var(--text-muted)]"
            >
              <ImageIcon size={48} strokeWidth={1} />
              <span className="text-sm">Photo à venir</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
