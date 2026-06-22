"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  Cpu,
  Database,
  Eye,
  Layers3,
  Network,
  Orbit,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AutonomousAgentEcosystemHero } from "./hero-sections";
import ShapeHeroBackground from "./call-to-action";


type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

type Impact = {
  value: string;
  label: string;
  body: string;
};

type Expertise = {
  icon: React.ElementType;
  title: string;
  backgroundImage: string;
  pointerHeadings: string[];
  paragraph: string;
  points: {
    title: string;
    description: string;
  }[];
  outcome: string;
};

type TimelineStep = {
  step: string;
  title: string;
  body: string;
};

type TechItem = {
  name: string;
  body: string;
  image: string;
};

type TechTab = {
  label: string;
  items: TechItem[];
};

type BlogPost = {
  category: string;
  featuredimg: string;
  title: string;
  excerpt: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const impactCards: Impact[] = [
  {
    value: "65%",
    label: "Reduction in Cognitive Load",
    body: "Autonomous Agentic Swarms: We replace manual workflows with self-healing, multi-agent orchestrations that handle reasoning loops and tool execution autonomously.",
  },
  {
    value: "2X",
    label: "Acceleration in R&D Cycles",
    body: "Generative Discovery: Powered by proprietary Knowledge Graphs and semantic search algorithms that compress weeks of research into minutes of synthesis.",
  },
  {
    value: "40%",
    label: "Lower Inference Costs",
    body: "Model Distillation & Quantization: We train cost-efficient SLMs (Small Language Models) that outperform massive generic models on specific tasks, slashing your token spend.",
  },
  {
    value: "27%",
    label: "Faster Time-to-Value",
    body: "Programmatic Optimization: Using frameworks like DSPy, we automate prompt tuning and pipeline optimization, eliminating the brittle trial-and-error of manual prompt engineering.",
  },
];

const expertiseCards: Expertise[] = [
  {
    icon: Network,
    title: "Agentic Orchestration & Swarms",
    backgroundImage:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(255,146,85,0.36),transparent_28%),radial-gradient(circle_at_78%_10%,rgba(95,176,194,0.22),transparent_26%),linear-gradient(135deg,#ffffff_0%,#f4f5f7_48%,#eef1f4_100%)]",
    pointerHeadings: [
      "Reasoning Loops (ReAct/CoT)",
      "Tool-Use Mastery",
      "Semantic Routing",
    ],
    paragraph:
      "From Chatbots to Autonomous Workers. We deploy Multi-Agent Systems (MAS) where distinct AI personas (Planner, Coder, Critic, Executor) collaborate to solve complex problems.",
    points: [
      {
        title: "Reasoning Loops (ReAct/CoT)",
        description:
          "Agents that break down complex goals into executable steps using Chain-of-Thought reasoning.",
      },
      {
        title: "Tool-Use Mastery",
        description:
          "Agents that natively interface with APIs, SQL databases, and SaaS platforms to perform actions, not just output text.",
      },
      {
        title: "Semantic Routing",
        description:
          "Intelligent routers that dynamically dispatch queries to the most efficient model (e.g., routing simple math to a fast SLM and complex logic to GPT-4o).",
      },
    ],
    outcome: "Streamlined operations and real-time execution at scale.",
  },
  {
    icon: Brain,
    title: "Advanced Model Alignment",
    backgroundImage:
      "bg-[radial-gradient(circle_at_20%_12%,rgba(232,208,255,0.78),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(255,146,85,0.22),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f7f4fb_52%,#eef1f4_100%)]",
    pointerHeadings: [
      "Preference-Aligned Precision",
      "Cognitive Distillation",
      "RAG-Optimized Tuning (RAFT)",
    ],
    paragraph:
      "Precision-tuned models that align with your enterprise goals. We go beyond generic fine-tuning to deliver models that think the way your business needs them to.",
    points: [
      {
        title: "Preference-Aligned Precision",
        description:
          "RLHF and DPO techniques that align model outputs with human preferences and business-specific quality standards.",
      },
      {
        title: "Cognitive Distillation",
        description:
          "Transfer knowledge from large frontier models into smaller, faster models without sacrificing domain accuracy.",
      },
      {
        title: "RAG-Optimized Tuning (RAFT)",
        description:
          "Fine-tuning that teaches models to reason over retrieved context, dramatically improving RAG pipeline accuracy.",
      },
    ],
    outcome: "Improved reliability and cost-efficient deployment.",
  },
  {
    icon: Search,
    title: "AI Governance & Ethical Frameworks",
    backgroundImage:
      "bg-[radial-gradient(circle_at_18%_20%,rgba(181,255,226,0.76),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(95,176,194,0.28),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f1faf7_54%,#eef1f4_100%)]",
    pointerHeadings: [
      "Total Traceability & Auditability",
      "Safety & Control",
      "Hallucination Detection",
      "Transparency Gate Controls",
    ],
    paragraph:
      "Enterprise AI demands accountability. We build governance layers that ensure every AI decision is traceable, explainable, and compliant with regulatory frameworks.",
    points: [
      {
        title: "Total Traceability & Auditability",
        description: "End-to-end logging of every inference, decision path, and data source for full regulatory compliance.",
      },
      {
        title: "Safety & Control",
        description: "Guardrails, content filters, and policy enforcement layers that prevent harmful or off-brand outputs.",
      },
      {
        title: "Hallucination Detection",
        description: "Real-time detection systems that flag confabulated facts before they reach end users.",
      },
      {
        title: "Transparency Gate Controls",
        description: "Configurable checkpoints that require human approval for high-stakes AI decisions.",
      },
    ],
    outcome: "Auditable and compliant AI systems.",
  },
  {
    icon: Eye,
    title: "Hyper-Personalization at Scale",
    backgroundImage:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(239,245,139,0.62),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,146,85,0.24),transparent_28%),linear-gradient(135deg,#ffffff_0%,#fbfbef_52%,#eef1f4_100%)]",
    pointerHeadings: [
      "Real-Time Decisioning",
      "Predictive Customer Journeys",
      "Cross-Enterprise Scalability",
      "Adaptive Learning Loops",
    ],
    paragraph:
      "AI systems that understand and generate across text, image, audio, video, and documents.",
    points: [
      {
        title: "Real-Time Decisioning",
        description: "Sub-second inference pipelines that personalize content, recommendations, and actions as users interact.",
      },
      {
        title: "Predictive Customer Journeys",
        description: "AI models that anticipate user needs and proactively shape the next-best-action across channels.",
      },
      {
        title: "Cross-Enterprise Scalability",
        description: "Personalization engines that work across business units, geographies, and product lines from a unified model.",
      },
      {
        title: "Adaptive Learning Loops",
        description: "Continuous feedback integration that refines personalization accuracy with every interaction.",
      },
    ],
    outcome: "Context-aware experiences at enterprise scale.",
  },
  {
    icon: Workflow,
    title: "Embodied AI Agents & Hyper-Realistic Avatars",
    backgroundImage:
      "bg-[radial-gradient(circle_at_16%_16%,rgba(255,146,85,0.3),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(181,255,226,0.48),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f7f8f8_52%,#eef1f4_100%)]",
    pointerHeadings: [
      "Speech-to-Speech & Real-Time",
      "Multimodal AI Integration",
      "Custom Brand Avatars",
      "24/7 Scalable CoPilot",
      "Immersive Training & Knowledge Transfer",
    ],
    paragraph:
      "Bring AI to life with embodied agents and lifelike digital avatars that see, hear, and respond naturally — transforming customer support, training, and brand engagement.",
    points: [
      {
        title: "Speech-to-Speech & Real-Time",
        description: "Ultra-low-latency voice pipelines enabling natural, human-like conversations without perceptible delay.",
      },
      {
        title: "Multimodal AI Integration",
        description: "Agents that process text, voice, images, and video simultaneously for richer contextual understanding.",
      },
      {
        title: "Custom Brand Avatars",
        description: "Photorealistic or stylized digital humans that embody your brand identity and tone of voice.",
      },
      {
        title: "24/7 Scalable CoPilot",
        description: "Always-on AI assistants that handle thousands of concurrent interactions without quality degradation.",
      },
      {
        title: "Immersive Training & Knowledge Transfer",
        description: "AI-driven simulations and interactive training modules that accelerate employee onboarding and upskilling.",
      },
    ],
    outcome: "Higher engagement and consistent interactions.",
  },
  {
    icon: ShieldCheck,
    title: "LLMOps, MLOps, & AI System Orchestration",
    backgroundImage:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(95,176,194,0.28),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(232,208,255,0.58),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f5f7fa_52%,#eef1f4_100%)]",
    pointerHeadings: [
      "Model Serving & Inference",
      "Continuous Monitoring & Drift Detection",
      "Automated CI/CD Pipelines",
      "Security & Governance Gates",
      "Scalability-as-a-Service",
    ],
    paragraph:
      "Production-grade AI infrastructure that scales. We architect end-to-end MLOps and LLMOps pipelines so your models ship fast, stay healthy, and remain governed.",
    points: [
      {
        title: "Model Serving & Inference",
        description: "Optimized serving infrastructure with auto-scaling, batching, and GPU orchestration for cost-efficient inference.",
      },
      {
        title: "Continuous Monitoring & Drift Detection",
        description: "Real-time dashboards and alerts that catch data drift, model degradation, and anomalous outputs before they impact users.",
      },
      {
        title: "Automated CI/CD Pipelines",
        description: "End-to-end automation from model training to deployment with versioning, testing, and rollback capabilities.",
      },
      {
        title: "Security & Governance Gates",
        description: "Built-in security scanning, access controls, and compliance checks at every stage of the ML lifecycle.",
      },
      {
        title: "Scalability-as-a-Service",
        description: "Elastic infrastructure that scales from prototype to millions of daily inferences without re-architecture.",
      },
    ],
    outcome: "Reliable, fast delivery at enterprise scale.",
  },
];

