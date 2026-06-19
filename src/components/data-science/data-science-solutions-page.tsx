"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedNumber from "@/components/ui/animated-number";
import SectionReveal from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";
import Capabilities from "@/components/data-science/capabilities";
import IndustryStrengthSection from "@/components/data-science/IndustryStrength";
import WhyChooseUs from "@/components/data-science/WhyChooseUs";
import DataHero from "./dataHero";

type Capability = {
  title: string;
  description: string;
  impact: string;
  detail: string;
};

const capabilities: Capability[] = [
  {
    title: "Pricing & Dynamic Pricing",
    description:
      "Adaptive pricing engines blend elasticity, competitor signals, and inventory to recommend price moves that lift margin without creating trust issues.",
    impact: "7%",
    detail: "Margin improvement",
  },
  {
    title: "Promotion & Trade Optimization",
    description:
      "Promotion scenarios are simulated across channels so teams can invest where lift is real and remove spend where returns are weak.",
    impact: "22%",
    detail: "Trade ROI uplift",
  },
  {
    title: "Marketing Mix Modeling",
    description:
      "We rebuild attribution with business constraints and fresh priors so media decisions reflect long-term impact, not just short clicks.",
    impact: "18%",
    detail: "Planning cycle reduction",
  },
  {
    title: "Revenue Growth Management",
    description:
      "Pricing, assortment, and promo intelligence are connected in one system so growth decisions stay coordinated instead of siloed.",
    impact: "15%",
    detail: "Revenue lift",
  },
  {
    title: "Segmentation & Micro-Segmentation",
    description:
      "Dynamic cohorts evolve with customer behavior, helping teams personalize journeys and offers with far more precision.",
    impact: "50+",
    detail: "Dynamic cohorts",
  },
  {
    title: "Demand Forecasting & Planning",
    description:
      "Hierarchical models blend internal and external signals to improve forecast confidence, service levels, and planning alignment.",
    impact: "30%",
    detail: "Forecast accuracy gain",
  },
];

const industries = [
  { title: "Retail", value: "35-45%", label: "Engagement uplift" },
  { title: "FMCG", value: "30-40%", label: "Planning cycle gain" },
  { title: "Finance", value: "5-18%", label: "Revenue growth" },
  { title: "Healthcare", value: "20-30%", label: "Forecast accuracy" },
  { title: "CPG", value: "15-20%", label: "Marketing ROI" },
  { title: "Manufacturing", value: "25-35H", label: "Hours saved" },
];

const strengths = [
  {
    title: "Customer understanding",
    value: "3x",
    label: "Better segmentation depth",
  },
  { title: "Decision speed", value: "30%", label: "Faster planning cycles" },
  { title: "Revenue growth", value: "5-18%", label: "Measured uplift" },
  { title: "Forecast accuracy", value: "20-30%", label: "Improved confidence" },
  { title: "Hours saved", value: "25-35H", label: "Monthly operations time" },
];

const process = [
  {
    title: "Discover",
    body: "We identify the decision, data sources, and metrics the model needs to influence.",
  },
  {
    title: "Design",
    body: "A measurable solution blueprint is created with validation and governance baked in.",
  },
  {
    title: "Build",
    body: "Features, models, and workflows are developed in a production-ready stack.",
  },
  {
    title: "Deploy",
    body: "Outputs land in dashboards, APIs, and alerts that teams can actually use.",
  },
  {
    title: "Optimize",
    body: "Feedback loops keep performance healthy as business conditions change.",
  },
];

const problems = [
  {
    title: "Poor Data Quality",
    solution:
      "We create validation checks, lineage, and recovery paths so teams can trust the numbers they see.",
  },
  {
    title: "Manual Reporting",
    solution:
      "Automated intelligence replaces spreadsheet loops with repeatable, governed workflows.",
  },
  {
    title: "Customer Churn",
    solution:
      "Predictive models surface risk early and connect retention actions to the right customer segment.",
  },
  {
    title: "Revenue Leakage",
    solution:
      "Pricing, promotion, and assortment signals are analyzed together to close the gap between intent and margin.",
  },
  {
    title: "Forecasting Challenges",
    solution:
      "Hierarchical models blend internal and external signals so planning becomes more reliable.",
  },
  {
    title: "Siloed Systems",
    solution:
      "We unify data sources into a single decision layer that improves visibility across teams.",
  },
];

