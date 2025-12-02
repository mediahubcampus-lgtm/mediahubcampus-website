"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMascots } from "@/context/MascotContext";

const PEEK_INTERVAL = 8000; // Time between peeks (ms)
const PEEK_DURATION = 3000; // How long the cat stays peeking (ms)

type PeekPosition = "right" | "left" | "bottom-right" | "bottom-left" | "top-right" | "top-left";

const PEEK_POSITIONS: PeekPosition[] = ["right", "left", "bottom-right", "bottom-left", "top-right", "top-left"];

// Position configs for each peek location
const getPositionStyles = (position: PeekPosition, isPeeking: boolean, mascotsEnabled: boolean) => {
  const baseHidden = 100;
  const peekAmount = mascotsEnabled ? 40 : 50;

  switch (position) {
    case "right":
      return {
        className: "right-0 top-1/2 -translate-y-1/2",
        initial: { x: baseHidden, opacity: 0 },
        animate: { x: peekAmount, opacity: 1 },
        exit: { x: baseHidden, opacity: 0 },
        hover: { x: peekAmount - 20, scale: 1.05 },
      };
    case "left":
      return {
        className: "left-0 top-1/2 -translate-y-1/2",
        initial: { x: -baseHidden, opacity: 0 },
        animate: { x: -peekAmount, opacity: 1 },
        exit: { x: -baseHidden, opacity: 0 },
        hover: { x: -peekAmount + 20, scale: 1.05 },
        flip: true,
      };
    case "bottom-right":
      return {
        className: "right-0 bottom-24",
        initial: { x: baseHidden, opacity: 0 },
        animate: { x: peekAmount, opacity: 1 },
        exit: { x: baseHidden, opacity: 0 },
        hover: { x: peekAmount - 20, scale: 1.05 },
      };
    case "bottom-left":
      return {
        className: "left-0 bottom-24",
        initial: { x: -baseHidden, opacity: 0 },
        animate: { x: -peekAmount, opacity: 1 },
        exit: { x: -baseHidden, opacity: 0 },
        hover: { x: -peekAmount + 20, scale: 1.05 },
        flip: true,
      };
    case "top-right":
      return {
        className: "right-0 top-32",
        initial: { x: baseHidden, opacity: 0 },
        animate: { x: peekAmount, opacity: 1 },
        exit: { x: baseHidden, opacity: 0 },
        hover: { x: peekAmount - 20, scale: 1.05 },
      };
    case "top-left":
      return {
        className: "left-0 top-32",
        initial: { x: -baseHidden, opacity: 0 },
        animate: { x: -peekAmount, opacity: 1 },
        exit: { x: -baseHidden, opacity: 0 },
        hover: { x: -peekAmount + 20, scale: 1.05 },
        flip: true,
      };
  }
};

export default function PeekingMascot() {
  const { mascotsEnabled, toggleMascots } = useMascots();
  const [isPeeking, setIsPeeking] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<PeekPosition>("bottom-right");

  const pickRandomPosition = useCallback(() => {
    const newPosition = PEEK_POSITIONS[Math.floor(Math.random() * PEEK_POSITIONS.length)];
    setCurrentPosition(newPosition);
  }, []);

  // Periodic peeking animation (only when mascots are hidden)
  useEffect(() => {
    if (mascotsEnabled) {
      setIsPeeking(false);
      return;
    }

    // Initial peek after 3 seconds
    const initialTimeout = setTimeout(() => {
      pickRandomPosition();
      setIsPeeking(true);
      setTimeout(() => setIsPeeking(false), PEEK_DURATION);
    }, 3000);

    // Subsequent peeks
    const interval = setInterval(() => {
      if (!mascotsEnabled) {
        pickRandomPosition();
        setIsPeeking(true);
        setTimeout(() => setIsPeeking(false), PEEK_DURATION);
      }
    }, PEEK_INTERVAL);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [mascotsEnabled, pickRandomPosition]);

  const handleClick = () => {
    toggleMascots();
    setHasBeenClicked(true);
    setIsPeeking(false);
  };

  const positionStyles = getPositionStyles(currentPosition, isPeeking, mascotsEnabled);
  const isLeftSide = currentPosition.includes("left");

  return (
    <>
      {/* Peeking mascot from random positions */}
      <AnimatePresence mode="wait">
        {(isPeeking || mascotsEnabled) && (
          <motion.button
            key={currentPosition}
            onClick={handleClick}
            className={`fixed z-50 cursor-pointer hidden lg:block ${positionStyles.className}`}
            initial={positionStyles.initial}
            animate={{
              ...positionStyles.animate,
              rotate: mascotsEnabled ? 0 : [0, -5, 5, -5, 0],
            }}
            exit={positionStyles.exit}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              rotate: { duration: 0.5, repeat: mascotsEnabled ? 0 : 2 },
            }}
            whileHover={positionStyles.hover}
            title={mascotsEnabled ? "Cacher les mascottes" : "Voir les mascottes !"}
          >
            <div className="relative">
              <Image
                src="/images/cat-mascot/chat-clin-d-oeil-assis.png"
                alt="Chat mascotte"
                width={100}
                height={100}
                className={`w-20 h-auto drop-shadow-xl ${isLeftSide ? "-scale-x-100" : ""}`}
              />
              {/* Speech bubble when not yet clicked */}
              {!hasBeenClicked && !mascotsEnabled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute -top-12 bg-white text-gray-800 text-xs font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap ${
                    isLeftSide ? "-right-20" : "-left-20"
                  }`}
                >
                  Clique-moi !
                  <div
                    className={`absolute -bottom-1 w-3 h-3 bg-white transform rotate-45 ${
                      isLeftSide ? "left-4" : "right-4"
                    }`}
                  />
                </motion.div>
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toggle indicator when mascots are visible */}
      {mascotsEnabled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 z-40 hidden lg:block"
        >
          <button
            onClick={toggleMascots}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] transition-all"
          >
            Cacher les mascottes
          </button>
        </motion.div>
      )}
    </>
  );
}
