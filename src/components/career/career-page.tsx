"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  CalendarDays,
  Heart,
  LucideIcon,
  Sparkles,
  Users2,
  Workflow,
} from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
};

type ValueCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type BenefitCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Role = {
  team: string;
  level: string;
  title: string;
  description: string;
  location: string;
  type: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const roleFilters = ["All", "Engineering", "Data Science", "Design", "Product", "Business"] as const;

const stats: Stat[] = [
  { value: "150+", label: "Team members" },
  { value: "12", label: "Countries represented" },
  { value: "40+", label: "Enterprise clients" },
  { value: "4.8", label: "Glassdoor rating" },
];

const values: ValueCard[] = [
  { icon: Sparkles, title: "Craft over output", description: "We obsess over the details. Every model, interface and line of code is shipped with care." },
  { icon: Users2, title: "Customer as north star", description: "We measure success by the real-world outcomes we create for the people we build for." },
  { icon: Workflow, title: "Radical ownership", description: "Small, autonomous teams with clear mandates. You drive your work from insight to impact." },
  { icon: Sparkles, title: "Curiosity, always", description: "We learn in public, experiment boldly, and treat every problem as a chance to go deeper." },
  { icon: Award, title: "Trust as default", description: "We hire adults, set context, and get out of the way. Transparency is a feature, not a policy." },
  { icon: Workflow, title: "Ship, then refine", description: "We move fast on real problems, measure rigorously, and compound our wins week over week." },
];

const benefits: BenefitCard[] = [
  { icon: Banknote, title: "Competitive compensation", description: "Market-leading salaries benchmarked regularly, with transparent leveling and clear growth paths." },
  { icon: CalendarDays, title: "Learning budget", description: "Generous annual allowance for courses, conferences, books and anything that sharpens your craft." },
  { icon: Heart, title: "Premium health coverage", description: "Comprehensive medical, dental, vision and mental health support for you and your family." },
  { icon: CalendarDays, title: "Flexible time off", description: "Generous paid leave, company-wide recharge shutdowns, and the trust to take the rest you need." },
  { icon: Users2, title: "Parental leave", description: "Meaningful fully paid leave for all new parents, plus a gentle on-ramp back to your projects." },
  { icon: ArrowRight, title: "Career growth", description: "Structured mentorship, internal mobility, and dedicated time to work on what stretches you." },
  { icon: Building2, title: "Team offsites", description: "Regular company and team gatherings to build, ship and celebrate together in person." },
  { icon: Sparkles, title: "Inclusive culture", description: "A diverse, global team where every voice is heard and every teammate is set up to thrive." },
];

const roles: Role[] = [
  { team: "Data Science", level: "Senior", title: "Senior Machine Learning Engineer", description: "Design and deploy production-grade ML systems for Fortune 500 retail and pharma clients.", location: "Remote · Global", type: "Full-time" },
  { team: "Engineering", level: "Mid", title: "Generative AI Engineer", description: "Build retrieval, agentic and evaluation pipelines powering our AI Assistant Studio product.", location: "Bangalore · Hybrid", type: "Full-time" },
  { team: "Engineering", level: "Lead", title: "Staff Full-Stack Engineer", description: "Lead architecture across our TypeScript/Next.js platform and the services that power it.", location: "Remote · US / EU", type: "Full-time" },
  { team: "Engineering", level: "Mid", title: "Data Engineer", description: "Own streaming and batch pipelines on Snowflake, dbt and modern lakehouse stacks.", location: "Remote · Global", type: "Full-time" },
  { team: "Design", level: "Senior", title: "Senior Product Designer", description: "Shape the end-to-end experience of our enterprise AI products with rigor and taste.", location: "Remote · EU", type: "Full-time" },
  { team: "Design", level: "Mid", title: "Design Engineer", description: "Live at the edge of design and code, crafting the marketing surfaces and product UI.", location: "Remote · Global", type: "Full-time" },
  { team: "Product", level: "Lead", title: "Principal Product Manager, AI Platform", description: "Own the vision and roadmap for our internal AI platform serving all delivery teams.", location: "Remote · US", type: "Full-time" },
  { team: "Data Science", level: "Senior", title: "Applied Research Scientist", description: "Translate cutting-edge research in LLMs and causal inference into client-ready capabilities.", location: "Remote · Global", type: "Full-time" },
  { team: "Business", level: "Senior", title: "Solutions Architect", description: "Partner with enterprise customers to scope, shape and win transformative AI engagements.", location: "New York · Hybrid", type: "Full-time" },
  { team: "Data Science", level: "Junior", title: "Data Science Intern", description: "Spend a summer shipping a real project alongside senior scientists and engineers.", location: "Remote · India", type: "Internship" },
];

const process: ProcessStep[] = [
  { number: "01", title: "Apply", description: "Send us your resume and a short note on why this role excites you. We read every application." },
  { number: "02", title: "Intro chat", description: "A 30-minute conversation with our talent team to align on context, motivations and expectations." },
  { number: "03", title: "Craft interview", description: "A practical, take-home-style exercise followed by a working session with your future teammates." },
  { number: "04", title: "Team fit", description: "Meet the people you'll work with daily. Ask us anything: we believe interviews go both ways." },
  { number: "05", title: "Offer", description: "Transparent leveling, market-leading pay, meaningful equity. We aim to close within 10 business days." },
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-slate-950">{title}</h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function ValueTile({ item, index }: { item: ValueCard; index: number }) {
  const Icon = item.icon;
  return (
    <div className="group rounded-[1.6rem] border border-white/70 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{String(index + 1).padStart(2, "0")}. {item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
    </div>
  );
}

function BenefitTile({ item }: { item: BenefitCard }) {
  const Icon = item.icon;
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_12px_42px_rgba(15,23,42,0.06)]">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-[#eef9fb] text-secondary">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
    </div>
  );
}

