import type { Metadata } from 'next';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import SectionReveal from '@/components/home/SectionReveal';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact - InvoLead',
  description: 'Contact InvoLead for AI, data, and enterprise transformation projects.',
};

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] text-slate-950">
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(circle_at_20%_20%,rgba(95,176,194,0.2),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.95),transparent_24%)]" />
        <div className="container mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase text-secondary shadow-sm backdrop-blur">
            Contact us
          </p>
          <h1 className="mt-5 text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.95] tracking-tight">
            Let&apos;s build the next step of your AI and data roadmap
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Share the challenge, the goal, or the current bottleneck. We&apos;ll respond with a practical path forward rather than a generic pitch.
          </p>
        </div>
      </section>

      <SectionReveal className="container mx-auto pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">First Name</span>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary focus:bg-white"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Last Name</span>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Work Email</span>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">What do you want to build?</span>
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary focus:bg-white"
                />
              </label>

              <Button className="w-full rounded-full bg-primary py-6">
                Send inquiry
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Reach out
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                We usually respond within one business day
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <Mail className="size-5 text-[#5fb0c2]" />
                  <span className="text-sm text-white/80">support@purea.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <Phone className="size-5 text-[#5fb0c2]" />
                  <span className="text-sm text-white/80">+1 (555) 000-1234</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <MapPin className="size-5 text-[#5fb0c2]" />
                  <span className="text-sm text-white/80">123 Tech Park, Innovation City</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Need a quicker start?
              </p>
              <p className="mt-4 text-slate-600">
                Jump straight to the services pages to explore the exact transformation tracks we can support.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-full px-6 py-6">
                  <Link href="/our-solutions">Explore services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
