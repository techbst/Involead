"use client";

import SectionReveal from "@/components/home/SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";

import { softwareStackItems } from "./software-development-content";

export default function SoftwareDevelopmentStackSection() {
  return (
    <SectionReveal className="container py-10 sm:py-14">
      <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#0b2530_100%)] px-6 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(95,176,194,0.18),transparent_26%),radial-gradient(circle_at_82%_20%,rgba(122,156,255,0.16),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(95,176,194,0.08),transparent_32%)]" />
        <div className="relative z-10">
          <SectionHeader
            eyebrow="Modern software foundation"
            title="The stack decisions here now feel consistent with your broader theme while still speaking to serious engineering depth"
            description="Instead of a dark page with isolated rules, this section keeps the premium feel in a way that complements the rest of the site and highlights the product architecture story more clearly."
            textColor="white"
            maxWidth="4xl"
            descriptionWidth="3xl"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {softwareStackItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
              >
                <span className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  {item.category}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-sm text-white/80"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
