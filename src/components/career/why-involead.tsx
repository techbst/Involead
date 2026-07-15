"use client";

import { motion, useReducedMotion } from "framer-motion";

import { values } from "./career-data";
import { SectionHeader } from "../ui/section-header";

const highlightedCards = new Set([0, 3, 5]);

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
                title="A Place Where Talent Grows with Purpose"
                description="We create an environment where people can learn fast, take ownership,
              and work on meaningful AI and analytics problems with business impact."
                align="left"
              />
          </motion.header>

          {values.map((item, index) => {
            const Icon = item.icon;
            const highlighted = highlightedCards.has(index);

            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex min-h-[204px] flex-col rounded-[11px] p-5 sm:p-5 md:p-5 lg:p-5 xl:p-8 ${
                  highlighted
                    ? "bg-secondary text-white"
                    : "bg-[#DCEFF3] text-[#000]"
                }`}
              >
                <span className="grid size-[50px] shrink-0 place-items-center rounded-[8px] bg-white text-[#36a5bd]">
                  <Icon aria-hidden="true" className="size-[22px] stroke-[1.4]" />
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
