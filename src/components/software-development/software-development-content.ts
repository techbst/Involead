import {
  Blocks,
  Bot,
  Code2,
  Gauge,
  Globe,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type SoftwareMetric = {
  value: string;
  label: string;
  description: string;
};

export type SoftwareCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SoftwareProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SoftwareStackItem = {
  category: string;
  title: string;
  description: string;
  points: string[];
};

export type SoftwarePrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const softwareMetrics: SoftwareMetric[] = [
  {
    value: "3",
    label: "Core surfaces",
    description: "Unified delivery across web, mobile, and native desktop products.",
  },
  {
    value: "24/7",
    label: "Operational readiness",
    description: "Monitoring, release controls, and support workflows built for live systems.",
  },
  {
    value: "AI-ready",
    label: "Architecture mindset",
    description: "Products designed to layer in automation, copilots, and data intelligence.",
  },
  {
    value: "Secure",
    label: "By default",
    description: "Security, compliance, and resilience handled as part of engineering, not cleanup.",
  },
];

export const softwareCapabilities: SoftwareCapability[] = [
  {
    title: "Architecture that fits the business",
    description:
      "We shape systems around workflows, user roles, integrations, and growth plans so the product stays coherent as complexity increases.",
    icon: Blocks,
  },
  {
    title: "Fast, durable product delivery",
    description:
      "Frontend, backend, QA, and DevOps move in one delivery rhythm so teams can ship quickly without accumulating avoidable risk.",
    icon: Workflow,
  },
  {
    title: "Performance and reliability",
    description:
      "We optimize responsiveness, throughput, and observability so your product remains dependable under real-world traffic and usage patterns.",
    icon: Gauge,
  },
  {
    title: "Security-first implementation",
    description:
      "Threat modeling, secrets handling, access control, and audit readiness are embedded throughout the SDLC.",
    icon: ShieldCheck,
  },
];

export const softwareProcessSteps: SoftwareProcessStep[] = [
  {
    step: "01",
    title: "Discover the shape of the product",
    description:
      "We align on goals, users, workflows, technical constraints, and success metrics before making delivery commitments.",
    icon: Layers3,
  },
  {
    step: "02",
    title: "Design the foundation",
    description:
      "System architecture, UX direction, data contracts, and release planning are structured together so execution stays clean.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Build in production-minded cycles",
    description:
      "We ship in iterative milestones with shared review, testing, instrumentation, and hardening built into the process.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Launch and evolve with confidence",
    description:
      "Release workflows, analytics, incident readiness, and roadmap follow-through keep the product improving after go-live.",
    icon: Bot,
  },
];

export const softwareStackItems: SoftwareStackItem[] = [
  {
    category: "Frontend systems",
    title: "Interfaces that stay sharp as features grow",
    description:
      "Design systems, responsive layouts, role-based dashboards, and state architecture that keep the product usable at scale.",
    points: ["Design systems", "Admin consoles", "Customer portals", "Real-time experiences"],
  },
  {
    category: "Backend platforms",
    title: "Reliable services behind every workflow",
    description:
      "APIs, business logic, integrations, queues, and data workflows designed for resilience, maintainability, and clarity.",
    points: ["API architecture", "Workflow engines", "Third-party integrations", "Event-driven services"],
  },
  {
    category: "AI-enhanced products",
    title: "Modern software that is ready for intelligence",
    description:
      "We add copilots, automation, search, recommendations, and operational AI where it creates real leverage for your users.",
    points: ["Embedded copilots", "Knowledge search", "Workflow automation", "Decision support"],
  },
];

export const softwarePrinciples: SoftwarePrinciple[] = [
  {
    title: "One experience across every surface",
    description:
      "Whether a user is on a browser, a phone, or a desktop tool, the product should feel consistent, intentional, and easy to trust.",
    icon: Globe,
  },
  {
    title: "Platform choices with product discipline",
    description:
      "We pick the right stack for the business context, balancing speed, maintainability, team fit, and future flexibility.",
    icon: Smartphone,
  },
  {
    title: "Operational clarity from day one",
    description:
      "Instrumentation, deployment strategy, and support readiness are planned early so the software is manageable after launch.",
    icon: MonitorSmartphone,
  },
];
