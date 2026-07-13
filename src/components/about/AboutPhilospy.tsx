"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";


const philosophyCards = [
  {
    step: "1",
    title: "Data",
    subtitle: "Collect & Connect",
    body:
      "Technology has made it easier than ever to collect data. Turning that data into consistent, business-wide decisions remains the real challenge.",
    accent: true,
  },
  {
    step: "2",
    title: "Intelligence",
    subtitle: "Analyze & Understand",
    body:
      "Connected information only matters when it creates context, reveals patterns, and helps teams understand what is actually happening.",
    accent: false,
  },
  {
    step: "3",
    title: "Decisions",
    subtitle: "Enable Better Choices",
    body:
      "Insights should reduce hesitation, improve confidence, and help business leaders move faster with clearer next steps.",
    accent: true,
  },
  {
    step: "4",
    title: "Business Value",
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
  const stacked = !expanded;

  return (
    <motion.article
      layout
      initial={false}
      whileHover={{
        y: -10,
        scale: 1.02,
        // boxShadow: "0 28px 80px rgba(15,23,42,0.14)",
      }}
      whileTap={{ scale: 0.995 }}
      animate={{
        opacity: expanded ? 1 : 1,
        scale: expanded ? 1 : 0.995,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group h-[400px] rounded-[30px] ${
        card.accent ? "bg-[#63afc4] text-white" : "bg-[#cae1e6] text-slate-950"
      } ${stacked ? "flex items-center px-12 pb-20 pt-16" : "p-5"}`}
    >
      <div className={stacked ? "w-full" : ""}>
        <motion.div
          initial={false}
          animate={{
            opacity: stacked ? 0 : 1,
            scale: stacked ? 0.85 : 1,
            height: stacked ? 0 : 64,
            marginBottom: stacked ? 0 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div
            className={`grid size-12 place-items-center rounded-full text-[22px] font-medium ${
              card.accent ? "bg-white text-[#63afc4]" : "bg-[#1d1d1d] text-white"
            }`}
          >
            {card.step}
          </div>
        </motion.div>

        <motion.h3
          layout
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`font-medium leading-none transition-transform duration-500 ${
            stacked ? "mt-0 text-[52px]" : "mt-14 text-[34px]"
          }`}
        >
          {card.title}
        </motion.h3>

        <motion.p
          layout
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`leading-8 transition-transform duration-500 ${
            card.accent ? "text-white/95" : "text-slate-800"
          } ${stacked ? "mt-6 text-[26px]" : "mt-4 text-[24px]"}`}
        >
          {card.subtitle}
        </motion.p>

        <motion.p
          initial={false}
          animate={{
            opacity: expanded ? 1 : 0,
            height: expanded ? "auto" : 0,
            marginTop: expanded ? 20 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`overflow-hidden text-[18px] leading-8 ${
            card.accent ? "text-white/92" : "text-slate-700"
          }`}
        >
          {card.body}
        </motion.p>
      </div>
    </motion.article>
  );
}

function StackedCards({
  cards,
}: {
  cards: typeof philosophyCards;
}) {
  const stackStyles = [
    "left-1/2 top-0 z-40 w-[320px] -translate-x-1/2 rotate-0 opacity-100",
    "left-1/2 top-1 z-30 w-[320px] -translate-x-1/2 rotate-[-4deg] opacity-85",
    "left-1/2 top-2 z-20 w-[320px] -translate-x-1/2 rotate-[8deg] opacity-70",
    "left-1/2 top-3 z-10 w-[320px] -translate-x-1/2 rotate-[-9deg] opacity-55",
  ];

  const visibleCards = cards.slice(-4);

  return (
    <motion.div
      layout
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[420px] w-full max-w-[520px]"
    >
      {visibleCards.map((card, index) => {
        const styleIndex = index;

        return (
          <motion.div
            key={card.step}
            layout
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: index === visibleCards.length - 1 ? -10 : 0,
              rotate: index === visibleCards.length - 1 ? -1.5 : undefined,
            }}
            className={`absolute ${stackStyles[styleIndex]}`}
          >
            <PhilosophyCard card={card} expanded={false} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function AboutPhilosphy() {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [expandedCount, setExpandedCount] = useState(0);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start 75%", "end 35%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextCount = 0;

    if (latest > 0.18) nextCount = 1;
    if (latest > 0.34) nextCount = 2;
    if (latest > 0.5) nextCount = 3;
    if (latest > 0.58) nextCount = 4;

    setExpandedCount((current) => (current === nextCount ? current : nextCount));
  });

  return (
    <section className="bg-secondary/15 relative py-20 ">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Our Philosophy"
          title="Every Insight Should Lead to Action"
          description="Our philosophy is simple: data should create clarity, AI should support better decisions, and technology should enable measurable business outcomes not add complexity."
          align="center"
          titleClassName="max-w-md mx-auto"
        //   maxWidth="md"
          descriptionWidth="5xl"
          textColor="black"

        />

        <div className="mt-16" ref={cardsRef}>
          <motion.div
            layout
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={
              expandedCount > 0
                ? "grid gap-5 lg:grid-cols-4"
                : ""
            }
          >
            {expandedCount === 0 ? (
              <StackedCards cards={philosophyCards} />
            ) : (
              <>
                {philosophyCards.slice(0, expandedCount).map((card) => (
                  <PhilosophyCard
                    key={card.step}
                    card={card}
                    expanded={true}
                  />
                ))}

                {expandedCount < philosophyCards.length ? (
                  <div className={expandedCount >= 1 ? "lg:col-span-1" : ""}>
                    <StackedCards cards={philosophyCards.slice(expandedCount)} />
                  </div>
                ) : null}
              </>
            )}
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
