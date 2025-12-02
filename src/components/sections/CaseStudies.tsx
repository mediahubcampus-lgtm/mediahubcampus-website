"use client";

import { motion } from "framer-motion";
import { CheckCircle, ImageIcon } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Études de{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Cas
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Exemples de campagnes réussies avec nos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-[var(--bg-dark)] flex items-center justify-center">
                <div className="text-center text-[var(--text-muted)]">
                  <ImageIcon size={48} strokeWidth={1} className="mx-auto mb-2" />
                  <span className="text-sm">Photo campagne à venir</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="text-[var(--accent-cyan)] text-sm font-medium mb-1">
                    {study.client}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    &ldquo;{study.campaign}&rdquo;
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm mt-1">
                    {study.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {study.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[var(--bg-dark)] rounded-lg p-3 text-center"
                    >
                      <div className="text-lg font-bold text-[var(--accent-purple)]">
                        {stat.value}
                      </div>
                      <div className="text-[var(--text-muted)] text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {study.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[var(--accent-cyan)] mt-0.5 shrink-0"
                      />
                      <span className="text-[var(--text-muted)]">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