const timelineSteps: TimelineStep[] = [
  {
    step: "Ideation & Problem Definition",
    title: "Strategic Alignment & Value Mapping",
    body: "We partner with stakeholders to identify high-impact opportunities, define measurable outcomes, and ensure a clear alignment between AI goals and core business strategy.",
  },
  {
    step: "Proof of Concept (POC)",
    title: "Rapid Prototyping & Feasibility Validation",
    body: "A rapid, focused prototype validates technical feasibility and demonstrates potential ROI. This quick-win phase builds confidence and secures initial buy-in.",
  },
  {
    step: "Minimum Viable Product (MVP)",
    title: "Core Capability Deployment & Enterprise Testing",
    body: "We deliver a functional version with essential, governance-embedded capabilities ready for real-world testing and refinement with a controlled user group.",
  },
  {
    step: "Pilot Testing",
    title: "Performance Validation & Human-in-the-Loop",
    body: "The MVP is deployed in a controlled environment to validate results, gather feedback, and ensure performance readiness, with integrated observability and human oversight.",
  },
  {
    step: "Scaling & Integration",
    title: "LLMOps/MLOps & Robust Integration",
    body: "Validated solutions are scaled across the enterprise, fortified with robust LLMOps, security protocols, and seamless integration into your core Data Infrastructure.",
  },
  {
    step: "Monitoring & Optimization",
    title: "Continuous Adaptive Learning & Drift Mitigation",
    body: "Validated solutions are scaled across the enterprise, fortified with robust LLMOps, security protocols, and seamless integration into your core Data Infrastructure.",
  },
  {
    step: "Governance & Compliance",
    title: "Continuous Adaptive Learning & Drift Mitigation",
    body: "We continuously track performance, fine-tune accuracy, adapt models to evolving needs, and leverage drift detection to ensure long-term, sustained value.",
  },
];

