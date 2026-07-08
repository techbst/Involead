"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";

const philosophyCards = [
  {
    step: "1",
    title: "DATA",
    subtitle: "Collect & Connect",
    body:
      "Technology has made it easier than ever to collect data. Turning that data into consistent, business-wide decisions remains the real challenge.",
    accent: true,
  },
  {
    step: "2",
    title: "INTELLIGENCE",
    subtitle: "Analyze & Understand",
    body:
      "Connected information only matters when it creates context, reveals patterns, and helps teams understand what is actually happening.",
    accent: false,
  },
  {
    step: "3",
    title: "DECISIONS",
    subtitle: "Enable Better Choices",
    body:
      "Insights should reduce hesitation, improve confidence, and help business leaders move faster with clearer next steps.",
    accent: true,
  },
  {
    step: "4",
    title: "BUSINESS VALUE",
    subtitle: "Drive Measurable Outcomes",
    body:
      "The end goal is not more dashboards or more tooling. It is measurable commercial, operational, and organizational impact.",
    accent: false,
  },
];

function PhilosophyCard({
  card,
  expanded,
}: {
  card: (typeof philosophyCards)[number];
  expanded: boolean;
}) {
  return (
    <motion.article
      layout
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`h-[520px] rounded-[30px] p-10 ${
        card.accent ? "bg-[#63afc4] text-white" : "bg-[#dff1f6] text-slate-950"
      }`}
    >
      <div
        className={`grid size-16 place-items-center rounded-full text-[28px] font-medium ${
          card.accent ? "bg-white text-[#63afc4]" : "bg-[#1d1d1d] text-white"
        }`}
      >
        {card.step}
      </div>

      <h3 className="mt-14 text-[34px] font-medium leading-none">{card.title}</h3>
      <p className={`mt-4 text-[24px] leading-8 ${card.accent ? "text-white/95" : "text-slate-800"}`}>
        {card.subtitle}
      </p>

      <motion.p
        initial={false}
        animate={{
          opacity: expanded ? 1 : 0,
          height: expanded ? "auto" : 0,
          marginTop: expanded ? 20 : 0,
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={`overflow-hidden text-[18px] leading-8 ${
          card.accent ? "text-white/92" : "text-slate-700"
        }`}
      >
        {card.body}
      </motion.p>
    </motion.article>
  );
}

export default function AboutPhilosphy() {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const expanded = useInView(cardsRef, { once: true, amount: 0.35 });

  return (
    <section className="bg-[#eef8fb] py-20 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Our Philosophy"
          title="Every Insight Should Lead to Action"
          description="Our philosophy is simple: data should create clarity, AI should support better decisions, and technology should enable measurable business outcomes not add complexity."
          align="center"
          maxWidth="3xl"
          descriptionWidth="5xl"
          textColor="black"
          titleClassName="!text-[40px] !font-semibold !leading-[1.15] md:!text-[72px]"
          eyebrowClassName="normal-case"
          descriptionClassName="!text-[20px] !leading-[1.7] md:!text-[24px]"
        />

        <div className="mt-16" ref={cardsRef}>
          <motion.div
            layout
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={
              expanded
                ? "grid gap-5 lg:grid-cols-4"
                : "relative mx-auto h-[620px] max-w-[520px]"
            }
          >
            {philosophyCards.map((card, index) => {
              if (expanded) {
                return (
                  <PhilosophyCard
                    key={card.step}
                    card={card}
                    expanded={expanded}
                  />
                );
              }

              const stackStyles = [
                "left-1/2 top-4 z-10 w-[430px] -translate-x-1/2 rotate-[-10deg] opacity-55",
                "left-1/2 top-8 z-20 w-[430px] -translate-x-1/2 rotate-[10deg] opacity-45",
                "left-1/2 top-12 z-30 w-[430px] -translate-x-1/2 rotate-[-5deg] opacity-35",
                "left-1/2 top-16 z-40 w-[430px] -translate-x-1/2 rotate-0 opacity-100",
              ];

              return (
                <motion.div
                  key={card.step}
                  layout
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute ${stackStyles[index]}`}
                >
                  <PhilosophyCard card={card} expanded={false} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-6xl text-center text-[20px] leading-[1.7] text-slate-800 md:text-[24px]"
        >
          Technology creates value only when it helps people make better decisions.
          Our role is to connect data, intelligence, and execution so organizations
          can move with greater confidence, speed, and clarity.
        </motion.p>
      </div>
    </section>
  );
}
