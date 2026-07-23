"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
type SectionHeaderWidth = "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
type SectionHeaderTone = "dark" | "light" | "muted";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  maxWidth?: SectionHeaderWidth;
  descriptionWidth?: SectionHeaderWidth;
  tone?: SectionHeaderTone;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  textColor?: string;
  descriptionmaxWidth?: SectionHeaderWidth;
}

const widthClasses: Record<SectionHeaderWidth, string> = {
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

const toneClasses: Record<SectionHeaderTone, { title: string; eyebrow: string; description: string }> = {
  dark: {
    title: "text-slate-950",
    eyebrow: "text-secondary",
    description: "text-slate-600",
  },
  light: {
    title: "text-white",
    eyebrow: "text-white/70",
    description: "text-white/75",
  },
  muted: {
    title: "text-slate-900",
    eyebrow: "text-slate-500",
    description: "text-slate-500",
  },
};
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export function SectionHeader({
  title,
  eyebrow,
  description,
  align = "center",
  maxWidth = "3xl",
  descriptionWidth,
  tone = "dark",
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
  textColor,
  descriptionmaxWidth,
}: SectionHeaderProps) {
  const colors = toneClasses[tone];
  const resolvedDescriptionWidth = descriptionWidth ?? descriptionmaxWidth ?? "2xl";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={cn(
        "mb-0",
        widthClasses[maxWidth],
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <motion.div variants={item}
          className={cn(
            "text-[14px] font-medium uppercase py-2 !px-4 bg-[#e4fbff] inline-block rounded-[50px] !text-[#417f8c] mb-3",
             textColor === "black" ? "text-black" : textColor === "white" ? "text-white" :colors.title,
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </motion.div>
      ) : null}
      <motion.h2 variants={item}
        className={cn(
          "capitalize",
          textColor === "black" ? "text-black" : textColor === "white" ? "text-white" : colors.title,
          titleClassName,
        )}
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p variants={item}
          className={cn(
            "mt-3 text-[15px] leading-7 sm:text-lg",
            widthClasses[resolvedDescriptionWidth],
            align === "center" ? "mx-auto" : "",
            textColor === "black" ? "!text-slate-800" : textColor === "white" ? "!text-white" : colors.description,
            descriptionClassName,
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
