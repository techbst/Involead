"use client";

import { motion, useInView, Variants } from "framer-motion";
import {
  Combine,
  ShieldCog,
  UserStar,
  BrainCircuit,
  Grid2x2Check,
  CodeXml,
} from "lucide-react";
import { useRef } from "react";

import SectionReveal from "./SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";
import ValueCard from "../ui/value-card";
import CornerShape from "../ui/shape";

const values = [
  {
    icon: UserStar,
    title: "Client First",
    description:
      "Every roadmap starts with outcomes, constraints, and measurable business value.",
  },
  {
    icon: CodeXml,
    title: "Deep Expertise",
    description:
      "AI, data, product, and cloud specialists working through enterprise complexity.",
  },
  {
    icon: Combine,
    title: "Collaboration",
    description:
      "Integrated delivery squads that align product, engineering, and operations.",
  },
  {
    icon: Grid2x2Check,
    title: "Agile",
    description:
      "Fast validation cycles that move from experiment to production with discipline.",
  },
  {
    icon: ShieldCog,
    title: "Transparency & Vision",
    description:
      "Clear tradeoffs, visible progress, and architecture that supports long-term scale.",
  },
  {
    icon: BrainCircuit,
    title: "Scalability",
    description:
      "Platforms designed for high-volume data, resilient workloads, and expanding teams.",
  },
];

// Stagger container — triggers children sequentially when section enters view
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Each card slides up + fades in from below
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Icon morphs on card hover — subtle scale + rotation
const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: -8,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

// Accent line grows from left on hover
const lineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Title shifts right slightly on hover
const titleVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 6,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descVariants: Variants = {
  rest: {
    opacity: 0.75,
    y: 0,
  },
  hover: {
    opacity: 1,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



export default function CoreValues() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-white pt-20 pb-25 relative overflow-hidden">
      <SectionReveal className="mx-auto container">

        {/* ── Section header ── */}
        {/* <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className=" font-semibold text-slate-950"
        >
          Our Core Values
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mt-2 max-w-3xl leading-tight tracking-normal text-black"
        >
          End-to-end AI solutions designed for measurable outcomes.
        </motion.h2> */}
        <SectionHeader
        eyebrow="Our Core Values"
          title="End-to-end AI solutions designed for measurable outcomes."
          description="Driven by innovation, integrity, and excellence, we deliver AI solutions that create lasting business impact."
          align="center"
          maxWidth="5xl"
        />

        {/* ── Grid ── */}
        <motion.div
          ref={gridRef}
          // variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {values.map(({ icon, title, description }, index) => (
            <ValueCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </motion.div>

      </SectionReveal>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-secondary/15">
      <CornerShape color="#fff" />
      </div>
    </section>
  );
}