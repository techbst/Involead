"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChartColumn, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type CaseStudyCard = {
  title: string;
  category: string;
  description: string;
  metrics: { value: string; label: string }[];
  accent: string;
};

const caseStudies: CaseStudyCard[] = [
  {
    title: "Market Success",
    category: "Case study",
    description:
      "Predictive pricing and demand signals improved margin visibility and planning confidence.",
    metrics: [
      { value: "+18%", label: "Revenue Lift" },
      { value: "30%", label: "Cycle Reduction" },
      { value: "2.5x", label: "Decision Speed" },
    ],
    accent: "from-[#0d2230] via-[#11394a] to-[#5fb0c2]",
  },
  {
    title: "Operational Intelligence",
    category: "Case study",
    description:
      "Automated workflows connected quality, forecasting, and execution into one governed layer.",
    metrics: [
      { value: "41%", label: "Fewer Errors" },
      { value: "24/7", label: "Visibility" },
      { value: "9 mo", label: "ROI Window" },
    ],
    accent: "from-[#0f1e2f] via-[#14324a] to-[#7a9cff]",
  },
  {
    title: "Technology-Driven Change",
    category: "Case study",
    description:
      "A connected analytics foundation helped teams move from reporting to action faster.",
    metrics: [
      { value: "32%", label: "Faster Review" },
      { value: "94%", label: "Accuracy" },
      { value: "3x", label: "Adoption" },
    ],
    accent: "from-[#0b1826] via-[#10273a] to-[#5fb0c2]",
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

export default function CaseStudyShowcase() {
  const [active, setActive] = useState(0);
  const current = caseStudies[active];

  const go = (direction: number) => {
    setActive((value) => (value + direction + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_12%_8%,rgba(95,176,194,0.18),transparent_35%),radial-gradient(ellipse_at_55%_0%,rgba(122,156,255,0.16),transparent_40%),radial-gradient(ellipse_at_45%_75%,rgba(95,176,194,0.1),transparent_35%),linear-gradient(to_bottom_right,#f7fbfd,#eef5f8,#f8fcfd)] py-15 text-slate-950 lg:py-15">
     
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-6xl rounded-[2rem] border border-white/80 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                Case Studies
              </span>

              <h2 className="mt-2 max-w-4xl   text-slate-950">
                Use Cases & 

                <span className="ml-1 text-secondary">
                   Success Stories
                </span>
              </h2>
              <p className="mt-2"
              >
                Real impact across industries, driven by data. Every engagement engineered around your most critical KPIs.


              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous case study"
                 className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
             
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next case study"
                 className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
             
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="grid gap-3 lg:grid-cols-[1.08fr_0.95fr_0.9fr]">
            <motion.div
              variants={panelVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                alt="Data science case study visual"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover opacity-80 transition duration-700 hover:scale-105"
              />
            
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="max-w-[16rem] rounded-[1.25rem] border border-white/20 bg-white/92 p-3.5 backdrop-blur-md">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                    Featured case
                  </p>
                  <h3 className="mt-2 text-[1.05rem] font-semibold tracking-[-0.035em] text-slate-950">
                    {current.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    {current.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-3 top-3 rounded-full border border-primary/10 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
                {current.category}
              </div>
            </motion.div>

            <motion.div
              key={current.title}
              variants={panelVariants}
              initial="hidden"
              animate="show"
              className={cn(
                "relative overflow-hidden rounded-[1.5rem] p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)]",
                `bg-secondary`,
              )}
            >
              <div className="absolute inset-0 bg-secondary/20" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="inline-flex size-9 items-center justify-center rounded-full bg-white text-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.22)]">
                  <ChartColumn className="size-4.5" />
                </div>
               
                <h3 className="mt-2.5 max-w-sm text-[1.15rem] font-semibold leading-[1.12] tracking-[-0.04em] !text-white">
                  {current.title}
                </h3>
                <p className="mt-2.5 max-w-sm text-xs leading-5 !text-white">
                  {current.description}
                </p>

                <div className="mt-auto grid grid-cols-3 gap-2 pt-5">
                  {current.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1rem] border border-white/16 bg-white/16 p-2.5 backdrop-blur-sm"
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

            <div className="grid gap-4">
              {caseStudies
                .filter((_, index) => index !== active)
                .slice(0, 2)
                .map((item, index) => (
                  <motion.article
                    key={item.title}
                    variants={panelVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5"
                  >
                   
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-white ">
                          <ChartColumn className="size-4.5" />
                        </div>
                        <ArrowRight className="size-4 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <h3 className="mt-5 text-[0.98rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
