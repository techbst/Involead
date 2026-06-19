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
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(95,176,194,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_20%)]" />

      <SectionReveal className="container mx-auto relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="group rounded-[1.5rem] border border-white/10 bg-white p-5 text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <span className="rounded-full border border-secondary/10 bg-[#eaf7fb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  KPI
                </span>
              </div>
              <div className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
                <AnimatedNumber value={item.value} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full bg-white px-6 py-6 text-slate-950 hover:bg-white/90">
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
