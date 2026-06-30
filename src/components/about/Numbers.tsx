"use client";

import { motion } from "framer-motion";

import AnimatedNumber from "@/components/ui/animated-number";

const stats = [
  { value: "8+", label: "Years of expertise" },
  { value: "50+", label: "Data professionals" },
  { value: "12+", label: "Enterprise client" },
  { value: "100%", label: "Data security guaranteed" },
];

const dividers = [
  "",
  "border-l border-slate-100",
  "border-t border-slate-100 sm:border-t-0 sm:border-l",
  "border-l border-t border-slate-100 sm:border-t-0",
];

export default function Numbers() {
  return (
    <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid mt-16 grid-cols-2 overflow-hidden rounded-[1.75rem] border border-secondary bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex flex-col items-center gap-1.5 px-4 py-7 text-center ${dividers[index]}`}>
              <span className="text-3xl font-bold text-secondary md:text-4xl">
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="text-xs font-medium text-slate-500 md:text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
  );
}
