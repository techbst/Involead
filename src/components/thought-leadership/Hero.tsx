"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CircleDollarSign,
  Cpu,
  Gauge,
  LineChart,
  Orbit,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedHeadline from "../ui/animated-title";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

const heroCopy = {
  label: "Thought Leadership",
  heading: "Thought Leadership",
};

function HeroContent({
  description,
}: {
  description: string;
}) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
      
      <AnimatedHeadline
        title={heroCopy.heading}
        highlightFromWord={5}
        highlightColor="#5fb0c2"  
        titleColor="#0f172a"
      />

    

      <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8">
        <Button asChild className="rounded-full px-6">
          <Link href="/our-solutions">
            Explore Solutions
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

function MiniBarChart({ active = true }: { active?: boolean }) {
  const bars = [46, 68, 54, 82, 72, 90];

  return (
    <div className="flex h-24 items-end gap-2">
      {bars.map((bar, index) => (
        <motion.span
          key={`${bar}-${index}`}
          initial={{ height: active ? 8 : `${bar}%` }}
          animate={{ height: `${bar}%` }}
          transition={{ duration: 0.8, delay: index * 0.08, repeat: active ? Infinity : 0, repeatType: "mirror" }}
          className="w-full rounded-t-full bg-[linear-gradient(180deg,#5fb0c2,#1e7d92)]"
        />
      ))}
    </div>
  );
}

function MetricPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

export default function Hero_TL() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-32 pb-10 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          
        </div>
      
      </div>
    </section>
  );
}

export function Hero_TL_1() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-32 pb-14 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#ff9255]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-[#5fb0c2]/20 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <HeroContent description="Insights on AI-powered marketing mix optimization, pricing intelligence, and workforce productivity designed to solve real business challenges." />
          <AIDashboardGraphic />
        </div>
      </div>
    </section>
  );
}

function AIDashboardGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto min-h-[500px] w-full max-w-[610px] [perspective:1200px]"
      aria-hidden="true"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5fb0c2]/20"
      />
      <div className="absolute inset-14 rounded-full bg-[radial-gradient(circle,rgba(95,176,194,0.30),transparent_62%)] blur-xl" />

      <motion.article
        animate={{ y: [0, -16, 0], rotateX: [7, 10, 7], rotateY: [-13, -8, -13] }}
        transition={floatTransition}
        className="absolute left-2 top-8 w-[72%] rounded-2xl border border-white/70 bg-white/55 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-[#5fb0c2]/15 text-[#237487]">
              <BarChart3 className="size-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-950">Marketing Mix</h3>
              <p className="text-xs text-slate-500">Campaign ROI model</p>
            </div>
          </div>
          <MetricPill>
            <TrendingUp className="size-3 text-[#ff9255]" />
            +32%
          </MetricPill>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_0.9fr] items-end gap-5">
          <MiniBarChart />
          <svg viewBox="0 0 140 88" className="h-24 w-full overflow-visible">
            <motion.path
              d="M6 72 C32 46, 46 62, 66 38 S104 22, 132 14"
              fill="none"
              stroke="#ff9255"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.article>

      <motion.article
        animate={{ y: [0, 14, 0], rotateX: [9, 5, 9], rotateY: [10, 16, 10] }}
        transition={{ ...floatTransition, duration: 6 }}
        className="absolute bottom-20 right-2 w-[58%] rounded-2xl border border-white/70 bg-white/60 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <span className="grid size-10 place-items-center rounded-xl bg-[#ff9255]/15 text-[#d86624]">
            <CircleDollarSign className="size-5" />
          </span>
          <MetricPill>Margin +14%</MetricPill>
        </div>
        <h3 className="mt-4 text-sm font-bold text-slate-950">Pricing Optimization</h3>
        <svg viewBox="0 0 180 86" className="mt-3 h-24 w-full">
          <path d="M8 70 C45 18, 82 38, 110 50 S152 48, 172 16" fill="none" stroke="#cbd5e1" strokeWidth="2" />
          <motion.path
            d="M8 70 C45 18, 82 38, 110 50 S152 48, 172 16"
            fill="none"
            stroke="#1f93aa"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          />
        </svg>
      </motion.article>

      <motion.article
        animate={{ y: [0, -12, 0], rotateX: [5, 9, 5], rotateY: [-4, -9, -4] }}
        transition={{ ...floatTransition, duration: 5.5 }}
        className="absolute bottom-4 left-8 w-[48%] rounded-2xl border border-white/70 bg-white/60 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-blue-500/15 text-blue-600">
            <UsersRound className="size-5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-950">Workforce Productivity</h3>
            <p className="text-xs text-slate-500">Team capacity</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="text-3xl font-bold text-slate-950">87</div>
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((item) => (
              <motion.span
                key={item}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.7, delay: item * 0.15, repeat: Infinity }}
                className="size-8 rounded-full border-2 border-white bg-[linear-gradient(135deg,#5fb0c2,#ff9255)]"
              />
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function Hero_TL_2() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-14 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,146,85,0.16),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(95,176,194,0.24),transparent_30%)]" />
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <HeroContent description="Explore expert perspectives on AI-driven marketing, pricing optimization, and workforce productivity." />
          <AgenticOrbitGraphic />
        </div>
      </div>
    </section>
  );
}

