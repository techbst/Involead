"use client";

import { motion } from "framer-motion";
import { Handshake, Lightbulb, Network, Repeat, Scale, ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";
import ClipShape from "../ui/clip-shape";
import ValueCard from "../ui/value-card";

const values = [
  {
    title: "Client First",
    icon: Handshake,
    ullist: [
      "Always do what suits the client best for their success",
      "We serve you, first and always, by eliminating conflicts of interest",
    ],
  },
  {
    title: "Deep Expertise",
    icon: Lightbulb,
    ullist: [
      "Continuous innovation woven into every engagement",
      "Best-in-class solutioning powered by creative, innovative thinking",
    ],
  },
  {
    title: "Collaboration",
    icon: Network,
    ullist: [
      "Build and co-create solutions with total transparency",
      "Committed to driving business impact and helping you realize value potential",
    ],
  },
  {
    title: "Agile",
    icon: Repeat,
    ullist: [
      "Customizable solutions adapted to specific business requirements",
      "Adopt ways of working that enable true agile delivery",
    ],
  },
  {
    title: "Transparency & Value",
    icon: ShieldCheck,
    ullist: [
      "Committed to driving business impact and realizing value potential",
      "Customer-centric mindset kept top-of-mind at every decision",
    ],
  },
  {
    title: "Scalability",
    icon: Scale,
    ullist: [
      "Scalable delivery approach and roadmap to guarantee long-term success",
      "Building modularized, future-proof solutions from day one",
    ],
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden py-20">
      <ClipShape />
      <div className="container relative mt-22 mx-auto">
        <SectionHeader
          title="Our Core Values"
          description="End-to-end AI solutions designed for measurable outcomes - engineered by domain experts, powered by Agentic AI."
          descriptionWidth="5xl"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {values.map(({ icon: Icon, title, ullist }, index) => (
            <ValueCard
              key={title}
              icon={Icon}
              title={title}
              ullist={ullist}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
