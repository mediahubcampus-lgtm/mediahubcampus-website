"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { blurRevealVariants } from "@/lib/useScrollAnimations";
import { useMascots } from "@/context/MascotContext";

// Mapping of client names to their logo files
const CLIENT_LOGOS = [
  { name: "Crédit Mutuel", logo: "/logos/clients/Logo Credit-Mutuel.png" },
  { name: "Le Figaro", logo: "/logos/clients/Logo_Le_Figaro.svg.png" },
  { name: "Le Figaro Étudiant", logo: "/logos/clients/Logo Le Figaro étudiant 2.png" },
  { name: "INSEE", logo: "/logos/clients/Logo Insee.png" },
  { name: "EPITA", logo: "/logos/clients/Logo EPITA.png" },
  { name: "ESPI", logo: "/logos/clients/Logo ESPI.jpg" },
  { name: "Urssaf", logo: "/logos/clients/Logo URSSAF.png" },
  { name: "Carsat Aquitaine", logo: "/logos/clients/Logo Carsat Aquitaine.jpg" },
  { name: "INRS", logo: "/logos/clients/Logo INRS.svg.png" },
  { name: "Hopteo", logo: "/logos/clients/Logo HOPTEO.jpeg" },
  { name: "DREETS", logo: "/logos/clients/Logo DREETS Nvlle Aquitaine.png" },
  { name: "Montpellier Métropole", logo: "/logos/clients/Logo - Montpellier - Métropole.png" },
  { name: "Mémorial de la Shoah", logo: "/logos/clients/Logo Mémorial Shoah.jpeg" },
  { name: "Les Compagnons du Devoir", logo: "/logos/clients/Logo CompagonsduDevoir.jpg" },
  { name: "ISEGCOM", logo: "/logos/clients/Logo ISEGCOM.png" },
  { name: "Kangourou Kids", logo: "/logos/clients/Logo Kangourou Kids.png" },
  { name: "Golden Coast", logo: "/logos/clients/Logo Golden Coast.png" },
  { name: "Arena du Pays d'Aix", logo: "/logos/clients/Logo Arena du Pays d_Aix.png" },
  { name: "Abbaye Fontevraud", logo: "/logos/clients/Logo Abbaye Fontevraud.png" },
  { name: "MSA", logo: "/logos/clients/Logo Mutualite Sociale Agricole.png" },
  { name: "Luminiscence", logo: "/logos/clients/Logo Luminiscence.jpeg" },
  { name: "HAS", logo: "/logos/clients/Logo HAS.png" },
  { name: "ICN", logo: "/logos/clients/Logo ICN.avif" },
  { name: "Excelia", logo: "/logos/clients/Logo Excelia.png" },
  { name: "Rennes Métropole", logo: "/logos/clients/Logo Rennes Métropole.png" },
  { name: "Aivancity", logo: "/logos/clients/Logo aivancity.png" },
  { name: "Doritos", logo: "/logos/clients/Logo Doritos.png" },
  { name: "PWC", logo: "/logos/clients/Logo PWC.png" },
  { name: "Billets Discount", logo: "/logos/clients/Logo BilletsDiscount.webp" },
  { name: "MdJ", logo: "/logos/clients/Logo MdJ.png" },
  { name: "Air Canada", logo: "/logos/clients/Logo Air Canada.png" },
  { name: "Burger King", logo: "/logos/clients/Logo BK.png" },
  { name: "Bayard", logo: "/logos/clients/Logo Bayard.jpeg" },
  { name: "Deliveroo", logo: "/logos/clients/Logo Deliveroo.png" },
  { name: "McDonald's", logo: "/logos/clients/Logo McDoonalds.png" },
  { name: "Prime Video", logo: "/logos/clients/Logo Prime Video.png" },
  { name: "Starbucks", logo: "/logos/clients/Logo Starbucks.png" },
  { name: "Uber", logo: "/logos/clients/Logo UBER.png" },
  { name: "Vélib'", logo: "/logos/clients/Logo-Velib.png" },
  { name: "LCL", logo: "/images/Logo LCL.png" },
  { name: "Château de Versailles", logo: "/images/Logo_Château_de_Versailles_2017.png" },
  { name: "Education First", logo: "/images/Logo EF.png" },
  { name: "ENM", logo: "/images/Logo ENM.png" },
  { name: "Hela", logo: "/images/Logo Hela.png" },
  { name: "ISIT Paris", logo: "/images/Logo ISIT Paris.png" },
  { name: "Paris Manga", logo: "/images/Logo ParisManga.png" },
  { name: "Unibail-Rodamco-Westfield", logo: "/images/Lor URW.png" },
];

// Split logos into three rows
const third = Math.ceil(CLIENT_LOGOS.length / 3);
const ROW1_LOGOS = CLIENT_LOGOS.slice(0, third);
const ROW2_LOGOS = CLIENT_LOGOS.slice(third, third * 2);
const ROW3_LOGOS = CLIENT_LOGOS.slice(third * 2);

function MarqueeRow({
  logos,
  direction = "left",
  duration = 25
}: {
  logos: typeof CLIENT_LOGOS;
  direction?: "left" | "right";
  duration?: number;
}) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? [0, -logos.length * 152] : [-logos.length * 152, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 bg-white rounded-xl p-4 flex items-center justify-center h-16 w-32 transition-all duration-200 hover:scale-110 hover:shadow-xl"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={100}
              height={48}
              className="max-h-10 w-auto object-contain"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const { MASCOTS } = useMascots();

  return (
    <div className="relative">
      {/* Full-width background */}
      <div className="absolute inset-0 -mx-[calc(50vw-50%)] bg-[var(--accent-cyan)]/8 border-y border-[var(--accent-cyan)]/20" />
      <section id="clients" className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={blurRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 relative"
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
            {/* Mascot thumbs up */}
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
        </div>

        {/* Two-row marquee */}
        <div className="relative space-y-4">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />

          {/* Row 1 - scrolls left */}
          <MarqueeRow logos={ROW1_LOGOS} direction="left" duration={35} />

          {/* Row 2 - scrolls right */}
          <MarqueeRow logos={ROW2_LOGOS} direction="right" duration={40} />

          {/* Row 3 - scrolls left */}
          <MarqueeRow logos={ROW3_LOGOS} direction="left" duration={45} />
        </div>
      </section>
    </div>
  );
}
