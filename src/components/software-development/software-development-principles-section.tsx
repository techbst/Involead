"use client";

import SectionReveal from "@/components/home/SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";

import { softwarePrinciples } from "./software-development-content";

export default function SoftwareDevelopmentPrinciplesSection() {
  return (
    <SectionReveal className="container py-10 sm:py-14">
      <section>
        <SectionHeader
          eyebrow="Why this structure works better"
          title="Cleaner components, stronger hierarchy, and a page design that finally sits naturally beside your other solution pages"
          description="The updated sections give you a more maintainable page and a more consistent visual experience. Future tweaks to one section no longer require touching a massive single-file build."
          maxWidth="4xl"
          descriptionWidth="3xl"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {softwarePrinciples.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-slate-200 bg-[#f8fbff] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)]"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-secondary shadow-sm">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
