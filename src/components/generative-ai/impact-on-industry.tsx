import ColorfulNumberCard, {
  ColorfulNumberCardItem,
} from "@/components/ui/colorful-number-card";
import {
  BrainCircuit,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";
const impactCards: ColorfulNumberCardItem[] = [
  {
    value: "65%",
    icon: BrainCircuit,
    label: "Reduction in Cognitive Load",
    body: "Autonomous Agentic Swarms: We replace manual workflows with self-healing, multi-agent orchestrations that handle reasoning loops and tool execution autonomously.",
  },
  {
    value: "2X",
    icon: TrendingUp,
    label: "Acceleration in R&D Cycles",
    body: "Generative Discovery: Powered by proprietary Knowledge Graphs and semantic search algorithms that compress weeks of research into minutes of synthesis.",
  },
  {
    value: "40%",
    icon: DollarSign,
    label: "Lower Inference Costs",
    body: "Model Distillation & Quantization: We train cost-efficient SLMs (Small Language Models) that outperform massive generic models on specific tasks, slashing your token spend.",
  },
  {
    value: "27%",
    icon: BarChart3,
    label: "Faster Time-to-Value",
    body: "Programmatic Optimization: Using frameworks like DSPy, we automate prompt tuning and pipeline optimization, eliminating the brittle trial-and-error of manual prompt engineering.",
  },
];

export default function ImpactOnIndustry() {
  return (
        <ColorfulNumberCard items={impactCards} />
  );
}