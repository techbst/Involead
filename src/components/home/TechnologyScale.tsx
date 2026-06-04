"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Gauge,
  Globe2,
  Layers3,
  Network,
  RadioTower,
} from "lucide-react";

import SectionReveal from "./SectionReveal";

const stats = [
  { value: "450+", label: "Enterprise Clients Served", icon: Globe2 },
  { value: "12.8PB+", label: "Data Processed Monthly", icon: Database },
  { value: "15+", label: "Enterprise Tech Stacks Supported", icon: Layers3 },
  { value: "67%", label: "Average Efficiency Increase", icon: Gauge },
  { value: "98.7%", label: "Prediction Accuracy Rate", icon: Activity },
  { value: "24/7", label: "Real-Time Monitoring Active", icon: RadioTower },
];

const partners = ["n8n", "TensorFlow", "OpenAI"];

export default function TechnologyScale() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <SectionReveal className="mx-auto container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[24px] font-semibold text-slate-950">
            Technology at Scale
          </p>
          <h2 className="mt-9 text-[clamp(3rem,5vw,5.8rem)] font-bold leading-[1.14] tracking-normal text-slate-950">
            Enterprise Infrastructure Powered by AI, Data & Automation
          </h2>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1fr_1fr_1.05fr] lg:grid-rows-2">
          {stats.slice(0, 2).map(({ value, label, icon: Icon }, index) => (
            <motion.article
              key={label}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative min-h-[280px] rounded-[32px] bg-[#eef8fb] p-9 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/40 ${
                index === 1 ? "lg:col-span-2" : ""
              }`}
            >
              <strong className="text-[48px] font-bold leading-none text-black">
                {value}
              </strong>
              <Icon className="absolute right-10 top-10 size-20 stroke-[1.4] text-[#5fb0c2]" />
              <p className="absolute bottom-10 left-9 max-w-[300px] text-[26px] font-medium leading-snug text-black/65">
                {label}
              </p>
            </motion.article>
          ))}
          <motion.article
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative min-h-[640px] rounded-[32px] bg-[url('/img/company.png')] p-9 lg:row-span-2"
          >
            <strong className="text-[48px] font-bold leading-none text-black">
              {stats[2].value}
            </strong>
            <p className="mt-12 max-w-[260px] text-[28px] font-medium leading-snug text-black/65">
              {stats[2].label}
            </p>
            <Network className="absolute right-10 top-10 size-20 stroke-[1.4] text-[#5fb0c2]" />
            <div className="absolute inset-x-0 bottom-0 rounded-b-[32px] bg-transparent px-8 py-8">
              <div className="flex flex-wrap items-center justify-between gap-5 text-[28px] font-bold text-slate-900">
                {partners.map((partner, index) => (
                  <span
                    key={partner}
                    className={index === 1 ? "text-slate-800" : "text-black"}
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
          {stats.slice(3).map(({ value, label, icon: Icon }) => (
            <motion.article
              key={label}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative min-h-[280px] rounded-[32px] bg-[#eef8fb] p-9 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/40"
            >
              <strong className="text-[48px] font-bold leading-none text-black">
                {value}
              </strong>
              <Icon className="absolute right-10 top-10 size-20 stroke-[1.4] text-[#5fb0c2]" />
              <p className="absolute bottom-10 left-9 max-w-[320px] text-[26px] font-medium leading-snug text-black/65">
                {label}
              </p>
            </motion.article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
