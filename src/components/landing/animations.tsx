"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Smooth ease — industry-standard cubic bezier */
export const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;
export const springEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: springEase },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: springEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

const viewport = { once: true, margin: "-80px" as const };

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideInRight";
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
}: FadeInProps) {
  const variants =
    variant === "fadeIn"
      ? fadeIn
      : variant === "scaleIn"
        ? scaleIn
        : variant === "slideInRight"
          ? slideInRight
          : fadeUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/** Animated card with subtle lift on hover */
export function MotionCard({
  children,
  className = "",
  featured = false,
  animate = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  /** Set true when MotionCard is direct child of Stagger */
  animate?: boolean;
}) {
  return (
    <motion.div
      className={`${featured ? "card-featured" : "card"} ${className}`}
      variants={animate ? staggerItem : undefined}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: smoothEase },
      }}
      whileTap={{ scale: 0.995 }}
    >
      {children}
    </motion.div>
  );
}

/** Wrap entire sections for consistent reveal */
export function SectionReveal({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: springEase }}
    >
      {children}
    </motion.section>
  );
}
