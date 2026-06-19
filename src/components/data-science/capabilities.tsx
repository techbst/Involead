"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import AnimatedNumber from "@/components/ui/animated-number";
import { cn } from "@/lib/utils";

import {
  capabilityData,
  capabilityIconMap,
  defaultCapabilityIcon,
  type CapabilityData,
  type CapabilityItem,
} from "./capabilities-data";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const [isFlipped, setIsFlipped] = useState(index === 0);
  const [flipToken, setFlipToken] = useState(index === 0 ? 1 : 0);
  const Icon: LucideIcon = item.icon;
  const pointerHeadings = item.metrics.slice(0, 3).map((metric) => metric.label);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: isFlipped ? 0 : -8 }}
      className="group h-full min-h-[520px] [perspective:1400px]"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full  rounded-[18px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={cn(
            "absolute inset-0 flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200/90 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.12),0_1px_0_rgba(255,255,255,0.9)_inset]",
            isFlipped ? "pointer-events-none" : "pointer-events-auto"
          )}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* <div className="absolute inset-0 bg-[#000] " /> */}
          {/* <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:34px_34px]" /> */}
          <div className="absolute left-0 top-0 h-full w-full bg-primary hover:bg-secondary" />

          <div className="absolute inset-0 overflow-hidden rounded-[18px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-30 transition duration-500 group-hover:opacity-15"
              priority={index < 3}
            />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex size-14 items-center justify-center rounded-[14px] border border-white/80 bg-white text-secondary shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <Icon className="size-7" />
            </div>

            <div className="mt-7 text-[20px] font-bold text-white">
              {item.title}
            </div>

            <div className="mt-7 grid gap-3">
              {pointerHeadings.map((pointer, pointerIndex) => (
                <div
                  key={pointer}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                    {pointerIndex + 1}
                  </span>
                  <span className="text-white">{pointer}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={() => {
                  setIsFlipped(true);
                  setFlipToken((value) => value + 1);
                }}
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#5fb0c2,#9fddea)] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(95,176,194,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(95,176,194,0.46)]"
              >
                {isFlipped ? "Read Less" : "Read More"}
                <ArrowRight className="ml-2 size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex h-full flex-col overflow-x-hidden overflow-y-auto overscroll-contain rounded-[18px] border border-slate-200 bg-white py-7 px-3 shadow-[0_24px_80px_rgba(15,23,42,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]",
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="sticky -top-0 z-10  -mx-7 mb-2 border-b border-slate-200 bg-white/95 px-7 pb-2 backdrop-blur">
            <div className="absolute inset-x-0 -top-0 h-0 bg-[linear-gradient(90deg,#5fb0c2,#a7dde9)]" />
            <div className="flex items-start justify-between gap-2">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-secondary/10 text-secondary">
                <Icon className="size-6" />
              </div>
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-secondary/40 hover:text-secondary"
              >
                Back
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1">
            {/* <div className="text-[20px] font-bold text-slate-950">{item.title}</div> */}

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.metrics.map((metric, metricIndex) => (
                <motion.div
                  key={metric.label}
                  custom={metricIndex}
                  variants={statVariants}
                  initial="hidden"
                  animate={isFlipped ? "show" : "hidden"}
                  className={`rounded-[14px] border border-slate-200 bg-white py-2 px-4 shadow-[0_10px_26px_rgba(15,23,42,0.04)] ${metricIndex % 2 === 0 ? "text-left" : "text-right"
                    }`}
                >
                  <div className="text-[17px] font-semibold text-slate-950">
                    <AnimatedNumber
                      key={`${metric.label}-${flipToken}`}
                      value={metric.valuecomp}
                    />
                  </div>

                  <p className="mt-2 !text-xs font-medium whitespace-nowrap capitalize text-secondary">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 pb-2">
              {item.paragraphs.map((paragraph) => (
                <div
                  className="rounded-[14px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f7fbfd)] p-4"
                >
                  <p className="!text-[14px] leading-7 text-slate-700">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

type CapabilitiesProps = {
  title?: string;
  subtitle?: string;
  items?: CapabilityData[];
};

function buildCapabilityItems(items: CapabilityData[]): CapabilityItem[] {
  return items.map((item) => {
    const paragraphs = item.description.split("\n\n").map((p) => p.trim());
    return {
      ...item,
      summary: paragraphs[0],
      paragraphs,
      icon: capabilityIconMap[item.title] ?? defaultCapabilityIcon,
    };
  });
}

export default function Capabilities({
  title = "Our Capabilities",
  subtitle = "A compact, premium grid of services with front-and-back content so the most important stats stay one hover away.",
  items = capabilityData,
}: CapabilitiesProps) {
  const cards = buildCapabilityItems(items);

  return (
    <SectionReveal className="py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold capitalize text-secondary">
            Capability Stack
          </p>
          <h2 className="mt-3  font-semibold tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {cards.map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>


      </div>
    </SectionReveal>
  );
}
