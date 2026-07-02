"use client";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import {
  Combine,
  ShieldCog,
  UserStar,
  BrainCircuit,
  Grid2x2Check,
  CodeXml,
  HandshakeIcon,
} from "lucide-react";
import { useRef, useState } from "react";

import SectionReveal from "./SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";
import ValueCard from "../ui/value-card";
import CornerShape from "../ui/shape";
import {
  UserRoundCheck,
  Code2,
  PanelsTopLeft,
  ShieldCheck,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

const valuess = [
  {
    title: "Client First",
    desc: "We prioritize client success in every decision, delivering solutions that align with their goals while maintaining transparency, trust, and long-term partnership value.",
    icon: UserStar,
    image: "/home/client-first.webp",
  },
  {
    title: "Deep Expertise",
    desc: "Our team combines industry knowledge with innovative thinking to build intelligent, high-impact solutions tailored to complex business challenges.",
    icon: Code2,
    image: "/home/client-first.webp",
  },
  {
    title: "Collaboration",
    desc: "We work closely with clients through transparent communication and co-creation, ensuring every solution drives measurable business outcomes.",
    icon: HandshakeIcon,
    image: "/home/client-first.webp",
  },
  {
    title: "Agile",
    desc: "We adapt quickly to changing business needs with flexible workflows, customizable solutions, and efficient agile delivery practices.",
    icon: Grid2x2Check,
    image: "/home/client-first.webp",
  },
  {
    title: "Transparency & Value",
    desc: "We focus on delivering measurable value through honest communication, customer-centric decisions, and outcome-driven execution.",
    icon: ShieldCheck,
    image: "/home/client-first.webp",
  },
  {
    title: "Scalability",
    desc: "We design scalable, future-ready solutions with modular architectures that support sustainable growth and long-term business success.",
    icon: BrainCircuit,
    image: "/home/client-first.webp",
  },
];
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
  const [active, setActive] = useState<number | null>(null);

  const rows = [valuess.slice(0, 3), valuess.slice(3, 6)];
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
        {/* <motion.div
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
        </motion.div> */}

        <div className="mt-12 space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-4 lg:flex-row">
              {row.map((item, itemIndex) => {
                const index = rowIndex * 3 + itemIndex;
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <motion.div
                    key={item.title}
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    style={{ flex: 1 }}
                    animate={{
                      flex: active === index ? 1.45 : 1,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "group relative min-h-[230px] w-full min-w-0 overflow-hidden rounded-[16px] p-5",
                      "border bg-[#f4fbfd] transition-colors duration-500",
                      isActive ? "border-secondary/50 shadow-[0_10px_15px_rgba(95,176,194,0.22)]" : "border-transparent"
                    )}
                  >
                    <div className="relative z-10 flex h-full gap-5">
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="mb-7 grid size-[54px] place-items-center rounded-[7px] bg-[#5fb0c2] text-white">
                          <Icon className="size-7" strokeWidth={1.7} />
                        </div>

                        <h3 className="relative mb-3 w-fit font-semibold leading-tight text-black">
                          {item.title}

                          <span
                            className={cn(
                              "absolute -bottom-1 left-0 h-[1px] bg-[#5fb0c2] transition-all duration-500",
                              isActive ? "w-full" : "w-0"
                            )}
                          />
                        </h3>

                        <p className="line-clamp-4 text-sm leading-relaxed text-black/60">
                          {item.desc}
                        </p>
                      </div>

                      <motion.div
                        animate={{
                          width: isActive ? 160 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative hidden shrink-0 overflow-hidden rounded-[8px] md:block"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-110"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </SectionReveal>




      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-secondary/15">
        <CornerShape color="#fff" />
      </div>
    </section>
  );
}