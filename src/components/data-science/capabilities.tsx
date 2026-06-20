"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

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

const statVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipToken, setFlipToken] = useState(index === 0 ? 1 : 0);
  const Icon: LucideIcon = item.icon;
  const pointerHeadings = item.metrics.slice(0, 3).map((metric) => metric.label);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: isFlipped ? 0 : -8 }}
      className="group h-full min-h-[480px] w-full [perspective:1400px]"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full min-h-[480px] rounded-[18px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <article
          className={cn(
            "absolute inset-0 flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200/90 p-7 shadow-[0_22px_70px_rgba(15,23,42,0.12),0_1px_0_rgba(255,255,255,0.9)_inset]",
            isFlipped ? "pointer-events-none" : "pointer-events-auto",
          )}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(255,255,255,0.38)_46%,rgba(255,255,255,0.72))]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute left-0 top-0 h-full w-full bg-black group-hover:bg-secondary">
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover opacity-30 transition duration-500 group-hover:opacity-10"
            />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex size-14 items-center justify-center rounded-[14px] border border-white/80 bg-white text-[#5fb0c2] shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <Icon className="size-7" />
            </div>

            <div className="mt-7 text-[20px] font-bold text-white">
              {item.title}
            </div>

            <div className="mt-7 grid gap-3">
              {pointerHeadings.map((pointer, pointerIndex) => (
                <div
                  key={pointer}
                  className="flex items-center gap-3 text-sm font-medium text-[16px]"
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
                Read More
                <ArrowRight className="ml-2 size-4" />
              </button>
            </div>
          </div>
        </article>

        <article
          className={cn(
            "absolute inset-0 flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]",
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#5fb0c2,#a7dde9)]" />

          <div className="flex items-start justify-between gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-secondary/10 text-secondary">
              <Icon className="size-6" />
            </div>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-secondary hover:text-secondary"
            >
              Back
            </button>
          </div>

          <div className="mt-6 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2">
            <div className="text-[20px] font-bold text-slate-950">
              {item.title}
            </div>
            <p className="mt-4 leading-7 text-slate-700">
              {item.summary}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.metrics.map((metric, metricIndex) => (
                <motion.div
                  key={metric.label}
                  custom={metricIndex}
                  variants={statVariants}
                  initial="hidden"
                  animate={isFlipped ? "show" : "hidden"}
                  className={`rounded-[14px] border border-slate-200 bg-white px-4 py-2 shadow-[0_10px_26px_rgba(15,23,42,0.04)] ${metricIndex % 2 === 0 ? "text-left" : "text-right"
                    } min-w-0`}
                >
                  <div className="text-[17px] font-semibold text-slate-950">
                    <AnimatedNumber
                      key={`${metric.label}-${flipToken}`}
                      value={metric.valuecomp}
                    />
                  </div>

                  <p className="mt-2 break-words !text-xs font-medium capitalize leading-4 text-secondary">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {item.paragraphs.length > 1 ? (
              <div className="mt-6 grid gap-4 pb-2">
                {item.paragraphs.slice(1).map((paragraph) => (
                  <div
                    key={paragraph}
                    className="rounded-[14px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f7fbfd)] p-4"
                  >
                    <p className="!text-[14px] leading-7 text-slate-700">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </article>
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
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <SectionReveal className="py-15 bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs  font-semibold uppercase tracking-[0.22em] text-secondary">
              Capability Stack
            </p>
            <h2 className="mt-2 font-semibold tracking-tight text-slate-950">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
              aria-label="Previous capability"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
              aria-label="Next capability"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiper}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.15 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="mt-9 min-w-0"
        >
          {cards.map((item, index) => (
            <SwiperSlide key={item.title} className="h-auto py-2 bg-transparent rounded-xl">
              <CapabilityCard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionReveal>
  );
}
