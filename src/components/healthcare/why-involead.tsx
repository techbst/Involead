"use client";

import { motion, useReducedMotion } from "framer-motion";

import { BookOpen, CloudFog, ChartNoAxesCombined, GraduationCap, Handshake, Rocket, Users } from "lucide-react";

import { SectionHeader } from "../ui/section-header";

const highlightedCards = new Set([0, 3, 5]);

export const values = [
  { number: "40%", title: "Faster Decision-Making", description: "Empower healthcare teams with real-time analytics and actionable insights for faster, data-driven decisions." },
  { number: "30%", title: "Improvement in Operational Efficiency", description: "Optimize clinical and operational workflows through automated data pipelines and intelligent reporting." },
  { number: "65%", title: "Reduction in Data Processing Time", description: "Accelerate data ingestion, transformation, and analytics with scalable cloud-native architectures." },
  { number: "40%", title: "Better Data Quality", description: "Build trusted, accurate, and governed healthcare data across the enterprise." },
  { number: "50%", title: "Faster Regulatory Reporting", description: "Simplify compliance through automated reporting and standardized healthcare data models." },
  { number: "35%", title: "Lower Infrastructure Costs", description: "Modernize legacy platforms & optimize cloud infrastructure to improve performance while reducing operational costs." },
];

export default function WhyInvolead() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="culture" className="bg-white py-16 sm:py-20 text-slate-950">
      <div className="container mx-auto">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[204px] flex-col justify-center pb-5 pr-4 sm:col-span-2 lg:pr-10"
          >
            <SectionHeader
                className="text-slate-950 max-w-[460px]"
                eyebrow="Why Involead"
                title="Driving Measurable Impact Across Healthcare"
                description="Enable faster decisions, streamline operations, and build trusted data foundations that deliver measurable value across the healthcare ecosystem."
                align="left"
              />
          </motion.header>

          {values.map((item, index) => {
            const highlighted = highlightedCards.has(index);

            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.155,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex min-h-[204px] flex-col rounded-[11px] p-5 sm:p-5 md:p-5 lg:p-5 xl:p-8 ${
                  highlighted
                    ? "bg-secondary text-white"
                    : "bg-[#DCEFF3] text-[#000]"
                }`}
              >
                <span className="inline-flex shrink-0 place-items-center rounded-[12px] bg-white text-[#36a5bd] text-[30px] font-bold w-[90px] h-[80px] text-center center justify-center">
                  {item.number}
                </span>
                <h3 className="mt-4 text-[16px] font-medium leading-tight sm:text-[17px]">
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-[12px] leading-[1.55] sm:text-[13px] ${
                    highlighted ? "text-white/90" : "text-[#303030]"
                  }`}
                >
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
