"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepNodeItem {
  number: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon: LucideIcon;
}

interface StepNodeProps {
  step: StepNodeItem;
  index: number;
  total: number;
  variants?: Variants;
  className?: string;
}

export default function StepNode({
  step,
  index,
  total,
  variants,
  className,
}: StepNodeProps) {
  const Icon = step.icon;
  const glowDelay = total > 1 ? (index / (total - 1)) * 3.6 : 0;

  return (
    <motion.article
      variants={variants}
      className={cn("relative flex flex-col items-center", className)}
    >
      <div className="relative grid place-items-center">
        {/* Glow */}
        <motion.div
          aria-hidden
          className="absolute size-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(95,176,194,0.35) 0%, rgba(95,176,194,0) 70%)",
          }}
          animate={{
            opacity: [0.2, 0.85, 0.2],
            scale: [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            repeatDelay: 1.4,
            delay: glowDelay,
            ease: "easeInOut",
          }}
        />

        {/* Icon Circle */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.18,
          }}
          className="relative grid size-16 place-items-center rounded-full border border-secondary/65 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06),0_18px_36px_rgba(15,23,42,0.10)]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/[0.06] to-transparent" />

          <Icon
            className="relative size-6 text-secondary"
            strokeWidth={1.8}
          />
        </motion.div>

        {/* Number Badge */}
        <span className="absolute -bottom-2 -right-2 flex size-6 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-primary shadow-sm">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="mt-6 max-w-[15rem] text-center lg:max-w-[13.5rem]">
        <h3 className="text-[1.02rem] font-medium leading-tight tracking-[-0.02em] text-slate-900">
          {step.shortTitle ?? step.title}
        </h3>

        <p className="mt-2.5 text-[0.85rem] leading-6 text-slate-600">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}