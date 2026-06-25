"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Database,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import SectionReveal from "./SectionReveal";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../ui/section-header";

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  image: string;
  metrics: { value: string; label: string }[];
  icon: LucideIcon;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Sales & Retention Growth - Agentic AI Across 500+ Stores",
    industry: "Case study",
    description:
      "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=85",
    icon: ChartColumnIncreasing,
    metrics: [
      { value: "+15-25%", label: "Revenue Growth" },
      { value: "-15-20%", label: "Churn Reduction" },
      { value: "+25-35%", label: "Faster Cycles" },
    ],
  },
  {
    title: "Predictive Maintenance Across Global Plants",
    industry: "Case study",
    description:
      "Production leaders need early signals before downtime compounds. Our predictive maintenance fabric connects machine telemetry, operator context, and quality data into prioritized action.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
    icon: Database,
    metrics: [
      { value: "41%", label: "Downtime Cut" },
      { value: "18%", label: "OEE Increase" },
      { value: "9mo", label: "ROI Window" },
    ],
  },
  {
    title: "Clinical Intelligence for Faster Care Decisions",
    industry: "Case study",
    description:
      "Care teams move faster when clinical, operational, and patient signals are connected. We built a governed intelligence workspace for consistent review and faster triage.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    icon: BriefcaseBusiness,
    metrics: [
      { value: "32%", label: "Faster Review" },
      { value: "94%", label: "Accuracy" },
      { value: "24/7", label: "Visibility" },
    ],
  },
];

const panelVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const activePanelTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = caseStudies[active];
  const ActiveIcon = current.icon;

  const move = (direction: number) => {
    setActive(
      (value) => (value + direction + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <section className="bg-black py-15 text-white">
      <SectionReveal className="mx-auto container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          
          <SectionHeader 
          eyebrow="Case Studies"
          title="Proven Outcomes Across Modern Digital Enterprises"
          description="  From automation to predictive intelligence, our solutions deliver
              measurable results at enterprise scale."
              align="left"
              textColor="white"
          
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous case study"
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next case study"
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

         <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-slate-200/10 bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:p-4 lg:p-5">
           
         
            

            <div className="relative rounded-[1.7rem] border border-white/75 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md">
            
            <div className="grid gap-3 lg:grid-cols-[1.05fr_0.92fr_0.85fr]">
              <motion.div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={activePanelTransition}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 36vw, 100vw"
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="max-w-[15rem] rounded-[1.1rem] border border-white/20 bg-white/92 p-3 backdrop-blur-md">
                        <p className="text-[0.7rem] font-semibold !text-black">
                          Featured case
                        </p>
                        <h3 className="mt-2 text-[1.05rem] font-semibold tracking-[-0.035em] text-slate-950">
                          {current.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-5 !text-slate-600">
                          {current.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold text-primary">
                      {current.industry}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none pb-[86%] lg:pb-[92%]" />
              </motion.div>

              <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={activePanelTransition}
                    className="relative h-full p-3.5 lg:p-4"
                  >
                    <div className="absolute inset-0 bg-secondary/20" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="inline-flex size-9 items-center justify-center rounded-full bg-white text-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.22)]">
                        <ActiveIcon className="size-4.5" />
                      </div>
                      <h3 className="mt-2.5 max-w-sm text-[1.05rem] font-semibold leading-[1.12] tracking-[-0.04em] lg:text-[1.1rem]">
                        {current.title}
                      </h3>
                      <p className="mt-2.5 max-w-sm text-xs leading-5">
                        {current.description}
                      </p>

                      <div className="mt-auto grid grid-cols-3 gap-2 pt-4">
                        {current.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-[0.95rem] border border-white/16 bg-white/16 p-2 backdrop-blur-sm"
                          >
                            <div className="text-sm font-semibold text-white">
                              {metric.value}
                            </div>
                            <div className="mt-1 text-[0.65rem] leading-4 text-white/80">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid gap-3">
                {caseStudies
                  .filter((_, index) => index !== active)
                  .slice(0, 2)
                  .map((item) => (
                    <motion.article
                      key={item.title}
                      variants={panelVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.35 }}
                      className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white p-3.5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5"
                    >
                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-white">
                            <item.icon className="size-4.5" />
                          </div>
                        </div>
                        <h3 className="mt-4 text-[0.95rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-5 !text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
