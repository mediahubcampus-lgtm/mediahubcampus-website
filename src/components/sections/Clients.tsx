"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blurRevealVariants } from "@/lib/useScrollAnimations";
import { useMascots } from "@/context/MascotContext";
import { CLIENT_LOGOS } from "@/lib/constants";

const FEATURED_LOGOS = CLIENT_LOGOS.filter((c) => c.featured && c.logo);

export default function Clients() {
  const { MASCOTS } = useMascots();

  return (
    <div className="relative">
      {/* Full-width background */}
      <div className="absolute inset-0 -mx-[calc(50vw-50%)] bg-[var(--accent-cyan)]/8 border-y border-[var(--accent-cyan)]/20" />
      <section id="clients" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={blurRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14 relative"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ils nous font{" "}
              <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
                Confiance
              </span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              Des marques et institutions qui nous accompagnent
            </p>
            {/* Mascot thumbs up - Desktop */}
            {MASCOTS.clients && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute right-0 -top-6 hidden lg:block"
              >
                <Image
                  src="/images/cat-mascot/chat-fait-un-pouve-en-l-air.png"
                  alt="Chat mascotte pouce en l'air"
                  width={160}
                  height={160}
                  className="w-36 h-auto drop-shadow-lg"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Grille statique de logos mis en avant, en grand */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {FEATURED_LOGOS.map((client) => (
              <motion.div
                key={client.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 flex items-center justify-center h-28 sm:h-32 transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={client.logo as string}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10"
          >
            <Link
              href="/references"
              className="inline-flex items-center gap-2 text-[var(--accent-cyan)] hover:text-white font-semibold transition-colors"
            >
              <span>Voir toutes nos références ({CLIENT_LOGOS.length}+)</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
