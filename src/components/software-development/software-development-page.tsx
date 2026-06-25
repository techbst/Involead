"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useInView,
} from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Blocks,
  Code2,
  Cpu,
  Gauge,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

type Capability = { title: string; description: string; icon: LucideIcon };
type ProcessStep = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};
type StackCard = { title: string; description: string; tag: string };
type Principle = { title: string; description: string; icon: LucideIcon };

// ─── Data ────────────────────────────────────────────────────────────────────

const capabilities: Capability[] = [
  {
    title: "Architecture & Delivery",
    description:
      "Great systems mirror the shape of the business. We align architecture to your users, workflows, risk, and product goals so what you ship stays coherent as it grows.",
    icon: Blocks,
  },
  {
    title: "Performance & Scale",
    description:
      "Applications are tuned for responsiveness, throughput, and operational clarity—helping teams launch quickly without compromising runtime resilience.",
    icon: Gauge,
  },
  {
    title: "Security & Compliance",
    description:
      "Threat modeling, secure SDLC, secrets hygiene, and audit-ready controls are woven into engineering decisions instead of appended at release time.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-Surface UX",
    description:
      "We deliver consistent experiences across web, mobile, desktop, and internal tools so your product feels unified wherever people use it.",
    icon: PanelsTopLeft,
  },
];

const processSteps: ProcessStep[] = [
  {
    label: "01",
    title: "Discovery & Planning",
    description:
      "We define business goals, workflows, technical constraints, and measurable outcomes before architecture choices are locked in.",
    icon: Layers3,
  },
  {
    label: "02",
    title: "Design & Development",
    description:
      "We build your product in agile delivery cycles with frontend and backend moving together, supported by continuous review and testing.",
    icon: PanelsTopLeft,
  },
  {
    label: "03",
    title: "Quality & Hardening",
    description:
      "We strengthen the product through test coverage, edge-case validation, observability, and performance tuning before launch pressure arrives.",
    icon: Code2,
  },
  {
    label: "04",
    title: "Release",
    description:
      "CI/CD, environment controls, monitoring, and rollback planning keep releases smooth and low-risk, even in business-critical systems.",
    icon: Sparkles,
  },
];

const stackCards: StackCard[] = [
  {
    title: "AI-Native Architecture",
    description:
      "We build intelligent capabilities into the core product so interfaces and workflows adapt to context and user behavior.",
    tag: "Intelligence",
  },
  {
    title: "Big Data & Analytics",
    description:
      "Pipelines and product telemetry combine to deliver real-time insight, predictive signals, and measurable usage intelligence.",
    tag: "Data",
  },
  {
    title: "Multi-Cloud Infrastructure",
    description:
      "Cloud-agnostic delivery across modern platforms gives teams resilience, portability, and room to scale globally with confidence.",
    tag: "Infrastructure",
  },
  {
    title: "Real-Time Communication",
    description:
      "Streaming dashboards, collaborative interfaces, and connected-device flows stay fast with event-driven system design.",
    tag: "Real-Time",
  },
  {
    title: "Cross-Platform Engineering",
    description:
      "Unified product thinking across web, mobile, and desktop reduces delivery drag while preserving a consistent user experience.",
    tag: "Platform",
  },
  {
    title: "DevOps Excellence",
    description:
      "Release pipelines, runtime hardening, and observability keep systems stable under traffic while teams continue shipping fast.",
    tag: "DevOps",
  },
];

const principles: Principle[] = [
  {
    title: "Security-First Engineering",
    description:
      "Compliance, data protection, and operational safety are engineered in from the first sprint rather than treated as release-phase tasks.",
    icon: ShieldCheck,
  },
  {
    title: "Measurable Value",
    description:
      "Every build is tied to adoption, performance, and business outcomes so the software proves its value beyond launch day.",
    icon: Gauge,
  },
  {
    title: "Human-Centered Intelligence",
    description:
      "We design software that helps people move faster with more confidence instead of hiding decisions behind unnecessary complexity.",
    icon: Cpu,
  },
];

