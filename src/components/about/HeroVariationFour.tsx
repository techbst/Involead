"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BarChart3, Bot, Brain, BrainCircuit, Cloud, Cuboid, Database, LineChart, Network, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const nodes = [
  { x: "23%", y: "24%" },
  { x: "55%", y: "13%" },
  { x: "78%", y: "35%" },
  { x: "70%", y: "70%" },
  { x: "35%", y: "78%" },
  { x: "14%", y: "55%" },
];

export default function HeroVariationFour() {
  const reduceMotion = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,rgba(129,191,206,.35)_100%)] pt-32 pb-10 md:pt-36 md:pb-10">
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={reduceMotion ? "show" : "hidden"} animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <AnimatedHeadline
              title="Solving Data Problems with Applied Intelligence"
              highlightFromWord={4}
              highlightColor="var(--secondary)"
              titleColor="var(--primary)"
            />
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              A command center for enterprise intelligence, combining analytics, data streams, machine learning, and business-ready automation.
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
            <AICommandCenter reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AICommandCenter({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,191,206,.22),transparent_54%)]" />
      <svg viewBox="0 0 560 440" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="command-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="52%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="#81BFCE" />
          </linearGradient>
        </defs>
        {nodes.map((node) => (
          <motion.line
            key={`${node.x}-${node.y}`}
            x1="280"
            y1="220"
            x2={Number.parseFloat(node.x) * 5.6}
            y2={Number.parseFloat(node.y) * 4.4}
            stroke="url(#command-line)"
            strokeOpacity="0.48"
            strokeWidth="2"
            strokeDasharray="7 11"
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/85 bg-white/70 "
        animate={reduceMotion ? undefined : { rotateY: [0, 18, 0], rotateX: [0, -8, 0], y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-5 rounded-[24px] bg-gradient-to-br from-secondary via-secondary/50 to-[#81BFCE] opacity-90 " />
        <div className="absolute inset-10 rounded-xl border border-white/50 bg-white/25" />
        <Cuboid className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-white" />
      </motion.div>

      {nodes.map((node, index) => (
        <motion.span
          key={`${node.x}-${node.y}`}
          className="absolute size-3 rounded-full bg-secondary shadow-[0_0_0_8px_rgba(235,94,4,.10),0_0_26px_rgba(129,191,206,.42)]"
          style={{ left: node.x, top: node.y }}
          animate={reduceMotion ? undefined : { scale: [1, 1.25, 1], y: [0, index % 2 ? -7 : 7, 0] }}
          transition={{ duration: 3.3, repeat: Infinity, delay: index * 0.16, ease: "easeInOut" }}
        />
      ))}

      <CommandPanel className="left-2 top-10" icon={Database} label="Data Lake " value="8.4 PB" reduceMotion={reduceMotion} />
      <CommandPanel className="right-3 top-16" icon={Brain} label="AI Models" value="24" reduceMotion={reduceMotion} />
      <CommandPanel className="left-7 bottom-12" icon={Network} label="Connected Sources" value="156" reduceMotion={reduceMotion} />
      <CommandPanel className="right-8 bottom-10" icon={TrendingUp} label="Prediction Accuracy" value="98.2%" reduceMotion={reduceMotion} />
      <CommandPanel className="left-[39%] top-2" icon={ShieldCheck} label="Sovereign AI" value="Secure" reduceMotion={reduceMotion} />

      
    </div>
  );
}

function CommandPanel({
  className,
  icon: Icon,
  label,
  value,
  reduceMotion,
}: {
  className: string;
  icon: typeof BrainCircuit;
  label: string;
  value: string;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className={`absolute min-w-32 rounded-2xl border border-white/80 bg-white/72 p-4  backdrop-blur-xl ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 1.2, 0] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-main">
        <Icon className="size-4 text-[#81BFCE]" />
        {label}
      </div>
      <strong className="mt-2 block text-xl text-secondary">{value}</strong>
    </motion.div>
  );
}
