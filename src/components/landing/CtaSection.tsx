"use client";

import { motion } from "framer-motion";
import { ChevronRight, Plug, Smartphone } from "lucide-react";
import { FadeIn, SectionReveal, springEase } from "./animations";
import { CalendlyLink } from "./CalendlyLink";
import { ContactForm } from "./ContactForm";
import { ContactFormTrigger } from "./ContactFormTrigger";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: springEase },
  },
};

export function CtaSection() {
  return (
    <SectionReveal id="cta" className="section pb-24">
      <motion.div className="mx-auto max-w-6xl px-6">
        <FadeIn variant="scaleIn">
          <motion.div
            className="grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 lg:grid-cols-2"
            whileHover={{ borderColor: "rgba(99, 102, 241, 0.35)" }}
          >
            <motion.div
              className="relative px-8 py-12 text-left lg:px-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={heroContainer}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.14),transparent_65%)]"
              />
              <motion.div className="relative">
                <motion.div variants={heroChild}>
                  <Smartphone className="mb-6 h-10 w-10 text-indigo-400" />
                </motion.div>
                <motion.h2
                  variants={heroChild}
                  className="text-3xl font-semibold text-zinc-50 sm:text-4xl"
                >
                  Your mobile app should fail less and recover faster
                </motion.h2>
                <motion.p variants={heroChild} className="mt-4 max-w-md text-zinc-400">
                  Book a 30-minute consultation or send us a message — we&apos;ll help
                  you get production-ready observability.
                </motion.p>
                <motion.div
                  variants={heroChild}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <CalendlyLink className="btn-primary px-6 py-3 text-sm">
                    Book a consultation
                    <ChevronRight className="h-4 w-4" />
                  </CalendlyLink>
                  <ContactFormTrigger className="btn-secondary px-6 py-3 text-sm">
                    <Plug className="h-4 w-4" />
                    Send a message
                  </ContactFormTrigger>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              id="contact-form"
              className="border-t border-zinc-800 bg-zinc-950/80 px-8 py-10 text-left lg:border-t-0 lg:border-l lg:px-10 lg:py-12"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: springEase }}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                Contact form
              </p>
              
              <ContactForm className="mt-6" />
            </motion.div>
          </motion.div>
        </FadeIn>
      </motion.div>
    </SectionReveal>
  );
}
