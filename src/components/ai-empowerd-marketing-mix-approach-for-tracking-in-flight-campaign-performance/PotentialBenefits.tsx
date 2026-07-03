"use client";

import { motion } from "framer-motion";
import { BarChart3, CircleDollarSign, LineChart, PieChart } from "lucide-react";

const benefits = [
  { value: "5%-15%", label: "Improve ROI annually", icon: LineChart, color: "#5fb0c2" },
  { value: "3%-10%", label: "Reduce media cost", icon: CircleDollarSign, color: "#ff9255" },
  { value: "2%-10%", label: "Improve Revenue or Footfalls", icon: BarChart3, color: "#2563eb" },
  { value: "Robust", label: "Media planning for Brands and Categories", icon: PieChart, color: "#7c3aed" },
];

export default function PotentialBenefits() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20">
      <div className="container relative mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#237487]">Potential Benefits</p>
          <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl">Measurable outcomes for smarter media planning</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">Measurable outcomes for media efficiency, revenue growth, and planning accuracy.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)]"
              >
                <div className="absolute -right-12 -top-12 size-36 rounded-full opacity-10" style={{ backgroundColor: benefit.color }} />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl text-white" style={{ backgroundColor: benefit.color }}>
                    <Icon className="size-6" />
                  </span>
                  <ProgressRing color={benefit.color} index={index} />
                </div>
                <p className="relative mt-8 bg-[linear-gradient(135deg,#0f172a,#237487)] bg-clip-text text-4xl font-bold text-transparent">{benefit.value}</p>
                <h3 className="relative mt-3 text-base font-semibold leading-7 text-slate-700">{benefit.label}</h3>
                <div className="relative mt-6 h-2 rounded-full bg-slate-100">
                  <motion.span
                    initial={{ width: "20%" }}
                    whileInView={{ width: `${72 + index * 6}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.1 }}
                    className="block h-full rounded-full"
                    style={{ backgroundColor: benefit.color }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProgressRing({ color, index }: { color: string; index: number }) {
  const values = [82, 68, 74, 88];
  const value = values[index] ?? 75;
  const dash = 157 - (157 * value) / 100;

  return (
    <svg viewBox="0 0 60 60" className="size-14">
      <circle cx="30" cy="30" r="25" fill="none" stroke="#e2e8f0" strokeWidth="6" />
      <motion.circle
        cx="30"
        cy="30"
        r="25"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="157"
        initial={{ strokeDashoffset: 157 }}
        whileInView={{ strokeDashoffset: dash }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.12 }}
      />
    </svg>
  );
}
