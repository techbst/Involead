"use client";

import { motion } from "framer-motion";
import { BadgeQuestionMark, CircleDot, HelpCircle } from "lucide-react";
import { SectionHeader } from "../ui/section-header";

const challenges = [
  "What is Return on Investment (ROI) of different media, competitor media and promotions on sales/footfalls?",
  "How to quantify the impact of in-flight campaigns and provide real-time/near real-time insights?",
  "What is optimal-mix of investment to maximize target KPI across brands/categories?",
  "What is long-term impact of media investments?",
  "How do media investments impact brand metrics like Awareness, Penetration and Loyalty?",
];

export default function BusinessChallenges() {
  return (
    <section className="relative overflow-hidden  py-20">
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-96 w-96 rounded-full bg-[#7c3aed]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-8rem] bottom-0 h-96 w-96 rounded-full bg-[#5fb0c2]/14 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#237487]"></p>
          <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl"></h2>
          <p className="mt-5 text-base leading-8 text-slate-600"></p>
          <SectionHeader 
            eyebrow="Business Challenges"
            title="Questions that decide marketing efficiency"
            description="Key questions marketing and business leaders need to answer."
            maxWidth="5xl"
            />
        </div>

        <div className="relative mt-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#5fb0c2]/25 lg:block"
          />
          <HelpCircle className="pointer-events-none absolute left-[8%] top-8 size-16 text-[#ff9255]/20" />
          <BadgeQuestionMark className="pointer-events-none absolute bottom-4 right-[10%] size-20 text-[#5fb0c2]/20" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <motion.article
                key={challenge}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative min-h-52 overflow-hidden rounded-2xl border border-slate-200 bg-white/82 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#5fb0c2]/45"
              >
                <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#5fb0c2]/10 transition duration-300 group-hover:scale-125" />
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold text-[#237487]">0{index + 1}</span>
                  <CircleDot className="size-5 text-[#ff9255]" />
                </div>
                <p className="relative mt-8 text-base font-semibold leading-7 text-slate-900">{challenge}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
