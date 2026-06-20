"use client";

import { useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Database,
  Rocket,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ProcessStep = {
  title: string;
  shortTitle?: string;
  description: string;
  icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    title: "Reasoning Agent",
    description:
      "Converts business goals into detailed step-by-step execution plans, coordinating sub-agents autonomously across the entire workflow.",
    icon: BrainCircuit,
  },
  {
    title: "Data Discovery",
    description:
      "Connects, ingests, and validates multi-source data in real time — databases, APIs, files — with automatic profiling and quality checks.",
    icon: Database,
  },
  {
    title: "Pipeline Executor",
    description:
      "Processes and engineers data at enterprise scale. Self-heals on failure. Generates complete lineage documentation automatically.",
    icon: Settings2,
  },
  {
    title: "Model Builder",
    description:
      "Builds, tests, and optimizes models with AutoML and LLM-augmented feature engineering. Validates accuracy, drift, and explainability.",
    icon: BarChart3,
  },
  {
    title: "Auto-Deploy & Monitor",
    shortTitle: "Deploy & Monitor",
    description:
      "Deploys to production, tracks 24/7, triggers retraining on drift detection, and self-improves — escalating to humans only when needed.",
    icon: Rocket,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function TravelingSignal({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className="absolute left-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(180,238,250,1) 0%, rgba(95,176,194,0.9) 45%, rgba(95,176,194,0) 75%)",
        boxShadow:
          "0 0 12px 3px rgba(125,210,225,0.85), 0 0 28px 10px rgba(95,176,194,0.35)",
      }}
      initial={{ left: "0%", opacity: 0 }}
      animate={{
        left: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.6,
        delay,
        repeat: Infinity,
        repeatDelay: 1.4,
        ease: "easeInOut",
        opacity: { times: [0, 0.08, 0.92, 1], duration: 3.6, repeat: Infinity, repeatDelay: 1.4 },
      }}
    />
  );
}

function StepNode({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = step.icon;
  const stepNumber = String(index + 1).padStart(2, "0");
  const glowDelay = (index / (steps.length - 1)) * 3.6;

  return (
    <motion.article variants={nodeVariants} className="relative flex flex-col items-center">
      <div className="relative grid place-items-center">
        <motion.div
          aria-hidden
          className="absolute size-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(95,176,194,0.35) 0%, rgba(95,176,194,0) 70%)",
          }}
          animate={{ opacity: [0.2, 0.85, 0.2], scale: [0.85, 1.15, 0.85] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: glowDelay - 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.div
  animate={{ y: [0, -5, 0] }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.18,
  }}
  className="relative grid size-16 place-items-center rounded-full border border-primary/15 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_18px_36px_rgba(15,23,42,0.10)]"
>
  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/[0.06] to-transparent" />
  <Icon className="relative size-6 text-secondary" strokeWidth={1.75} />
</motion.div>
        <span className="absolute -bottom-2 -right-2 flex size-6 items-center justify-center rounded-full border border-slate-200 bg-white  text-[0.62rem] font-medium tracking-tight text-primary shadow-sm">
          {stepNumber}
        </span>
      </div>

      <div className="mt-6 max-w-[15rem] text-center lg:max-w-[13.5rem]">
        <h3 className="text-[1.02rem] font-[500] leading-tight tracking-[-0.02em] text-slate-900">
          {step.shortTitle ?? step.title}
        </h3>
        <p className="mt-2.5 !text-[0.85rem] leading-6 text-slate-600">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ProcessRoadmap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 100%"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const signalDelays = useMemo(() => [0, 0.9, 1.8 ,2], []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-secondary/20 py-15 text-slate-900 lg:py-15"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(95,176,194,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          
            <span className=" text-[0.68rem] uppercase tracking-[0.28em] text-primary">
              Autonomous Pipeline
            </span>
          
          <h2 className="mt-3 font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950">
            Next-gen agentic <br/><span className="text-secondary"> AI data science</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Five agents, one continuous signal — from raw goal to monitored
            production model, with no hand-off left to chance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto mt-20 hidden max-w-6xl lg:block"
        >
          <div className="relative grid grid-cols-5 gap-6">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 h-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/25 to-primary/0" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
                style={{ width: lineProgress }}
              />
              {signalDelays.map((d) => (
                <TravelingSignal key={d} delay={d} />
              ))}
            </div>

            {steps.map((step, index) => (
              <StepNode key={step.title} step={step} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto mt-16 flex max-w-md flex-col gap-10 lg:hidden"
        >
          <div className="pointer-events-none absolute bottom-8 left-8 top-8 w-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/25 to-primary/0" />
            <motion.div
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-primary to-secondary"
              style={{ height: lineProgress }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, "0");
            return (
              <motion.article
                key={step.title}
                variants={nodeVariants}
                className="relative flex gap-5 pl-0"
                
              >
                <div className="relative shrink-0">
                  <motion.div
  animate={{ y: [0, 40, 0] }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="grid size-16 place-items-center rounded-full border border-primary/15 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_18px_36px_rgba(15,23,42,0.10)]"
>
  <Icon className="size-6 text-secondary" strokeWidth={1.75} />
</motion.div>
                  <span className="absolute -bottom-2 -right-2 flex size-6 items-center justify-center rounded-full border border-slate-200 bg-white  text-[0.62rem] font-medium tracking-tight text-primary shadow-sm">
                    {stepNumber}
                  </span>
                </div>
                <div className="pt-3">
                  <h3 className="text-[1.02rem] font-[500] leading-tight tracking-[-0.02em] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 !text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}