const techTabs: TechTab[] = [
  {
    label: "Programming Languages & Frameworks",
    items: [
      { name: "Python", body: "Core language for AI engineering, ML pipelines, and backend intelligence.", image: "/gen-ai/technologies/python.svg" },
      { name: "JavaScript", body: "Reliable frontend/backend logic for scalable AI interfaces.", image: "/gen-ai/technologies/javascript-logo-svgrepo-com.svg" },
      { name: "Next.js", body: "Modern full-stack framework for enterprise AI applications.", image: "/gen-ai/technologies/next-js.svg" },
      { name: "React.js", body: "Modern full-stack framework for enterprise AI applications.", image: "/gen-ai/technologies/react.svg" },
      { name: "Node.js", body: "High-performance Python APIs for model serving and automation.", image: "/gen-ai/technologies/nodejs.svg" },
      { name: "Three.js", body: "Deep learning framework for training and experimentation.", image: "/gen-ai/technologies/Three.js.svg" },
    ],
  },
  {
    label: "LLM Models (Text, Image, Video, etc.)",
    items: [
      { name: "OpenAI GPT Models", body: "Advanced reasoning, generation, and enterprise AI workflows.", image: "/gen-ai/technologies/chatgpt-icon.svg" },
      { name: "Claude", body: "Long-context reasoning and business-grade AI assistance.", image: "/gen-ai/technologies/claude-ai-icon.svg" },
      { name: "Gemini", body: "Multimodal AI capabilities for text, vision, and complex reasoning.", image: "/gen-ai/technologies/google-gemini-icon.svg" },
      { name: "Llama", body: "Open-weight LLMs for private and customizable deployments.", image: "/gen-ai/technologies/apple.svg" },
      { name: "Mistral", body: "Efficient frontier models for fast and cost-effective AI systems.", image: "/gen-ai/technologies/android.svg" },
      { name: "Stable Diffusion", body: "Image generation workflows for creative automation.", image: "/gen-ai/technologies/kotlin.svg" },
    ],
  },
  {
    label: "Database & Vector Database",
    items: [
      { name: "PostgreSQL", body: "Reliable relational database for structured enterprise data.", image: "/gen-ai/technologies/laravel.svg" },
      { name: "MongoDB", body: "Flexible NoSQL database for modern applications.", image: "/gen-ai/technologies/mongodb-icon.svg" },
      { name: "Pinecone", body: "Managed vector database for semantic search and RAG.", image: "/gen-ai/technologies/Pinecone-Icon--Streamline-Svg-Logos.svg" },
      { name: "Weaviate", body: "Vector search engine for AI-native data retrieval.", image: "/gen-ai/technologies/woocommerce.svg" },
      { name: "Qdrant", body: "High-performance vector database for scalable similarity search.", image: "/gen-ai/technologies/ionic-1.svg" },
      { name: "Redis", body: "Fast caching and real-time memory layer for AI systems.", image: "/gen-ai/technologies/phonegap.svg" },
    ],
  },
  {
    label: "AI Orchestration & Agent Frameworks",
    items: [
      { name: "LangChain", body: "Build LLM applications with chains, tools, and agents.", image: "/gen-ai/technologies/Langchain--Streamline-Simple-Icons.svg" },
      { name: "LlamaIndex", body: "Data framework for RAG and enterprise knowledge systems.", image: "/gen-ai/technologies/next-js.svg" },
      { name: "CrewAI", body: "Multi-agent collaboration framework for autonomous workflows.", image: "/gen-ai/technologies/react.svg" },
      { name: "AutoGen", body: "Agentic AI framework for multi-agent conversation systems.", image: "/gen-ai/technologies/nodejs.svg" },
      { name: "DSPy", body: "Programmatic prompt and pipeline optimization.", image: "/gen-ai/technologies/angular.svg" },
      { name: "n8n", body: "Workflow automation for AI-powered business processes.", image: "/gen-ai/technologies/vue.svg" },
    ],
  },
];

