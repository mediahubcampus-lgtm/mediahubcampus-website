"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Mapping of client names to their logo files
const CLIENT_LOGOS = [
  { name: "Crédit Mutuel", logo: "/logos/clients/Logo Credit-Mutuel.png" },
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
  { name: "Le Figaro Étudiant", logo: "/logos/clients/Logo Le Figaro étudiant 2.png" },
  { name: "HAS", logo: "/logos/clients/Logo HAS.png" },
  { name: "ICN", logo: "/logos/clients/Logo ICN.avif" },
  { name: "Excelia", logo: "/logos/clients/Logo Excelia.png" },
  { name: "Rennes Métropole", logo: "/logos/clients/Logo Rennes Métropole.png" },
  { name: "Aivancity", logo: "/logos/clients/Logo aivancity.png" },
  { name: "Bayard", logo: "/logos/clients/Logo Bayard.jpeg" },
  // Major brands
  { name: "McDonald's", logo: "/logos/clients/Logo McDoonalds.png" },
  { name: "Burger King", logo: "/logos/clients/Logo BK.png" },
  { name: "Starbucks", logo: "/logos/clients/Logo Starbucks.png" },
  { name: "Deliveroo", logo: "/logos/clients/Logo Deliveroo.png" },
  { name: "Uber", logo: "/logos/clients/Logo UBER.png" },
  { name: "Air Canada", logo: "/logos/clients/Logo Air Canada.png" },
  { name: "Prime Video", logo: "/logos/clients/Logo Prime Video.png" },
  { name: "Doritos", logo: "/logos/clients/Logo Doritos.png" },
  { name: "PWC", logo: "/logos/clients/Logo PWC.png" },
  { name: "Vélib'", logo: "/logos/clients/Logo Vélib'.png" },
  { name: "Billets Discount", logo: "/logos/clients/Logo BilletsDiscount.webp" },
  { name: "MdJ", logo: "/logos/clients/Logo MdJ.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {CLIENT_LOGOS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="bg-white rounded-xl p-4 flex items-center justify-center h-20 hover:shadow-lg transition-shadow"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[var(--text-muted)] text-sm mt-8"
        >
          Et bien d&apos;autres...
        </motion.p>
      </div>
    </section>
  );
}
