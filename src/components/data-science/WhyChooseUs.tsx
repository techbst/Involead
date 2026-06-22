"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CodeXml,
  Combine,
  Grid2x2Check,
  ShieldCog,
  UserStar,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";

import SectionReveal from "@/components/home/SectionReveal";
import { SectionHeader } from "../ui/section-header";
import ValueCard from "../ui/value-card"
type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  hint: string;
};

const items: WhyChooseItem[] = [
  {
    icon: UserStar,
    title: "Outcome-first thinking",
    description:
      "Every roadmap starts with a KPI, a decision point, and the business value the model must improve.",
    hint: "KPI-led roadmaps with measurable business value.",
  },
  {
    icon: CodeXml,
    title: "Practical explainability",
    description:
      "Models should be easy to trust, inspect, and defend in front of the people who use them.",
    hint: "Transparent models teams can trust and defend.",
  },
  {
    icon: Combine,
    title: "Built for adoption",
    description:
      "We align delivery with how teams actually work, not how slide decks imagine they should.",
    hint: "Delivery shaped around real team workflows.",
  },
  {
    icon: Grid2x2Check,
    title: "Fast validation",
    description:
      "Compact experiments and clear checkpoints keep the section light, useful, and easy to act on.",
    hint: "Quick experiments with clear checkpoints.",
  },
  {
    icon: ShieldCog,
    title: "Governed delivery",
    description:
      "Controls, visibility, and traceability stay built in so the work is enterprise-ready from day one.",
    hint: "Enterprise-ready delivery with built-in governance.",
  },
  {
    icon: BrainCircuit,
    title: "Scalable thinking",
    description:
      "We design for reuse, resilient workflows, and data science patterns that grow with the business.",
    hint: "Reusable patterns that scale with the business.",
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
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.08,
    rotate: -6,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
};





type WhyChooseUsProps = {
  title?: string;
  subtitle?: string;
};

export default function WhyChooseUs({
  title = "Why Choose Us",
  subtitle = "AI and data science solutions should feel practical, trustworthy, and ready to adopt. We design for outcomes, explainability, and real team workflows.",
}: WhyChooseUsProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-120px" });
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      orbRefs.current.forEach((orb, index) => {
        if (!orb) return;

        gsap.to(orb, {
          x: index % 2 === 0 ? 34 : -28,
          y: index % 2 === 0 ? -22 : 20,
          scale: index === 1 ? 1.15 : 1.08,
          rotation: index === 2 ? 8 : -6,
          duration: 10 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SectionReveal className="relative overflow-hidden  py-14 text-white sm:py-15">
     

      <div className="container relative z-10 mx-auto">
       
        <SectionHeader 
        eyebrow="Built for trust"
        title={title}
        description={subtitle}
        align="center"
         textColor="black"
         maxWidth="3xl"
        />

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >

             {items.map(({ icon, title, description }, index) => (
            // <WhyChooseCard key={item.title} {...item} />
            // <ValueCard />
              <ValueCard
                          key={title}
                          icon={icon}
                          title={title}
                          description={description}
                          index={index}
                        />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
