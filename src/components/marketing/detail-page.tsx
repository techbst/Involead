"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/home/SectionReveal";
import type { MarketingPage } from "@/content/marketing-pages";

type DetailPageProps = MarketingPage;

const fadeStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function MarketingDetailPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  accent,
  badge,
  stats,
  highlights,
  steps,
  outcomes,
  cta,
  related,
}: DetailPageProps) {
  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_32%,#ffffff_100%)] text-slate-950">
      <section className="relative pt-28 pb-20">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[32rem] opacity-90"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${accent}24, transparent 28%), radial-gradient(circle at 80% 10%, #ffffff, transparent 22%), linear-gradient(135deg, ${accent}12, transparent 55%)`,
          }}
        />

        <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={fadeStagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary shadow-sm backdrop-blur"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[clamp(2.7rem,6vw,5.8rem)] font-semibold leading-[0.96] tracking-tight text-slate-950"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              {description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-primary px-6 py-6">
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 py-6">
                <Link href="/contact-us">Book a discovery call</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/85 px-5 py-4 shadow-sm"
                >
                  <strong className="block text-2xl font-semibold text-slate-950">
                    {stat.value}
                  </strong>
                  <span className="mt-1 block text-sm text-slate-600">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="absolute -left-8 top-10 h-24 w-24 rounded-full blur-3xl"
              style={{ backgroundColor: `${accent}45` }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_24px_90px_rgba(15,23,42,0.16)]">
              <div className="absolute left-6 top-6 z-10 rounded-full bg-slate-950/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white">
                {badge}
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={900}
                  height={820}
                  className="h-[34rem] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal className="container mx-auto py-6">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex size-12 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: accent }}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionReveal>

      <SectionReveal className="container mx-auto py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Delivery Flow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            A simple path from discovery to measurable value
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex size-12 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionReveal>

      <SectionReveal className="container mx-auto py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Outcome Focus
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
              Built for adoption, not just presentation
            </h2>
            <div className="mt-8 grid gap-4">
              {outcomes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-white"
                      style={{ backgroundColor: accent }}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              Related Pages
            </p>
            <div className="mt-5 space-y-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 text-slate-950 transition-all duration-200 hover:border-secondary/30 hover:bg-slate-50"
                >
                  <span className="font-medium">{item.label}</span>
                  <ArrowRight className="size-4 text-secondary" />
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(95,176,194,0.15),rgba(255,255,255,0.7))] p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 text-secondary" />
                <p className="text-sm leading-6 text-slate-700">
                  Every page here is built to match your current theme while adding
                  motion, stronger visual hierarchy, and better conversion flow.
                </p>
              </div>
              <div className="mt-6">
                <Button asChild variant="rounded-arrow">
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