const impactNumbers = [
  { value: 6, suffix: "+", label: "Use cases launched" },
  { value: 200, suffix: "+", label: "Models evaluated" },
  { value: 50, suffix: "+", label: "Enterprise workflows" },
  { value: 35, suffix: "H+", label: "Time saved monthly" },
];

function SectionHeading({
  title,
  description,
  className = "",
  titleColor="",
}: {
  title: string;
  titleColor?: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className={`text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight ${titleColor || "text-slate-950"}`}>
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function ProblemAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {problems.map((item, index) => {
        const open = index === openIndex;
        return (
          <button
            key={item.title}
            type="button"
            onClick={() => setOpenIndex(open ? -1 : index)}
            className={`text-left transition-all duration-200 ${
              open ? "shadow-lg" : "shadow-sm"
            } rounded-[1.5rem] border ${
              open
                ? "border-secondary/25 bg-[#eaf7fb]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 max-w-3xl text-sm leading-7 text-slate-600"
                    >
                      {item.solution}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <ChevronDown
                className={`size-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function DataScienceSolutionsPage() {
  return (
    <div className="overflow-hidden bg-white text-slate-950">
      <DataHero />

      <Capabilities />

      <IndustryStrengthSection
        title="Our Strength Across Industries"
        subtitle="The same data science rigor is adapted to each business context, with a consistent home-page palette and a compact, readable layout."
      />

      <WhyChooseUs />

      <section className="bg-[linear-gradient(135deg,#f7fbfd_0%,#ffffff_42%,#eff8fb_100%)] py-14">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Process"
            description="A connected journey from discovery to optimization, laid out as a horizontal timeline on desktop and a stacked flow on mobile."
          />

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="relative flex min-w-[900px] gap-4">
              <div className="absolute left-6 right-6 top-8 h-px bg-gradient-to-r from-[#5fb0c2] via-slate-300 to-slate-300" />
              {process.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="relative min-w-[180px] flex-1 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#e8f7fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                      0{index + 1}
                    </span>
                    <CheckCircle2 className="size-4 text-secondary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionReveal className="container mx-auto py-12">
        <SectionHeading
          title="Business Problems We Solve"
          description="Expandable problem-solution panels show the pain point and the fix without forcing the user through a long testimonial block."
        />

        <div className="mt-8">
          <ProblemAccordion />
        </div>
      </SectionReveal>

      <section className="bg-slate-950 py-14 text-white mt-10" >
        <div className="container mx-auto">
          <SectionHeading
            title="Numbers That Reflect Our Impact"
            titleColor="text-white"
            description="The metrics below animate as they enter the viewport and act as a clear proof point instead of decorative filler."
            className="mx-auto max-w-4xl text-center "
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {impactNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="text-4xl font-semibold tracking-tight text-white">
                  <AnimatedNumber value={`${item.value}${item.suffix}`} />
                </div>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      <section className="pb-10 mt-10">
        <div className="container mx-auto">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#0b2530_100%)] px-6 py-10 text-center text-white shadow-[0_24px_70px_rgba(15,23,42,0.25)] md:px-10">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4vw,3.3rem)] font-semibold tracking-tight">
              Ready to turn your data into a decision engine?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
              Let&apos;s map the right use case, define the success metric, and ship a first version that proves value quickly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full bg-white px-6 py-6 text-slate-950 hover:bg-white/90">
                <Link href="/contact-us">
                  Start a conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 py-6 text-white hover:bg-white/10">
                <Link href="/our-solutions">Explore solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
