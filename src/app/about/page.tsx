import type { Metadata } from 'next';
import { ArrowRight, Sparkles, Target, Users2, Workflow } from 'lucide-react';

import SectionReveal from '@/components/home/SectionReveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - InvoLead',
  description: 'About InvoLead, mission, values, and how we work with teams.',
};

const values = [
  {
    title: 'Clarity first',
    description: 'We make complex ideas feel actionable and measurable.',
    icon: Target,
  },
  {
    title: 'Built for adoption',
    description: 'Everything should fit how real teams operate every day.',
    icon: Workflow,
  },
  {
    title: 'Human-centered AI',
    description: 'The best systems amplify people, not replace accountability.',
    icon: Users2,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] text-slate-950">
      <section className="relative pt-28 pb-18">
        <div className="absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(circle_at_20%_20%,rgba(95,176,194,0.2),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.95),transparent_24%)]" />
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary shadow-sm backdrop-blur">
              About InvoLead
            </p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.95] tracking-tight">
              We build AI and data experiences that feel useful, fast, and trustworthy
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Our team helps enterprises turn strategy into systems, so each initiative creates real operating value instead of just another dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-primary px-6 py-6">
                <Link href="/contact-us">
                  Talk to us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 py-6">
                <Link href="/our-solutions">View services</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_24px_90px_rgba(15,23,42,0.14)]">
            <div className="grid gap-4 rounded-[1.5rem] bg-slate-950 p-8 text-white">
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-[#5fb0c2]" />
                <span className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60">
                  Our mission
                </span>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/80">
                To make enterprise transformation feel less like a big-bang project and more like a series of smart, measurable steps.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <strong className="block text-2xl font-semibold">AI</strong>
                  <span className="mt-1 block text-sm text-white/65">Practical copilots</span>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <strong className="block text-2xl font-semibold">Data</strong>
                  <span className="mt-1 block text-sm text-white/65">Reliable foundations</span>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <strong className="block text-2xl font-semibold">Ops</strong>
                  <span className="mt-1 block text-sm text-white/65">Adoption focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal className="container mx-auto pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#5fb0c2] text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {String(index + 1).padStart(2, '0')}. {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </div>
  );
}
