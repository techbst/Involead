"use client";

import { motion } from "framer-motion";
import {
  Combine,
  ShieldCog,
  UserStar,
  BrainCircuit,
  Grid2x2Check,
  CodeXml,
} from "lucide-react";

import SectionReveal from "./SectionReveal";

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

export default function CoreValues() {
  return (
    <section className="bg-white  py-15 ">
      <SectionReveal className="mx-auto container">
        <p className="text-sm font-semibold text-black">Our Core Values</p>
        <h2 className="mt-2 max-w-3xl   leading-tight tracking-normal text-black">
          End-to-end AI solutions designed for measurable outcomes.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden  bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description },index) => (
             <motion.article
    key={title}
    whileHover={{ y: -8 }}
    className={`group bg-white p-7 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50/25 max-md:border
   ${index < 3 ? "border-b" : ""}
  ${(index + 1) % 3 !== 0 ? "border-r" : ""}
`}
  >
              <Icon className="size-8 stroke-[1.5] text-[#5FB0C2]" />
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
