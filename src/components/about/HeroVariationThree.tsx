"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BarChart3, Bot, BrainCircuit, Cloud, Gauge, Layers, LineChart, Workflow } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const modules = [
  { label: "ERP", icon: Layers, x: "16%", y: "20%" },
  { label: "CRM", icon: Bot, x: "44%", y: "9%" },
  { label: "Cloud", icon: Cloud, x: "74%", y: "20%" },
  { label: "Analytics", icon: BarChart3, x: "80%", y: "53%" },
  { label: "ML", icon: BrainCircuit, x: "62%", y: "78%" },
  { label: "Models", icon: LineChart, x: "30%", y: "78%" },
  { label: "Automation", icon: Workflow, x: "9%", y: "52%" },
  { label: "BI", icon: Gauge, x: "46%", y: "50%" },
];

export default function HeroVariationThree() {
  const reduceMotion = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,rgba(129,191,206,.35)_100%)] pt-32 pb-16 md:pt-36 md:pb-24">
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={reduceMotion ? "show" : "hidden"} animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <AnimatedHeadline
              title="Solving Data Problems with Applied Intelligence"
              highlightFromWord={4}
              highlightColor="#EB5E04"
              titleColor="var(--primary)"
            />
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Connect enterprise systems, predictive models, and automation into one transformation layer built for measurable business outcomes.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href="/contact-us">
                  Work With Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/our-solutions">
                  Explore Our Solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-[420px] w-full max-w-[650px] sm:h-[500px]"
          >
            <TransformationCore reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TransformationCore({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,146,85,.22),transparent_44%),radial-gradient(circle_at_52%_50%,rgba(129,191,206,.18),transparent_62%)]" />

      <svg viewBox="0 0 560 440" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="energy-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EB5E04" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#81BFCE" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {modules.map((module) => (
          <motion.line
            key={module.label}
            x1="280"
            y1="220"
            x2={Number.parseFloat(module.x) * 5.6}
            y2={Number.parseFloat(module.y) * 4.4}
            stroke="url(#energy-line)"
            strokeWidth="2"
            strokeDasharray="6 10"
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF9255]/25"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#81BFCE]/35"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_28px_80px_rgba(15,23,42,.13)] backdrop-blur-xl"
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-4 rounded-[1.35rem] bg-gradient-to-br from-[#fff0e8] to-[#eaf7fb]" />
        <BrainCircuit className="relative size-14 text-[#EB5E04]" />
        <span className="relative text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">AI Core</span>
      </motion.div>

      {modules.map((module, index) => {
        const Icon = module.icon;
        return (
          <motion.div
            key={module.label}
            className="absolute flex min-w-28 items-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-3.5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(15,23,42,.10)] backdrop-blur-xl"
            style={{ left: module.x, top: module.y }}
            animate={reduceMotion ? undefined : { y: [0, index % 2 ? -10 : 10, 0] }}
            transition={{ duration: 4.8 + index * 0.12, repeat: Infinity, delay: index * 0.1, ease: "easeInOut" }}
          >
            <span className="grid size-8 place-items-center rounded-full bg-[#fff3ed] text-[#EB5E04]">
              <Icon className="size-4" />
            </span>
            {module.label}
          </motion.div>
        );
      })}
    </div>
  );
}
