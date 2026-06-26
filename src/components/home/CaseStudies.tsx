"use client";

import {
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Database,
} from "lucide-react";

import StoryShowcase, {
  type StoryShowcaseItem,
} from "@/components/ui/story-showcase";

const caseStudies: StoryShowcaseItem[] = [
  {
    title: "Sales & Retention Growth - Agentic AI Across 500+ Stores",
    category: "Case study",
    description:
      "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=85",
    icon: ChartColumnIncreasing,
    metrics: [
      { value: "+15-25%", label: "Revenue Growth" },
      { value: "-15-20%", label: "Churn Reduction" },
      { value: "+25-35%", label: "Faster Cycles" },
    ],
  },
  {
    title: "Predictive Maintenance Across Global Plants",
    category: "Case study",
    description:
      "Production leaders need early signals before downtime compounds. Our predictive maintenance fabric connects machine telemetry, operator context, and quality data into prioritized action.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
    icon: Database,
    metrics: [
      { value: "41%", label: "Downtime Cut" },
      { value: "18%", label: "OEE Increase" },
      { value: "9mo", label: "ROI Window" },
    ],
  },
  {
    title: "Clinical Intelligence for Faster Care Decisions",
    category: "Case study",
    description:
      "Care teams move faster when clinical, operational, and patient signals are connected. We built a governed intelligence workspace for consistent review and faster triage.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    icon: BriefcaseBusiness,
    metrics: [
      { value: "32%", label: "Faster Review" },
      { value: "94%", label: "Accuracy" },
      { value: "24/7", label: "Visibility" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <StoryShowcase
      eyebrow="Case Studies"
      title="Proven Outcomes Across Modern Digital Enterprises"
      description="From automation to predictive intelligence, our solutions deliver measurable results at enterprise scale."
      items={caseStudies}
      sectionClassName="bg-black"
      textColor="white"
    />
  );
}
