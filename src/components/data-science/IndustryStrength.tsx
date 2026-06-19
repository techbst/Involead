"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import AnimatedNumber from "@/components/ui/animated-number";

export interface IndustryMetric {
  title: string;
  value: string;
  description: string;
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
  },
  {
    title: "Planning Cycle",
    value: "30–40%",
    description: "Reduction in time-to-decision",
  },
  {
    title: "Revenue Growth",
    value: "5–18%",
    description: "Uplift across client portfolios",
  },
  {
    title: "Forecast Accuracy",
    value: "20–30%",
    description: "Improved prediction accuracy",
  },
  {
    title: "Marketing ROI",
    value: "15–20%",
    description: "Increase in campaign efficiency",
  },
  {
    title: "Hours Saved",
    value: "25–35H",
    description: "Operational time savings",
  },
];

export default function IndustryStrengthSection({
  title = "Our Strength Across Industries",
  subtitle = "From FMCG to Pharma, Retail to Finance, InvoLead delivers proven AI and data science outcomes across the industries that matter most.",
  metrics = defaultMetrics,
}: IndustryStrengthSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f4f5f8] py-16 text-slate-950 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(95,176,194,0.16),transparent_30%),radial-gradient(circle_at_88%_5%,rgba(15,23,42,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,245,248,1))]" />
      <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#5fb0c2]/20 blur-3xl" />

      <SectionReveal className="container relative z-10 mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-slate-400/70 sm:w-20" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Industry Impact
            </p>
          </div>

          <h2 className="mt-5 text-balance text-[clamp(2.2rem,4vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.5,
                delay: index * 0.055,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[250px] overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/85 p-6 text-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#5fb0c2]/30 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-3 bg-[#4F8D9A] shadow-[0_-16px_42px_rgba(79,141,154,0.55)] transition-all duration-300 group-hover:h-4 group-hover:shadow-[0_-22px_58px_rgba(79,141,154,0.7)]" />

              <div className="absolute -bottom-10 left-1/2 h-20 w-[80%] -translate-x-1/2 rounded-full bg-[#4F8D9A]/35 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 shadow-sm transition-all duration-300 group-hover:border-[#5fb0c2]/30 group-hover:bg-[#eef9fb] group-hover:text-[#4F8D9A]">
                    <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <div className="mt-8 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-[2.8rem]">
                  <AnimatedNumber value={item.value} />
                </div>

                <p className="mt-4 max-w-[20rem] text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}