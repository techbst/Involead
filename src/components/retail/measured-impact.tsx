'use client';

import { motion } from 'framer-motion';

import "swiper/css";
import "swiper/css/free-mode";

import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  TrendingUp,
  BarChart3,
  DollarSign,
} from 'lucide-react';

import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';

export type MetricsCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};
export const metrics: MetricsCard[] = [
  {
    title: "85%",
    description: "of consumer brands report improved decisions with GenAI-powered automation",
    icon: BrainCircuit,
  },
  {
    title: "40%",
    description: "faster forecasting and planning cycles",
    icon: TrendingUp,
  },
  {
    title: "3x",
    description: "faster ROI on marketing investments",
    icon: DollarSign,
  },
  {
    title: "5-12%",
    description: "revenue growth across client portfolios",
    icon: BarChart3,
  },
];

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-20">
          <div className="container relative mx-auto">
            <SectionHeader eyebrow="Measured impact" title="Proven Results Across the Industry" description="Our solutions have consistently delivered measurable impact." textColor="white" />
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={{ show: { transition: { staggerChildren: .08 } } }} className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item, index) => {
                const Icon = item.icon;
    
                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "rounded-[1.75rem] border border-white/10 p-6 shadow-2xl",
                      [
                        "bg-[#e7f5f7] text-[#071a20]",
                        "bg-[#eef0fb] text-[#16152e]",
                        "bg-[#edf6e8] text-[#10200d]",
                        "bg-[#f6efdf] text-[#241b0b]",
                      ][index % 4]
                    )}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="mt-0 !text-3xl font-bold leading-tight tracking-[-0.04em]">
                          {item.title}
                        </h3>
                      </div>
    
                      <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#0e1a16] text-white shadow-lg">
                        <Icon className="h-[15px] w-[15px]" />
                      </div>
                    </div>
    
                    <div className="my-5 h-px bg-current/10" />
    
                    <p>
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>
  );
}