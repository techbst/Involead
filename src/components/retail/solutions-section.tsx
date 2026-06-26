"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

import { solutionCards } from "./retail-data";

const cardsPerPage = 4;

function SolutionFeatureCard({
  item,
  index,
}: {
  item: (typeof solutionCards)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      // initial={{ opacity: 0, y: 24, scale: 0.98 }}
      // animate={{ opacity: 1, y: 0, scale: 1 }}
      // exit={{ opacity: 0, y: -24, scale: 0.98 }}
      // transition={{ duration: 0.18, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[1.55rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-4 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(95,176,194,0.16)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(95,176,194,0.12),transparent_28%),radial-gradient(circle_at_82%_100%,rgba(122,156,255,0.08),transparent_22%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <motion.div
        // animate={{ rotate: [0, 10, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-secondary/10 blur-3xl"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 text-secondary/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-secondary/18"
      >
        <path
          d="M18 152C44 106 84 78 136 66C154 62 170 62 184 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M76 172C102 126 142 98 182 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 flex gap-4">
        <motion.div
          // whileHover={{ rotate: -4, scale: 1.05 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="grid size-20 shrink-0 place-items-center rounded-[1.25rem] bg-secondary text-white shadow-[0_14px_35px_rgba(95,176,194,0.28)]"
        >
          <Icon className="size-8 stroke-[1.8]" />
        </motion.div>

        <div className="min-w-0 pt-1">
          <div className="flex items-start justify-between gap-3">
            <div className="relative min-w-0 pr-4">
              <h3 className="!text-[20px] font-semibold leading-tight text-slate-950 transition-transform duration-300 group-hover:translate-x-1">
                {item.title}
              </h3>
              {/* <div className="pointer-events-none absolute left-0 top-full mt-2 h-[3px] w-14 origin-left rounded-full bg-[linear-gradient(90deg,#5fb0c2,#7a9cff)] scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" /> */}
            </div>
            
          </div>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600 sm:!text-[14px]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function SolutionsSection() {
  const pages = useMemo(() => {
    const chunks: (typeof solutionCards)[] = [];
    for (let index = 0; index < solutionCards.length; index += cardsPerPage) {
      chunks.push(solutionCards.slice(index, index + cardsPerPage));
    }
    return chunks;
  }, []);
  const [activePage, setActivePage] = useState(0);

  const showPrev = () => {
    setActivePage((current) => (current - 1 + pages.length) % pages.length);
  };

  const showNext = () => {
    setActivePage((current) => (current + 1) % pages.length);
  };

  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we solve"
            title="Empowering Your Business with Data-Driven Insights and Strategies"
            description="Purpose-built intelligence for the decisions that determine retail growth, margin, and customer loyalty."
            maxWidth="5xl"
            align="left"
            className="mb-0"
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous solution cards"
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next solution cards"
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
            >
              <ArrowLeft className="size-5 rotate-180" />
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0.8, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 md:grid-cols-2"
            >
              {pages[activePage].map((item, index) => (
                <SolutionFeatureCard
                  key={`${item.title}-${activePage}`}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
