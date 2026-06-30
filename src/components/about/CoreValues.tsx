"use client";

import { motion } from "framer-motion";
import { Handshake, Lightbulb, Network, Repeat, Scale, ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

const values = [
  {
    title: "Client First",
    icon: Handshake,
    points: [
      "Always do what suits the client best for their success",
      "We serve you, first and always, by eliminating conflicts of interest",
    ],
  },
  {
    title: "Deep Expertise",
    icon: Lightbulb,
    points: [
      "Continuous innovation woven into every engagement",
      "Best-in-class solutioning powered by creative, innovative thinking",
    ],
  },
  {
    title: "Collaboration",
    icon: Network,
    points: [
      "Build and co-create solutions with total transparency",
      "Committed to driving business impact and helping you realize value potential",
    ],
  },
  {
    title: "Agile",
    icon: Repeat,
    points: [
      "Customizable solutions adapted to specific business requirements",
      "Adopt ways of working that enable true agile delivery",
    ],
  },
  {
    title: "Transparency & Value",
    icon: ShieldCheck,
    points: [
      "Committed to driving business impact and realizing value potential",
      "Customer-centric mindset kept top-of-mind at every decision",
    ],
  },
  {
    title: "Scalability",
    icon: Scale,
    points: [
      "Scalable delivery approach and roadmap to guarantee long-term success",
      "Building modularized, future-proof solutions from day one",
    ],
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#f8fbff] py-20">
      <div className="container mx-auto">
        <SectionHeader
          title="Our Core Values"
          description="End-to-end AI solutions designed for measurable outcomes - engineered by domain experts, powered by Agentic AI."
          descriptionWidth="3xl"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -7 }}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(95,176,194,0.18)]"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-[#eaf7fb] text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{value.title}</h3>
                <ul className="mt-5 space-y-3">
                  {value.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
