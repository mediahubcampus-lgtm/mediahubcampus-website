"use client";

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

// Smooth spring config for natural feel
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

/**
 * Hook for parallax effect on elements
 * Returns a y transform value that moves slower than scroll
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
  const smoothY = useSpring(y, springConfig);

  return { ref, y: smoothY };
}

/**
 * Hook for fade + blur reveal animation
 * Elements start blurred and fade in as they enter viewport
 */
export function useBlurReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [8, 2, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 20, 0]);

  const smoothOpacity = useSpring(opacity, springConfig);
  const smoothBlur = useSpring(blur, springConfig);
  const smoothY = useSpring(y, springConfig);

  return { ref, opacity: smoothOpacity, blur: smoothBlur, y: smoothY };
}

/**
 * Hook for scale reveal animation
 * Elements scale up slightly as they enter viewport
 */
export function useScaleReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);

  const smoothScale = useSpring(scale, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);

  return { ref, scale: smoothScale, opacity: smoothOpacity };
}

/**
 * Hook for page scroll progress (0 to 1)
 * Useful for progress indicators
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springConfig);
  return scaleX;
}

/**
 * Create stagger delay based on index
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.05) {
  return index * baseDelay;
}

// Easing curve (cubic bezier)
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

/**
 * Framer Motion variants for blur reveal
 */
export const blurRevealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOutQuart,
    },
  },
};

/**
 * Framer Motion variants for staggered children
 */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easeOutQuart,
    },
  },
};
