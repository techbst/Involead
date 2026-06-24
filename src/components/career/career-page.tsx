"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  CheckCircle2,
  CalendarDays,
  Heart,
  LucideIcon,
  Orbit,
  Sparkles,
  Users2,
  Workflow,
  Send, MessageCircle, ClipboardCheck, Users, BadgeCheck
} from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import ValueCard from "../ui/value-card";
import ClipShape from "../ui/clip-shape";
import CallToAction from "../ui/call-to-action";
import StepNode from "../ui/step";



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
  shortTitle?: string;
  description: string;
  icon: LucideIcon;
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
  { number: "01", icon: Send, title: "Apply", description: "Send us your resume and a short note on why this role excites you. We read every application." },
  { number: "02", icon: MessageCircle, title: "Intro chat", description: "A 30-minute conversation with our talent team to align on context, motivations and expectations." },
  { number: "03", icon: ClipboardCheck, title: "Craft interview", description: "A practical, take-home-style exercise followed by a working session with your future teammates." },
  { number: "04", icon: Users, title: "Team fit", description: "Meet the people you'll work with daily. Ask us anything: we believe interviews go both ways." },
  { number: "05", icon: BadgeCheck, title: "Offer", description: "Transparent leveling, market-leading pay, meaningful equity. We aim to close within 10 business days." },
];

const heroNotes = [
  "Small teams, high trust, real ownership",
  "Design, data, and engineering moving together",
  "Clear standards with meaningful enterprise impact",
];

