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

const bgBlobs = [
  "from-[#5fb0c2]/40 via-[#5fb0c2]/12 to-transparent",
  "from-[#c88cff]/35 via-[#c88cff]/10 to-transparent",
  "from-[#f1f26f]/28 via-[#f1f26f]/8 to-transparent",
];

function WhyChooseCard({ icon: Icon, title, description, hint }: WhyChooseItem) {
  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/92 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,247,249,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,176,194,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(200,140,255,0.08),transparent_30%)] opacity-100 transition-opacity duration-300 group-hover:opacity-100" />
     

      <div className="relative z-10 flex h-full  flex-col">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            variants={iconVariants}
            className="inline-flex size-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#5fb0c2] shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
          >
            <Icon className="size-6" />
          </motion.div>

          
        </div>

        <div className="mt-6">
          <h3 className="text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[1.3rem]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 !text-slate-500">
            {hint}
          </p>
        </div>

        <p className="mt-3 max-w-[22rem] text-sm leading-7 !text-slate-600">
          {description}
        </p>

        <div className="mt-auto pt-3">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-[#5fb0c2]">
            Built to scale
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
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
    <SectionReveal className="relative overflow-hidden bg-[radial-gradient(ellipse_at_12%_8%,rgba(168,245,210,0.5),transparent_35%),radial-gradient(ellipse_at_55%_0%,rgba(185,198,255,0.45),transparent_40%),radial-gradient(ellipse_at_45%_75%,rgba(190,205,255,0.35),transparent_35%),radial-gradient(ellipse_at_65%_100%,rgba(190,235,220,0.3),transparent_35%),linear-gradient(to_bottom_right,#f8f8f8,#eef1f4,#f7f7f7)]  py-14 text-white sm:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(95,176,194,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(200,140,255,0.1),transparent_26%),radial-gradient(circle_at_30%_90%,rgba(241,242,111,0.08),transparent_28%)]" />

      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={(el) => {
            orbRefs.current[0] = el;
          }}
          className={`absolute -left-24 top-6 h-72 w-72 rounded-full bg-gradient-to-br ${bgBlobs[0]} blur-3xl`}
        />
        <div
          ref={(el) => {
            orbRefs.current[1] = el;
          }}
          className={`absolute right-0 top-16 h-80 w-80 rounded-full bg-gradient-to-br ${bgBlobs[1]} blur-3xl`}
        />
        <div
          ref={(el) => {
            orbRefs.current[2] = el;
          }}
          className={`absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br ${bgBlobs[2]} blur-3xl`}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] !text-black">
            Built for trust
          </p>
          <h2 className="mt-4  font-semibold tracking-[-0.04em] text-black">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 !text-black sm:text-base">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item) => (
            <WhyChooseCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
