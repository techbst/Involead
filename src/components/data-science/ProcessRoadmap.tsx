"use client";

import { useEffect, useMemo, useState } from "react";
import {
  motion,
  useInView,
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

import ClipShape from "../ui/clip-shape";
import { SectionHeader } from "../ui/section-header";
import CornerShape from "../ui/shape";

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

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
  },
};

function TravelingSignal({ delay = 0, isActive = false }: { delay?: number; isActive?: boolean }) {
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
        opacity: isActive ? [0, 1, 1, 0] : 0,
        left: ["0%", "100%"],
      }}
      transition={{
        duration: 3.6,
        delay,
        repeat: isActive ? Infinity : 0,
        repeatDelay: 1.4,
        ease: "easeInOut",
        opacity: {
          times: [0, 0.08, 0.92, 1],
          duration: 3.6,
          repeat: isActive ? Infinity : 0,
          repeatDelay: 1.4,
        },
      }}
    />
  );
}

function StepNode({
  step,
  index,
  isVisible,
}: {
  step: ProcessStep;
  index: number;
  isVisible: boolean;
}) {
  const Icon = step.icon;
  const stepNumber = String(index + 1).padStart(2, "0");
  const glowDelay = (index / (steps.length - 1)) * 3.6;

  return (
    <motion.article
      variants={nodeVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative flex flex-col items-center"
    >
      <div className="relative grid place-items-center">
        <motion.div
          aria-hidden
          className="absolute size-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(95,176,194,0.35) 0%, rgba(95,176,194,0) 70%)",
          }}
          animate={
            isVisible
              ? { opacity: [0.18, 0.85, 0.18], scale: [0.85, 1.15, 0.85] }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 3.6,
            repeat: isVisible ? Infinity : 0,
            repeatDelay: 1.4,
            delay: glowDelay - 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 10 }}
          animate={
            isVisible
              ? { opacity: 1, scale: 1, y: [0, -5, 0] }
              : { opacity: 0, scale: 0.82, y: 10 }
          }
          transition={{
            opacity: { duration: 0.25 },
            scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            y: {
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            },
          }}
          className="relative grid size-16 place-items-center rounded-full border border-primary/15 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_18px_36px_rgba(15,23,42,0.10)]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/[0.06] to-transparent" />
          <Icon className="relative size-6 text-secondary" strokeWidth={1.75} />
        </motion.div>
        <span className="absolute -bottom-3 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[0.62rem] font-medium tracking-tight text-primary shadow-sm">
          {stepNumber}
        </span>
      </div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="mt-6 max-w-[15rem] text-center lg:max-w-[13.5rem]"
      >
        <h3 className="text-[1.02rem] font-[500] leading-tight tracking-[-0.02em] text-slate-900">
          {step.shortTitle ?? step.title}
        </h3>
        <p className="mt-2.5 !text-[0.85rem] leading-6 text-slate-600">
          {step.description}
        </p>
      </motion.div>
    </motion.article>
  );
}

export default function ProcessRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const [activeStep, setActiveStep] = useState(-1);

  const signalDelays = useMemo(() => [0, 0.9, 1.8 ,2], []);
  const revealedStep = Math.max(activeStep, 0);
  const desktopLineProgress = `${(revealedStep / (steps.length - 1)) * 100}%`;
  const mobileLineProgress = `${(revealedStep / (steps.length - 1)) * 100}%`;

  useEffect(() => {
    if (!isInView) {
      const resetTimer = window.setTimeout(() => {
        setActiveStep(-1);
      }, 0);

      return () => {
        window.clearTimeout(resetTimer);
      };
    }

    const timers = [
      window.setTimeout(() => {
        setActiveStep(0);
      }, 40),
      ...steps.slice(1).map((_, index) =>
        window.setTimeout(() => {
          setActiveStep(index + 1);
        }, 700 + index * 420)
      ),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden  py-20 text-slate-900 bg-secondary/15"
    >
      {/* <ClipShape /> */}


      <div className="container relative z-10 mx-auto">
        <SectionHeader
                    eyebrow={"Autonomous Pipeline"}
                    title={`Next-gen agentic AI data science`}
                    description={`Five agents, one continuous signal — from raw goal to monitored
            production model, with no hand-off left to chance.`}
                    align="center"
                    maxWidth="2xl"
                  />
        

        <div className="relative mx-auto mt-20 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-6">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 h-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/25 to-primary/0" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: "0%" }}
                animate={{ width: desktopLineProgress }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
              {signalDelays.map((d) => (
                <TravelingSignal key={d} delay={d} isActive={activeStep > 0} />
              ))}
            </div>

            {steps.map((step, index) => (
              <StepNode
                key={step.title}
                step={step}
                index={index}
                isVisible={index <= activeStep}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-md flex-col gap-10 lg:hidden">
          <div className="pointer-events-none absolute bottom-8 left-8 top-8 w-px -translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/25 to-primary/0" />
            <motion.div
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-primary to-secondary"
              initial={{ height: "0%" }}
              animate={{ height: mobileLineProgress }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, "0");
            return (
              <motion.article
                key={step.title}
                variants={nodeVariants}
                initial="hidden"
                animate={index <= activeStep ? "visible" : "hidden"}
                className="relative flex gap-5 pl-0"
              >
                <div className="relative shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.82, y: 10 }}
                    animate={
                      index <= activeStep
                        ? { opacity: 1, scale: 1, y: [0, -4, 0] }
                        : { opacity: 0, scale: 0.82, y: 10 }
                    }
                    transition={{
                      opacity: { duration: 0.25 },
                      scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.16,
                      },
                    }}
                    className="grid size-16 place-items-center rounded-full border border-primary/15 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_18px_36px_rgba(15,23,42,0.10)]"
                  >
                    <Icon className="size-6 text-secondary" strokeWidth={1.75} />
                  </motion.div>
                  <span className="absolute -bottom-3 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[0.62rem] font-medium tracking-tight text-primary shadow-sm">
                    {stepNumber}
                  </span>
                </div>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate={index <= activeStep ? "visible" : "hidden"}
                  className="pt-3"
                >
                  <h3 className="text-[1.02rem] font-[500] leading-tight tracking-[-0.02em] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 !text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-white ">
                <CornerShape color="#5fb0c226" />
              </div>
    </section>
  );
}