function AgenticOrbitGraphic() {
  const nodes = [
    { title: "Marketing Mix Optimization", metric: "ROI +32%", icon: Target, className: "left-[4%] top-[18%]" },
    { title: "Pricing Optimization", metric: "Margin +14%", icon: CircleDollarSign, className: "right-[0%] top-[35%]" },
    { title: "Workforce Productivity", metric: "CSAT +21%", icon: UsersRound, className: "left-[18%] bottom-[6%]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto aspect-square w-full max-w-[610px]"
      aria-hidden="true"
    >
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(95,176,194,0.28),transparent_62%)] blur-2xl" />
      {[10, 22, 34].map((inset, index) => (
        <motion.div
          key={inset}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{ duration: 24 + index * 8, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-dashed border-[#5fb0c2]/30"
          style={{ inset: `${inset}%` }}
        />
      ))}

      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
        {[["300", "300", "120", "150"], ["300", "300", "470", "235"], ["300", "300", "225", "480"]].map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={index === 1 ? "#ff9255" : "#5fb0c2"}
            strokeWidth="2"
            strokeDasharray="8 10"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: [0.15, 1, 0.15], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3 + index * 0.4, repeat: Infinity }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={floatTransition}
        className="absolute left-1/2 top-1/2 grid size-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/70 shadow-[0_0_90px_rgba(95,176,194,0.45)] backdrop-blur-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="grid size-28 place-items-center rounded-full bg-[linear-gradient(135deg,#102a43,#1f93aa_54%,#ff9255)] text-white shadow-[0_22px_60px_rgba(15,23,42,0.28)]"
        >
          <BrainCircuit className="size-11" />
        </motion.div>
      </motion.div>

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.article
            key={node.title}
            animate={{ y: [0, index === 1 ? 12 : -12, 0] }}
            transition={{ ...floatTransition, duration: 4.8 + index * 0.5 }}
            className={`absolute ${node.className} w-52 rounded-2xl border border-white/75 bg-white/70 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl`}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#5fb0c2]/15 text-[#237487]">
                <Icon className="size-5" />
              </span>
              <Orbit className="ml-auto size-4 text-[#ff9255]" />
            </div>
            <h3 className="mt-4 text-sm font-bold leading-tight text-slate-950">{node.title}</h3>
            <p className="mt-2 text-xs font-semibold text-[#237487]">{node.metric}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

export function Hero_TL_3() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#eef8fb_100%)] pt-32 pb-14 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute right-[-8rem] top-24 h-96 w-96 rounded-full bg-[#5fb0c2]/20 blur-3xl" />
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <HeroContent description="Strategic AI insights for optimizing campaigns, pricing, and workforce performance." />
          <StackedCardsGraphic />
        </div>
      </div>
    </section>
  );
}

function StackedCardsGraphic() {
  const cards = [
    { title: "AI Marketing Mix", icon: BarChart3, metric: "Channel lift", offset: "z-30 translate-y-0 lg:translate-x-4", color: "#5fb0c2" },
    { title: "Pricing Intelligence", icon: LineChart, metric: "Revenue curve", offset: "z-20 translate-y-28 lg:-translate-x-10", color: "#ff9255" },
    { title: "Workforce AI", icon: Gauge, metric: "Productivity rings", offset: "z-10 translate-y-56 lg:translate-x-14", color: "#2563eb" },
  ];

  return (
    <div className="relative mx-auto min-h-[620px] w-full max-w-[590px] [perspective:1200px]" aria-hidden="true">
      <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,146,85,0.18),rgba(95,176,194,0.18),transparent_66%)] blur-2xl" />
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 40, rotateX: 18, rotateZ: -4 }}
            animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: index === 1 ? 4 : -3 }}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.6, delay: index * 0.13 }}
            className={`absolute left-0 right-0 mx-auto h-64 w-[86%] rounded-2xl border border-white/80 bg-white/68 p-6 shadow-[0_32px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl ${card.offset}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl text-white shadow-lg" style={{ backgroundColor: card.color }}>
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-950">{card.title}</h3>
                  <p className="text-xs text-slate-500">{card.metric}</p>
                </div>
              </div>
              <Sparkles className="size-5 text-[#ff9255]" />
            </div>

            {index === 0 && (
              <div className="mt-8">
                <MiniBarChart />
              </div>
            )}

            {index === 1 && (
              <svg viewBox="0 0 260 100" className="mt-8 h-28 w-full">
                <motion.path
                  d="M10 82 C56 14, 92 38, 130 58 S196 74, 250 18"
                  fill="none"
                  stroke="#ff9255"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror" }}
                />
              </svg>
            )}

            {index === 2 && (
              <div className="mt-8 flex items-center gap-7">
                {[78, 64, 91].map((value, ringIndex) => (
                  <div key={value} className="relative grid size-20 place-items-center rounded-full bg-slate-100">
                    <svg viewBox="0 0 90 90" className="absolute inset-0">
                      <circle cx="45" cy="45" r="34" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                      <motion.circle
                        cx="45"
                        cy="45"
                        r="34"
                        fill="none"
                        stroke={ringIndex === 2 ? "#2563eb" : "#5fb0c2"}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="214"
                        initial={{ strokeDashoffset: 214 }}
                        animate={{ strokeDashoffset: 214 - (214 * value) / 100 }}
                        transition={{ duration: 1.2, delay: ringIndex * 0.15, repeat: Infinity, repeatType: "mirror" }}
                      />
                    </svg>
                    <span className="text-sm font-bold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}

export function Hero_TL_4() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,rgba(129,191,206,.35)_100%)] pt-18 pb-14 md:pt-20 md:pb-15">
      
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <HeroContent 
          description="Learn how AI empowers marketing mix optimization, smarter pricing, and workforce productivity through data-driven decision making." />
          <CommandCenterGraphic />
        </div>
      </div>
    </section>
  );
}

function CommandCenterGraphic() {
  const panels = [
    { title: "Marketing Performance", icon: Activity, value: "Live ROI", className: "left-0 top-10" },
    { title: "Pricing Optimization", icon: CircleDollarSign, value: "Elasticity", className: "right-0 top-28" },
    { title: "Workforce Productivity", icon: UsersRound, value: "Team AI", className: "left-[18%] bottom-2" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto min-h-[560px] w-full max-w-[650px]"
      aria-hidden="true"
    >
      <div className="absolute inset-10 rounded-[2rem] border border-[#5fb0c2]/15 bg-white/50 shadow-[0_35px_100px_rgba(15,23,42,0.12)] backdrop-blur-sm" />
      <svg viewBox="0 0 640 540" className="absolute inset-0 h-full w-full">
        {[120, 190, 260, 330, 400].map((y, index) => (
          <motion.path
            key={y}
            d={`M80 ${y} C210 ${y - 70}, 300 ${y + 82}, 560 ${y - 18}`}
            fill="none"
            stroke={index % 2 ? "##5fb0c2" : "#5fb0c2"}
            strokeWidth="2"
            strokeDasharray="10 12"
            initial={{ pathLength: 0, opacity: 0.15 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.15, 0.58, 0.15] }}
            transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={floatTransition}
        className="absolute left-1/2 top-1/2 grid size-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-white/80 bg-slate-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.28)]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-5 rounded-full border border-dashed border-[#5fb0c2]/50"
        />
        <div className="relative grid size-24 place-items-center rounded-full bg-[linear-gradient(135deg,#5fb0c2,#207285_48%,#5fb0c2)]">
          <Cpu className="size-10" />
        </div>
        <div className="absolute bottom-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/72">Decision Engine</div>
      </motion.div>

      {panels.map((panel, index) => {
        const Icon = panel.icon;

        return (
          <motion.article
            key={panel.title}
            animate={{ y: [0, index === 1 ? 14 : -14, 0] }}
            transition={{ ...floatTransition, duration: 5 + index * 0.45 }}
            className={`absolute ${panel.className} w-60 rounded-2xl border border-white/80 bg-white/72 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl`}
          >
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-xl bg-[#5fb0c2]/15 text-[#237487]">
                <Icon className="size-5" />
              </span>
              <span className="flex items-center gap-1 rounded-full bg-secondary/12 px-3 py-1 text-xs font-bold text-secondary">
                <Zap className="size-3" />
                {panel.value}
              </span>
            </div>
            <h3 className="mt-4 text-sm font-bold text-slate-950">{panel.title}</h3>
            <div className="mt-5 grid grid-cols-5 gap-2">
              {[34, 62, 48, 78, 58].map((height, barIndex) => (
                <motion.span
                  key={`${panel.title}-${height}-${barIndex}`}
                  animate={{ height: [`${height}%`, `${Math.min(height + 20, 92)}%`, `${height}%`] }}
                  transition={{ duration: 1.8, delay: barIndex * 0.1, repeat: Infinity }}
                  className="h-16 rounded-t-full bg-[linear-gradient(180deg,#5fb0c2,#2563eb)]"
                />
              ))}
            </div>
          </motion.article>
        );
      })}

      {[["16%", "46%"], ["84%", "48%"], ["50%", "18%"], ["52%", "86%"]].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          animate={{ scale: [1, 1.45, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: index * 0.25, repeat: Infinity }}
          className="absolute size-3 rounded-full bg-secondary shadow-[0_0_24px_rgba(255,146,85,0.9)]"
          style={{ left, top }}
        />
      ))}
    </motion.div>
  );
}

