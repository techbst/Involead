"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedNumber from "@/components/ui/animated-number";
import SectionReveal from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";
import Capabilities from "@/components/data-science/capabilities";
import CaseStudyShowcase from "@/components/data-science/CaseStudyShowcase";
import IndustryStrengthSection from "@/components/data-science/IndustryStrength";
import ProcessRoadmap from "@/components/data-science/ProcessRoadmap";
import WhyChooseUs from "@/components/data-science/WhyChooseUs";
import DataHero from "./dataHero";
import CallToAction, { CTAData } from "../ui/call-to-action-1";

type Capability = {
  title: string;
  description: string;
  impact: string;
  detail: string;
};
const ctaData: CTAData = {
    title: "Ready to turn your data into a decision engine?",
    description:
      "Let's map the right use case, define the success metric, and ship a first version that proves value quickly.",
    buttonText: "Explore Solutions",
    buttonLink: "/our-solutions",
    video: "/video/bg-1.mp4",
    members: 100,
    avatars: [
      "/img/avatar-1.webp",
      "/img/avatar-2.webp",
      "/img/avatar-3.webp",
    ],
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
  descriptionColor = "text-slate-600",
}: {
  title: string;
  titleColor?: string;
  description: string;
  className?: string;
  descriptionColor?: string;
}) {
  return (
    <div className={className}>
      <h2 className={`text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight ${titleColor || "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 max-w-3xl text-base leading-7 sm:text-lg ${descriptionColor}`}>
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

      <ProcessRoadmap />
      <CaseStudyShowcase />

      

     <CallToAction data={ctaData} />

     
    </div>
  );
}
