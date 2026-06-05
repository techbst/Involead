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
    title: "Sales & Retention Growth - Agentic AI Across 500-2000+ SKUs",
    industry: "Case study",
    description:
      "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1400&q=85",
    metrics: [
      { value: "+15-25%", label: "Revenue Growth" },
      { value: "-15-20%", label: "Churn Reduction" },
      { value: "+25-35%", label: "Faster Cycles" },
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
    <section className="bg-black px-4 py-20 text-white sm:px-6 lg:px-12 lg:py-32">
      <SectionReveal className="mx-auto w-full max-w-[1820px]">
        <div className="mx-auto max-w-[1020px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[clamp(3.1rem,4.9vw,5.85rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white"
          >
            <span className="block">Proven Outcomes Across</span>
            <span className="block">Modern Digital Enterprises</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-[720px] text-[clamp(1.15rem,1.45vw,1.5rem)] leading-[1.35] text-white/85"
          >
            From automation to predictive intelligence, our solutions deliver
            measurable results at enterprise scale.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.95fr)] lg:items-stretch">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-black shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[48%_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute right-7 bottom-7 flex gap-4 sm:right-8 sm:bottom-8">
              <span className="grid size-16 place-items-center rounded-full border border-white/70 bg-black/10 text-[1.1rem] font-medium text-white/95 backdrop-blur-[2px]">
                01
              </span>
              <span className="grid size-16 place-items-center rounded-full border border-white/70 bg-black/10 text-[1.1rem] font-medium text-white/95 backdrop-blur-[2px]">
                04
              </span>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[22px] bg-[#78d2e0] p-4 text-black shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:p-5"
          >
            <div className="grid min-h-full gap-8 overflow-hidden rounded-[22px] bg-white p-6 sm:p-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-10 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col justify-center"
                >
                  <span className="w-fit rounded-full bg-[#e5f7fb] px-5 py-3 text-[0.95rem] font-medium text-[#5fb0c2]">
                    {current.industry}
                  </span>
                  <h3
                    aria-label={current.title}
                    className="mt-8 max-w-[560px] text-[clamp(2.25rem,2.95vw,3.95rem)] font-medium leading-[1.03] tracking-[-0.04em] text-black"
                  >
                    <span className="block">Sales & Retention Growth -</span>
                    <span className="block">Agentic AI Across 500-</span>
                    <span className="block">2000+ SKUs</span>
                  </h3>
                  <p className="mt-8 max-w-[530px] text-[1.15rem] leading-[1.65] text-black/55">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="relative min-h-[360px]">
                <div
                  className="case-study-metrics relative h-full w-full bg-[#edf8fb] px-8 py-9 sm:px-10 sm:py-10"
                  style={{
                    WebkitMaskImage: "url('/img/cas-study.svg')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "100% 100%",
                    maskImage: "url('/img/cas-study.svg')",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "100% 100%",
                  }}
                >
                  <div className="grid gap-9 sm:gap-10">
                    {current.metrics.map((metric) => (
                      <motion.div
                        key={metric.label}
                        whileHover={{ x: 6 }}
                        className="border-l-[3px] border-black/12 pl-7"
                      >
                        <strong className="block text-[clamp(2.45rem,3vw,4rem)] font-medium leading-none tracking-[-0.04em]">
                          {metric.value}
                        </strong>
                        <span className="mt-4 block text-[1.02rem] text-black/52">
                          {metric.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute right-8 bottom-8 flex gap-5">
                    <motion.button
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => move(-1)}
                      className="grid size-16 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:bg-[#4da2b5]"
                      aria-label="Previous case study"
                    >
                      <ArrowLeft className="size-6" />
                    </motion.button>
                    <motion.button
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => move(1)}
                      className="grid size-16 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:bg-[#4da2b5]"
                      aria-label="Next case study"
                    >
                      <ArrowRight className="size-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </SectionReveal>
    </section>
  );
}
