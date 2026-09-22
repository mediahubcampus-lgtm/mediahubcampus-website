"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { blurRevealVariants } from "@/lib/useScrollAnimations";

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

// Photos mises en avant : campagnes campus, lycées et opérations événementielles
const GALLERY_PHOTOS = [
  { src: "/images/gallery/Photos MediaHub Campus - 1.JPG", alt: "Campagne affichage campus 1" },
  { src: "/images/gallery/Photos ICN V2 2026 - 117.jpeg", alt: "Campagne affichage ICN Business School" },
  { src: "/images/gallery/Illustrations Campagne Lycees - 10.jpeg", alt: "Affiche en vitrine EDC Paris Business School" },
  { src: "/images/gallery/Photos MediaHub Campus - 4.jpg", alt: "Campagne affichage campus 4" },
  { src: "/images/gallery/Photos 2 - Distribution Kurokawa - 69.jpeg", alt: "Distribution événementielle Kurokawa" },
  { src: "/images/gallery/Photos Polyf Quai Branly - 77.jpeg", alt: "Campagne affichage Quai Branly" },
  { src: "/images/gallery/Photos MediaHub Campus - 7.jpeg", alt: "Campagne affichage campus 7" },
  { src: "/images/gallery/Illustrations Campagne Lycees - 14.jpeg", alt: "Campagne affichage lycées" },
  { src: "/images/gallery/Photos V1 Kurokawa - 94.jpg", alt: "Distribution événementielle Kurokawa" },
  { src: "/images/gallery/Photos V2 ENM Concours 2026 - 56.jpeg", alt: "Campagne affichage ENM Concours" },
  { src: "/images/gallery/Photos MediaHub Campus - 10.jpeg", alt: "Campagne affichage campus 10" },
  { src: "/images/gallery/Illustrations Campagne Lycees - 8.jpeg", alt: "Affiche en vitrine étude à l'étranger" },
  { src: "/images/gallery/Photos V2 EF - 2.jpeg", alt: "Campagne affichage EF" },
  { src: "/images/gallery/Photos V1 Kurokawa - 82.jpg", alt: "Distribution événementielle Kurokawa" },
  { src: "/images/gallery/Photos FormaSup Med - 23.jpeg", alt: "Campagne affichage FormaSup Méditerranée" },
  { src: "/images/gallery/Photos MediaHub Campus - 13.jpeg", alt: "Campagne affichage campus 13" },
  { src: "/images/gallery/Illustrations Campagne Lycees - 22.jpeg", alt: "Campagne affichage lycées" },
  { src: "/images/gallery/Photos LCL V1 - 217.jpeg", alt: "Campagne affichage LCL" },
  { src: "/images/gallery/Photos 2 - Distribution Kurokawa - 59.jpeg", alt: "Distribution événementielle Kurokawa" },
  { src: "/images/gallery/Photos MediaHub Campus - 16.jpeg", alt: "Campagne affichage campus 16" },
  { src: "/images/gallery/Photos EDC - MediaHub Campus - 97.jpeg", alt: "Campagne affichage EDC" },
  { src: "/images/gallery/Illustrations Campagne Lycees - 2.jpg", alt: "Affiche en vitrine Hopteo" },
  { src: "/images/gallery/Photos MediaHub Campus - 19.jpeg", alt: "Campagne affichage campus 19" },
  { src: "/images/gallery/Photos OPM CdRV - 14.jpeg", alt: "Campagne affichage Orchestre de Paris" },
  { src: "/images/gallery/Photos V1 Kurokawa - 114.jpg", alt: "Distribution événementielle Kurokawa" },
  { src: "/images/gallery/Photos MediaHub Campus - 22.jpeg", alt: "Campagne affichage campus 22" },
  { src: "/images/gallery/Top Photos CCOOP - 24.jpeg", alt: "Campagne affichage CCOOP" },
  { src: "/images/gallery/Illustrations Campagne Lycees - 23.jpeg", alt: "Campagne affichage lycées" },
  { src: "/images/gallery/Photos MediaHub Campus - 25.jpeg", alt: "Campagne affichage campus 25" },
  { src: "/images/gallery/Photos Polyf - Rock en Seine 2026 - 134.jpeg", alt: "Campagne affichage Rock en Seine" },
  { src: "/images/gallery/Photos 2 - Distribution Kurokawa - 213.jpeg", alt: "Distribution événementielle Kurokawa" },
  { src: "/images/gallery/Photos MediaHub Campus - 28.jpeg", alt: "Campagne affichage campus 28" },
  { src: "/images/gallery/Photos MediaHub Campus - 31.jpeg", alt: "Campagne affichage campus 31" },
  { src: "/images/gallery/Photos MediaHub Campus - 34.jpeg", alt: "Campagne affichage campus 34" },
  { src: "/images/gallery/Photos MediaHub Campus - 37.jpg", alt: "Campagne affichage campus 37" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = GALLERY_PHOTOS.length;

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 100 : -100, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -100 : 100, scale: 0.96 }),
  };

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={blurRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
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

        {/* Main large carousel */}
        <div className="relative">
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[var(--card-bg)] cursor-pointer group"
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: easeOutQuart }}
                className="absolute inset-0"
              >
                <Image
                  src={GALLERY_PHOTOS[currentIndex].src}
                  alt={GALLERY_PHOTOS[currentIndex].alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay + counter */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 right-5 text-white/90 text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {total}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[var(--bg-dark)] hover:bg-[var(--primary)] hover:text-white p-3 sm:p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[var(--bg-dark)] hover:bg-[var(--primary)] hover:text-white p-3 sm:p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Photo suivante"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-6 flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-4xl mx-auto">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? "ring-2 ring-[var(--accent-cyan)] opacity-100 scale-105"
                  : "opacity-50 hover:opacity-80"
              }`}
              aria-label={`Voir la photo ${index + 1}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Photo counter */}
        <p className="text-center text-[var(--text-muted)] text-sm mt-4">
          {total} photos • Cliquez sur les flèches ou les vignettes pour naviguer
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            <button
              className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_PHOTOS[currentIndex].src}
                alt={GALLERY_PHOTOS[currentIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight size={48} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {total}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