const blogPosts: BlogPost[] = [
  {
    featuredimg: "/img/cap-1.webp",
    category: "Agentic AI",
    title: "How Agentic AI is Reshaping Enterprise Operations",
    excerpt: "A practical view of autonomous workflows, orchestration, and measurable AI operating leverage.",
  },
  {
       featuredimg: "/img/cap-2.webp",
    category: "RAG Systems",
    title: "Building Cost-Efficient RAG Systems for Scale",
    excerpt: "How retrieval strategy, model routing, and evaluations help enterprises control quality and cost.",
  },
  {
       featuredimg: "/img/cap-3.webp",
    category: "Private AI",
    title: "Why Small Language Models Are the Future of Private AI",
    excerpt: "Domain-specific SLMs can outperform generic models when speed, privacy, and unit economics matter.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={cn(
        "max-w-4xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.22em]",
            inverse ? "!text-[#fff]" : "text-main",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-[clamp(2rem,4.6vw,3.6rem)] font-bold tracking-normal",
          inverse ? "!text-white" : "text-main",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg",
            inverse ? "!text-white" : "text-main",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      aria-hidden="true"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[9%] rounded-full border border-[#5fb0c2]/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[20%] rounded-full border border-dashed border-[#5fb0c2]/50"
      />
      <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,#398fa2_0%,#5fb0c2_40%,#5fb0c2_10%)] blur-2xl" />
      <div className="absolute left-[31%] top-[30%] flex size-[38%] items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-[0_0_80px_rgba(255,146,85,0.35)] backdrop-blur-xl">
        <Brain className="size-16 text-white" />
      </div>
      {[
        ["Planner", "left-2 top-[18%]"],
        ["Coder", "right-0 top-[32%]"],
        ["Critic", "bottom-[18%] left-[8%]"],
        ["Executor", "bottom-[8%] right-[18%]"],
      ].map(([label, pos], index) => (
        <motion.div
          key={label}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute rounded-full border border-[#402f5b]/18 bg-[#000] px-4 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-xl",
            pos,
          )}
        >
          <span className="mr-2 inline-flex size-2 rounded-full bg-[#5fb0c2]" />
          {label}
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35 [mask-image:radial-gradient(circle,black_35%,transparent_72%)]" />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#100b08] pt-20 text-white sm:pt-24 lg:pt-28">
      <div
  className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_8%,rgba(168,245,210,0.5),transparent_35%),radial-gradient(ellipse_at_55%_0%,rgba(185,198,255,0.45),transparent_40%),radial-gradient(ellipse_at_45%_75%,rgba(190,205,255,0.35),transparent_35%),radial-gradient(ellipse_at_65%_100%,rgba(190,235,220,0.3),transparent_35%),linear-gradient(to_bottom_right,#f8f8f8,#eef1f4,#f7f7f7)]"
/>
      
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="container relative grid min-h-[560px] items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]  lg:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.26em] text-main">
            Generative AI Services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl text-[clamp(2.5rem,6vw,5.4rem)] font-bold leading-[1.03] tracking-normal text-main"
          >
            From Autonomous <span className="text-secondary">Agents to Enterprise AI</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-main sm:text-lg lg:text-xl">
            Architecting Sovereign Cognitive Ecosystems for the Modern Enterprise
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="default">
              <Link href="/contact-us">
                Schedule a Free Consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/case-studies">View Case Studies <ArrowRight className="size-4" /></Link>
            </Button>
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function ImpactCard({ item, index }: { item: Impact; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative overflow-hidden rounded-[10px] p-6 px-8 py-8 backdrop-blur-xl",
        index === 0
        ? "bg-[#b5ffe2] text-main shadow-[0_22px_70px_rgba(125,217,181,0.25)]"
        : index === 1
        ? "bg-[#fff] text-main shadow-[0_22px_70px_rgba(15,23,42,0.12)]"
        : index === 2
        ? "bg-[#e8d0ff] text-main shadow-[0_22px_70px_rgba(217,180,255,0.25)]"
        : index === 3
        ? "bg-[#eff58b] text-main shadow-[0_22px_70px_rgba(239,245,139,0.25)]"
        : "bg-white text-main shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
      )}
    >
      <div
        className={cn(
          "absolute -right-16 -top-16 size-36 rounded-full blur-3xl transition",
          index === 0
            ? "bg-white/20 group-hover:bg-white/30"
            : "bg-[#FF9255]/20 group-hover:bg-[#5fb0c2]/54"
        )}
      />
      <p className={cn(
        "!text-[36px] !font-bold",
        index === 0 ? "text-main" : "text-main"
      )}>
        {item.value}
      </p>

      <h3 className={cn(
        "mt-4 !text-[18px] font-semibold",
        index === 0 ? "text-main" : "text-main"
      )}>
        {item.label}
      </h3>

      <p className={cn(
        "mt-4 text-sm leading-7",
        index === 0 ? "text-white/80" : "text-slate-600"
      )}>
        {item.body}
      </p>
    </motion.article>
  );
}

function ExpertiseCard({ item, index }: { item: Expertise; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      whileHover={{ y: isFlipped ? 0 : -8 }}
      className="group h-full min-h-[520px] [perspective:1400px]"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full min-h-[520px] rounded-[18px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <article
          className={cn(
            "absolute inset-0 flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200/90 p-7 shadow-[0_22px_70px_rgba(15,23,42,0.12),0_1px_0_rgba(255,255,255,0.9)_inset]",
            isFlipped ? "pointer-events-none" : "pointer-events-auto",
            item.backgroundImage,
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(255,255,255,0.38)_46%,rgba(255,255,255,0.72))]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute left-0 top-0 w-full h-full bg-black group-hover:bg-secondary">
            <img
              src="/gen-ai/Agentic-Orchestration-Swarms.webp"
              alt=""
              className="h-full w-full object-cover opacity-30 transition duration-500 group-hover:opacity-10"
            />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex size-14 items-center justify-center rounded-[14px] border border-white/80 bg-white text-[#5fb0c2] shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <Icon className="size-7" />
            </div>

            <div className="mt-7 text-[20px] text-white font-bold">
              {item.title}
            </div>

            <div className="mt-7 grid gap-3">
              {item.pointerHeadings.map((pointer, pointerIndex) => (
                <div
                  key={pointer}
                  className="flex items-center gap-3 text-sm font-medium text-[16px]"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                    {pointerIndex + 1}
                  </span>
                  <span className="text-white">{pointer}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={() => setIsFlipped(true)}
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#5fb0c2,#9fddea)] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(95,176,194,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(95,176,194,0.46)]"
              >
                Read More
                <ArrowRight className="ml-2 size-4" />
              </button>
            </div>
          </div>
        </article>

        <article
          className={cn(
            "absolute inset-0 flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]",
            isFlipped ? "pointer-events-auto" : "pointer-events-none",
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#5fb0c2,#a7dde9)]" />
          <div className="flex items-start justify-between gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-secondary/10 text-secondary ">
              <Icon className="size-6" />
            </div>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-secondary hover:text-secondary"
            >
              Back
            </button>
          </div>

          <div className="mt-6 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2">
            <div className="text-[20px] font-bold">
              {item.title}
            </div>
            <p className="mt-4">
              {item.paragraph}
            </p>

            <div className="mt-6 grid gap-4">
              {item.points.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[14px] border border-slate-200 bg-slate-50/80 p-4"
                >
                  <div className="text-[17px] font-semibold">
                    {point.title}
                  </div>
                  <p className="mt-2 !text-[14px]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[14px] border border-orange-200 bg-orange-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Outcome
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                {item.outcome}
              </p>
            </div>
          </div>
        </article>
      </motion.div>
    </motion.div>
  );
}

function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let cleanup = () => {};

    async function initGsap() {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "bottom 55%",
              scrub: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".genai-timeline-card").forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -48 : 48 },
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }, sectionRef);

      cleanup = () => context.revert();
    }

    initGsap();

    return () => cleanup();
  }, [shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      
      <div className="absolute inset-0 bg-black" />
      <div className="container relative">
        <SectionHeader
          eyebrow="Our Delivery Framework"
          title="InvoLead AI Impact Framework"
          description="Built to Deliver Real Intelligence, Not Just AI. Our seven-step lifecycle transforms AI vision into measurable results."
          inverse
        />
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/12 md:left-1/2 md:-translate-x-1/2">
            <div ref={lineRef} className="h-full w-full bg-[linear-gradient(#5fb0c2,#b0f1ff)]" />
          </div>
          <div className="grid gap-8">
            {timelineSteps.map((item, index) => (
              <div
                key={item.step}
                className={cn(
                  "genai-timeline-card relative pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0",
                  index % 2 === 0 ? "md:text-right" : "md:[&>article]:col-start-2",
                )}
              >
                <span className="absolute left-0 top-6 z-10 flex size-8 items-center justify-center rounded-full border border-secondary bg-slate-950 shadow-[0_0_28px_rgba(95,176,94,0.75)] md:left-1/2 md:-translate-x-1/2">
                  <span className="size-2.5 rounded-full bg-secondary" />
                </span>
                <article className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <p className="font-medium !text-secondary">{item.step}</p>
                  <div className="mt-3 text-white lg:text-[22px] font-semibold">{item.title}</div>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackTabs() {
  const [active, setActive] = useState(0);
  const current = techTabs[active];

  return (
    <section className="bg-secondary/20 py-16 sm:py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Tech-Stack"
          title="Our present-day technologies behind quality AI solutions"
          description="Enterprise Generative AI solutions designed by our experts with the latest resources."
        />
        <div className="mt-10 pb-2">
          <div className="flex flex-wrap justify-center gap-3">
            {techTabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:py-3 sm:text-sm",
                  active === index
                    ? "border-transparent bg-[linear-gradient(135deg,#5fb0c2,#5fb0c2)] text-white shadow-sm shadow-secondary-500/20"
                    : "border-slate-200 bg-white hover:border-secondary/50",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          key={current.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {current.items.map((item) => {
            return (
              <article key={item.name} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:p-5">
                <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-secondary/10 bg-secondary/10 p-2 sm:size-22">
                  <Image src={item.image} alt={item.name} width={50} height={50} />
                </div>
                <div className="min-w-0">
                  <div className="text-base font-bold text-slate-950 sm:text-lg">{item.name}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{item.body}</div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -7 }}
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
    >
      <div className="relative h-48 overflow-hidden bg-[linear-gradient(135deg,_#111827_0%,_#60b0c2_58%,_#59a3b4_100%)]">
        <Image 
        alt={"post image"}
        src={post.featuredimg}
        height={400}
        width={400}
        className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 " />
        <Brain className="absolute bottom-5 right-5 size-16 text-white/70" />
      </div>
      <div className="p-6">
        <span className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
          {post.category}
        </span>
        <h3 className="mt-4 text-2xl font-bold tracking-normal text-slate-950">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
        <Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary">
          Read more
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </motion.article>
  );
}

function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary py-20 text-white sm:py-24">
     
      <ShapeHeroBackground/>
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="container relative mx-auto text-center"
      >
        <h2 className="mx-auto max-w-4xl text-[clamp(2.1rem,5vw,4.4rem)] font-bold tracking-normal text-white">
          Start building enterprise-grade Generative AI systems
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
          Partner with us to transform your enterprise with intelligent, scalable AI solutions
        </p>
        <div className="mt-9">
          <Button asChild variant={"outline"}>
            <Link href="/our-solutions">
              Explore Solutions
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default function GenerativeAIPage() {
  return (
    <div className="overflow-hidden bg-white text-slate-950">
      {/* <HeroSection /> */}
      <AutonomousAgentEcosystemHero />
      <section className="relative overflow-hidden bg-black py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Our Impact on Industry"
            title="Reinventing Operational Velocity with Sovereign AI"
            description="From accelerated innovation cycles to autonomous orchestration, InvoLead empowers enterprises to scale with Deterministic AI solutions built for tangible ROI."
            inverse
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {impactCards.map((item, index) => (
              <ImpactCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-secondary/20">
        <div className="container">
          <SectionHeader
            eyebrow="Our Generative AI Expertise"
            title="Future-Proof AI Architectures"
            description="We specialize in Cognitive Architectures that redefine scalability. From autonomous agents to Large Language Model (LLM) fine-tuning, we deploy enterprise-grade systems designed for Zero-Shot efficiency."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {expertiseCards.map((item, index) => (
              <ExpertiseCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
      <TechStackTabs />

      <section id="success-stories" className="py-20 sm:py-24">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="left"
              title="Success Stories"
              description="Check out our blog for the latest AI trends and insights!"
            />
            <Button asChild variant="outline" className="w-fit rounded-full border-slate-200 px-6 py-5 text-slate-950 hover:border-[#FF9255]/60">
              <Link href="#">
                View All
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
