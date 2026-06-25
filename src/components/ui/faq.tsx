"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQProps {
  categories: FAQCategory[];
  className?: string;
  defaultTab?: number;
  defaultOpen?: number;
}

export default function FAQ({
  categories,
  className,
  defaultTab = 0,
  defaultOpen = 0,
}: FAQProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("w-full", className)}>
      {/* Tabs */}
      {categories.length > 1 && (
        <div className="mx-auto flex w-fit flex-wrap rounded-full border border-slate-200 bg-white p-1">
          {categories.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => {
                setActiveTab(index);
                setOpen(defaultOpen);
              }}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                activeTab === index
                  ? "bg-secondary text-white"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>
      )}

      {/* FAQ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="mx-auto mt-10 max-w-3xl space-y-3"
        >
          {categories[activeTab].items.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {item.question}
                </span>

                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 transition-transform duration-300",
                    open === index && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}