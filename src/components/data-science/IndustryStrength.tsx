"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Clock3,
  Target,
  TimerReset,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import AnimatedNumber from "@/components/ui/animated-number";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../ui/section-header";
import CornerShape from "../ui/shape";

export interface IndustryMetric {
  title: string;
  value: string;
  description: string;
  icon?: LucideIcon;
}

interface IndustryStrengthSectionProps {
  title?: string;
  subtitle?: string;
  metrics?: IndustryMetric[];
}

const defaultMetrics: IndustryMetric[] = [
  {
    title: "Engagement Rate",
    value: "35–45%",
    description: "Increase through AI-led personalization",
    icon: TrendingUp,
  },
  {
    title: "Planning Cycle",
    value: "30–40%",
    description: "Reduction in time-to-decision",
    icon: Clock3,
  },
  {
    title: "Revenue Growth",
    value: "5–18%",
    description: "Uplift across client portfolios",
    icon: TrendingUp,
  },
  {
    title: "Forecast Accuracy",
    value: "20–30%",
    description: "Improved prediction accuracy",
    icon: Target,
  },
  {
    title: "Marketing ROI",
    value: "15–20%",
    description: "Increase in campaign efficiency",
    icon: BadgeDollarSign,
  },
  {
    title: "Hours Saved",
    value: "25–35H",
    description: "Operational time savings",
    icon: TimerReset,
  },
];

const cardStyles = [
  {
    card: "bg-[#EAF7EB] text-[#0e1a16]",
    label: "text-[#0e1a16]/55",
    description: "text-[#0e1a16]/78",
    icon: "bg-[#0e1a16] text-white",
    line: "bg-[#0e1a16]/12",
  },
  {
    card: "bg-[#E7F4FB] text-[#07161b]",
    label: "text-[#07161b]/55",
    description: "text-[#07161b]/78",
    icon: "bg-[#07161b] text-white",
    line: "bg-[#07161b]/12",
  },
  {
    card: "bg-[#F2EEF8] text-[#150c22]",
    label: "text-[#150c22]/55",
    description: "text-[#150c22]/74",
    icon: "bg-[#150c22] text-white",
    line: "bg-[#150c22]/12",
  },
  {
    card: "bg-[#FAF7D9] text-[#17140b]",
    label: "text-[#17140b]/55",
    description: "text-[#17140b]/74",
    icon: "bg-[#17140b] text-white",
    line: "bg-[#17140b]/12",
  },
  {
    card: "bg-[#ECEEFA] text-[#2b1120]",
    label: "text-[#2b1120]/55",
    description: "text-[#2b1120]/74",
    icon: "bg-[#2b1120] text-white",
    line: "bg-[#2b1120]/12",
  },
  {
    card: "bg-[#FDECEC] text-[#082433]",
    label: "text-[#082433]/55",
    description: "text-[#082433]/74",
    icon: "bg-[#082433] text-white",
    line: "bg-[#082433]/12",
  },
];

const metricIcons: Record<string, LucideIcon> = {
  "Engagement Rate": TrendingUp,
  "Planning Cycle": Clock3,
  "Revenue Growth": TrendingUp,
  "Forecast Accuracy": Target,
  "Marketing ROI": BadgeDollarSign,
  "Hours Saved": TimerReset,
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function IndustryStrengthSection({
  title = "Our Strength Across Industries",
  subtitle = "From FMCG to Pharma, Retail to Finance, InvoLead delivers proven AI and data science outcomes across the industries that matter most.",
  metrics = defaultMetrics,
}: IndustryStrengthSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 text-white md:py-20">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(95,176,194,0.32), transparent 0 22%), radial-gradient(circle at 82% 16%, rgba(200,140,255,0.22), transparent 0 18%), radial-gradient(circle at 70% 84%, rgba(241,242,111,0.12), transparent 0 20%), linear-gradient(180deg, rgba(10,10,10,0.96), rgba(5,5,5,1))",
          backgroundSize: "140% 140%",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-40"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#5fb0c2]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#c88cff]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f1f26f]/10 blur-3xl" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <SectionReveal className="container relative z-10 mx-auto">

        <SectionHeader
          eyebrow="Industry Impact"
          title={title}
          description={subtitle}
          align="center"
          maxWidth="2xl"
          textColor="white"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item, index) => {
            const style = cardStyles[index % cardStyles.length];
            const Icon = item.icon ?? metricIcons[item.title] ?? TrendingUp;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.22 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={cn(
                  "group relative  overflow-hidden rounded-2xl border border-white/15 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)]",
                  "transition-all duration-300",
                  style.card
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.22),transparent_45%)] opacity-70" />

                <motion.div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/25 blur-3xl"
                  animate={{
                    x: [0, -12, 0],
                    y: [0, 12, 0],
                    opacity: [0.35, 0.75, 0.35],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10 flex  flex-col justify-between">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="mt-0 max-w-[13rem] !text-2xl font-[500] leading-tight tracking-[-0.04em] text-inherit">
                        {item.title}
                      </h3>
                    </div>

                    <motion.div
                      whileHover={{ rotate: -35, scale: 1.08 }}
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-lg",
                        style.icon
                      )}
                    >
                      <Icon size={15} />
                    </motion.div>
                  </div>

                  <div className="mt-3">
                    <div className={cn("mb-2 h-px w-full", style.line)} />

                    <div className="flex items-end justify-between gap-6">
                      <p className={cn("max-w-[10rem] text-sm leading-6", style.description)}>
                        {item.description}
                      </p>

                      <div className="text-right text-[24px]  tracking-[2px] font-semibold leading-none tracking-[-0.08em] text-inherit">
                        <AnimatedNumber value={item.value} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-6 bottom-0 h-px bg-white/35" />
              </motion.article>
            );
          })}
        </div>
      </SectionReveal>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-white ">
        <CornerShape color="#000" />
      </div>
    </section>
  );
}