// ─── Design tokens ───────────────────────────────────────────────────────────

const COLORS = {
  ink: "#fff",
  surface: "#080c1a",
  card: "#0c1220",
  border: "rgba(99,130,255,0.13)",
  accent: "#5b7fff",
  accentGlow: "rgba(91,127,255,0.35)",
  cyan: "#36d9c8",
  muted: "rgba(200,215,255,0.45)",
  mutedStrong: "rgba(200,215,255,0.75)",
  white: "#000",
};

// ─── Easing ──────────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;
const easeOut = [0.0, 0.0, 0.2, 1] as const;

// ─── Cursor glow hook ────────────────────────────────────────────────────────

function useCursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return { springX, springY };
}

// ─── Scroll reveal wrapper ───────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Noise overlay ───────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// ─── Global cursor glow orb ──────────────────────────────────────────────────

function CursorGlowOrb() {
  const { springX, springY } = useCursorGlow();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[100]"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 480,
        height: 480,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(91,127,255,0.08) 0%, transparent 70%)",
        filter: "blur(1px)",
      }}
    />
  );
}

// ─── Grid lines background ───────────────────────────────────────────────────

function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity: 0.04 }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#5b7fff"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// ─── Section gap ─────────────────────────────────────────────────────────────

function Gap() {
  return <div style={{ height: 60 }} />;
}

// ─── Label chip ──────────────────────────────────────────────────────────────

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
      style={{
        borderColor: COLORS.border,
        color: COLORS.accent,
        background: "rgba(91,127,255,0.06)",
      }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: COLORS.accent }}
      />
      {children}
    </span>
  );
}

