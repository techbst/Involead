"use client";

import SectionReveal from "@/components/home/SectionReveal";

import { softwareMetrics } from "./software-development-content";

export default function SoftwareDevelopmentMetricsSection() {
  return (
    <SectionReveal className="container -mt-6 pb-8 sm:-mt-10 sm:pb-12">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {softwareMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)]"
          >
            <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{metric.value}</p>
            <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">{metric.label}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{metric.description}</p>
          </article>
        ))}
      </section>
    </SectionReveal>
  );
}