export default function CareerPageClient() {
  const [activeRoleFilter, setActiveRoleFilter] = useState<(typeof roleFilters)[number]>("All");
  const filteredRoles = useMemo(
    () => (activeRoleFilter === "All" ? roles : roles.filter((role) => role.team === activeRoleFilter)),
    [activeRoleFilter],
  );
  const visibleRoles = filteredRoles.length > 0 ? filteredRoles : roles;

  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_40%,#f4f7fb_100%)] text-slate-950">
      <section className="relative isolate overflow-hidden pt-28 pb-18 sm:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(95,176,194,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.95),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(232,208,255,0.14),transparent_28%)]" />
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
         
            <h1 className="mt-5 max-w-3xl text-[clamp(2.9rem,6vw,5.6rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-slate-950">
              Build what&apos;s next with us
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We are a team of engineers, scientists, and designers shaping intelligent products for global enterprises. Join us in turning complex problems into elegant, measurable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-secondary px-6 py-6 text-white">
                <Link href="#roles">See open roles<ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_24px_90px_rgba(15,23,42,0.12)]">
            <div className="rounded-[1.5rem] bg-slate-950 p-7 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-secondary" />
                <span className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60">Our culture</span>
              </div>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
                We keep the work focused, the standards high, and the feedback honest. Great people do their best work when the context is clear.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                    <strong className="block text-2xl font-semibold text-white">{stat.value}</strong>
                    <span className="mt-1 block text-sm text-white/65">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionReveal className="container mx-auto pb-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
              <div className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{stat.value}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionReveal>
      <section className="py-20 sm:py-24">
        <div className="container mx-auto">
          <SectionTitle eyebrow="How we work" title="Principles that shape every product we ship" description="Our values are not posters on a wall. They are the defaults we rely on when the path forward is unclear and the stakes are high." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item, index) => <ValueTile key={item.title} item={item} index={index} />)}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Life at InvoLead" title="Benefits that respect your whole life" description="We invest in our team like we invest in our products, with care, rigor and long-term thinking." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => <BenefitTile key={item.title} item={item} />)}
          </div>
        </div>
      </section>
      <section id="roles" className="relative overflow-hidden py-20 sm:py-24">
        <motion.div aria-hidden className="absolute inset-0" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "linear" }} style={{ backgroundImage: "radial-gradient(circle at 14% 18%, rgba(95,176,194,0.16), transparent 0 22%), radial-gradient(circle at 86% 12%, rgba(232,208,255,0.16), transparent 0 20%), radial-gradient(circle at 50% 92%, rgba(255,255,255,0.9), transparent 0 24%)", backgroundSize: "140% 140%" }} />
        <div className="container mx-auto relative z-10">
          <SectionTitle eyebrow="Open positions" title="Find the role that fits your craft" description="10 roles open across Engineering, Data Science, Design, Product and Business." />
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-600">
                Showing <span className="font-semibold text-slate-950">{visibleRoles.length}</span> roles
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Filter by team
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {roleFilters.map((chip) => {
                const isActive = activeRoleFilter === chip;
                const count = chip === "All" ? roles.length : roles.filter((role) => role.team === chip).length;
                return (
                  <button
                    key={chip}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveRoleFilter(chip)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "border-transparent bg-[linear-gradient(135deg,#5fb0c2,#9fddea)] text-white shadow-[0_14px_30px_rgba(95,176,194,0.24)]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-secondary/30 hover:text-secondary",
                    )}
                  >
                    <span>{chip}</span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                        isActive ? "bg-white/18 text-white" : "bg-slate-100 text-slate-600",
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8 grid gap-4">
            {visibleRoles.map((role) => (
              <motion.article key={role.title} initial={{ opacity: 0, y: 18, scale: 0.985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4 }} className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#eef9fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">{role.team}</span>
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{role.level}</span>
                    </div>
                    <h3 className="mt-4 text-[1.05rem] font-semibold tracking-[-0.035em] text-slate-950 sm:text-[1.4rem]">{role.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{role.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{role.location}</div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{role.type}</div>
                    <Button asChild variant="outline" className="rounded-full px-5 py-5">
                      <Link href="/contact-us">Apply<ArrowRight className="size-4" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)] py-20 sm:py-24">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Hiring process" title="A thoughtful process, not a gauntlet" description="We aim for clarity and respect at every step. Expect structured conversations, practical exercises and quick, honest feedback." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step) => (
              <div key={step.number} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
                <div className="text-3xl font-semibold tracking-[-0.06em] text-secondary">{step.number}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#0b2530_100%)] px-6 py-10 text-center text-white shadow-[0_24px_70px_rgba(15,23,42,0.25)] md:px-10">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4vw,3.3rem)] font-semibold tracking-tight">Don&apos;t see the right role yet?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">We&apos;re always hiring for exceptional people. Tell us about yourself and the kind of work you want to do next, we&apos;ll reach out when there&apos;s a match.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full bg-white px-6 py-6 text-slate-950 hover:bg-white/90">
                <Link href="/contact-us">Introduce yourself<ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 py-6 text-white hover:bg-white/10">
                <Link href="#roles">Browse open roles</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">Or email us directly at <Link href="mailto:careers@involead.com" className="font-semibold text-white underline-offset-4 hover:underline">careers@involead.com</Link></p>
          </div>
        </div>
      </section>
    </div>
  );
}
