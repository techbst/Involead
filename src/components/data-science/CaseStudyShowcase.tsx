"use client";

import {
  ChartColumnIncreasing,
  Database,
  LineChart,
  type LucideIcon,
} from "lucide-react";

import StoryShowcase, { type StoryShowcaseItem } from "../ui/story-showcase";

const caseStudies: StoryShowcaseItem[] = [
  {
    title: "Market Success",
    category: "Case study",
    description:
      "Predictive pricing and demand signals improved margin visibility and planning confidence.",
    metrics: [
      { value: "+18%", label: "Revenue Lift" },
      { value: "30%", label: "Cycle Reduction" },
      { value: "2.5x", label: "Decision Speed" },
    ],
    icon: LineChart,
    image:
      "/data-science/photo-1552664730-d307ca884978.avif",
  },
  {
    title: "Operational Intelligence",
    category: "Case study",
    description:
      "Automated workflows connected quality, forecasting, and execution into one governed layer.",
    metrics: [
      { value: "41%", label: "Fewer Errors" },
      { value: "24/7", label: "Visibility" },
      { value: "9 mo", label: "ROI Window" },
    ],
    icon: Database,
    image:
      "/data-science/photo-1460925895917-afdab827c52f.jpg",
  },
  {
    title: "Technology-Driven Change",
    category: "Case study",
    description:
      "A connected analytics foundation helped teams move from reporting to action faster.",
    metrics: [
      { value: "32%", label: "Faster Review" },
      { value: "94%", label: "Accuracy" },
      { value: "3x", label: "Adoption" },
    ],
    icon: ChartColumnIncreasing,
    image:
      "/data-science/photo-1451187580459-43490279c0fa.jpg",
  },
];

export default function CaseStudyShowcase() {
  return (
    <StoryShowcase
      eyebrow="Case Studies"
      title="Use Cases & Success Stories"
      description="Real impact across industries, driven by data. Every engagement engineered around your most critical KPIs."
      items={caseStudies}
    />
  );
}
