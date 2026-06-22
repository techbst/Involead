"use client";

import { useId } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedHeadline from "../ui/animated-title";
import AnimatedNumber from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


type Stat = {
  value: string;
  label: string;
};

type FloatingMetric = {
  value: string;
  label: string;
  spark: number[];
  corner: "top" | "bottom";
};

type QuarterBar = {
  label: string;
  height: number; // 0–1, fraction of max bar height
};

const stats: Stat[] = [
  { value: "6+", label: "Industries Served" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "35h+", label: "Hours Saved Weekly" },
];

const floatingMetrics: FloatingMetric[] = [
  {
    value: "5–18%",
    label: "Revenue Growth",
    spark: [4, 6, 5, 8, 10, 9, 13],
    corner: "bottom",
  },
  {
    value: "15–20%",
    label: "Planning Cycle",
    spark: [11, 9, 10, 7, 8, 5, 4],
    corner: "top",
  },
];

const quarterBars: QuarterBar[] = [
  { label: "Q1", height: 0.38 },
  { label: "Q2", height: 0.52 },
  { label: "Q3", height: 0.71 },
  { label: "Q4", height: 0.94 },
];

// Hand-authored upward trend — the line the panel draws in on load.
const LINE_PATH =
  "M4,120 C36,118 54,84 92,90 C130,96 142,58 182,52 C222,46 238,18 316,8";
const AREA_PATH = `${LINE_PATH} L316,150 L4,150 Z`;

const STAT_DIVIDERS = [
  "",
  "border-l border-slate-100",
  "border-t border-slate-100 sm:border-t-0 sm:border-l",
  "border-l border-t border-slate-100 sm:border-t-0",
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 20, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

export default function DataScienceHero() {
  const reduceMotion = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] !pt-35 py-14 md:py-20">
    
     

      <div className="container relative mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
          >
            {/* <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-[#eaf7fb] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3d7986]"
            >
              Data Science &amp; AI Consulting
            </motion.span> */}

            <AnimatedHeadline
  title="Intelligent Solutions. Impactful Results."
  highlightFromWord={2}
  highlightColor="#5fb0c2"
  titleColor="#0f172a"
/>
            

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg"
            >
              Predict, analyze, and optimize with AI-driven insights —
              turning your raw data into measurable competitive advantage.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="default">
                <Link href="/contact-us">
                  Schedule a Free Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

                <Button asChild variant="outline">
                <Link href="/case-studies">
                  View Case Studies
                   <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={rightColumnVariants}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div variants={itemVariants}>
              <AnalyticsPanel reduceMotion={reduceMotion} />
            </motion.div>

            {floatingMetrics.map((metric, index) => (
              <FloatingMetricCard
                key={metric.label}
                metric={metric}
                delay={reduceMotion ? 0 : 0.55 + index * 0.15}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-secondary bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center gap-1.5 px-4 py-6 text-center",
                STAT_DIVIDERS[index]
              )}
            >
              <span className="text-3xl font-bold text-secondary md:text-3xl">
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="text-xs font-medium text-slate-500 md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AnalyticsPanel({ reduceMotion }: { reduceMotion: boolean }) {
  const gradientId = useId();

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-800 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.35)] md:p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(95,176,194,0.22),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold capitalize !text-white">
            Revenue Intelligence
          </p>
          <p className="mt-1 text-sm font-medium !text-white/80">
            Forecast vs. realized, last 4 quarters
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-[#7fc6d6]">
          <span className="relative flex size-1.5">
            {!reduceMotion && (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#7fc6d6]" />
            )}
            <span className="relative inline-flex size-1.5 rounded-full bg-[#7fc6d6]" />
          </span>
          Live
        </span>
      </div>

      <div className="relative z-10 mt-2">
        <svg
          viewBox="0 0 320 150"
          className="h-30 w-full overflow-visible md:h-30"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5fb0c2" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#5fb0c2" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d={AREA_PATH}
            fill={`url(#${gradientId})`}
            stroke="none"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.9 }}
          />

          <motion.path
            d={LINE_PATH}
            fill="none"
            stroke="#7fc6d6"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.2,
              delay: reduceMotion ? 0 : 0.5,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx={316}
            cy={8}
            r={4.5}
            fill="#eaf7fb"
            initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 1.6 }}
            style={{ transformOrigin: "316px 8px" }}
          />
        </svg>

        <div className="mt-2 flex items-end gap-3 border-t border-white/10 pt-4">
          {quarterBars.map((bar, index) => (
            <div
              key={bar.label}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div className="flex h-16 w-full items-end overflow-hidden rounded-md bg-white/5">
                <motion.div
                  className="w-full rounded-md bg-gradient-to-t from-[#4F8D9A] to-[#7fc6d6]"
                  initial={reduceMotion ? false : { height: "0%" }}
                  animate={{ height: `${bar.height * 100}%` }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : 1.0 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
              <span className="text-[11px] font-medium text-white/45">
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingMetricCard({
  metric,
  delay,
  reduceMotion,
}: {
  metric: FloatingMetric;
  delay: number;
  reduceMotion: boolean;
}) {
  const max = Math.max(...metric.spark);

  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.92, y: 20 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: { duration: 0.5, delay },
    scale: { duration: 0.5, delay },
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.02,
            }
      }
      className={cn(
        "absolute z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_22px_56px_rgba(15,23,42,0.16)]",
        metric.corner === "top"
          ? "-right-2 -top-4 md:-right-6 md:-top-6"
          : "-left-2 -bottom-5 md:-left-7 md:-bottom-6"
      )}
    >
      <motion.div
        className="flex items-center gap-3"
        animate={undefined}
        transition={undefined}
      >
        <div>
          <p className="text-base font-bold leading-none text-slate-950">
            {metric.value}
          </p>
          <p className="mt-1 text-[11px] font-medium text-slate-500">
            {metric.label}
          </p>
        </div>

        <div className="flex h-7 items-end gap-[3px]">
          {metric.spark.map((value, index) => (
            <motion.span
              key={index}
              className="w-[3px] rounded-full bg-gradient-to-t from-[#4F8D9A] to-[#7fc6d6]"
              initial={reduceMotion ? false : { height: "0%" }}
              animate={{ height: `${(value / max) * 100}%` }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : delay + 0.25 + index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
