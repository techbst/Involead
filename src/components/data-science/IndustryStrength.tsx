"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import SectionReveal from "@/components/home/SectionReveal";
import AnimatedNumber from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";

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
    <section className="relative overflow-hidden bg-[#efeff3] py-14 text-slate-950 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(95,176,194,0.12),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(95,176,194,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(239,239,243,1))]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <SectionReveal className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-slate-400/80 sm:w-20" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Industry Impact
            </p>
          </div>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4vw,3.6rem)] font-semibold leading-[0.92] tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_14px_36px_rgba(15,23,42,0.08)] transition-all duration-300 "
            >
              <div className="absolute inset-x-0 bottom-0 h-2 bg-[#4F8D9A]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 shadow-sm transition-colors duration-300 group-hover:border-primary/20 group-hover:text-primary">
                  <ArrowRight className="size-4 -rotate-45" />
                </span>
              </div>

              <div className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-[3.4rem]">
                <AnimatedNumber value={item.value} />
              </div>

              <p className="mt-3 max-w-[20rem] text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Button
            asChild
            className="rounded-full bg-primary px-6 py-6 text-primary-foreground shadow-[0_14px_36px_rgba(15,23,42,0.18)] hover:bg-primary/90"
          >
            <Link href="/contact-us">
              Start a project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
