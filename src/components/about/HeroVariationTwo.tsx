"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BarChart3, Cpu, Database, LineChart, Orbit, Sparkles, type LucideIcon } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const particles = Array.from({ length: 34 }, (_, index) => {
  const angle = (index / 34) * Math.PI * 2;
  const radius = index % 3 === 0 ? 42 : index % 3 === 1 ? 34 : 25;
  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius * 0.72}%`,
    delay: index * 0.06,
    size: index % 5 === 0 ? "size-2.5" : "size-1.5",
  };
});

const cards = [
  { icon: BarChart3, label: "KPI", value: "+18%", className: "left-2 top-16" },
  { icon: Cpu, label: "AI Chip", value: "AutoML", className: "right-3 top-20" },
  { icon: Database, label: "SQL", value: "Synced", className: "left-8 bottom-14" },
  { icon: LineChart, label: "Forecast", value: "94%", className: "right-8 bottom-10" },
];

export default function HeroVariationTwo() {
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
              We help enterprises convert billions of disconnected data points into governed intelligence that improves decisions.
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
            <DataGalaxy reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DataGalaxy({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,191,206,.22),transparent_48%)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,146,85,.55),rgba(235,94,4,.18)_36%,rgba(129,191,206,.13)_62%,transparent_70%)] shadow-[0_0_80px_rgba(129,191,206,.35)]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {particles.map((particle) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className={`absolute ${particle.size} rounded-full bg-[#EB5E04] shadow-[0_0_18px_rgba(235,94,4,.35)]`}
            style={{ left: particle.left, top: particle.top }}
            animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [1, 1.5, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      <svg viewBox="0 0 560 440" className="absolute inset-0 h-full w-full">
        <motion.circle
          cx="280"
          cy="220"
          r="135"
          fill="none"
          stroke="#81BFCE"
          strokeOpacity="0.42"
          strokeWidth="1.5"
          strokeDasharray="5 10"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "280px 220px" }}
        />
        <motion.path
          d="M150 222 C212 140 348 142 412 220 C344 294 220 304 150 222Z"
          fill="none"
          stroke="#FF9255"
          strokeOpacity="0.55"
          strokeWidth="2"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {cards.map((card, index) => (
        <GalaxyCard key={card.label} {...card} delay={index * 0.18} reduceMotion={reduceMotion} />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/70 shadow-[0_22px_70px_rgba(15,23,42,.12)] backdrop-blur-xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Orbit className="size-11 text-[#EB5E04]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Galaxy</span>
      </motion.div>
    </div>
  );
}

function GalaxyCard({
  icon: Icon,
  label,
  value,
  className,
  delay,
  reduceMotion,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  className: string;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className={`absolute min-w-32 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-[0_18px_46px_rgba(15,23,42,0.10)] backdrop-blur-xl ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 5.2, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        <Icon className="size-4 text-[#81BFCE]" />
        {label}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <strong className="text-xl text-[#EB5E04]">{value}</strong>
        <Sparkles className="size-4 text-[#FF9255]" />
      </div>
    </motion.div>
  );
}
