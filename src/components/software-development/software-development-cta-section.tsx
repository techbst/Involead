"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";

export default function SoftwareDevelopmentCtaSection() {
  return (
    <SectionReveal className="container py-10 pb-18 sm:py-14 sm:pb-22">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,#0f172a_0%,#0b2530_100%)] px-6 py-10 text-white shadow-[0_24px_90px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(95,176,194,0.16),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(122,156,255,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(95,176,194,0.08),transparent_32%)]" />
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Ready to build
            </span>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Let’s turn the software development page into a stronger sales surface and a cleaner code surface.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              The design is now aligned with your updated theme, and each section is separated so future content and design changes are much easier to manage.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-white text-slate-950 hover:bg-white/90 hover:text-slate-950">
              <Link href="/contact-us">
                Talk to our team
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              <Link href="/our-solutions">Browse more solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
