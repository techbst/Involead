"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BarChart3, BrainCircuit, Database, Sparkles } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";
import Numbers from "./Numbers";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const nodes = [
  { x: "18%", y: "24%", size: "size-3" },
  { x: "76%", y: "18%", size: "size-4" },
  { x: "68%", y: "76%", size: "size-3" },
  { x: "22%", y: "70%", size: "size-4" },
  { x: "50%", y: "48%", size: "size-5" },
];

export default function Hero() {
  const reduceMotion = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-32 pb-10 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >


            <AnimatedHeadline
              title="Solving Data Problems with Applied Intelligence"
              highlightFromWord={4}
              highlightColor="var(--secondary)"
              titleColor="var(--primary)"
            />

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              InvoLead is a data science consulting firm that turns complex data into actionable intelligence-helping enterprises evolve through advanced analytics, machine learning, and sovereign AI.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="default">
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
            className="relative mx-auto h-[390px] w-full max-w-[700px] sm:h-[460px]"
          >
            <DataIntelligenceGraphic reduceMotion={reduceMotion} />
          </motion.div>
        </div>
        <Numbers />
      </div>
    </section>
  );
}

function DataIntelligenceGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(95,176,194,0.24),transparent_36%),radial-gradient(circle_at_78%_72%,rgba(88,28,135,0.10),transparent_35%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/25"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5fb0c2]/30"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <svg viewBox="0 0 420 320" className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)]">
        <motion.path
          d="M70 85 C145 45 190 170 258 112 S327 77 356 166 C315 226 230 206 178 250 C124 218 105 145 70 85Z"
          fill="none"
          stroke="#5fb0c2"
          strokeWidth="2"
          strokeDasharray="7 9"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.span
          key={`${node.x}-${node.y}`}
          className={`absolute ${node.size} rounded-full bg-secondary shadow-[0_0_0_8px_rgba(95,176,194,0.14)]`}
          style={{ left: node.x, top: node.y }}
          animate={reduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.5rem] border border-white/70 bg-slate-950 text-white shadow-[0_25px_60px_rgba(15,23,42,0.24)]"
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit className="size-12 text-[#7fc6d6]" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">AI Core</span>
      </motion.div>

      <MetricPill className="left-5 top-8" icon={Database} title="Unified Data" />
      <MetricPill className="right-5 top-16" icon={BarChart3} title="Live Insights" />
      <MetricPill className="bottom-8 left-8" icon={Sparkles} title="Smart Action" />
    </div>
  );
}

function MetricPill({
  className,
  icon: Icon,
  title,
}: {
  className: string;
  icon: typeof Database;
  title: string;
}) {
  return (
    <motion.div
      className={`absolute flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.12)] ${className}`}
      whileHover={{ y: -4 }}
    >
      <span className="grid size-8 place-items-center rounded-full bg-[#eaf7fb] text-secondary">
        <Icon className="size-4" />
      </span>
      {title}
    </motion.div>
  );
}
