"use client";

import { motion } from "framer-motion";
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

const CASE_STUDY_BOTTOM_CLIP_PATH =
  "path('M286 0V1.68885V3.3777L285.95 5.06655L285.9 6.7554L285.75 9.0072L285.6 11.259L285.3 13.5108L285 15.7626L284.4 18.5774L283.8 21.3921L282.8 23.8691L281.8 26.4587L280.2 28.7104L278.5 30.9622L276.3 32.8763L274 34.9029L271 36.254L268 37.7177L264 38.6184L260 39.5191L255 39.9132L250 40.3072L243 40.4761L236 40.645L226 40.6675L216 40.7013H204H191H150L147.5 40.7069L145 40.7125L142.5 40.7576L140 40.8139L137.5 40.9265L135 41.0391L132.5 41.2305L130 41.4331L127.5 41.7709L125 42.1087L122.5 42.6153L120 43.122L117.5 43.7975L115 44.473L112.5 45.2612L110 46.1619L107.5 47.2878L105 48.4137L102.5 49.7648L100 51.2285L97.5 52.9173L95 54.6062L92.5 56.5202L90 58.5468L87.5 60.7986L85 63.0504L82.5 65.5274L80 68.117L77.5 70.9317L75 73.7465L72.5 76.7864L70 79.9389L67.5 82.9788L65 86.1313L62.5 88.9461L60 91.7608L57.5 94.2378L55 96.8274L52.5 98.7414L50 100.768L47.5 102.457L45 104.146L42.5 105.497L40 106.961L37.5 108.086L35 109.212L32.5 110L30 110.901L27.5 111.352L25 111.802L22.5 112.083L20 112.365L17.5 112.477L15 112.59H0H286V0Z')";

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
          <div className="max-w-3xl">
            <p className="text-xs font-medium capitalize text-white/75">
              Case Studies
            </p>
            <h2 className="mt-2 max-w-4xl text-white">
              Proven Outcomes Across
              <span className="ml-1 text-secondary">
                Modern Digital Enterprises
              </span>
            </h2>
            <p className="mt-2 text-white/80">
              From automation to predictive intelligence, our solutions deliver
              measurable results at enterprise scale.
            </p>
          </div>

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

        <div className="my-4 h-px bg-white/10" />

        <div className="grid gap-3 lg:grid-cols-[1.08fr_0.95fr_0.9fr]">
          <motion.div
            key={current.image}
            variants={panelVariants}
            initial="hidden"
            animate="show"
            className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover opacity-85 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="max-w-[16rem] rounded-[1.25rem] border border-white/20 bg-white/92 p-3.5 backdrop-blur-md">
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

          <motion.div
            key={current.title}
            variants={panelVariants}
            initial="hidden"
            animate="show"
            className="relative overflow-hidden rounded-[1.5rem] bg-secondary p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
          >
            <div className="absolute inset-0 bg-secondary/20" />
            {/* <div
              className="absolute inset-x-0 -bottom-[100%] hidden h-full bg-white/96 md:block"
              style={{ clipPath: CASE_STUDY_BOTTOM_CLIP_PATH }}
            /> */}
            <div className="relative z-10 flex h-full flex-col">
              <div className="inline-flex size-9 items-center justify-center rounded-full bg-white text-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.22)]">
                <ActiveIcon className="size-4.5" />
              </div>
              <h3 className="mt-2.5 max-w-sm text-[1.15rem] font-semibold leading-[1.12] tracking-[-0.04em] ">
                {current.title}
              </h3>
              <p className="mt-2.5 max-w-sm text-xs leading-5">
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
              .map((item) => (
                <motion.article
                  key={item.title}
                  variants={panelVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5"
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-white">
                        <item.icon className="size-4.5" />
                      </div>
                    </div>
                    <h3 className="mt-5 text-[0.98rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950">
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
      </SectionReveal>
    </section>
  );
}
