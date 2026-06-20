"use client";

import {
  BarChart3,
  Compass,
  LayoutDashboard,
  LineChart,
  Megaphone,
  PieChart,
  ScanSearch,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CapabilityMetric = {
  value: string;
  valuecomp: string;
  label: string;
};

export type CapabilityData = {
  title: string;
  description: string;
  image: string;
  metricBg?: string;
  metricTextColor?: string;
  metrics: CapabilityMetric[];
};

export type CapabilityItem = CapabilityData & {
  summary: string;
  paragraphs: string[];
  icon: LucideIcon;
};

export const capabilityData: CapabilityData[] = [
  {
    title: "Pricing & Dynamic Pricing",
    description:
      "The right price at the right moment turns demand into margin without eroding trust.Our Agentic AI continuously ingests elasticity signals, competitive moves, and inventory positions to recommend and automate price ladders, guardrails, and experiments — so teams move from static rules to adaptive pricing that compounds revenue.",
    image:
      "/gen-ai/Agentic-Orchestration-Swarms.webp",
    metricBg: "linear-gradient(135deg,#6EB7CC 0%,#4F8D9A 100%)",
    metricTextColor: "#ffffff",
    metrics: [
      { value: "7", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "Promotion & Trade Optimization",
    description:
      "Trade and promo dollars only work when every lever is aligned to the same growth story.Agentic models simulate lift, cannibalization, and retailer behavior in parallel, then orchestrate scenarios across brands and channels — surfacing where to invest, where to cut, and how to negotiate with evidence-backed targets.",
    image:
      "/img/cap-1.webp",
    metrics: [
      { value: "12", valuecomp: "22%", label: "Trade ROI Uplift" },
      { value: "8", valuecomp: "15%", label: "Wasted Spend Reduction" },
      { value: "6", valuecomp: "14%", label: "Incremental Volume" },
      { value: "35", valuecomp: "50%", label: "Planning Cycle Time" },
    ],
  },
  {
    title: "Marketing Mix Modeling (MMM)",
    description:
      "Attribution that ignores long arcs and offline effects quietly misallocates millions every quarter.We rebuild MMM on fresh priors, hierarchical media curves, and business constraints — with agents stress-testing assumptions, refreshing coefficients as new data lands, and explaining drivers in language stakeholders actually use.",
    image:
      "/img/cap-3.webp",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "Revenue Growth Management (RGM)",
    description:
      "RGM breaks when pricing, assortment, and promo strategies are optimized in silos.We connect elasticity, assortment productivity, and trade effectiveness in a single agentic layer that explores coordinated moves — always anchored to P&L guardrails and channel realities — so growth is deliberate, not accidental.",
    image:
      "/img/cap-4.webp",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "Segmentation & Micro-Segmentation",
    description:
      "Relevance at scale demands segmentation that evolves as fast as customers do.Our Agentic AI-driven segmentation creates and continuously refines 10-50+ dynamic cohorts using real-time behavioral and transactional data. Agents adapt segment definitions and orchestrate hyper-personalized engagement strategies ensuring every customer interaction is precisely calibrated.",
    image:
      "/img/cap-5.webp",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "Demand Forecasting & Planning",
    description:
      "Forecast error is not a spreadsheet problem — it is a service-level, cash, and credibility problem.Hierarchical models fuse sell-in, sell-through, and external signals while agents monitor drift, inject shocks, and reconcile plans across nodes — giving supply, finance, and commercial teams one aligned number they can defend.",
    image:
      "/img/cap-6.webp",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "Marketing Mix Optimization",
    description:
      "Static budgets freeze strategy the moment markets shift; optimization has to breathe with performance.Agentic optimizers pair MMM outputs with operational limits — flighting rules, minimum spends, and channel capacity — to propose reallocations weekly, not quarterly, with transparent trade-offs between growth, efficiency, and risk.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "Next Best Action (NBA)",
    description:
      "Pipeline health depends less on volume than on knowing which accounts will actually move and why.Agentic scoring blends firmographic fit, intent, product usage, and seller notes to refresh role definitions continuously, route plays automatically, and explain the next best action so revenue teams spend time closing, not debating lists.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    title: "BI & Dashboarding",
    description:
      "Journeys fragment when channels, policies, and models each optimize different definitions of success.Customer-Wing pairs orchestration agents with policy-aware copilots — unifying data, decisions, and creative variants so every touchpoint stays on-brand, compliant, and tuned to the live state of each relationship.",
    image:
      "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
];

export const capabilityIconMap: Record<string, LucideIcon> = {
  "Pricing & Dynamic Pricing": Target,
  "Promotion & Trade Optimization": Megaphone,
  "Marketing Mix Modeling (MMM)": PieChart,
  "Revenue Growth Management (RGM)": TrendingUp,
  "Segmentation & Micro-Segmentation": Users,
  "Demand Forecasting & Planning": LineChart,
  "Marketing Mix Optimization": BarChart3,
  "Next Best Action (NBA)": Compass,
  "BI & Dashboarding": LayoutDashboard,
};

export const defaultCapabilityIcon = ScanSearch;

