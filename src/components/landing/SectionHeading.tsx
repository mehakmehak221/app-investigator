"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const showLabel =
    label &&
    label.trim().toLowerCase() !== title.trim().toLowerCase() &&
    !title.toLowerCase().startsWith(label.toLowerCase());

  return (
    <motion.div
      className={`mb-12 max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      {showLabel && (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-indigo-400">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
