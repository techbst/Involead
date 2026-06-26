"use client";

import SectionReveal from "@/components/home/SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";

import { softwareProcessSteps } from "./software-development-content";

export default function SoftwareDevelopmentProcessSection() {
  return (
    <SectionReveal className="container py-10 sm:py-14">
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            align="left"
            eyebrow="Delivery process"
            title="From discovery to release, every step is its own clear component and part of one connected build system"
            description="The earlier page packed too much styling and logic into one file. This refactor gives each section one responsibility while keeping the content flow stronger and easier to maintain."
            maxWidth="4xl"
            descriptionWidth="3xl"
          />
        </div>

        <div className="grid gap-4">
          {softwareProcessSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex items-center gap-4 sm:w-44 sm:flex-col sm:items-start sm:gap-5">
                  <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                    {step.step}
                  </span>
                  <div className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-white">
                    <step.icon className="size-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
