"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  CircleDollarSign,
  Database,
  Network,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const microNodes = [
  { label: "Data", className: "left-[15%] top-[22%]", icon: Database },
  { label: "Policy", className: "right-[15%] top-[22%]", icon: ShieldCheck },
  { label: "Agents", className: "left-[12%] bottom-[28%]", icon: Workflow },
  { label: "Decisions", className: "right-[12%] bottom-[28%]", icon: Target },
  { label: "ROI", className: "left-1/2 top-[7%] -translate-x-1/2", icon: CircleDollarSign },
  { label: "Trust", className: "left-1/2 bottom-[8%] -translate-x-1/2", icon: Network },
];

export default function ArchitectureGraphicVariantFive() {
  return (
    <div className="relative mx-auto grid min-h-[360px] w-full max-w-[650px] place-items-center overflow-hidden sm:min-h-[460px] lg:min-h-[540px]">    

      <motion.div
        className="absolute size-[280px] rounded-full border border-dashed border-[#5fb0c2]/35 sm:size-[360px] lg:size-[430px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute size-[210px] rounded-full border border-dashed border-slate-300 sm:size-[270px] lg:size-[315px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute size-[150px] rounded-full border border-[#5fb0c2]/25 sm:size-[180px] lg:size-[205px]"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute h-px w-[280px] bg-gradient-to-r from-transparent via-[#5fb0c2]/35 to-transparent sm:w-[360px] lg:w-[430px]" />
      <div className="absolute h-[280px] w-px bg-gradient-to-b from-transparent via-[#5fb0c2]/35 to-transparent sm:h-[360px] lg:h-[430px]" />

      {microNodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className={`absolute z-20 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-2.5 py-2 text-[11px] font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:gap-2 sm:px-3 sm:text-xs ${node.className}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.08 },
              y: {
                duration: 3.8 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Icon className="size-3.5 text-[#5fb0c2] sm:size-4" />
            {node.label}
          </motion.div>
        );
      })}

      <motion.div
        className="absolute z-30 size-[280px] rounded-full sm:size-[360px] lg:size-[430px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
        {[0, 1, 2].map((item) => (
            <span
            key={item}
            className="absolute size-2 rounded-full bg-[#5fb0c2] shadow-[0_0_18px_rgba(95,176,194,0.9)]"
            style={{
                left: "50%",
                top: "0%",
                transform: `translate(-50%, -50%) rotate(${item * 120}deg)`,
                transformOrigin: "0 clamp(140px, 32vw, 215px)",
            }}
            />
        ))}
        </motion.div>

        <motion.div
        className="absolute z-30 size-[210px] rounded-full sm:size-[270px] lg:size-[315px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
        {[0, 1, 2].map((item) => (
            <span
            key={item}
            className="absolute size-2 rounded-full bg-[#5fb0c2] shadow-[0_0_18px_rgba(95,176,194,0.9)]"
            style={{
                left: "50%",
                top: "0%",
                transform: `translate(-50%, -50%) rotate(${item * 120}deg)`,
                transformOrigin: "0 clamp(105px, 24vw, 157.5px)",
            }}
            />
        ))}
        </motion.div>

      <motion.div
        className="relative z-30 grid size-32 place-items-center rounded-full border border-[#5fb0c2]/30 bg-white shadow-[0_25px_90px_rgba(95,176,194,0.35)] sm:size-36 lg:size-40"
        animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-4 rounded-full bg-[#5fb0c2]/10" />
        <div className="relative text-center">
          <BrainCircuit className="mx-auto size-8 text-[#5fb0c2]" />
          <p className="mt-1 text-base font-bold text-slate-950">
            Systemic
          </p>
          <p className="mt-0 !text-[14px] font-medium text-slate-500">
            Architecture
          </p>
        </div>
      </motion.div>

    </div>
  );
}
