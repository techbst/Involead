"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type ExpandableCardItem = {
  image: string;
  title: string;
  shortDesc: string;
  longDesc?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
};

type Props = {
  items: ExpandableCardItem[];
  className?: string;
};

export default function ExpandableCardGrid({ items, className }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className={cn("grid gap-5 lg:grid-cols-3", className)}>
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key="active-card"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative rounded-[18px] border border-secondary/30 bg-white p-4 shadow-[0_10px_30px_rgba(95,176,194,0.25)] lg:col-span-2"
          >
            <div className="grid gap-5 md:grid-cols-[300px_1fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[14px]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="border-l-2 border-black pl-3 text-xl font-semibold leading-tight text-black">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {activeItem.shortDesc}
                </p>

                {activeItem.longDesc && (
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {activeItem.longDesc}
                  </p>
                )}

                <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-[12px] bg-[#e3f3f7]">
                  {(activeItem.metrics ?? []).slice(0, 4).map((metric, i) => (
                    <div
                      key={i}
                      className={`p-4 ${
    i === 2 || i === 3
      ? ""
      : "border-b border-[#acd7e1]"
  }`}
                    >
                      <div className="text-sm text-primary">{metric.label}</div>
                      <div className="mt-1 text-lg font-semibold text-secondary flex">
                        {metric.value} <ArrowUpRight size="6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveIndex(null)}
              className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-secondary text-white"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {items.map((item, index) => {
        const isActive = activeIndex === index;

        if (isActive) return null;

        return (
          <motion.div
            key={item.title}
            layout
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[18px] bg-white p-4"
          >
            <div className="relative h-[200px] overflow-hidden rounded-[14px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <h3 className="mt-5 border-l-2 border-black pl-3 !text-lg font-semibold leading-tight text-black">
              {item.title}
            </h3>

            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-primary">
              {item.shortDesc}
            </p>

            <div className="mt-6 space-y-2">
              {(item.metrics ?? []).slice(0, 2).map((metric, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-primary">{metric.label}</span>
                  <span className="text-sm font-medium text-emerald-600">
                    {metric.value} ↗
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setActiveIndex(index)}
                className="grid size-10 place-items-center rounded-full bg-secondary text-white transition hover:scale-105"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}