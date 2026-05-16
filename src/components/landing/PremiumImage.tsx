"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "./animations";

type PremiumImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  glow?: boolean;
  aspect?: "video" | "square" | "wide";
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function PremiumImage({
  src,
  alt,
  priority = false,
  className = "",
  glow = true,
  aspect = "video",
}: PremiumImageProps) {
  return (
    <motion.div
      className={`relative image-frame ${glow ? "image-glow" : ""} ${aspectClasses[aspect]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scaleIn}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </motion.div>
  );
}