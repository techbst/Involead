"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  BriefcaseBusiness,
  Cpu,
  Database,
  LineChart,
  Lock,
  MessageSquare,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

type AgentCard = {
  label: string;
  detail: string;
  className: string;
  icon: React.ElementType;
};

type CoreNode = {
  label: string;
  className: string;
  icon: React.ElementType;
};

type BlueprintLayer = {
  title: string;
  body: string;
  icon: React.ElementType;
};

const revealContainer = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const commandAgents: AgentCard[] = [
  {
    label: "Planning Agent",
    detail: "Goal decomposition",
    className: "left-[3%] top-[18%]",
    icon: Brain,
  },
  {
    label: "Data Agent",
    detail: "Live knowledge sync",
    className: "right-[4%] top-[14%]",
    icon: Database,
  },
  {
    label: "Execution Agent",
    detail: "Tool orchestration",
    className: "left-[8%] bottom-[16%]",
    icon: Workflow,
  },
  {
    label: "Risk Agent",
    detail: "Policy guardrails",
    className: "right-[8%] bottom-[12%]",
    icon: ShieldCheck,
  },
];

const operatingNodes: CoreNode[] = [
  { label: "Agent Node", className: "left-[7%] top-[18%]", icon: Bot },
  { label: "Knowledge Node", className: "right-[5%] top-[20%]", icon: Database },
  { label: "Automation Node", className: "left-[10%] bottom-[18%]", icon: Workflow },
  { label: "Analytics Node", className: "right-[10%] bottom-[18%]", icon: LineChart },
  { label: "Decision Node", className: "left-1/2 top-[2%] -translate-x-1/2", icon: Brain },
];

const ecosystemAgents: CoreNode[] = [
  { label: "Research Agent", className: "left-[4%] top-[16%]", icon: Brain },
  { label: "Sales Agent", className: "right-[3%] top-[18%]", icon: BarChart3 },
  { label: "Marketing Agent", className: "left-[1%] bottom-[20%]", icon: Sparkles },
  { label: "Finance Agent", className: "right-[2%] bottom-[22%]", icon: BriefcaseBusiness },
  { label: "Support Agent", className: "left-[38%] bottom-[3%]", icon: MessageSquare },
  { label: "Operations Agent", className: "right-[34%] top-[4%]", icon: Workflow },
];

const blueprintLayers: BlueprintLayer[] = [
  {
    title: "Foundation Models",
    body: "Frontier LLMs, SLMs, embeddings, and multimodal models.",
    icon: Cpu,
  },
  {
    title: "Knowledge Layer",
    body: "RAG, vector search, graph grounding, and governed enterprise data.",
    icon: Database,
  },
  {
    title: "Agent Layer",
    body: "Planner, critic, executor, and specialist agent orchestration.",
    icon: Bot,
  },
  {
    title: "Automation Layer",
    body: "APIs, workflows, approvals, events, and human-in-the-loop controls.",
    icon: Workflow,
  },
  {
    title: "Business Layer",
    body: "Measurable outcomes, observability, governance, and operating rhythm.",
    icon: BriefcaseBusiness,
  },
];

function useMouseParallax() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    setPosition({
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    });
  }

  return { ref, position, onMouseMove };
}

function AnimatedBackground({ variant = "grid" }: { variant?: "grid" | "mesh" | "aurora" }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          variant === "aurora"
            ? "bg-[radial-gradient(circle_at_22%_12%,rgba(255,146,85,0.34),transparent_28%),radial-gradient(circle_at_80%_28%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#050505_0%,#1b0d07_48%,#ffffff_170%)]"
            : "bg-[radial-gradient(ellipse_at_12%_8%,rgba(168,245,210,0.5),transparent_35%),radial-gradient(ellipse_at_55%_0%,rgba(185,198,255,0.45),transparent_40%),radial-gradient(ellipse_at_45%_75%,rgba(190,205,255,0.35),transparent_35%),radial-gradient(ellipse_at_65%_100%,rgba(190,235,220,0.3),transparent_35%),linear-gradient(to_bottom_right,#f8f8f8,#eef1f4,#f7f7f7)]",
        )}
      />
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-[size:72px_72px] opacity-42" /> */}
      <motion.div
        animate={variant === "aurora" ? { x: ["-8%", "8%", "-8%"], y: ["0%", "4%", "0%"] } : undefined}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-10 h-72 w-[46rem] rounded-full bg-[linear-gradient(90deg,rgba(235,94,4,0.22),rgba(255,146,85,0.08),transparent)] blur-3xl"
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:13px_13px]" />
      {variant === "mesh" ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(255,146,85,0.18)_0_1px,transparent_2px),radial-gradient(circle_at_68%_55%,rgba(255,255,255,0.14)_0_1px,transparent_2px)] bg-[size:96px_96px]" />
      ) : null}
    </div>
  );
}

