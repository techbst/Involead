"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

export type StoryShowcaseItem = {
  title: string;
  category: string;
  description: string;
  metrics: { value: string; label: string }[];
  icon: LucideIcon;
  image: string;
};

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

type StoryShowcaseProps = {
  eyebrow?: string;
  title: string;
  description: string;
  items: StoryShowcaseItem[];
  sectionClassName?: string;
  textColor?: "black" | "white";
};

export default function StoryShowcase({
  eyebrow,
  title,
  description,
  items,
  sectionClassName,
  textColor,
}: StoryShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = items[active];
  const ActiveIcon = current.icon;

  const go = (direction: number) => {
    setActive((value) => (value + direction + items.length) % items.length);
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden py-15 text-slate-950 lg:py-15",
        sectionClassName,
      )}
    >
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              align="left"
              textColor={textColor}
            />

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous story"
                className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next story"
                className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-slate-200/10 bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:p-4 lg:p-5">
            <div className="relative rounded-[1.7rem] border border-white/75 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md">
              <div className="grid gap-3 lg:grid-cols-[1.05fr_0.92fr_0.85fr]">
                <motion.div className="relative overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={`${current.title}-${current.image}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.985 }}
                      transition={activePanelTransition}
                      className="absolute inset-0"
                    >
                      <Image
                        src={current.image}
                        alt={`${current.title} visual`}
                        fill
                        priority
                        sizes="(min-width: 1024px) 36vw, 100vw"
                        className="object-cover opacity-80"
                      />

                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <div className="max-w-[15rem] rounded-[1.1rem] border border-white/20 bg-white/92 p-3 backdrop-blur-md">
                          <p className="text-[0.7rem] font-semibold text-primary">
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

                      <div className="absolute left-3 top-3 rounded-full border border-primary/10 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold capitalize text-primary">
                        {current.category}
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

                        <h3 className="mt-2.5 max-w-sm text-[1.05rem] font-semibold leading-[1.12] tracking-[-0.04em] !text-white lg:text-[1.1rem]">
                          {current.title}
                        </h3>
                        <p className="mt-2.5 max-w-sm text-xs leading-5 !text-white">
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
                  {items
                    .filter((_, index) => index !== active)
                    .slice(0, 2)
                    .map((item) => (
                      <motion.article
                        key={`${item.title}-${item.image}`}
                        variants={panelVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="group relative overflow-hidden rounded-[1.35rem] border border-primary/10 bg-white p-3.5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5"
                      >
                        <div className="relative z-10">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-white">
                              <item.icon className="size-4.5" />
                            </div>
                            <div className="relative h-14 w-20 overflow-hidden rounded-[0.9rem] border border-primary/10">
                              <Image
                                src={item.image}
                                alt={`${item.title} thumbnail`}
                                fill
                                sizes="80px"
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <h3 className="mt-4 text-[0.95rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
