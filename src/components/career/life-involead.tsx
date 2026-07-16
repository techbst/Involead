"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { lifeSteps } from "./career-data";

export default function LifeInvolead() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#1d1d1d] py-20 text-white">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Life at InvoLead"
          title="Learn, Build, and Grow With Teams That Care About Impact"
          description="Work on meaningful problems, keep learning, and grow with people who care about the quality and impact of what they build."
          tone="light"
          maxWidth="4xl"
        />

        <div className="relative mt-14 pl-11 md:grid md:grid-cols-4 md:gap-4 md:pt-10 md:pl-0">
          <span aria-hidden="true" className="absolute bottom-7 left-[22px] lg:left-[18px] md:left-[18px] top-0 w-px bg-white md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-[10px] md:h-px md:w-auto" />

          {lifeSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.2 }}
              className="relative mb-4 md:mb-0 h-full"
            >
              <span aria-hidden="true" className="absolute -left-[31px] top-7 z-10 size-[20px] rounded-full bg-[#48a5b9] md:-top-10 md:left-1/2 md:-translate-x-1/2" />
              <span aria-hidden="true" className="absolute -left-[22px] top-[46px] h-[calc(100%-18px)] w-px bg-white md:-top-[20px] md:left-1/2 md:h-[20px] md:-translate-x-1/2" />

              <article className="min-h-[214px] h-full rounded-[16px] bg-[#e2f2f5] p-6 text-[#171717] sm:p-7">
                <span className="grid size-9 place-items-center rounded-full bg-[#48a5b9] text-[15px] font-semibold text-white">
                  {step.number}
                </span>
                <div className="mt-3 text-[24px] font-medium leading-[130%] lg:text-[24px] md:text-[20px] sm:text-[18px]">
                  {step.title}
                </div>
                <p className="mt-3 text-[13px] leading-[1.48] text-[#303030]">
                  {step.description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