function HeroCopy({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  primary: string;
  secondary: string;
}) {
  return (
    <motion.div
      variants={revealContainer}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-3xl -mt-20"
    >
      <motion.p variants={revealItem} className="text-sm font-semibold uppercase tracking-[0.26em] text-main">
        {eyebrow}
      </motion.p>
      <motion.h1
        variants={revealItem}
        className="mt-5 font-bold text-main !text-[46px] leading-tight sm:text-[42px] sm:leading-[48px]"
      >
        {title}
      </motion.h1>
      <motion.p variants={revealItem} className="mt-6 max-w-2xl text-lg leading-8 text-main sm:text-xl">
        {body}
      </motion.p>
      <motion.div variants={revealItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="default">
          <Link href="/contact-us">
            {primary}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/case-studies">
            {secondary}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

export function EnterpriseAICommandCenterHero() {
  const { ref, position, onMouseMove } = useMouseParallax();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let cleanup = () => {};

    async function initGsap() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.gsap;

      const context = gsap.context(() => {
        gsap.from(".command-panel", {
          opacity: 0,
          y: 28,
          scale: 0.96,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        });

        gsap.to(".command-line", {
          strokeDashoffset: -180,
          duration: 2.4,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".command-agent", {
          rotate: 2,
          y: -8,
          duration: 4,
          yoyo: true,
          repeat: -1,
          stagger: 0.28,
          ease: "sine.inOut",
        });
      }, panelRef);

      cleanup = () => context.revert();
    }

    initGsap();

    return () => cleanup();
  }, [shouldReduceMotion]);

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative isolate min-h-screen overflow-hidden bg-black pt-36 md:pt-32 text-white"
    >
      <AnimatedBackground />
      <div className="container relative grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[0.92fr_1.08fr]">
        <HeroCopy
          eyebrow="Enterprise AI Command Center"
          title="From Autonomous Agents to Enterprise Intelligence"
          body="Deploy AI systems that reason, orchestrate, and execute across your organization with measurable business impact."
          primary="Schedule a Free Consultation"
          secondary="Explore AI Solutions"
        />

        <motion.div
          ref={panelRef}
          style={{
            x: position.x * -18,
            y: position.y * -18,
          }}
          className="relative z-10 mx-auto aspect-[1.04] w-full max-w-[650px]"
        >
          <div className="command-panel absolute inset-[8%] rounded-lg border border-white/12 bg-white/[0.075] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#FF9255]">Live AI Ops</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Command Dashboard</h3>
              </div>
              <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-200">
                Online
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["Workflow Load", "Model Routing", "Guardrails", "Revenue Signals"].map((item, index) => (
                <div key={item} className="command-panel rounded-lg border border-white/10 bg-black/24 p-4">
                  <p className="text-xs text-white/54">{item}</p>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#eb5e04,#FF9255)]"
                      style={{ width: `${62 + index * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 650" aria-hidden="true">
            <path className="command-line" d="M110 160 C250 210 390 210 540 150" fill="none" stroke="#FF9255" strokeWidth="1.5" strokeDasharray="12 14" />
            <path className="command-line" d="M110 500 C255 410 390 410 540 505" fill="none" stroke="#FF9255" strokeWidth="1.5" strokeDasharray="12 14" />
            <path className="command-line" d="M90 250 C245 340 390 340 560 250" fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="10 13" />
          </svg>

          {commandAgents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.label}
                style={{
                  x: position.x * (index % 2 === 0 ? 24 : -24),
                  y: position.y * (index % 2 === 0 ? 24 : -24),
                }}
                className={cn(
                  "command-agent absolute z-20 w-48 rounded-lg border border-white/14 bg-white/[0.09] p-4 shadow-2xl backdrop-blur-xl",
                  agent.className,
                )}
              >
                <Icon className="size-5 text-[#FF9255]" />
                <h4 className="mt-3 text-base font-bold text-white">{agent.label}</h4>
                <p className="mt-1 text-xs leading-5 text-white/62">{agent.detail}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function AIOperatingSystemHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black pt-36 md:pt-32 text-white">
      <AnimatedBackground variant="mesh" />
      <div className="container relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center pb-20 text-center">
        <HeroCopy
          eyebrow="AI Operating System"
          title="The Enterprise Operating System for Generative AI"
          body="Transform fragmented workflows into intelligent systems powered by autonomous agents, retrieval architectures, and enterprise-grade orchestration."
          primary="Talk to an AI Architect"
          secondary="View Case Studies"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mt-14 aspect-square w-full max-w-[660px]"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 z-20 flex size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF9255]/50 bg-white/[0.08] shadow-[0_0_90px_rgba(255,146,85,0.42)] backdrop-blur-2xl"
          >
            <Brain className="size-16 text-white" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[12%] rounded-full border border-dashed border-white/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[24%] rounded-full border border-[#FF9255]/25"
          />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 660 660" aria-hidden="true">
            {operatingNodes.map((_, index) => (
              <motion.path
                key={index}
                d={`M330 330 C ${130 + index * 82} ${120 + index * 52}, ${500 - index * 38} ${140 + index * 40}, ${330 + Math.cos(index) * 230} ${330 + Math.sin(index) * 230}`}
                fill="none"
                stroke="#FF9255"
                strokeOpacity="0.42"
                strokeWidth="1.2"
                strokeDasharray="8 12"
                animate={{ strokeDashoffset: [0, -160] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </svg>
          {operatingNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                  "absolute z-30 flex min-w-40 items-center gap-3 rounded-lg border border-white/12 bg-white/[0.08] px-4 py-3 text-left shadow-2xl backdrop-blur-xl",
                  node.className,
                )}
              >
                <Icon className="size-5 text-[#FF9255]" />
                <span className="text-sm font-bold text-white">{node.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function AutonomousAgentEcosystemHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-50 md:pt-32 pb-12 text-white">
      <div className="container relative grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <HeroCopy
          eyebrow=""
          title={
              <>
                From Autonomous <br />
                <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                  Agents to Enterprise AI
                </span>
              </>
          }
          body="Architecting Sovereign Cognitive Ecosystems for the Modern Enterprise"
          primary="Start Your AI Journey"
          secondary="See Enterprise Results"
        />

        <div className="relative mx-auto aspect-square w-full max-w-[680px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 680 680" aria-hidden="true">
            {ecosystemAgents.map((_, index) => (
              <motion.path
                key={index}
                d={`M340 340 L ${120 + (index % 3) * 230} ${120 + Math.floor(index / 3) * 350}`}
                fill="none"
                stroke="#5fb0c2"
                strokeOpacity="0.48"
                strokeWidth="1.6"
                strokeDasharray="9 14"
                animate={{ strokeDashoffset: [0, -180] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: index * 0.12 }}
              />
            ))}
          </svg>

          <motion.div
            animate={{ boxShadow: ["0 0 50px #c4eedb", "0 0 90px #c4eedb", "0 0 50px #c4eedb"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 z-20 w-56 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[#5fb0c2]/42 bg-[#000] p-6 text-center backdrop-blur-2xl"
          >
            <Orbit className="mx-auto size-9 text-[#5fb0c2]" />
            <h3 className="mt-4 text-2xl font-bold text-white">CEO Agent</h3>
            <p className="mt-2 text-sm leading-6 text-white/62">Delegates, reviews, and coordinates enterprise outcomes.</p>
          </motion.div>

          {ecosystemAgents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.label}
                animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                  "absolute z-30 w-44 rounded-lg border border-black/13 bg-white p-4 shadow-2xl backdrop-blur-xl",
                  agent.className,
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-[#5fb0c2]" />
                  <span className="size-2 rounded-full bg-[#5fb0c2] shadow-[0_0_18px_rgba(110,231,183,0.75)]" />
                </div>
                <div className="mt-3 font-semibold text-main text-[16px]">{agent.label}</div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <motion.div
                    animate={{ width: ["20%", "88%", "20%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#2c4e84,#5fb0c2)]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SovereignAIInfrastructureHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black pt-36 md:pt-32 text-white">
      <AnimatedBackground variant="aurora" />
      <div className="container relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center pb-20 text-center">
        <HeroCopy
          eyebrow="Sovereign AI Infrastructure"
          title="Architecting Sovereign AI Infrastructure for Modern Enterprises"
          body="From proprietary knowledge systems to autonomous agents and model optimization, we build AI ecosystems engineered for security, scale, and long-term competitive advantage."
          primary="Book Strategy Session"
          secondary="Explore AI Frameworks"
        />

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="relative mt-12 w-full max-w-5xl rounded-lg border border-white/14 bg-white/[0.075] p-5 shadow-[0_36px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl sm:p-7"
        >
          <div className="absolute inset-0 rounded-lg bg-[linear-gradient(135deg,rgba(255,146,85,0.14),transparent_42%,rgba(255,255,255,0.05))]" />
          <div className="relative grid gap-4">
            {blueprintLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.14 }}
                  className="relative grid gap-4 rounded-lg border border-white/10 bg-black/22 p-4 text-left sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#eb5e04,#FF9255)] text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{layer.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/62">{layer.body}</p>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.65, delay: 0.72 + index * 0.14 }}
                    className="hidden h-px w-36 origin-left bg-[linear-gradient(90deg,#FF9255,transparent)] sm:block"
                  />
                </motion.div>
              );
            })}
          </div>
          <Lock className="absolute right-6 top-6 size-5 text-[#FF9255]" />
        </motion.div>
      </div>
    </section>
  );
}

export default function GenerativeAIHeroSections() {
  return <SovereignAIInfrastructureHero />;
}
