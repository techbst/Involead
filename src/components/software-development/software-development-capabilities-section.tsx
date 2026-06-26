"use client";

import SectionReveal from "@/components/home/SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";

import { softwareCapabilities } from "./software-development-content";

export default function SoftwareDevelopmentCapabilitiesSection() {
  return (
    <SectionReveal className="container py-10 sm:py-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-6 py-10 shadow-[0_20px_70px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(95,176,194,0.12),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(122,156,255,0.12),transparent_22%)]" />
        <div className="relative z-10">
          <SectionHeader
            eyebrow="What we build into every engagement"
            title="A software delivery approach that matches the updated site theme and still feels product-grade"
            description="This page now follows the same visual language as the rest of your solution pages: lighter surfaces, structured cards, shared spacing, and clearer component boundaries."
            maxWidth="4xl"
            descriptionWidth="3xl"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {softwareCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
