"use client";

import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroPills = [
  "Web apps",
  "Mobile apps",
  "Desktop platforms",
  "Secure SDLC",
  "AI-ready products",
];

const heroHighlights = [
  {
    title: "Product-led delivery",
    description: "Engineering, UX, and business goals stay aligned from discovery to release.",
    icon: Code2,
  },
  {
    title: "Built for live operations",
    description: "Release planning, monitoring, and resilience are part of the first build, not the post-launch scramble.",
    icon: ShieldCheck,
  },
  {
    title: "Ready for what comes next",
    description: "Your platform is structured to support automation, AI features, and evolving user workflows.",
    icon: Sparkles,
  },
];

export default function SoftwareDevelopmentHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_58%,#ffffff_100%)] pt-30 pb-18 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#5fb0c2]/16 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#7a9cff]/14 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#90e6cb]/16 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full border border-secondary/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary shadow-sm backdrop-blur"
            >
              Software Development
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 max-w-5xl text-[clamp(2.9rem,6vw,5.9rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950"
            >
              Software design and engineering that feels aligned with the rest of your brand and ready for scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              We build secure, modern software across web, mobile, and desktop with a delivery model that keeps product quality, speed, and operational readiness moving together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild>
                <Link href="/contact-us">
                  Start your build
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary/15 bg-white/75 backdrop-blur">
                <Link href="/our-solutions">Explore all solutions</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(15,23,42,0.98)_0%,rgba(15,23,42,0.88)_55%,rgba(11,37,48,0.92)_100%)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.22)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(95,176,194,0.22),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(122,156,255,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(95,176,194,0.12),transparent_34%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
                      Delivery snapshot
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                      Product systems built for momentum
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    {["bg-rose-400", "bg-amber-400", "bg-emerald-400"].map((color) => (
                      <span key={color} className={cn("h-3 w-3 rounded-full", color)} />
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-cyan-200">
                          <item.icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
