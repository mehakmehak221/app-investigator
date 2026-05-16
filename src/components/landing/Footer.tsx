"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "./animations";

export function Footer() {
  return (
    <motion.footer
      className="border-t border-zinc-800 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ opacity: 0.85 }}
        >
          <Image src="/logo.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="text-sm text-zinc-500">AI-powered app observability</span>
        </motion.div>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} AI App Crash Investigator
        </p>
      </div>
    </motion.footer>
  );
}
