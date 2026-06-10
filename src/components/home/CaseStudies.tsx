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
                  {String(caseStudies.length ).padStart(2, "0")}
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
              className="rounded-[24px] bg-gradient-to-b from-[#68C1D5] to-white p-4 md:p-8 text-slate-950"
            >
              <div className="grid  gap-8 rounded-[20px] bg-white p-2 md:p-3 lg:grid-cols-[1fr_1fr]">
                <div className="flex flex-col items-start gap-3 justify-center">
                  <span className="w-max rounded-full bg-[#e4f8fb] px-7 py-3 text-[16px] font-medium text-[#5fb0c2]">
                    {current.industry}
                  </span>
                  <h3 className="mt-6  md:max-w-2xl text-[28px] font-medium leading-[1.16] tracking-normal">
                    {current.title}
                  </h3>
                  <p className="mt-4  md:max-w-2xl text-[16px] leading-2 text-black/55">
                    {current.description}
                  </p>
                </div>
             <div className="case-metrics-cut relative overflow-hidden rounded-[24px] bg-[#edf8fb] p-0">
  <svg width="0" height="0" className="absolute">
    <defs>
      <clipPath id="caseStudyClip" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.0034965 0.0088496)"
          d="M286 0V1.68885V3.3777L285.95 5.06655L285.9 6.7554L285.75 9.0072L285.6 11.259L285.3 13.5108L285 15.7626L284.4 18.5774L283.8 21.3921L282.8 23.8691L281.8 26.4587L280.2 28.7104L278.5 30.9622L276.3 32.8763L274 34.9029L271 36.254L268 37.7177L264 38.6184L260 39.5191L255 39.9132L250 40.3072L243 40.4761L236 40.645L226 40.6675L216 40.7013H204H191H150L147.5 40.7069L145 40.7125L142.5 40.7576L140 40.8139L137.5 40.9265L135 41.0391L132.5 41.2305L130 41.4331L127.5 41.7709L125 42.1087L122.5 42.6153L120 43.122L117.5 43.7975L115 44.473L112.5 45.2612L110 46.1619L107.5 47.2878L105 48.4137L102.5 49.7648L100 51.2285L97.5 52.9173L95 54.6062L92.5 56.5202L90 58.5468L87.5 60.7986L85 63.0504L82.5 65.5274L80 68.117L77.5 70.9317L75 73.7465L72.5 76.7864L70 79.9389L67.5 82.9788L65 86.1313L62.5 88.9461L60 91.7608L57.5 94.2378L55 96.8274L52.5 98.7414L50 100.768L47.5 102.457L45 104.146L42.5 105.497L40 106.961L37.5 108.086L35 109.212L32.5 110L30 110.901L27.5 111.352L25 111.802L22.5 112.083L20 112.365L17.5 112.477L15 112.59H0H286V0Z"
        />
      </clipPath>
    </defs>
  </svg>

  <div
    className="max-md:hidden absolute -right-[5px] inset-x-0 -bottom-[45%] h-full bg-white"
    style={{
      clipPath: "url(#caseStudyClip)",
    }}
  />

                  <div className="relative z-10 flex h-full flex-col gap-8 p-4 md:p-6 pb-15 md:pb-8">
                    {current.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="border-l-2 border-black/15 pl-4"
                      >
                        <strong className="block text-[30px] font-light leading-none">
                          {metric.value}
                        </strong>
                        <span className="mt-1 block text-[14px] text-black/55">
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
