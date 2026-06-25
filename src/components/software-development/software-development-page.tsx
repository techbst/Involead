"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Blocks,
  Cloud,
  Code2,
  Cpu,
  Gauge,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import SoftwareDevelopmentPlatforms from "@/components/software-development/software-development-platforms";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessStep = {
  label: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

type StackCard = {
  title: string;
  description: string;
  image: string;
};

type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type DesktopFeature = {
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    title: "Architecture & delivery",
    description:
      "Great systems mirror the shape of the business. We align architecture to your users, workflows, risk, and product goals so what you ship stays coherent as it grows.",
    icon: Blocks,
  },
  {
    title: "Performance & scale",
    description:
      "Applications are tuned for responsiveness, throughput, and operational clarity, helping teams launch quickly without compromising runtime resilience.",
    icon: Gauge,
  },
  {
    title: "Security & compliance",
    description:
      "Threat modeling, secure SDLC, secrets hygiene, and audit-ready controls are woven into engineering decisions instead of appended at release time.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-surface UX",
    description:
      "We deliver consistent experiences across web, mobile, desktop, and internal tools so your product feels unified wherever people use it.",
    icon: PanelsTopLeft,
  },
];

const processSteps: ProcessStep[] = [
  {
    label: "Step 01",
    title: "Discovery & Planning",
    description:
      "We define business goals, workflows, technical constraints, and measurable outcomes before architecture choices are locked in.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    icon: Layers3,
  },
  {
    label: "Step 02",
    title: "Design & Development",
    description:
      "We build your product in agile delivery cycles with frontend and backend moving together, supported by continuous review and testing.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    icon: PanelsTopLeft,
  },
  {
    label: "Step 03",
    title: "Quality & Hardening",
    description:
      "We strengthen the product through test coverage, edge-case validation, observability, and performance tuning before launch pressure arrives.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    icon: Code2,
  },
  {
    label: "Step 04",
    title: "Release",
    description:
      "CI/CD, environment controls, monitoring, and rollback planning keep releases smooth and low-risk, even in business-critical systems.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    icon: Sparkles,
  },
];

const stackCards: StackCard[] = [
  {
    title: "AI-Native Architecture",
    description:
      "We build intelligent capabilities into the core product so interfaces and workflows adapt to context and user behavior.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Big Data & Analytics",
    description:
      "Pipelines and product telemetry combine to deliver real-time insight, predictive signals, and measurable usage intelligence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Multi-Cloud Infrastructure",
    description:
      "Cloud-agnostic delivery across modern platforms gives teams resilience, portability, and room to scale globally with confidence.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Real-Time Communication",
    description:
      "Streaming dashboards, collaborative interfaces, and connected-device flows stay fast with event-driven system design.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Cross-Platform Engineering",
    description:
      "Unified product thinking across web, mobile, and desktop reduces delivery drag while preserving a consistent user experience.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "DevOps Excellence",
    description:
      "Release pipelines, runtime hardening, and observability keep systems stable under traffic while teams continue shipping fast.",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=85",
  },
];

const principles: Principle[] = [
  {
    title: "Security-First Engineering",
    description:
      "Compliance, data protection, and operational safety are engineered in from the first sprint rather than treated as release-phase tasks.",
    icon: ShieldCheck,
  },
  {
    title: "Measurable Value",
    description:
      "Every build is tied to adoption, performance, and business outcomes so the software proves its value beyond launch day.",
    icon: Gauge,
  },
  {
    title: "Human-Centered Intelligence",
    description:
      "We design software that helps people move faster with more confidence instead of hiding decisions behind unnecessary complexity.",
    icon: Cpu,
  },
];

const webShowcases = [
  {
    title: "Overview",
    subtitle: "Eval KPIs, charts & cohorts",
    metrics: ["+24% pipeline velocity", "13 live model evaluations", "6 active experiments"],
  },
  {
    title: "Live Operations",
    subtitle: "Events, approvals & handoffs",
    metrics: ["1,284 tasks synced", "19 blocked flows cleared", "4.8 min response time"],
  },
  {
    title: "Enterprise Grid",
    subtitle: "Virtualized data at scale",
    metrics: ["2.4M rows indexed", "Sub-second filters", "Role-aware exports"],
  },
];

const mobileShowcases = [
  {
    title: "Marketing & analytics",
    subtitle: "Growth",
    stats: ["ROAS +18%", "CTR 4.3%", "12 active campaigns"],
  },
  {
    title: "DocLens Agent",
    subtitle: "Doc scan",
    stats: ["1,280 scans", "98% extraction", "7-sec average review"],
  },
];

