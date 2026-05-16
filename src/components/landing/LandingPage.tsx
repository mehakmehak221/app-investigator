"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Bell,
  Brain,
  ChevronRight,
  Code2,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  MonitorPlay,
  Plug,
  Radio,
  Rocket,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import {
  developerPoints,
  featureCards,
  howItWorks,
  metrics,
  pricingPlans,
  problemPoints,
  solutionFeatures,
  testimonials,
  useCases,
} from "./content";
import {
  FadeIn,
  MotionCard,
  SectionReveal,
  Stagger,
  StaggerItem,
  springEase,
} from "./animations";
import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollProgress } from "./ScrollProgress";
import { SectionHeading } from "./SectionHeading";
import { TechMarquee } from "./TechMarquee";

const featureIcons = [
  Brain,
  Activity,
  MonitorPlay,
  Bell,
  Radio,
  GitBranch,
  Gauge,
  Zap,
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: springEase },
  },
};

function ProductImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`img-wrap img-glow relative aspect-[16/10] w-full ${className}`}
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, ease: springEase }}
      whileHover={{ scale: 1.01 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-top transition-transform duration-500 ease-out"
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative section overflow-hidden pt-28 lg:pt-32">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
                initial="hidden"
                animate="visible"
                variants={heroContainer}
              >
                <motion.div variants={heroChild} className="badge mb-6">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-indigo-400"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  AI App Crash Investigator
                </motion.div>

                <motion.h1
                  variants={heroChild}
                  className="text-4xl font-semibold leading-[1.15] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]"
                >
                  Stop Losing Users to{" "}
                  <span className="accent-text">Hidden App Crashes</span>
                </motion.h1>

                <motion.p
                  variants={heroChild}
                  className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400"
                >
                  AI-powered crash analysis, mobile observability and real-time
                  debugging for Android and IOS apps.
                </motion.p>

                <motion.div variants={heroChild} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link href="#cta" className="btn-primary px-6 py-3 text-sm">
                      Book Demo
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <Link href="#how-it-works" className="btn-secondary px-6 py-3 text-sm text-center">
                    How It Works
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: springEase }}
              >
                <ProductImage
                  src="/images/hero-dashboard-hd.png"
                  alt="Crash analytics dashboard"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        <TechMarquee />

        {/* Problem */}
        <SectionReveal id="problem" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              label="The Problem"
              title="Most mobile apps crash silently in production"
            />
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {problemPoints.map((point) => (
                <StaggerItem key={point}>
                  <MotionCard className="flex gap-3 p-5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/80" />
                    <p className="text-sm leading-relaxed text-zinc-400">{point}</p>
                  </MotionCard>
                </StaggerItem>
              ))}
            </Stagger>
            <FadeIn className="mx-auto mt-10 max-w-2xl text-center" delay={0.15}>
              <p className="text-base text-zinc-300">
                Most app teams lose users, ratings and revenue because they
                discover production issues too late.
              </p>
            </FadeIn>
          </div>
        </SectionReveal>

        <FadeIn variant="fadeIn">
          <div className="divider mx-6" />
        </FadeIn>

        {/* Solution */}
        <SectionReveal id="solution" className="section section-alt">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <FadeIn variant="fadeUp" className="flex flex-col">
                <SectionHeading
                  label="The Solution"
                  title="AI-powered crash intelligence for modern mobile apps"
                  description="AI App Crash Investigator continuously monitors your mobile applications, analyzes crashes in real time and automatically identifies root causes before they impact users at scale."
                  align="left"
                />
                <Stagger className="grid gap-2 sm:grid-cols-2">
                  {solutionFeatures.map((feature) => (
                    <StaggerItem key={feature}>
                      <motion.div
                        className="flex items-start gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2.5 text-sm text-zinc-400"
                        whileHover={{
                          borderColor: "rgba(99, 102, 241, 0.3)",
                          backgroundColor: "rgba(99, 102, 241, 0.05)",
                        }}
                      >
                        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                        {feature}
                      </motion.div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </FadeIn>
              <FadeIn variant="slideInRight">
                <ProductImage
                  src="/images/solution-ai-hd.png"
                  alt="AI crash intelligence"
                />
              </FadeIn>
            </div>
          </div>
        </SectionReveal>

        {/* Features */}
        <SectionReveal id="features" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title="Feature Cards" />
            <FadeIn variant="scaleIn" className="mb-10">
              <ProductImage
                src="/images/session-monitoring-hd.png"
                alt="Session monitoring"
                className="aspect-[21/9]"
              />
            </FadeIn>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((card, i) => {
                const Icon = featureIcons[i];
                return (
                  <StaggerItem key={card.title}>
                    <MotionCard className="p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                        <Icon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <h3 className="mb-2 font-medium text-zinc-100">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-500">
                        {card.description}
                      </p>
                    </MotionCard>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </SectionReveal>

        {/* How It Works */}
        <SectionReveal id="how-it-works" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading label="Process" title="How It Works" />
            <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item) => (
                <StaggerItem key={item.step}>
                  <MotionCard className="p-6">
                    <span className="step-ring mb-4">{item.step}</span>
                    <h3 className="mt-3 font-medium text-zinc-100">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {item.description}
                    </p>
                  </MotionCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </SectionReveal>

        {/* Metrics */}
        <SectionReveal className="section">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn variant="scaleIn">
              <motion.div
                className="card-featured metric-card rounded-2xl p-8 lg:p-12"
                whileHover={{ boxShadow: "0 0 40px -12px rgba(99, 102, 241, 0.25)" }}
              >
                <Stagger className="grid gap-8 sm:grid-cols-2">
                  {metrics.map((metric, i) => (
                    <StaggerItem key={metric}>
                      <div className="flex gap-4">
                        <span className="text-4xl font-semibold text-zinc-700 lg:text-5xl">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="self-center text-lg font-medium text-zinc-200">
                          {metric}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </motion.div>
            </FadeIn>
          </div>
        </SectionReveal>

        {/* Developer */}
        <SectionReveal className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <FadeIn variant="slideInRight" className="order-2 lg:order-1">
                <ProductImage
                  src="/images/hero-dashboard-hd.png"
                  alt="Developer tools"
                />
              </FadeIn>
              <FadeIn className="order-1 flex flex-col lg:order-2">
                <SectionHeading
                  label="For Developers"
                  title="Built for modern mobile engineering teams"
                  align="left"
                />
                <Stagger className="grid gap-2 sm:grid-cols-2">
                  {developerPoints.map((point) => (
                    <StaggerItem key={point}>
                      <motion.div
                        className="flex items-center gap-2 text-sm text-zinc-400"
                        whileHover={{ x: 4, color: "#d4d4d8" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Code2 className="h-4 w-4 shrink-0 text-indigo-400" />
                        {point}
                      </motion.div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </FadeIn>
            </div>
          </div>
        </SectionReveal>

        {/* Use Cases */}
        <SectionReveal className="section">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title="Use Cases" />
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase) => (
                <StaggerItem key={useCase.title}>
                  <MotionCard className="p-6">
                    <Layers className="mb-3 h-6 w-6 text-indigo-400" />
                    <h3 className="mb-2 font-medium text-zinc-100">{useCase.title}</h3>
                    <p className="text-sm text-zinc-500">{useCase.description}</p>
                  </MotionCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </SectionReveal>

        {/* Testimonials */}
        <SectionReveal className="section section-alt">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title="Testimonials" />
            <Stagger className="grid gap-4 md:grid-cols-2">
              {testimonials.map((quote) => (
                <StaggerItem key={quote}>
                  <MotionCard className="border-l-2 border-l-indigo-500/50 p-6 pl-5">
                    <span className="quote-mark block">&ldquo;</span>
                    <p className="text-base leading-relaxed text-zinc-300">
                      {quote}
                    </p>
                    <LineChart className="mt-4 h-5 w-5 text-indigo-400/60" />
                  </MotionCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </SectionReveal>

        {/* Pricing */}
        <SectionReveal id="pricing" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title="Pricing" />
            <Stagger className="grid gap-4 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <motion.div
                    className={`flex flex-col p-6 ${
                      plan.highlighted ? "card-featured" : "card"
                    }`}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: springEase }}
                  >
                    {plan.highlighted && (
                      <span className="mb-4 w-fit rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                        Popular
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-zinc-100">{plan.name}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{plan.tagline}</p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-zinc-400"
                        >
                          <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      className="mt-8"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="#cta"
                        className={`block w-full text-center ${
                          plan.highlighted
                            ? "btn-primary py-2.5 text-sm"
                            : "btn-secondary py-2.5 text-sm"
                        }`}
                      >
                        Book Demo
                      </Link>
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal id="cta" className="section pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn variant="scaleIn">
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-16 text-center lg:px-16 lg:py-20"
                whileHover={{
                  borderColor: "rgba(99, 102, 241, 0.35)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_70%)]" />
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={heroContainer}
                >
                  <motion.div variants={heroChild}>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Smartphone className="mx-auto mb-6 h-10 w-10 text-indigo-400" />
                    </motion.div>
                  </motion.div>
                  <motion.h2
                    variants={heroChild}
                    className="mx-auto max-w-2xl text-3xl font-semibold text-zinc-50 sm:text-4xl"
                  >
                    Your mobile app should fail less and recover faster
                  </motion.h2>
                  <motion.p
                    variants={heroChild}
                    className="mx-auto mt-4 max-w-xl text-zinc-400"
                  >
                    Detect crashes instantly, resolve issues faster and deliver a
                    stable user experience at scale.
                  </motion.p>
                  <motion.div variants={heroChild} className="mt-8">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link href="#cta" className="btn-primary px-8 py-3 text-sm">
                        Talk to us
                        <Plug className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </SectionReveal>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
