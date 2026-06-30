"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const networkNodes = [
  { x: "17%", y: "23%" },
  { x: "33%", y: "14%" },
  { x: "67%", y: "18%" },
  { x: "82%", y: "36%" },
  { x: "73%", y: "73%" },
  { x: "45%", y: "82%" },
  { x: "22%", y: "68%" },
  { x: "50%", y: "49%" },
];

const orbitIcons = [
  { icon: Database, label: "Data Lake", className: "left-2 top-16" },
  { icon: BarChart3, label: "Analytics", className: "right-2 top-20" },
  { icon: Cloud, label: "Cloud AI", className: "right-10 bottom-12" },
  { icon: Cpu, label: "ML Cube", className: "left-10 bottom-10" },
];

export default function HeroVariationOne() {
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
              InvoLead turns complex enterprise data into actionable intelligence through advanced analytics, machine learning, and sovereign AI.
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
            <AIIntelligenceNetwork reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AIIntelligenceNetwork({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(129,191,206,0.18),transparent_62%)] blur-sm" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#81BFCE]/35"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EB5E04]/25"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      <svg viewBox="0 0 560 440" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EB5E04" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#FF9255" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#81BFCE" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <motion.path
          d="M95 105 C170 40 240 160 280 220 C328 132 412 74 464 160 C406 232 420 338 330 342 C250 346 186 388 126 300 C184 240 122 176 95 105Z"
          fill="none"
          stroke="url(#network-line)"
          strokeWidth="2"
          strokeDasharray="8 10"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />
      </svg>

      {networkNodes.map((node, index) => (
        <motion.span
          key={`${node.x}-${node.y}`}
          className="absolute size-3 rounded-full bg-[#EB5E04] shadow-[0_0_0_8px_rgba(235,94,4,0.10),0_0_28px_rgba(129,191,206,0.45)]"
          style={{ left: node.x, top: node.y }}
          animate={reduceMotion ? undefined : { scale: [1, 1.28, 1], y: [0, -8, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.14, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-white/75 bg-white/75 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl"
        animate={reduceMotion ? undefined : { y: [0, -12, 0], rotateY: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-4 rounded-[1.4rem] bg-[radial-gradient(circle_at_40%_25%,rgba(255,146,85,.35),transparent_42%)]" />
        <BrainCircuit className="relative size-16 text-[#EB5E04]" />
        <span className="relative text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">AI Brain</span>
      </motion.div>

      {orbitIcons.map((item, index) => (
        <GlassBadge key={item.label} {...item} delay={index * 0.2} reduceMotion={reduceMotion} />
      ))}

      <GlassPanel className="left-[26%] top-[8%]" title="Model Lift" value="+27%" reduceMotion={reduceMotion} />
      <GlassPanel className="right-[18%] bottom-[20%]" title="Pipeline" value="Live" reduceMotion={reduceMotion} />
    </div>
  );
}

function GlassBadge({
  icon: Icon,
  label,
  className,
  delay,
  reduceMotion,
}: {
  icon: LucideIcon;
  label: string;
  className: string;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className={`absolute flex items-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_46px_rgba(15,23,42,0.10)] backdrop-blur-xl ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <span className="grid size-8 place-items-center rounded-full bg-[#fff3ed] text-[#EB5E04]">
        <Icon className="size-4" />
      </span>
      {label}
    </motion.div>
  );
}

function GlassPanel({ className, title, value, reduceMotion }: { className: string; title: string; value: string; reduceMotion: boolean }) {
  return (
    <motion.div
      className={`absolute rounded-[1.1rem] border border-white/80 bg-white/65 p-4 shadow-[0_18px_42px_rgba(15,23,42,0.10)] backdrop-blur-xl ${className}`}
      animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -6, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        <Network className="size-3.5 text-[#81BFCE]" />
        {title}
      </div>
      <div className="mt-2 flex items-end gap-3">
        <strong className="text-2xl text-[#EB5E04]">{value}</strong>
        <Workflow className="mb-1 size-5 text-[#81BFCE]" />
      </div>
    </motion.div>
  );
}
