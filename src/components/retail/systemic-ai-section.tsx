"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import ClipShape from "../ui/clip-shape";

const labels = [
  "Enterprise Context",
  "Agentic Workflows",
  "Decision Intelligence",
  "Business Outcomes",
] as const;

const positions = ["top-[8%]", "right-[2%]", "bottom-[8%]", "left-[2%]"] as const;

export default function SystemicAISection() {
  return (
    <section className="relative py-20 text-white ">
      <ClipShape />
      <div className="container relative z-10 mt-20 grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader
            eyebrow="Systemic AI Advantage"
            title="New Possibilities with Systemic AI"
            description="Empower teams with AI-driven intelligence to optimize every lever of growth with Systemic AI."
            textColor="black"
            align="left"
          />
          <div className="mt-8 space-y-5">
            <p className="!text-black">
              Agentic AI introduces a powerful paradigm, but its enterprise value depends on how effectively it is integrated.
            </p>
            <p className="!text-black">
              Systemic AI builds on this by offering a structured, context-driven approach to embedding intelligence across the organization-delivering scalable, reliable outcomes aligned with business goals.
            </p>
            <p className="!text-black ">
              With Systemic AI, leaders don&apos;t just use AI-they operationalize it and make it their own.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto grid aspect-square w-full max-w-lg place-items-center rounded-full bg-[radial-gradient(circle,rgba(95,176,194,.22),transparent_60%)]"
        >
          <motion.div
            className="absolute inset-[-3%] rounded-full border-2 border-dashed border-secondary/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-[12%] rounded-full border-2 border-dashed border-[#5fb0c2]/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute inset-[27%] rounded-full border-2 border-dashed border-white/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <span className="grid size-32 place-items-center rounded-full bg-secondary text-white shadow-[0_0_80px_rgba(95,176,194,.35)]">
            <div className="text-center">
              <BrainCircuit className="mx-auto size-10" />
              <span className="mt-1 block text-sm font-semibold">Systemic AI</span>
            </div>
          </span>
          {labels.map((text, index) => (
            <span
              key={text}
              className={cn(
                "absolute rounded-full border border-secondary/10 bg-secondary px-4 py-2 text-xs text-white",
                positions[index],
              )}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
