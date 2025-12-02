"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Mascot searching */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOutQuart }}
          className="mb-8"
        >
          <Image
            src="/images/cat-mascot/chat-regarde-a-travers-une-loupe.png"
            alt="Chat mascotte cherche avec une loupe"
            width={280}
            height={280}
            className="w-56 h-auto mx-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutQuart }}
        >
          <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Page introuvable
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-8">
            Oups ! La page que vous recherchez semble avoir disparu dans les
            couloirs du campus...
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutQuart }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <Home size={20} />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-[var(--card-bg)] hover:bg-[var(--card-border)] border border-[var(--card-border)] text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            <ArrowLeft size={20} />
            <span>Page précédente</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
