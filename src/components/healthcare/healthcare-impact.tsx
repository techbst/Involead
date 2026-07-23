"use client";

import { motion, useReducedMotion } from "framer-motion";

import AnimatedNumber from "../ui/animated-number";
import { SectionHeader } from "../ui/section-header";

type ImpactCard = {
  value: string;
  title: string;
  description: string;
  tone: "teal" | "ice";
};

const topCards: ImpactCard[] = [
  {
    value: "40%",
    title: "Faster Decision-Making",
    description:
      "Empower healthcare teams with real-time analytics and actionable insights for faster, data-driven decisions.",
    tone: "teal",
  },
  {
    value: "30%",
    title: "Improvement in Operational Efficiency",
    description:
      "Optimize clinical and operational workflows through automated data pipelines and intelligent reporting.",
    tone: "ice",
  },
];

const bottomCards: ImpactCard[] = [
  {
    value: "65%",
    title: "Reduction in Data Processing Time",
    description:
      "Accelerate data ingestion, transformation, and analytics with scalable cloud-native architectures.",
    tone: "ice",
  },
  {
    value: "40%",
    title: "Better Data Quality",
    description:
      "Build trusted, accurate, and governed healthcare data across the enterprise.",
    tone: "teal",
  },
  {
    value: "50%",
    title: "Faster Regulatory Reporting",
    description:
      "Simplify compliance through automated reporting and standardized healthcare data models.",
    tone: "ice",
  },
  {
    value: "35%",
    title: "Lower Infrastructure Costs",
    description:
      "Modernize legacy platforms and optimize cloud infrastructure to improve performance while reducing operational costs.",
    tone: "teal",
  },
];

function ImpactCardTile({ value, title, description, tone }: ImpactCard) {
  const isTeal = tone === "teal";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "flex h-full min-h-[320px] flex-col rounded-[20px] p-5 sm:p-6 md:p-7 lg:p-8",
        "transition-shadow duration-300",
        isTeal
          ? "bg-[#4ea7bd] text-white shadow-[0_18px_45px_rgba(78,167,189,0.18)] hover:shadow-[0_26px_60px_rgba(78,167,189,0.28)]"
          : "bg-[#dff0f5] text-slate-950 shadow-[0_18px_45px_rgba(15,23,42,0.06)] hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)]",
      ].join(" ")}
    >
      <div className="inline-flex w-fit rounded-[10px] bg-white px-4 py-4 text-[#4ea7bd] shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <span className="text-[28px]font-bold">
          <AnimatedNumber value={value} />
        </span>
      </div>

      <h3
        className={[
          "mt-8 ",
          isTeal ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-4",
          isTeal ? "text-white/90" : "text-slate-700",
        ].join(" ")}
      >
        {description}
      </p>
    </motion.article>
  );
}

export default function HealthcareImpactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="grid gap-10">
          <div className="flex gap-5" >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <SectionHeader
              align="left"
              eyebrow="Why Involead"
              title="Driving Measurable Impact Across Healthcare"
              description="Enable faster decisions, streamline operations, and build trusted data foundations that deliver measurable value across the healthcare ecosystem."
              maxWidth="4xl"
              descriptionWidth="3xl"
              descriptionClassName="max-w-xl text-[17px] leading-8 sm:text-lg"
            />
          </motion.div>

          <div className="grid items-stretch gap-4 lg:grid-cols-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-2">
              {topCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="h-full"
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ImpactCardTile {...card} />
                </motion.div>
              ))}
            </div>
          </div>
          </div>

          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bottomCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ImpactCardTile {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