const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const nodeVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
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
  const sectionRef = useRef<HTMLElement>(null);
  const isHiringProcessInView = useInView(sectionRef, { amount: 0.25 });
  const reduceMotion = !!useReducedMotion();
  const [activeRoleFilter, setActiveRoleFilter] = useState<(typeof roleFilters)[number]>("All");
  const [activeHiringStep, setActiveHiringStep] = useState(-1);
  const filteredRoles = useMemo(
    () => (activeRoleFilter === "All" ? roles : roles.filter((role) => role.team === activeRoleFilter)),
    [activeRoleFilter],
  );
  const visibleRoles = filteredRoles.length > 0 ? filteredRoles : roles;
  const revealedHiringStep = Math.max(activeHiringStep, 0);
  const desktopHiringLineProgress = `${(revealedHiringStep / (process.length - 1)) * 100}%`;

  useEffect(() => {
    if (!isHiringProcessInView) {
      const resetTimer = window.setTimeout(() => {
        setActiveHiringStep(-1);
      }, 0);

      return () => {
        window.clearTimeout(resetTimer);
      };
    }

    const timers = [
      window.setTimeout(() => {
        setActiveHiringStep(0);
      }, 40),
      ...process.slice(1).map((_, index) =>
        window.setTimeout(() => {
          setActiveHiringStep(index + 1);
        }, 700 + index * 420)
      ),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isHiringProcessInView]);

  return (
    <div className="overflow-hidden text-slate-950">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-28 pb-18 sm:pt-32">
        
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={revealContainer}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
          >
            <h1 className="mt-5 max-w-3xl font-bold leading-[0.94] tracking-[-0.05em] text-slate-950">
              Build what&apos;s next with us
            </h1>
            <motion.p variants={revealItem} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We are a team of engineers, scientists, and designers shaping intelligent products for global enterprises. Join us in turning complex problems into elegant, measurable outcomes.
            </motion.p>
            <motion.div variants={revealItem} className="mt-8 flex flex-wrap gap-3">
              <Button asChild >
                <Link href="#roles">See Open Roles<ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href="#culture">Our Culture<ArrowRight className="size-4" /></Link>
              </Button>
            </motion.div>
            <motion.div variants={revealItem} className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3 hidden lg:flex">
              {heroNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[1.35rem] border border-white/80 bg-white/70 px-4 py-4 shadow-[0_14px_44px_rgba(15,23,42,0.07)] backdrop-blur"
                >
                  <p className="text-sm leading-6 text-slate-700">{note}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 28, scale: 0.98 },
              show: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12, delayChildren: 0.12 },
              },
            }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <motion.div
              aria-hidden
              animate={reduceMotion ? undefined : { x: [0, 20, -8, 0], y: [0, -16, 12, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[4%] top-[6%] h-40 w-40 rounded-full bg-secondary/20 blur-3xl"
            />
            <motion.div
              aria-hidden
              animate={reduceMotion ? undefined : { x: [0, -16, 10, 0], y: [0, 12, -12, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[8%] right-[6%] h-52 w-52 rounded-full bg-[#ffd6aa]/35 blur-3xl"
            />
            <motion.div variants={revealItem} className="relative rounded-[2rem] border border-white/75 bg-white/70 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl">
              <div className="rounded-[1.6rem] bg-[linear-gradient(150deg,#07141d_0%,#0d2430_52%,#15384a_100%)] p-7 text-white sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-semibold text-white/85">
                      <Orbit className="size-3.5 text-cyan-300" />
                      Team Operating System
                    </div>
                    <p className="mt-5 max-w-md text-lg leading-8 text-white/80">
                      We keep the work focused, the standards high, and the feedback honest. Great people do their best work when the context is clear.
                    </p>
                  </div>
                  <motion.div
                    animate={reduceMotion ? undefined : { rotate: [0, 10, 0], y: [0, -5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden rounded-[1.4rem] border border-cyan-300/25 bg-cyan-300/10 p-4 text-cyan-100 shadow-[0_0_40px_rgba(125,211,252,0.16)] sm:block"
                  >
                    <Sparkles className="size-6" />
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">Execution</div>
                    <div className="mt-1 text-2xl font-semibold">Fast</div>
                  </motion.div>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={revealItem}
                      transition={{ delay: index * 0.04 }}
                      className="rounded-[1.3rem] border border-white/8 bg-white/6 p-4"
                    >
                      <strong className="block text-2xl font-semibold text-white">{stat.value}</strong>
                      <span className="mt-1 block text-sm text-white/62">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                {/* <div className="mt-8 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
                  <motion.div variants={revealItem} className="rounded-[1.4rem] border border-white/8 bg-white/7 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">Hiring flow</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/45">Structured and respectful</p>
                      </div>
                      <div className="rounded-full bg-emerald-400/14 px-3 py-1 text-xs font-semibold text-emerald-200">10 business days</div>
                    </div>
                    <div className="mt-5 flex items-end gap-2">
                      {[32, 54, 68, 86, 100].map((height, index) => (
                        <motion.div
                          key={height}
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          whileInView={{ height, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                          className="flex-1 rounded-t-full bg-[linear-gradient(180deg,rgba(125,211,252,0.95),rgba(34,197,94,0.28))]"
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.2em] text-white/38">
                      {process.map((step) => <span key={step.number}>{step.number}</span>)}
                    </div>
                  </motion.div>
                  <motion.div variants={revealItem} className="rounded-[1.4rem] border border-white/8 bg-white/7 p-4">
                    <p className="text-sm font-semibold text-white">What it feels like here</p>
                    <div className="mt-4 space-y-3">
                      {heroNotes.map((note) => (
                        <div key={note} className="flex items-start gap-3 rounded-2xl bg-white/6 px-3 py-3">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                          <p className="text-sm leading-6 text-white/74">{note}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div> */}
              </div>
            </motion.div>
            
            
          </motion.div>
        </div>
      </section>
      
      <section className="pt-20 pb-8" id="culture">
        <div className="container mx-auto">
          <SectionHeader
            eyebrow="How we work"
            title="Principles that shape every product we ship"
            description="Our values are not posters on a wall. They are the defaults we rely on when the path forward is unclear and the stakes are high."
            align="center"
            maxWidth="5xl"
            descriptionWidth="2xl"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item, index) => (
              
              <ValueCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}

                  description={item.description}
                  index={index}
                />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white overflow-hidden relative py-20 sm:py-20">
        <ClipShape />
        <div className="container relative z-10 mt-24 mx-auto">
          <SectionHeader
            eyebrow="Life at InvoLead"
            title="Benefits that respect your whole life"
            description="We invest in our team like we invest in our products, with care, rigor and long-term thinking."
            align="center"
            maxWidth="5xl"
            descriptionWidth="2xl"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => (
              <ValueCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}                  
                  description={item.description}
                  index={index}
                />
            ))}
          </div>
        </div>
      </section>
      <section id="roles" className="relative overflow-hidden py-20 sm:py-20">
        <motion.div aria-hidden className="absolute inset-0" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "linear" }} style={{ backgroundImage: "radial-gradient(circle at 14% 18%, rgba(95,176,194,0.16), transparent 0 22%), radial-gradient(circle at 86% 12%, rgba(232,208,255,0.16), transparent 0 20%), radial-gradient(circle at 50% 92%, rgba(255,255,255,0.9), transparent 0 24%)", backgroundSize: "140% 140%" }} />
        <div className="container mx-auto relative z-10">
          <SectionHeader
            eyebrow="Open positions"
            title="Find the role that fits your craft"
            description="10 roles open across Engineering, Data Science, Design, Product and Business."
            align="center"
            maxWidth="5xl"
            descriptionWidth="2xl"
          />
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-600">
                Showing <span className="font-semibold text-slate-950">{visibleRoles.length}</span> roles
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
            {visibleRoles.map((role, index) => (
              <motion.article key={role.title} initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.42, delay: index * 0.03 }} className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#eef9fb] px-3 py-1 text-xs font-semibold text-secondary">{role.team}</span>
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">{role.level}</span>
                    </div>
                    <h3 className="mt-4 text-[1.05rem] font-semibold tracking-[-0.035em] text-slate-950 sm:text-[1.4rem]">{role.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{role.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 lg:justify-end md:justify-end sm:justify-start">
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{role.location}</div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">{role.type}</div>
                    <Button asChild>
                      <Link href="/contact-us">Apply<ArrowRight className="size-4" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/10 overflow-hidden relative" ref={sectionRef}>
        <div className="container z-10 mx-auto">
          <SectionHeader
            eyebrow="Hiring process"
            title="A thoughtful process, not a gauntlet"
            description="We aim for clarity and respect at every step. Expect structured conversations, practical exercises and quick, honest feedback."
            align="center"
            maxWidth="5xl"
            descriptionWidth="2xl"
          />
          
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5 relative">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/25 to-primary/0" />

          <motion.div
            className="absolute inset-y-0 left-0 hidden bg-gradient-to-r from-primary to-secondary lg:block"
            initial={{ width: "0%" }}
            animate={{ width: desktopHiringLineProgress }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
            {process.map((step, index) => (
              <StepNode
                key={step.number}
                step={step}
                index={index}
                total={process.length}
                variants={nodeVariants}
                isVisible={index <= activeHiringStep}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <section className="pb-20">
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
      </section> */}

      <CallToAction
        title={
          <>
            Don&apos;t see the right role yet?
          </>
        }
        description="We're always hiring for exceptional people. Tell us about yourself and the kind of work you want to do next, we'll reach out when there's a match."
        primaryButton={{
          text: "Introduce Yourself",
          href: "/contact-us",
        }}
        secondaryButton={{
          text: "Browse open roles",
          href: "#roles",
        }}
      />
    </div>
  );
}
