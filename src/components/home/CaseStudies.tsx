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
    <section className="bg-black  py-15 text-white ">
      <SectionReveal className="mx-auto container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className=" font-bold max-w-2xl mx-auto tracking-normal">
            Proven Outcomes Across Modern Digital Enterprises
          </h2>
          <p className="mx-auto mt-4 max-w-md  text-white/80">
            From automation to predictive intelligence, our solutions deliver
            measurable results at enterprise scale.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.5fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="group relative  overflow-hidden rounded-[24px]"
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
              className="rounded-[24px] bg-gradient-to-b from-[#68C1D5] to-white p-8 text-slate-950"
            >
              <div className="grid min-h-[500px] gap-8 rounded-[20px] bg-white p-6 lg:grid-cols-[1fr_1fr]">
                <div className="flex flex-col items-start gap-3 justify-center">
                  <span className="w-max rounded-full bg-[#e4f8fb] px-7 py-3 text-[16px] font-medium text-[#5fb0c2]">
                    {current.industry}
                  </span>
                  <h3 className="mt-6 max-w-2xl text-[28px] font-medium leading-[1.16] tracking-normal">
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[16px] leading-2 text-black/55">
                    {current.description}
                  </p>
                </div>
                <div className="case-metrics-cut relative overflow-hidden rounded-[24px] bg-[#edf8fb] p-0">
                  <div
                    className="absolute -right-[5px] inset-x-0 -bottom-[5px] h-full bg-white"
                    style={{
                      WebkitMaskImage: "url('/img/cas-study.svg')",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "right bottom",
                      // WebkitMaskSize: "",
                      maskImage: "url('/img/cas-study.svg')",
                      maskRepeat: "no-repeat",
                      maskPosition: "right bottom",
                      // maskSize: "100% 100%",
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col gap-8 p-8">
                    {current.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="border-l-2 border-black/15 pl-4"
                      >
                        <strong className="block text-[36px] font-light leading-none">
                          {metric.value}
                        </strong>
                        <span className="mt-5 block text-[16px] text-black/55">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute right-4 bottom-2 z-10 flex gap-6">
                    <button
                      onClick={() => move(-1)}
                      className="grid size-10 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
                      aria-label="Previous case study"
                    >
                      <ArrowLeft className="size-5" />
                    </button>
                    <button
                      onClick={() => move(1)}
                      className="grid size-10 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
                      aria-label="Next case study"
                    >
                      <ArrowRight className="size-5" />
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
