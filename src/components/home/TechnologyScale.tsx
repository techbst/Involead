'use client';

import { Activity, Database, Gauge, Globe2, Layers3, RadioTower } from 'lucide-react';

import SectionReveal from './SectionReveal';

const stats = [
  { value: '450+', label: 'Enterprise Clients', icon: Globe2 },
  { value: '12 PB+', label: 'Data Processed Monthly', icon: Database },
  { value: '15+', label: 'Enterprise Tech Stacks', icon: Layers3 },
  { value: '67%', label: 'Average Efficiency Increase', icon: Gauge },
  { value: '98.7%', label: 'Prediction Accuracy', icon: Activity },
  { value: '24/7', label: 'Real-time Monitoring', icon: RadioTower },
];

const partners = ['AWS', 'Azure', 'Snowflake', 'dbt', 'Databricks'];

export default function TechnologyScale() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionReveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-slate-500">Technology at Scale</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,4.2rem)] font-bold leading-tight tracking-normal text-slate-950">
            Enterprise Infrastructure Powered by AI, Data & Automation
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Reliable platforms for high-volume data, production AI workloads, and continuous
            intelligence.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ value, label, icon: Icon }) => (
            <article
              key={label}
              className="group rounded-2xl border border-white/70 bg-gradient-to-br from-white via-cyan-50/80 to-sky-100/70 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-200/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <strong className="text-4xl font-bold text-slate-950">{value}</strong>
                  <p className="mt-4 text-sm font-semibold text-slate-600">{label}</p>
                </div>
                <Icon className="size-9 stroke-[1.4] text-cyan-500" />
              </div>
            </article>
          ))}
          <article className="group rounded-2xl border border-white/70 bg-gradient-to-br from-white via-cyan-50/80 to-sky-100/70 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-200/40 lg:col-span-3">
            <p className="text-sm font-semibold text-slate-500">Technology Partners</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700"
                >
                  {partner}
                </span>
              ))}
            </div>
          </article>
        </div>
      </SectionReveal>
    </section>
  );
}
