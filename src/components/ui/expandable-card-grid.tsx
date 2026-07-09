"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Loader, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

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

  const [visibleCount, setVisibleCount] = useState(6);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const getDesktopOverlaySide = (index: number) =>
    index % 3 === 2 ? "lg:right-0 lg:left-auto" : "lg:left-0 lg:right-auto";

  const getTabletOverlaySide = (index: number) =>
    index % 2 === 1 ? "md:right-0 md:left-auto" : "md:left-0 md:right-auto";

  const getCoveredCardClasses = (index: number) => {
    if (activeIndex === null) return "";

    const isDesktopCovered =
      Math.floor(index / 3) === Math.floor(activeIndex / 3) &&
      index === (activeIndex % 3 === 2 ? activeIndex - 1 : activeIndex + 1);

    const isTabletCovered =
      Math.floor(index / 2) === Math.floor(activeIndex / 2) &&
      index === (activeIndex % 2 === 1 ? activeIndex - 1 : activeIndex + 1);

    return cn(
      isTabletCovered &&
        "md:opacity-0 md:pointer-events-none lg:opacity-100 lg:pointer-events-auto",
      isDesktopCovered && "lg:opacity-0 lg:pointer-events-none",
    );
  };

  return (
    <>
      <div
        className={cn(
          "grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        <AnimatePresence initial={false}>
          {visibleItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative min-h-[468px] self-start transition-opacity duration-300",
                  isActive && "z-20",
                  getCoveredCardClasses(index),
                )}
              >
                <div
                  className={cn(
                    "rounded-[18px] h-full bg-white p-4 border border-secondary/30",
                    isActive &&
                      cn(
                        "z-30 shadow-[0_10px_30px_rgba(95,176,194,0.55)]",
                        "md:absolute md:top-0 md:w-[calc(200%+1.25rem)]",
                        "lg:w-[calc(200%+1.25rem)]",
                        getTabletOverlaySide(index),
                        getDesktopOverlaySide(index),
                      ),
                  )}
                >
                  {isActive ? (
                    <>
                      <div className="grid gap-5 md:grid-cols-[300px_1fr]">
                        <div className="relative min-h-[360px] overflow-hidden rounded-[14px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="border-l-2 border-black pl-3 text-xl font-semibold leading-tight text-black">
                            {item.title}
                          </h3>

                          <p className="mt-4 text-sm leading-relaxed text-black/60">
                            {item.shortDesc}
                          </p>

                          {item.longDesc && (
                            <p className="mt-3 text-sm leading-relaxed text-black/60">
                              {item.longDesc}
                            </p>
                          )}

                          <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-[12px] bg-[#e3f3f7]">
                            {(item.metrics ?? [])
                              .slice(0, 4)
                              .map((metric, i) => (
                                <div
                                  key={i}
                                  className={cn(
                                    "p-4",
                                    i === 0 || i === 1
                                      ? "border-b border-[#acd7e1]"
                                      : "",
                                  )}
                                >
                                  <div className="text-sm text-primary font-semibold">
                                    {metric.label}
                                  </div>
                                  <div className="mt-1 flex items-center gap-1 text-lg font-semibold text-secondary">
                                    {metric.value}
                                    <ArrowUpRight className="size-5" />
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
                    </>
                  ) : (
                    <>
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
                          <div
                            key={i}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm text-primary/70 font-semibold">
                              {metric.label}
                            </span>
                            <span className="text-sm font-medium text-emerald-600 flex items-center gap-3">
                              {metric.value} <ArrowUpRight className="size-4" />
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
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Button onClick={() => setVisibleCount((prev) => prev + 6)}>
            Load More <Loader size={4} />
          </Button>
        </div>
      )}
    </>
  );
}
