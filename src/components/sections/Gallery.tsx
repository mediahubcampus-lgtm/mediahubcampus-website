"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// All gallery photos from our campaign images
const GALLERY_PHOTOS = [
  { src: "/images/gallery/Photos MediaHub Campus - 1.JPG", alt: "Campagne affichage campus 1" },
  { src: "/images/gallery/Photos MediaHub Campus - 2.JPG", alt: "Campagne affichage campus 2" },
  { src: "/images/gallery/Photos MediaHub Campus - 3.jpg", alt: "Campagne affichage campus 3" },
  { src: "/images/gallery/Photos MediaHub Campus - 4.jpg", alt: "Campagne affichage campus 4" },
  { src: "/images/gallery/Photos MediaHub Campus - 5.jpeg", alt: "Campagne affichage campus 5" },
  { src: "/images/gallery/Photos MediaHub Campus - 6.jpeg", alt: "Campagne affichage campus 6" },
  { src: "/images/gallery/Photos MediaHub Campus - 7.jpeg", alt: "Campagne affichage campus 7" },
  { src: "/images/gallery/Photos MediaHub Campus - 8.jpeg", alt: "Campagne affichage campus 8" },
  { src: "/images/gallery/Photos MediaHub Campus - 9.jpeg", alt: "Campagne affichage campus 9" },
  { src: "/images/gallery/Photos MediaHub Campus - 10.jpeg", alt: "Campagne affichage campus 10" },
  { src: "/images/gallery/Photos MediaHub Campus - 11.jpeg", alt: "Campagne affichage campus 11" },
  { src: "/images/gallery/Photos MediaHub Campus - 12.jpeg", alt: "Campagne affichage campus 12" },
  { src: "/images/gallery/Photos MediaHub Campus - 13.jpeg", alt: "Campagne affichage campus 13" },
  { src: "/images/gallery/Photos MediaHub Campus - 14.jpeg", alt: "Campagne affichage campus 14" },
  { src: "/images/gallery/Photos MediaHub Campus - 15.jpeg", alt: "Campagne affichage campus 15" },
  { src: "/images/gallery/Photos MediaHub Campus - 16.jpeg", alt: "Campagne affichage campus 16" },
  { src: "/images/gallery/Photos MediaHub Campus - 17.jpeg", alt: "Campagne affichage campus 17" },
  { src: "/images/gallery/Photos MediaHub Campus - 18.jpeg", alt: "Campagne affichage campus 18" },
  { src: "/images/gallery/Photos MediaHub Campus - 19.jpeg", alt: "Campagne affichage campus 19" },
  { src: "/images/gallery/Photos MediaHub Campus - 20.jpeg", alt: "Campagne affichage campus 20" },
  { src: "/images/gallery/Photos MediaHub Campus - 21.jpeg", alt: "Campagne affichage campus 21" },
  { src: "/images/gallery/Photos MediaHub Campus - 22.jpeg", alt: "Campagne affichage campus 22" },
  { src: "/images/gallery/Photos MediaHub Campus - 23.jpeg", alt: "Campagne affichage campus 23" },
  { src: "/images/gallery/Photos MediaHub Campus - 24.jpeg", alt: "Campagne affichage campus 24" },
  { src: "/images/gallery/Photos MediaHub Campus - 25.jpeg", alt: "Campagne affichage campus 25" },
  { src: "/images/gallery/Photos MediaHub Campus - 26.jpeg", alt: "Campagne affichage campus 26" },
  { src: "/images/gallery/Photos MediaHub Campus - 27.jpeg", alt: "Campagne affichage campus 27" },
  { src: "/images/gallery/Photos MediaHub Campus - 28.jpeg", alt: "Campagne affichage campus 28" },
  { src: "/images/gallery/Photos MediaHub Campus - 29.jpeg", alt: "Campagne affichage campus 29" },
  { src: "/images/gallery/Photos MediaHub Campus - 30.jpeg", alt: "Campagne affichage campus 30" },
  { src: "/images/gallery/Photos MediaHub Campus - 31.jpeg", alt: "Campagne affichage campus 31" },
  { src: "/images/gallery/Photos MediaHub Campus - 32.jpeg", alt: "Campagne affichage campus 32" },
  { src: "/images/gallery/Photos MediaHub Campus - 33.jpeg", alt: "Campagne affichage campus 33" },
  { src: "/images/gallery/Photos MediaHub Campus - 34.jpeg", alt: "Campagne affichage campus 34" },
  { src: "/images/gallery/Photos MediaHub Campus - 35.jpeg", alt: "Campagne affichage campus 35" },
  { src: "/images/gallery/Photos MediaHub Campus - 36.jpg", alt: "Campagne affichage campus 36" },
  { src: "/images/gallery/Photos MediaHub Campus - 37.jpg", alt: "Campagne affichage campus 37" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? GALLERY_PHOTOS.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === GALLERY_PHOTOS.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        {/* Horizontal Scroll Gallery with 2 rows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--bg-dark)]/80 hover:bg-[var(--primary)] text-white p-3 rounded-full shadow-lg transition-colors hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Container - 2 rows */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-8"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-3 auto-cols-[150px] sm:auto-cols-[180px] md:auto-cols-[220px]">
              {GALLERY_PHOTOS.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.2) }}
                  className="aspect-[4/3] relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 220px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--bg-dark)]/80 hover:bg-[var(--primary)] text-white p-3 rounded-full shadow-lg transition-colors hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Photo counter */}
        <p className="text-center text-[var(--text-muted)] text-sm mt-6">
          {GALLERY_PHOTOS.length} photos • Faites défiler pour voir plus
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
              onClick={closeLightbox}
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
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_PHOTOS[selectedIndex].src}
                alt={GALLERY_PHOTOS[selectedIndex].alt}
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
              {selectedIndex + 1} / {GALLERY_PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
