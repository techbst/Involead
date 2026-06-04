"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import SectionReveal from "./SectionReveal";

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  image: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Sales & Retention Growth - Agentic AI Across 500+ Stores",
    industry: "Case study",
    description:
      "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=85",
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
    metrics: [
      { value: "32%", label: "Faster Review" },
      { value: "94%", label: "Accuracy" },
      { value: "24/7", label: "Visibility" },
    ],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = caseStudies[active];

  const move = (direction: number) => {
    setActive(
      (value) => (value + direction + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <section className="bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
      <SectionReveal className="mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[clamp(3rem,5vw,5.6rem)] font-bold leading-[1.12] tracking-normal">
            Proven Outcomes Across Modern Digital Enterprises
          </h2>
          <p className="mx-auto mt-9 max-w-3xl text-[22px] leading-relaxed text-white/80">
            From automation to predictive intelligence, our solutions deliver
            measurable results at enterprise scale.
          </p>
        </div>

        <div className="mt-28 grid gap-8 lg:grid-cols-[.9fr_1.8fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="group relative min-h-[680px] overflow-hidden rounded-[24px]"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute right-9 bottom-9 flex gap-4">
                <span className="grid size-16 place-items-center rounded-full border border-white text-2xl">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="grid size-16 place-items-center rounded-full border border-white text-2xl">
                  {String(caseStudies.length + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.article
              key={current.title}
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -34 }}
              transition={{ duration: 0.4 }}
              className="rounded-[24px] bg-[#79d1e0] p-8 text-slate-950"
            >
              <div className="grid min-h-[620px] gap-8 rounded-[20px] bg-white p-12 lg:grid-cols-[1.15fr_.85fr]">
                <div className="flex flex-col justify-center">
                  <span className="w-max rounded-full bg-[#e4f8fb] px-7 py-3 text-[22px] font-semibold text-[#5fb0c2]">
                    {current.industry}
                  </span>
                  <h3 className="mt-12 max-w-3xl text-[42px] font-semibold leading-[1.16] tracking-normal">
                    {current.title}
                  </h3>
                  <p className="mt-10 max-w-2xl text-[24px] leading-relaxed text-black/55">
                    {current.description}
                  </p>
                </div>
                <div className="case-metrics-cut relative rounded-[24px] bg-[#edf8fb] p-12">
                  {current.metrics.map((metric) => (
                    <div key={metric.label} className="border-l-2 border-black/15 pl-10">
                      <strong className="block text-[46px] font-semibold leading-none">
                        {metric.value}
                      </strong>
                      <span className="mt-5 block text-[22px] text-black/55">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                  <div className="absolute right-10 bottom-10 flex gap-6">
                    <button
                      onClick={() => move(-1)}
                      className="grid size-16 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
                      aria-label="Previous case study"
                    >
                      <ArrowLeft className="size-7" />
                    </button>
                    <button
                      onClick={() => move(1)}
                      className="grid size-16 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
                      aria-label="Next case study"
                    >
                      <ArrowRight className="size-7" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