const desktopFeatures: DesktopFeature[] = [
  {
    title: "Cross-platform shells",
    description:
      "Electron, Tauri, .NET, or Qt chosen for your performance and integration needs.",
  },
  {
    title: "Installer & auto-update",
    description:
      "Signed installers and staged auto-updates for predictable, low-friction releases.",
  },
  {
    title: "Offline & local-first",
    description:
      "Local caching and background sync keep workflows responsive during network loss.",
  },
  {
    title: "System integration",
    description:
      "Native menus, trays, notifications, and device hooks per operating system.",
  },
  {
    title: "Security hardening",
    description:
      "Code signing, sandboxing, CSP, and secure secrets handling aligned to enterprise baselines.",
  },
  {
    title: "Accessibility & polish",
    description:
      "Keyboard-first UX, screen reader support, and HiDPI polish for audit-ready quality.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const activeTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

function SectionFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`shape-style-1 relative overflow-hidden border border-primary/10 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function HeroSection({
  capabilityIndex,
  setCapabilityIndex,
}: {
  capabilityIndex: number;
  setCapabilityIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const activeCapability = capabilities[capabilityIndex];

  return (
    <section
      id="software-development-hero"
      className="relative isolate flex min-h-[calc(100svh-5.25rem)] flex-col overflow-hidden pt-24 sm:min-h-[calc(100svh-6rem)] sm:pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[min(92vw,420px)] w-[min(92vw,420px)] -translate-x-1/2 rounded-full bg-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-[min(35%,180px)] bottom-[8%] h-[min(70vw,320px)] w-[min(70vw,320px)] rounded-full bg-cyan-500/10 blur-[72px]" />
      <div className="pointer-events-none absolute -left-[min(25%,120px)] top-[42%] h-[min(55vw,240px)] w-[min(55vw,240px)] rounded-full bg-sky-400/10 blur-[64px]" />

      <div className="container relative z-10 flex flex-1 flex-col justify-center py-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="relative min-w-0 shrink-0">
            <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] select-none text-[clamp(5rem,26vw,11rem)] font-light leading-none text-primary/8">
              &ldquo;
            </span>
            <h1 className="relative mx-auto max-w-5xl text-[clamp(2.7rem,7vw,6.25rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-slate-950">
              Engineering{" "}
              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                fast,
              </span>{" "}
              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                secure
              </span>{" "}
              products that{" "}
              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                scale
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-lg"
          >
            We partner from discovery through production: architecture,
            implementation, hardening, and operations, so your teams ship
            reliable software on web, mobile, and desktop without sacrificing
            speed or security.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 grid max-w-5xl gap-8 text-left sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-10"
          >
            <div className="flex w-full flex-col items-center gap-3 sm:max-w-[240px] sm:items-start">
              <button
                type="button"
                onClick={() =>
                  setCapabilityIndex((value) => (value + 1) % capabilities.length)
                }
                aria-label="Rotate to next capability"
                className="relative rounded-xl transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <div className="pointer-events-none absolute left-1/2 top-[78%] z-0 h-12 w-[165%] max-w-[240px] -translate-x-1/2 rounded-[100%] bg-slate-900/20 blur-3xl sm:top-[76%] sm:h-14 sm:max-w-[280px]" />
                <div className="pointer-events-none absolute left-1/2 top-[80%] z-0 h-6 w-[55%] max-w-[100px] -translate-x-1/2 rounded-[100%] bg-slate-900/35 blur-md sm:max-w-[120px]" />
                <div className="relative z-10 mx-auto flex items-center justify-center px-5 pb-10 pt-6 [perspective:1100px] sm:px-7 sm:pb-12 sm:pt-8">
                  <motion.div
                    animate={{ rotateX: -17, rotateY: 20 + capabilityIndex * 90 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-32 w-32 [transform-style:preserve-3d]"
                  >
                    {capabilities.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-sm border border-slate-400/45 bg-gradient-to-br from-white via-slate-50 to-slate-200/95 p-2 text-center shadow-[0_18px_36px_-8px_rgba(15,23,42,0.35),0_8px_16px_-4px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.92)] [backface-visibility:hidden]"
                          style={{ transform: `rotateY(${index * 90}deg) translateZ(64px)` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-transparent to-slate-900/10" />
                          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-1 px-1 pb-5 pt-0.5">
                            <Icon className="h-4 w-4 text-primary drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] sm:h-[1.125rem] sm:w-[1.125rem]" />
                            <span className="text-balance text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-slate-800 sm:text-[10px] sm:tracking-[0.16em]">
                              {item.title}
                            </span>
                          </div>
                          <div className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-slate-900/30 ring-1 ring-inset ring-slate-500/40">
                            <div className="h-full w-full bg-gradient-to-r from-primary via-sky-500 to-cyan-500" />
                          </div>
                        </div>
                      );
                    })}
                    <div
                      className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-primary/35 bg-gradient-to-br from-primary/35 via-sky-400/25 to-cyan-500/30 [backface-visibility:hidden]"
                      style={{ transform: "rotateX(90deg) translateZ(64px)" }}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-slate-500/40 bg-gradient-to-br from-slate-300 via-slate-400/95 to-slate-500 [backface-visibility:hidden]"
                      style={{ transform: "rotateX(-90deg) translateZ(64px)" }}
                    />
                  </motion.div>
                </div>
              </button>

              <div
                className="flex w-full max-w-[9.5rem] gap-1.5 sm:max-w-none"
                role="tablist"
                aria-label="Choose capability"
              >
                {capabilities.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={capabilityIndex === index}
                    onClick={() => setCapabilityIndex(index)}
                    className={`h-1.5 min-w-0 flex-1 rounded-full transition-colors ${
                      capabilityIndex === index
                        ? "bg-primary"
                        : "bg-slate-300/80 hover:bg-slate-400/90"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative flex min-h-0 min-w-0 items-center py-1 sm:py-0" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={activeTransition}
                  className="flex w-full min-w-0 flex-col justify-center"
                >
                  <span className="sr-only">{activeCapability.title}</span>
                  <p className="min-w-0 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {activeCapability.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center pb-1 pt-3">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("software-development-platforms")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex flex-col items-center gap-1.5 text-slate-900"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 transition-colors group-hover:text-primary sm:text-xs">
                See where we build
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-900 text-white shadow-lg transition-colors group-hover:border-primary group-hover:bg-primary sm:h-[3.25rem] sm:w-[3.25rem]">
                <ArrowDown className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WebApplicationsDetailSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = webShowcases[activeTab];

  return (
    <SectionReveal className="container py-16 sm:py-20">
      <div
        id="web-applications-detail"
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] lg:gap-x-8"
      >
        <div>
          <SectionHeader
            title="Web Applications"
            description={
              "We design and ship web applications: dashboards, ops consoles, experiment hubs, and enterprise workflows with speed, scale, and collaboration built in."
            }
            align="left"
            maxWidth="3xl"
            descriptionWidth="2xl"
            titleClassName="!text-slate-950"
          />
          <div className="mt-6 flex flex-wrap gap-3" role="tablist" aria-label="Web application examples">
            {webShowcases.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
                className={`group relative flex min-h-13 items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition-all duration-200 ${
                  activeTab === index
                    ? "border-primary/90 bg-white shadow-[0_6px_20px_-8px_rgba(29,78,216,0.45),0_2px_8px_-4px_rgba(15,23,42,0.12)] ring-2 ring-primary/25"
                    : "border-slate-200/90 bg-white/90 hover:border-primary/40 hover:bg-white hover:shadow-md"
                }`}
              >
                <span className="min-w-0 flex-1 pr-2">
                  <span className="block text-[11px] font-bold leading-snug text-slate-950">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[10px] font-medium leading-snug text-slate-600">
                    {item.subtitle}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <SectionFrame className="px-4 py-4 sm:px-5 sm:py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={activeTransition}
              className="rounded-[1.7rem] border border-slate-200/80 bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.05)]"
            >
              <div className="rounded-[1.1rem] border border-slate-200/80 bg-slate-50/80 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{current.title}</p>
                    <p className="text-xs text-slate-500">{current.subtitle}</p>
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
                    Interactive
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.2rem] border border-slate-200 bg-white p-4">
                  <div className="grid grid-cols-3 gap-3">
                    {current.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-[1rem] bg-[linear-gradient(135deg,rgba(95,176,194,0.14),rgba(37,99,235,0.06))] p-3"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                          Metric
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{metric}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-[1rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900">Model experiment hub</span>
                      <span className="text-xs text-slate-500">Enterprise preview</span>
                    </div>
                    <div className="mt-3 h-40 rounded-[0.9rem] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_55%,#ffffff_100%)] p-4">
                      <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-3">
                        <div className="rounded-xl border border-primary/10 bg-white p-3">
                          <div className="h-2.5 w-24 rounded-full bg-primary/20" />
                          <div className="mt-4 grid grid-cols-3 gap-2">
                            <div className="h-16 rounded-lg bg-primary/10" />
                            <div className="h-16 rounded-lg bg-cyan-400/10" />
                            <div className="h-16 rounded-lg bg-slate-200" />
                          </div>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-white p-3">
                          <div className="h-2.5 w-18 rounded-full bg-slate-200" />
                          <div className="mt-3 space-y-2">
                            <div className="h-8 rounded-lg bg-slate-100" />
                            <div className="h-8 rounded-lg bg-slate-100" />
                            <div className="h-8 rounded-lg bg-primary/10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-slate-200 bg-slate-950 p-4 text-white">
                  <p className="text-sm font-semibold">How we build it</p>
                  <div className="mt-4 space-y-3">
                    {["State orchestration", "Role-aware access", "Observability hooks", "Large dataset performance"].map((item) => (
                      <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </SectionFrame>
      </div>
    </SectionReveal>
  );
}

function MobileApplicationsDetailSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = mobileShowcases[activeTab];

  return (
    <SectionReveal className="container py-16 sm:py-20">
      <div
        id="mobile-applications-detail"
        className="grid items-center gap-10 lg:grid-cols-[395px_minmax(0,1fr)] lg:gap-x-12"
      >
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start" role="radiogroup" aria-label="Choose sample application">
            {mobileShowcases.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="radio"
                aria-checked={activeTab === index}
                onClick={() => setActiveTab(index)}
                className={`rounded-full border px-3 py-2 text-left text-[11px] font-semibold shadow-sm transition-colors ${
                  activeTab === index
                    ? "border-emerald-500 bg-emerald-600 text-white"
                    : "border-emerald-200/80 bg-white/90 text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/70"
                }`}
              >
                <span className="block sm:inline">{item.title}</span>
                <span className="mt-0.5 block text-[10px] font-medium opacity-90 sm:ml-1 sm:inline">
                  ({item.subtitle})
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={activeTransition}
                className="relative"
              >
                <div className="flex shrink-0 justify-center drop-shadow-[0_24px_48px_rgba(16,185,129,0.22)]">
                  <div className="relative w-[395px] overflow-hidden rounded-[2rem] border-[10px] border-slate-800 bg-slate-800 pb-1 pt-3 shadow-[0_32px_64px_-14px_rgba(16,185,129,0.35),0_14px_28px_rgba(15,23,42,0.45)] ring-2 ring-emerald-500/35">
                    <div className="absolute left-1/2 top-3 z-20 h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-slate-950/95" />
                    <div className="relative mx-px overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-emerald-50 via-white to-slate-50" style={{ height: 667 }}>
                      <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[11px] font-semibold text-slate-600">
                        <span>9:41</span>
                        <span className="rounded-sm border border-slate-400/60 px-1 py-px text-[8px]">100</span>
                      </div>
                      <div className="px-3 pb-3 pt-1">
                        <div className="rounded-lg border border-slate-200/90 bg-white/95 px-3 py-3 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-slate-800">
                              {current.title}
                            </span>
                            <span className="rounded-md bg-slate-900 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-emerald-400">
                              Prod
                            </span>
                          </div>
                          <div className="mt-4 space-y-3">
                            {current.stats.map((stat) => (
                              <div key={stat} className="rounded-lg bg-emerald-50 px-3 py-3 text-sm font-medium text-slate-800">
                                {stat}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <div className="h-32 rounded-xl border border-slate-200 bg-white" />
                          <div className="h-32 rounded-xl border border-slate-200 bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader
            title="Mobile Applications"
            description="We build native and cross-platform mobile products with strong performance, clear navigation, and product telemetry that supports real decision-making on the go."
            align="left"
            maxWidth="3xl"
            descriptionWidth="2xl"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Growth dashboards",
              "Document intelligence",
              "Offline-first sync",
              "Push and approvals",
            ].map((item) => (
              <div key={item} className="rounded-[1.1rem] border border-primary/10 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

function DesktopApplicationsDetailSection() {
  return (
    <SectionReveal className="container py-16 sm:py-20">
      <div
        id="desktop-applications-detail"
        className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-x-12"
      >
        <div>
          <SectionHeader
            title="Desktop Applications"
            description="We build desktop apps for macOS and Windows with native UX, reliable updates, local-first resilience, and enterprise-grade security."
            align="left"
            maxWidth="3xl"
            descriptionWidth="2xl"
          />

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5 rounded-2xl border border-cyan-200/90 bg-white/80 px-3.5 py-2.5 shadow-sm backdrop-blur-sm">
              <span className="text-2xl text-slate-900"></span>
              <span className="text-xs font-semibold uppercase tracking-wide text-cyan-950/90">macOS</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-cyan-200/90 bg-white/80 px-3.5 py-2.5 shadow-sm backdrop-blur-sm">
              <span className="inline-grid h-9 w-9 grid-cols-2 gap-[2px]" aria-hidden="true">
                <span className="rounded-[1px] bg-[#00A4EF]" />
                <span className="rounded-[1px] bg-[#7FBA00]" />
                <span className="rounded-[1px] bg-[#F25022]" />
                <span className="rounded-[1px] bg-[#FFB900]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-cyan-950/90">Windows</span>
            </div>
          </div>

          <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {desktopFeatures.map((feature) => (
              <article key={feature.title} className="p-1 sm:px-1.5">
                <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-slate-900 sm:text-[1.1rem]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[0.96rem] leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <SectionFrame className="px-5 py-5">
          <div className="rounded-[1.7rem] border border-cyan-200/70 bg-slate-950 p-4 shadow-[0_28px_70px_rgba(6,182,212,0.24)]">
            <div className="rounded-[1.2rem] border border-white/10 bg-slate-900 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">Desktop command center</span>
                <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  Live
                </span>
              </div>
              <div className="mt-4 h-56 rounded-[1rem] bg-[linear-gradient(135deg,#0f172a_0%,#172554_40%,#083344_100%)] p-4">
                <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="h-3 w-26 rounded-full bg-cyan-300/30" />
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-lg bg-white/6" />
                      <div className="h-20 rounded-lg bg-cyan-400/12" />
                    </div>
                    <div className="mt-3 h-16 rounded-lg bg-white/6" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-14 rounded-lg bg-white/6" />
                    <div className="h-14 rounded-lg bg-white/6" />
                    <div className="h-24 rounded-lg bg-cyan-400/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionFrame>
      </div>
    </SectionReveal>
  );
}

function ProcessSection({
  processIndex,
  setProcessIndex,
}: {
  processIndex: number;
  setProcessIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const activeProcess = processSteps[processIndex];

  return (
    <SectionReveal className="container py-16 sm:py-20">
      <SectionHeader
        eyebrow="Introduction To Software Development"
        title="Engineering intelligence into every solution from concept to deployment"
        description="We build software that thinks, adapts, and grows with your business, pairing strong product judgment with production-ready execution."
        align="left"
        maxWidth="4xl"
        descriptionWidth="3xl"
      />

      <SectionFrame className="mt-10 px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative h-[500px] overflow-hidden">
            <div className="absolute -left-[320px] top-1/2 h-[580px] w-[580px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#eaf2ff] to-[#dbe9ff]">
              <div className="absolute inset-20 rounded-full border border-primary/15 opacity-50" />
              <motion.div
                key={activeProcess.image}
                initial={{ rotate: 160, opacity: 0.7 }}
                animate={{ rotate: 200, opacity: 0.85 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-28 overflow-hidden rounded-full"
              >
                <Image
                  src={activeProcess.image}
                  alt={activeProcess.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="absolute left-[40%] top-1/2 -translate-y-1/2">
              <div className="absolute -z-10 h-20 w-20 rounded-full bg-black/20 blur-2xl" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                <activeProcess.icon className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {processSteps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setProcessIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    processIndex === index
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcess.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={activeTransition}
                className="mt-8 max-w-[640px] rounded-[28px] border border-white/60 bg-white/85 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-lg"
              >
                <p className="mb-2 text-sm font-medium text-primary">{activeProcess.label}</p>
                <h3 className="text-[34px] font-semibold leading-tight text-primary">
                  {activeProcess.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                  {activeProcess.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SectionFrame>
    </SectionReveal>
  );
}

function StackSection({
  stackIndex,
  setStackIndex,
}: {
  stackIndex: number;
  setStackIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const visibleStack = [
    stackCards[(stackIndex - 1 + stackCards.length) % stackCards.length],
    stackCards[stackIndex],
    stackCards[(stackIndex + 1) % stackCards.length],
  ];

  return (
    <SectionReveal className="container py-16 sm:py-20">
      <SectionHeader
        eyebrow="Stack Intelligence"
        title="Building intelligence into every layer of your stack"
        description="From architecture to deployment, we engineer systems that scale, adapt, and deliver measurable performance."
        align="left"
        maxWidth="4xl"
        descriptionWidth="3xl"
      />

      <SectionFrame className="mt-10 px-5 py-12 sm:px-8 lg:px-10">
        <div className="relative flex min-h-[540px] items-center justify-center overflow-hidden">
          {visibleStack.map((card, visualIndex) => {
            const position = visualIndex - 1;
            const isCenter = position === 0;
            return (
              <motion.div
                key={`${card.title}-${stackIndex}`}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{
                  x: position * 380,
                  scale: isCenter ? 1 : 0.86,
                  opacity: isCenter ? 1 : 0.75,
                  filter: isCenter ? "blur(0px)" : "blur(3px)",
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[340px] md:w-[420px]"
              >
                <div className="rounded-[28px] border border-primary/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          <button
            type="button"
            onClick={() =>
              setStackIndex((value) => (value - 1 + stackCards.length) % stackCards.length)
            }
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
            aria-label="Previous capability"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setStackIndex((value) => (value + 1) % stackCards.length)}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
            aria-label="Next capability"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </SectionFrame>
    </SectionReveal>
  );
}

function PrinciplesSection() {
  return (
    <SectionReveal className="container py-16 sm:py-20">
      <SectionHeader
        title="The principles that drive every decision"
        align="center"
        maxWidth="4xl"
      />

      <div className="mx-auto mt-6 hidden max-w-[75rem] md:block">
        <svg viewBox="0 0 1200 48" className="h-12 w-full">
          <path d="M240 24H960" stroke="#6ea3e5" strokeWidth="2" strokeLinecap="round" />
          <circle cx="600" cy="24" r="8" fill="#6ea3e5" />
        </svg>
      </div>

      <div className="mx-auto mt-10 grid max-w-[75rem] gap-6 md:grid-cols-3">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-3xl border border-primary/10 bg-white p-8 text-center shadow-[0_18px_48px_rgba(15,23,42,0.05)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionReveal>
  );
}

function CtaSection() {
  return (
    <SectionReveal className="container relative z-10 py-16 sm:py-20">
      <div className="relative min-h-[22rem] w-full overflow-hidden rounded-[1.75rem] border border-primary/10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_18%_30%,rgba(95,176,194,0.32),transparent_28%),linear-gradient(135deg,#0d1630_0%,#173a74_45%,#5fb0c2_100%)]" />
        <div className="pointer-events-none absolute -right-14 top-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute left-8 bottom-6 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative flex min-h-[22rem] items-center p-6 sm:min-h-[25rem] sm:p-12 lg:p-16">
          <div className="mx-auto w-full max-w-[38rem] text-left">
            <h2 className="text-[clamp(2.2rem,5vw,4.75rem)] font-semibold leading-[1.1] text-white">
              Let&apos;s Shape the
              <br />
              <span className="text-cyan-200">Future of Your Business</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-white/78 sm:text-lg">
              Partner with InvoLead to transform complexity into clarity through{" "}
              <span className="text-cyan-200">
                data, AI, and design creating intelligent solutions
              </span>{" "}
              that drive sustainable growth.
            </p>
            <div className="mt-8">
              <Button
                asChild
                variant="rounded-arrow"
                className="h-auto rounded-full bg-gradient-to-b from-primary to-cyan-400 px-6 py-6 text-base shadow-[0px_10px_20px_rgba(27,67,171,0.14)]"
              >
                <Link href="/contact-us">
                  Explore Solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function SoftwareDevelopmentPage() {
  const [capabilityIndex, setCapabilityIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(1);
  const [stackIndex, setStackIndex] = useState(3);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCapabilityIndex((value) => (value + 1) % capabilities.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_32%,#f9fbff_100%)] text-slate-950">
      <HeroSection
        capabilityIndex={capabilityIndex}
        setCapabilityIndex={setCapabilityIndex}
      />
      <SoftwareDevelopmentPlatforms />
      <WebApplicationsDetailSection />
      <MobileApplicationsDetailSection />
      <DesktopApplicationsDetailSection />
      <ProcessSection processIndex={processIndex} setProcessIndex={setProcessIndex} />
      <StackSection stackIndex={stackIndex} setStackIndex={setStackIndex} />
      <PrinciplesSection />
      <CtaSection />
    </main>
  );
}
