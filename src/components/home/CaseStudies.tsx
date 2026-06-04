'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import SectionReveal from './SectionReveal';

interface CaseStudy {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  image: string;
  metrics: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Sales & Retention Growth - Agentic AI Across 500+ Stores',
    industry: 'Retail',
    problem: 'Disconnected sales signals made local teams react late to demand shifts.',
    solution:
      'Built an agentic recommendation and forecasting layer across CRM, inventory, and campaign data.',
    results:
      'Improved store-level retention, reduced missed opportunities, and increased revenue confidence.',
    image:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80',
    metrics: ['+15-25% revenue lift', '-15-20% churn risk', '+25-35% repeat sales'],
  },
  {
    title: 'Predictive Maintenance Across Global Plants',
    industry: 'Manufacturing',
    problem: 'Unexpected downtime was increasing production losses and maintenance overtime.',
    solution:
      'Deployed streaming sensor analytics and predictive models for high-risk production assets.',
    results:
      'Maintenance teams moved from reactive response to prioritized, forecast-driven action.',
    image:
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80',
    metrics: ['41% downtime cut', '18% OEE increase', '9 months ROI'],
  },
  {
    title: 'Clinical Intelligence for Faster Care Decisions',
    industry: 'Healthcare',
    problem: 'Care coordinators lacked unified patient insights during time-sensitive reviews.',
    solution:
      'Integrated structured and unstructured data into a governed clinical intelligence workspace.',
    results: 'Teams accelerated reviews while improving consistency and audit readiness.',
    image:
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80',
    metrics: ['32% faster review', '94% accuracy', '24/7 visibility'],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = caseStudies[active];

  const move = (direction: number) => {
    setActive((value) => (value + direction + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2rem,4vw,4.2rem)] font-bold leading-tight tracking-normal">
            Proven Outcomes Across Modern Digital Enterprises
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            Practical transformation programs that connect AI strategy with operational results.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[420px] overflow-hidden rounded-2xl"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.article
              key={current.title}
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -34 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-cyan-300/40 bg-white p-7 text-slate-950 shadow-[0_0_0_8px_rgba(103,232,249,.15)] sm:p-9"
            >
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-700">
                {current.industry}
              </span>
              <h3 className="mt-5 max-w-3xl text-3xl font-bold leading-tight">{current.title}</h3>
              <div className="mt-7 grid gap-5 text-sm leading-7 text-slate-600">
                <p>
                  <strong className="text-slate-950">Problem:</strong> {current.problem}
                </p>
                <p>
                  <strong className="text-slate-950">Solution:</strong> {current.solution}
                </p>
                <p>
                  <strong className="text-slate-950">Results:</strong> {current.results}
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {current.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-xl bg-cyan-50 p-4 text-lg font-bold text-slate-950"
                  >
                    {metric}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => move(-1)}
                  className="grid size-11 place-items-center rounded-full border border-slate-200 transition hover:-translate-y-1 hover:border-cyan-300"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  onClick={() => move(1)}
                  className="grid size-11 place-items-center rounded-full bg-cyan-400 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
