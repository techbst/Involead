"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";

const conventionalItems = [
  "Deliver technology solutions",
  "Focus on implementation",
  "Build standalone systems",
  "Complete projects",
  "Deploy AI",
];

const involeadItems = [
  "Solve business problems",
  "Focus on measurable outcomes",
  "Create connected ecosystems",
  "Build long-term capabilities",
  "Operationalize AI across the business",
];

export default function AboutDifference() {
  return (
    <section className="bg-white py-20  ">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="The Involead Difference"
          title="Beyond Delivery. Focused on Lasting Business Value"
          description="We combine execution, domain expertise, and long-term partnership to help organizations realize the full potential of their data and AI investments."
          align="center"
          maxWidth="5xl"
          descriptionWidth="4xl"
          textColor="black"
          titleClassName="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-6 xl:mt-16 xl:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] bg-[#F7FCFD] p-8 md:p-10 md:!pl-20"
          >
            <h3 className="text-[24px] font-medium leading-tight text-slate-900 md:text-[30px]">
              Conventional Technology Engagements
            </h3>

            <div className="mt-8 space-y-4">
              {conventionalItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="block size-8 rounded-full bg-[#bfe8f4]" />
                  <p className="text-[18px] leading-[1.35] text-slate-800 md:text-[24px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-[#2A626F] bg-[#46A4B9] p-8 text-white md:p-10 md:!pl-20"
          >
            <h3 className="text-[24px] font-medium leading-tight md:text-[30px]">
              The InvoLead Approach
            </h3>

            <div className="mt-8 space-y-4">
              {involeadItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-white text-[#4d9fb6]">
                    <Check className="size-6 stroke-[2.75]" />
                  </span>
                  <p className="text-[18px] leading-[1.35] text-white md:text-[24px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