// ─── Section title ───────────────────────────────────────────────────────────

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <Chip>{eyebrow}</Chip>
      )}
      <h2
        className="mt-4 font-semibold leading-[1.05] tracking-[-0.03em]"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          color: COLORS.white,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 max-w-2xl text-base leading-7"
          style={{
            color: COLORS.muted,
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// ─── Card shell ──────────────────────────────────────────────────────────────

function Card({
  children,
  className = "",
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${className}`}
      style={{
        background: COLORS.card,
        borderColor: COLORS.border,
        boxShadow: glow
          ? `0 0 60px ${COLORS.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.04)`
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Hover tilt card ─────────────────────────────────────────────────────────

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sRotX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const sRotY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 8);
    rotateY.set(x * 8);
  }, [rotateX, rotateY]);

  const onMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: sRotX, rotateY: sRotY, perspective: 800, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const [capIdx, setCapIdx] = useState(0);
  const active = capabilities[capIdx];
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  useEffect(() => {
    const t = setInterval(() => setCapIdx((i) => (i + 1) % capabilities.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <GridLines />

      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,127,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-1/4"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(54,217,200,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <Chip>Software Engineering</Chip>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease }}
        className="mt-8 max-w-5xl text-center font-semibold leading-[1.03] tracking-[-0.04em]"
        style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)", color: COLORS.white }}
      >
        Engineering{" "}
        <span
          style={{
            background: `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.cyan})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          fast, secure
        </span>{" "}
        products that{" "}
        <span
          style={{
            background: `linear-gradient(120deg, ${COLORS.cyan}, ${COLORS.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          scale
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16, ease }}
        className="mt-6 max-w-2xl text-center text-lg leading-8"
        style={{ color: COLORS.muted }}
      >
        We partner from discovery through production—architecture, implementation,
        hardening, and operations—so your teams ship reliable software on web,
        mobile, and desktop without sacrificing speed or security.
      </motion.p>

      {/* Capability rotator */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease }}
        className="mt-14 w-full max-w-3xl"
      >
        <Card className="p-6">
          <div className="flex items-start gap-5">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ background: "rgba(91,127,255,0.12)", border: `1px solid ${COLORS.border}` }}
            >
              <active.icon
                className="h-5 w-5"
                style={{ color: COLORS.accent }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.12em]"
                    style={{ color: COLORS.accent }}
                  >
                    {active.title}
                  </p>
                  <p
                    className="mt-2 text-base leading-7"
                    style={{ color: COLORS.mutedStrong }}
                  >
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Tab indicators */}
          <div className="mt-5 flex gap-1.5">
            {capabilities.map((cap, i) => (
              <button
                key={cap.title}
                onClick={() => setCapIdx(i)}
                aria-label={cap.title}
                className="h-1 flex-1 rounded-full transition-all duration-300"
                style={{
                  background: i === capIdx ? COLORS.accent : "rgba(91,127,255,0.2)",
                }}
              />
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={() =>
          document
            .getElementById("platforms")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.18em]"
        style={{ color: COLORS.muted }}
      >
        <span>Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border"
          style={{ borderColor: COLORS.border, color: COLORS.accent }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </motion.section>
  );
}

// ─── Platform badges ──────────────────────────────────────────────────────────

const platforms = ["Web", "Mobile", "Desktop", "API", "Cloud", "AI/ML"];

function PlatformsBar() {
  return (
    <section id="platforms" className="relative overflow-hidden py-16">
      <div className="container mx-auto px-6">
        <Reveal>
          <p
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: COLORS.muted }}
          >
            Platforms we build on
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease }}
                whileHover={{ scale: 1.05, borderColor: COLORS.accent }}
                className="cursor-default rounded-xl border px-5 py-2.5 text-sm font-medium"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.mutedStrong,
                  background: COLORS.card,
                }}
              >
                {p}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Web Applications ────────────────────────────────────────────────────────

const webMetrics = [
  { label: "Pipeline velocity", value: "+24%" },
  { label: "Live evaluations", value: "13" },
  { label: "Active experiments", value: "6" },
];

function WebSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTitle
                eyebrow="Web Applications"
                title="Enterprise-grade web platforms built to last"
                description="Dashboards, ops consoles, experiment hubs, and enterprise workflows with speed, scale, and collaboration built in."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {webMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border p-4"
                    style={{ borderColor: COLORS.border, background: COLORS.card }}
                  >
                    <p
                      className="text-2xl font-semibold"
                      style={{ color: COLORS.accent }}
                    >
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs leading-5" style={{ color: COLORS.muted }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-3">
                {["State orchestration", "Role-aware access", "Observability hooks", "Large dataset performance"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm"
                      style={{
                        borderColor: COLORS.border,
                        color: COLORS.mutedStrong,
                        background: "rgba(91,127,255,0.04)",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: COLORS.cyan }}
                      />
                      {item}
                    </div>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Dashboard mockup */}
          <Reveal delay={0.2}>
            <TiltCard>
              <Card glow className="overflow-hidden">
                {/* Mockup header */}
                <div
                  className="flex items-center gap-2 border-b px-5 py-3"
                  style={{ borderColor: COLORS.border }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div
                      key={c}
                      className="h-3 w-3 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                  <div
                    className="ml-3 h-5 flex-1 max-w-[160px] rounded-md"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  />
                </div>
                <div className="p-5">
                  {/* Skeleton chart area */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${COLORS.border}` }}
                  >
                    <div className="flex items-end gap-2" style={{ height: 100 }}>
                      {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-md"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.6, ease: easeOut }}
                          style={{
                            background: `linear-gradient(to top, ${COLORS.accent}, ${COLORS.cyan})`,
                            opacity: 0.6 + i * 0.05,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Stat row */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {webMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg p-3"
                        style={{ background: "rgba(91,127,255,0.07)" }}
                      >
                        <p
                          className="text-xs font-medium"
                          style={{ color: COLORS.muted }}
                        >
                          {m.label}
                        </p>
                        <p
                          className="mt-1 text-lg font-semibold"
                          style={{ color: COLORS.white }}
                        >
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile Applications ─────────────────────────────────────────────────────

function MobileSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone mockup */}
          <Reveal>
            <TiltCard className="flex justify-center">
              <div
                className="relative w-[260px] overflow-hidden rounded-[2.4rem] border-[10px]"
                style={{
                  borderColor: "#1a1f2e",
                  background: "#0c1220",
                  boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 60px ${COLORS.accentGlow}`,
                }}
              >
                {/* Notch */}
                <div
                  className="mx-auto mb-3 h-5 w-20 rounded-full"
                  style={{ background: "#0a0e1a" }}
                />
                {/* Screen */}
                <div className="px-3 pb-4">
                  <div
                    className="rounded-xl p-3"
                    style={{ background: "rgba(91,127,255,0.06)", border: `1px solid ${COLORS.border}` }}
                  >
                    <p
                      className="text-xs font-semibold"
                      style={{ color: COLORS.white }}
                    >
                      Marketing Analytics
                    </p>
                    <p
                      className="mt-1 text-[10px]"
                      style={{ color: COLORS.muted }}
                    >
                      Growth dashboard
                    </p>
                    <div className="mt-3 space-y-2">
                      {["ROAS +18%", "CTR 4.3%", "12 active campaigns"].map((s) => (
                        <div
                          key={s}
                          className="rounded-lg px-3 py-2 text-[11px] font-medium"
                          style={{ background: "rgba(54,217,200,0.08)", color: COLORS.cyan }}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div
                      className="h-24 rounded-xl"
                      style={{ background: "rgba(91,127,255,0.08)", border: `1px solid ${COLORS.border}` }}
                    />
                    <div
                      className="h-24 rounded-xl"
                      style={{ background: "rgba(54,217,200,0.06)", border: `1px solid ${COLORS.border}` }}
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div>
            <Reveal>
              <SectionTitle
                eyebrow="Mobile Applications"
                title="Native-quality apps built for real decisions"
                description="We build native and cross-platform mobile products with strong performance, clear navigation, and product telemetry that supports real decision-making on the go."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Growth dashboards", icon: Gauge },
                  { title: "Document intelligence", icon: Layers3 },
                  { title: "Offline-first sync", icon: Code2 },
                  { title: "Push & approvals", icon: Sparkles },
                ].map(({ title, icon: Icon }) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -4, borderColor: COLORS.accent }}
                    className="flex items-center gap-3 rounded-xl border p-4 text-sm font-medium transition-colors"
                    style={{
                      borderColor: COLORS.border,
                      color: COLORS.mutedStrong,
                      background: COLORS.card,
                    }}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" style={{ color: COLORS.accent }} />
                    {title}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process Section ─────────────────────────────────────────────────────────

function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Our Process"
            title="Engineering intelligence into every solution"
            description="We build software that thinks, adapts, and grows with your business—pairing strong product judgment with production-ready execution."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-14 overflow-hidden rounded-2xl border"
            style={{ borderColor: COLORS.border, background: COLORS.card }}
          >
            {/* Step nav */}
            <div
              className="flex overflow-x-auto border-b"
              style={{ borderColor: COLORS.border }}
            >
              {processSteps.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className="relative flex flex-1 flex-col items-start gap-1 px-6 py-5 text-left transition-colors"
                  style={{
                    background: active === i ? "rgba(91,127,255,0.07)" : "transparent",
                    color: active === i ? COLORS.white : COLORS.muted,
                    minWidth: 160,
                  }}
                >
                  <span
                    className="text-xs font-bold tracking-[0.14em]"
                    style={{ color: active === i ? COLORS.accent : COLORS.muted }}
                  >
                    {s.label}
                  </span>
                  <span className="text-sm font-medium">{s.title}</span>
                  {active === i && (
                    <motion.div
                      layoutId="step-underline"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: COLORS.accent }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease }}
                className="p-8 lg:p-12"
              >
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <div>
                    <div
                      className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: "rgba(91,127,255,0.1)",
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <step.icon className="h-6 w-6" style={{ color: COLORS.accent }} />
                    </div>
                    <h3
                      className="text-3xl font-semibold tracking-tight"
                      style={{ color: COLORS.white }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-4 text-base leading-8"
                      style={{ color: COLORS.muted }}
                    >
                      {step.description}
                    </p>
                  </div>
                  {/* Abstract art */}
                  <div
                    className="flex h-52 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(91,127,255,0.04)",
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative flex h-28 w-28 items-center justify-center"
                    >
                      <div
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: `${COLORS.accent}30` }}
                      />
                      <div
                        className="absolute inset-4 rounded-full border"
                        style={{ borderColor: `${COLORS.cyan}30` }}
                      />
                      <div
                        className="absolute inset-8 rounded-full"
                        style={{ background: `radial-gradient(circle, ${COLORS.accentGlow}, transparent)` }}
                      />
                      <step.icon className="h-8 w-8" style={{ color: COLORS.accent }} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Stack Carousel ───────────────────────────────────────────────────────────

function StackSection() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + stackCards.length) % stackCards.length);
  const next = () => setIdx((i) => (i + 1) % stackCards.length);

  const visible = [-1, 0, 1].map((offset) => ({
    card: stackCards[(idx + offset + stackCards.length) % stackCards.length],
    offset,
  }));

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Stack Intelligence"
            title="Intelligence built into every layer"
            description="From architecture to deployment, we engineer systems that scale, adapt, and deliver measurable performance."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 flex h-[380px] items-center justify-center">
            {visible.map(({ card, offset }) => (
              <motion.div
                key={card.title}
                animate={{
                  x: offset * 340,
                  scale: offset === 0 ? 1 : 0.84,
                  opacity: offset === 0 ? 1 : 0.5,
                  filter: offset === 0 ? "blur(0px)" : "blur(2px)",
                  zIndex: offset === 0 ? 10 : 0,
                }}
                transition={{ duration: 0.5, ease }}
                className="absolute w-72 sm:w-80"
              >
                <TiltCard>
                  <Card glow={offset === 0} className="p-6">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{
                        background: "rgba(91,127,255,0.1)",
                        color: COLORS.accent,
                      }}
                    >
                      {card.tag}
                    </span>
                    <h3
                      className="mt-4 text-xl font-semibold leading-tight"
                      style={{ color: COLORS.white }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-6"
                      style={{ color: COLORS.muted }}
                    >
                      {card.description}
                    </p>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}

            {/* Nav buttons */}
            {(
              [
                { fn: prev, side: "left-0", icon: ArrowLeft },
                { fn: next, side: "right-0", icon: ArrowRight },
              ] as { fn: () => void; side: string; icon: typeof ArrowLeft }[]
            ).map(({ fn, side, icon: Icon }) => (
              <button
                key={side}
                onClick={fn}
                className={`absolute ${side} z-20 flex h-10 w-10 items-center justify-center rounded-full border transition-colors`}
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.card,
                  color: COLORS.accent,
                }}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {stackCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? 24 : 6,
                  background: i === idx ? COLORS.accent : "rgba(91,127,255,0.25)",
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Desktop section ─────────────────────────────────────────────────────────

const desktopFeatures = [
  { title: "Cross-platform shells", description: "Electron, Tauri, .NET, or Qt chosen for your performance and integration needs." },
  { title: "Installer & auto-update", description: "Signed installers and staged auto-updates for predictable, low-friction releases." },
  { title: "Offline & local-first", description: "Local caching and background sync keep workflows responsive during network loss." },
  { title: "System integration", description: "Native menus, trays, notifications, and device hooks per operating system." },
  { title: "Security hardening", description: "Code signing, sandboxing, CSP, and secure secrets handling aligned to enterprise baselines." },
  { title: "Accessibility & polish", description: "Keyboard-first UX, screen reader support, and HiDPI polish for audit-ready quality." },
];

function DesktopSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTitle
                eyebrow="Desktop Applications"
                title="Desktop apps built for macOS & Windows"
                description="We build desktop apps with native UX, reliable updates, local-first resilience, and enterprise-grade security."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {desktopFeatures.map((f, i) => (
                  <motion.article
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease }}
                  >
                    <h3
                      className="text-base font-semibold leading-snug"
                      style={{ color: COLORS.white }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-6"
                      style={{ color: COLORS.muted }}
                    >
                      {f.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <TiltCard>
              <Card glow className="overflow-hidden">
                {/* Desktop window chrome */}
                <div
                  className="flex items-center gap-2 border-b px-5 py-3"
                  style={{ borderColor: COLORS.border }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
                  ))}
                  <span
                    className="ml-auto text-xs font-medium"
                    style={{ color: COLORS.muted }}
                  >
                    Desktop Command Center
                  </span>
                  <span
                    className="ml-4 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{ background: "rgba(54,217,200,0.1)", color: COLORS.cyan }}
                  >
                    Live
                  </span>
                </div>
                {/* Sidebar + content */}
                <div className="flex gap-0">
                  <div
                    className="w-40 border-r p-4"
                    style={{ borderColor: COLORS.border }}
                  >
                    {["Overview", "Files", "Settings", "Security", "Logs"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className="mb-1 rounded-lg px-3 py-2 text-xs font-medium"
                          style={{
                            background:
                              i === 0 ? "rgba(91,127,255,0.12)" : "transparent",
                            color: i === 0 ? COLORS.accent : COLORS.muted,
                          }}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex-1 p-5">
                    <div className="grid grid-cols-2 gap-3">
                      {["CPU 24%", "RAM 3.2 GB", "Disk 68%", "Net OK"].map((m) => (
                        <div
                          key={m}
                          className="rounded-xl p-3 text-sm font-medium"
                          style={{
                            background: "rgba(91,127,255,0.05)",
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.mutedStrong,
                          }}
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-4 h-32 rounded-xl"
                      style={{ background: "rgba(91,127,255,0.04)", border: `1px solid ${COLORS.border}` }}
                    />
                  </div>
                </div>
              </Card>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Principles ───────────────────────────────────────────────────────────────

function PrinciplesSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Our Principles"
            title="The principles that drive every decision"
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <TiltCard>
                <motion.div
                  whileHover={{ borderColor: COLORS.accent }}
                  className="h-full rounded-2xl border p-8 transition-colors"
                  style={{ borderColor: COLORS.border, background: COLORS.card }}
                >
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(91,127,255,0.1)", border: `1px solid ${COLORS.border}` }}
                  >
                    <p.icon className="h-6 w-6" style={{ color: COLORS.accent }} />
                  </div>
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: COLORS.white }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: COLORS.muted }}
                  >
                    {p.description}
                  </p>
                </motion.div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-10 sm:p-16"
            style={{
              background: `linear-gradient(135deg, #0d1630 0%, #162040 50%, #0d1f38 100%)`,
              border: `1px solid rgba(91,127,255,0.2)`,
              boxShadow: `0 0 100px rgba(91,127,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            {/* Glow orbs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(91,127,255,0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10"
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(54,217,200,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <GridLines />

            <div className="relative z-10 max-w-xl">
              <Chip>Ready to build?</Chip>
              <h2
                className="mt-6 font-semibold leading-[1.06] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  color: COLORS.white,
                }}
              >
                Let's shape the{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.cyan})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  future of your business
                </span>
              </h2>
              <p
                className="mt-5 text-base leading-7"
                style={{ color: COLORS.muted }}
              >
                Partner with InvoLead to transform complexity into clarity through
                data, AI, and design—creating intelligent solutions that drive
                sustainable growth.
              </p>
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold"
                style={{
                  background: `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.cyan})`,
                  color: "#04060f",
                }}
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function SoftwareDevelopmentPage() {
  return (
    <main
      className="overflow-hidden"
      style={{ background: COLORS.ink, color: COLORS.white }}
    >
      <NoiseOverlay />
      <CursorGlowOrb />

      <HeroSection />
      <Gap />
      <PlatformsBar />
      <Gap />
      <WebSection />
      <Gap />
      <MobileSection />
      <Gap />
      <DesktopSection />
      <Gap />
      <ProcessSection />
      <Gap />
      <StackSection />
      <Gap />
      <PrinciplesSection />
      <Gap />
      <CtaSection />
    </main>
  );
}