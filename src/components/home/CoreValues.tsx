"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Eye,
  Handshake,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import SectionReveal from "./SectionReveal";

const values = [
  {
    icon: Handshake,
    title: "Client First",
    description:
      "Every roadmap starts with outcomes, constraints, and measurable business value.",
  },
  {
    icon: ShieldCheck,
    title: "Deep Expertise",
    description:
      "AI, data, product, and cloud specialists working through enterprise complexity.",
  },
  {
    icon: Blocks,
    title: "Collaboration",
    description:
      "Integrated delivery squads that align product, engineering, and operations.",
  },
  {
    icon: Rocket,
    title: "Agile",
    description:
      "Fast validation cycles that move from experiment to production with discipline.",
  },
  {
    icon: Eye,
    title: "Transparency & Vision",
    description:
      "Clear tradeoffs, visible progress, and architecture that supports long-term scale.",
  },
  {
    icon: Layers3,
    title: "Scalability",
    description:
      "Platforms designed for high-volume data, resilient workloads, and expanding teams.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white  py-20 ">
      <SectionReveal className="mx-auto container">
        <p className="text-sm font-semibold text-slate-500">Our Core Values</p>
        <h2 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,4.4rem)] font-bold leading-tight tracking-normal text-slate-950">
          End-to-end AI solutions designed for measurable outcomes.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              whileHover={{ y: -8 }}
              className="group bg-white p-7 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50/25"
            >
              <Icon className="size-8 stroke-[1.5] text-cyan-500" />
              <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
