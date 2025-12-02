"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Megaphone,
  GraduationCap,
  Smartphone,
  Bike,
  Coffee,
  PartyPopper,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { useMascots } from "@/context/MascotContext";
import {
  blurRevealVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/useScrollAnimations";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Megaphone,
  GraduationCap,
  Smartphone,
  Bike,
  Coffee,
  PartyPopper,
};

export default function Services() {
  const { MASCOTS } = useMascots();

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={blurRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
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
          {/* Mascot - Desktop */}
          {MASCOTS.services && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute right-0 -top-8 hidden lg:block"
            >
              <Image
                src="/images/cat-mascot/chat-parle-au-micro.png"
                alt="Chat mascotte parle au micro"
                width={160}
                height={160}
                className="w-36 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Cards container with mascots */}
        <div className="relative">
          {/* Mascot - Mobile (behind first card, peeking from top) */}
          {MASCOTS.services && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 lg:hidden z-0"
            >
              <Image
                src="/images/cat-mascot/chat-parle-au-micro.png"
                alt="Chat mascotte parle au micro"
                width={100}
                height={100}
                className="w-20 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItemVariants}
                  className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary)]/10"
                >
                  {/* Service image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent" />
                    {/* Icon overlay */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 bg-[var(--primary)] rounded-xl flex items-center justify-center shadow-lg">
                      {Icon && (
                        <Icon
                          size={20}
                          className="text-white"
                        />
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mascot bottom right - Desktop overlapping cards */}
          {MASCOTS.servicesBottom && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-26 -bottom-12 hidden lg:block z-10 pointer-events-none"
            >
              <Image
                src="/images/cat-mascot/chat-mange-chips-paquet-dans-ses-pattes.png"
                alt="Chat mascotte mange des chips"
                width={180}
                height={180}
                className="w-40 h-auto drop-shadow-xl"
              />
            </motion.div>
          )}
          {/* Mascot bottom - Mobile (overlapping bottom right corner of last card) */}
          {MASCOTS.servicesBottom && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-4 -right-2 lg:hidden z-20 pointer-events-none"
            >
              <Image
                src="/images/cat-mascot/chat-mange-chips-paquet-dans-ses-pattes.png"
                alt="Chat mascotte mange des chips"
                width={80}
                height={80}
                className="w-16 h-auto drop-shadow-lg"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
