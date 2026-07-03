"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, Gauge, SlidersHorizontal, Target, Workflow } from "lucide-react";
import { SectionHeader } from "../ui/section-header";

const steps = [
  "Uses advanced Machine Learning approaches to estimate the impact of marketing tactics on Sales KPIs.",
  "Applies Structural Equation Model (SEM) and Bayesian Network Model to establish interaction impact across media channels and campaigns.",
  "Estimates in-flight campaign performance and creates analytics-driven real-time media plans for better revenue and conversion.",
  "Provides UI-based scenario planning for What-if Scenarios, Spend Based Optimizations, and Goal Based Optimization scenarios.",
  "Helps identify week-level optimal spending or impressions at marketing channel level.",
];

export default function HowInvoLeadHelps() {
  return (
    <section className="overflow-hidden bg-secondary/15 py-20">
      <div className="container mx-auto">
        <SectionHeader 
              eyebrow="How InvoLead Helps"
              title="AI-powered modeling, optimization, and planning"
              description="AI-powered modeling, optimization, and planning for smarter marketing decisions."
              maxWidth="5xl"
              align="center"
            />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            
            

            <div className="mt-9 grid gap-4">
              {steps.map((step, index) => (
                <motion.article
                  key={step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 size="16" />
                    <p className="text-sm leading-7 text-slate-700">{step}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <ScenarioPlannerDashboard />
        </div>
      </div>
    </section>
  );
}

function ScenarioPlannerDashboard() {
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    let context: { revert: () => void } | undefined;

    import("gsap").then(({ gsap }) => {
      if (!active || !dashboardRef.current) return;

      context = gsap.context(() => {
        gsap.to(".planner-node", {
          scale: 1.18,
          opacity: 0.95,
          duration: 1.6,
          stagger: 0.22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".planner-value", {
          x: 18,
          duration: 2.2,
          stagger: 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, dashboardRef);
    });

    return () => {
      active = false;
      context?.revert();
    };
  }, []);

  return (
    <motion.div
      ref={dashboardRef}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-[640px]"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(95,176,194,0.24),transparent_64%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/72 p-5 shadow-[0_34px_100px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5fb0c2]">Scenario Planner</p>
              <h3 className="mt-2 text-2xl font-bold">Budget optimization cockpit</h3>
            </div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">Goal: Max ROI</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {[
                { label: "Search", value: "72%" },
                { label: "Social", value: "58%" },
                { label: "Retail Media", value: "84%" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="mb-3 flex items-center justify-between text-xs font-semibold text-white/70">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/12">
                    <span className="planner-value block h-full w-[68%] rounded-full bg-[linear-gradient(90deg,#5fb0c2,#ff9255)]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative min-h-72 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[linear-gradient(135deg,#5fb0c2,#2563eb_55%,#ff9255)] shadow-[0_0_70px_rgba(95,176,194,0.45)]">
                <BrainCircuit className="size-11" />
              </div>
              {[
                { icon: Target, className: "left-8 top-8" },
                { icon: SlidersHorizontal, className: "right-8 top-12" },
                { icon: Workflow, className: "bottom-10 left-12" },
                { icon: Gauge, className: "bottom-8 right-10" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <span
                    key={index}
                    className={`planner-node absolute ${item.className} grid size-13 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#5fb0c2]`}
                  >
                    <Icon className="size-6" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["What-if scenarios", "Spend optimization", "Goal optimization"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
              <CheckCircle2 className="size-4 text-[#237487]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
