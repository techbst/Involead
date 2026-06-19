"use client";

import { motion, useInView, type Variants } from "framer-motion";
import {
  BrainCircuit,
  ArrowRight,
  CodeXml,
  Combine,
  Grid2x2Check,
  ShieldCog,
  UserStar,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

import SectionReveal from "@/components/home/SectionReveal";

type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const items: WhyChooseItem[] = [
  {
    icon: UserStar,
    title: "Outcome-first thinking",
    description:
      "Every roadmap starts with a KPI, a decision point, and the business value the model must improve.",
  },
  {
    icon: CodeXml,
    title: "Practical explainability",
    description:
      "Models should be easy to trust, inspect, and defend in front of the people who use them.",
  },
  {
    icon: Combine,
    title: "Built for adoption",
    description:
      "We align delivery with how teams actually work, not how slide decks imagine they should.",
  },
  {
    icon: Grid2x2Check,
    title: "Fast validation",
    description:
      "Compact experiments and clear checkpoints keep the section light, useful, and easy to act on.",
  },
  {
    icon: ShieldCog,
    title: "Governed delivery",
    description:
      "Controls, visibility, and traceability stay built in so the work is enterprise-ready from day one.",
  },
  {
    icon: BrainCircuit,
    title: "Scalable thinking",
    description:
      "We design for reuse, resilient workflows, and data science patterns that grow with the business.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function WhyChooseCard({ icon: Icon, title, description }: WhyChooseItem) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary/90" />

      <div className="relative z-10 flex min-h-[11.5rem] flex-col justify-between">
        <div>
          <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
            <Icon className="size-5" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 transition-all duration-300 group-hover:text-white/85">
            {description}
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors duration-300 group-hover:text-white">
          Hover to reveal
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.article>
  );
}

type WhyChooseUsProps = {
  title?: string;
  subtitle?: string;
};

export default function WhyChooseUs({
  title = "Why Choose Us",
  subtitle = "AI and data science solutions should feel practical, trustworthy, and ready to adopt. We design for outcomes, explainability, and real team workflows.",
}: WhyChooseUsProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <SectionReveal className="bg-white py-10">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <WhyChooseCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
