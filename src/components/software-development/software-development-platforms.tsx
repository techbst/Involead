"use client";

import { useEffect, useState, type MouseEvent } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion";
import {
  Globe,
  Mouse,
  MonitorSmartphone,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import SectionReveal from "@/components/home/SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";

type SurfaceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  tech: string[];
  kind: "web" | "mobile" | "desktop";
};

const surfaces: SurfaceCard[] = [
  {
    title: "Web Applications",
    description:
      "Dashboards, ops consoles, and customer-facing web apps. Fast UX, collaboration patterns, and scale that holds up in production.",
    icon: Globe,
    accent: "#5d83e6",
    tech: ["Next.js", "React", "Vue.js", "Node.js", "FastAPI", "TypeScript", "GraphQL", "PWA"],
    kind: "web",
  },
  {
    title: "Mobile Applications",
    description:
      "Production iOS and Android apps with native-quality UX and secure data-shared codebase or platform-specific polish where it matters.",
    icon: Smartphone,
    accent: "#62d3b0",
    tech: ["React Native", "Flutter", "Kotlin", "Swift", "Expo", "Firebase", "Core ML", "TF Lite"],
    kind: "mobile",
  },
  {
    title: "Desktop Native Apps",
    description:
      "macOS and Windows desktop apps with native integration, dependable updates, and security that meets enterprise expectations.",
    icon: MonitorSmartphone,
    accent: "#7ac5ef",
    tech: ["Electron", "Tauri", "Rust", ".NET", "Qt", "C++", "macOS", "Windows"],
    kind: "desktop",
  },
];

function TechPill({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      className="rounded-full border bg-white px-4 py-2 text-[13px] font-semibold shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
      style={{ borderColor: `${accent}55`, color: accent }}
    >
      {label}
    </span>
  );
}

function TechOrbit({
  tech,
  accent,
  orbitRotateY,
  orbitRotateX,
}: {
  tech: string[];
  accent: string;
  orbitRotateY: MotionValue<number>;
  orbitRotateX: MotionValue<number>;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-36 flex items-center justify-center overflow-visible"
      style={{ transformStyle: "preserve-3d" }}
      aria-hidden="true"
    >
      <motion.div
        className="relative h-px w-px"
        style={{
          transformStyle: "preserve-3d",
          rotateY: orbitRotateY,
          rotateX: orbitRotateX,
        }}
      >
        {tech.map((item, index) => (
          <div
            key={item}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) rotateY(${index * (360 / tech.length)}deg) translateZ(130px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <TechPill label={item} accent={accent} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function DeviceVisual({
  kind,
  accent,
  icon: Icon,
  tech,
}: Pick<SurfaceCard, "kind" | "accent" | "icon" | "tech">) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const floatY = useMotionValue(0);
  const orbitRotateY = useMotionValue(145);
  const orbitRotateX = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 120, damping: 18, mass: 0.8 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 120, damping: 18, mass: 0.8 });
  const smoothFloatY = useSpring(floatY, { stiffness: 120, damping: 18, mass: 0.8 });
  const smoothOrbitRotateY = useSpring(orbitRotateY, { stiffness: 70, damping: 16, mass: 1 });
  const smoothOrbitRotateX = useSpring(orbitRotateX, { stiffness: 70, damping: 16, mass: 1 });

  useEffect(() => {
    if (reduceMotion || hovered) return;

    const controls = animate(orbitRotateY, [145, 505], {
      duration: 18,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [orbitRotateY, hovered, reduceMotion]);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    const offsetX = px - 0.5;
    const offsetY = py - 0.5;

    tiltY.set(offsetX * 14);
    tiltX.set(-offsetY * 10);
    floatY.set(offsetY * -10);
    orbitRotateY.set(145 + offsetX * 120);
    orbitRotateX.set(-offsetY * 18);
  };

  const handleLeave = () => {
    setHovered(false);
    tiltX.set(0);
    tiltY.set(0);
    floatY.set(0);
    orbitRotateY.set(145);
    orbitRotateX.set(0);
  };

  if (kind === "mobile") {
    return (
      <div
        className="relative mx-auto flex h-[230px] w-[260px] items-end justify-center"
        style={{ perspective: 1180 }}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          className="absolute top-4 h-40 w-40 rounded-full blur-3xl"
          style={{ background: `${accent}30` }}
        />
        <TechOrbit
          tech={tech}
          accent={accent}
          orbitRotateY={smoothOrbitRotateY}
          orbitRotateX={smoothOrbitRotateX}
        />
        <motion.div
          className="relative h-[190px] w-[92px] rounded-[1.7rem] border-[9px] border-slate-900 bg-slate-900 shadow-[0_24px_45px_rgba(15,23,42,0.2)]"
          style={{
            transformStyle: "preserve-3d",
            rotateX: smoothTiltX,
            rotateY: smoothTiltY,
            y: smoothFloatY,
          }}
        >
          <div className="absolute left-1/2 top-2 h-2 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
          <div className="m-1.5 flex h-[calc(100%-12px)] flex-col overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-[#effef8] to-[#d7f7e8] p-3">
            <div className="h-2.5 w-12 rounded-full" style={{ background: accent }} />
            <div className="mt-3 h-10 rounded-xl bg-white/70" />
            <div className="mt-3 h-2.5 w-14 rounded-full bg-emerald-200" />
            <div className="mt-2 h-2.5 w-10 rounded-full bg-emerald-100" />
            <div className="mt-4 h-6 rounded-lg" style={{ background: accent }} />
            <div className="mt-auto flex justify-center pb-1">
              <Icon className="h-5 w-5" style={{ color: accent }} />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (kind === "desktop") {
    return (
      <div
        className="relative mx-auto flex h-[230px] w-[320px] items-end justify-center"
        style={{ perspective: 1180 }}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          className="absolute top-6 h-40 w-52 rounded-full blur-3xl"
          style={{ background: `${accent}28` }}
        />
        <TechOrbit
          tech={tech}
          accent={accent}
          orbitRotateY={smoothOrbitRotateY}
          orbitRotateX={smoothOrbitRotateX}
        />
        <motion.div
          className="relative w-[220px]"
          style={{
            transformStyle: "preserve-3d",
            rotateX: smoothTiltX,
            rotateY: smoothTiltY,
            y: smoothFloatY,
          }}
        >
          <div className="h-[128px] rounded-[1.15rem] border-[7px] border-slate-800 bg-[#edf9ff] p-3 shadow-[0_24px_45px_rgba(15,23,42,0.18)]">
            <div className="h-3 w-24 rounded-full" style={{ background: accent }} />
            <div className="mt-4 h-3 w-[82%] rounded-full bg-slate-200" />
            <div className="mt-3 grid grid-cols-[0.7fr_1fr] gap-3">
              <div className="h-12 rounded-lg bg-white/65" />
              <div>
                <div className="h-5 rounded-md" style={{ background: `${accent}90` }} />
                <div className="mt-2 h-2.5 w-20 rounded-full bg-slate-200" />
                <div className="mt-2 h-2.5 w-16 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
          <div className="mx-auto h-6 w-8 rounded-b-xl bg-slate-800" />
          <div className="mx-auto h-2.5 w-24 rounded-full bg-slate-300" />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="relative mx-auto flex h-[230px] w-[320px] items-end justify-center"
      style={{ perspective: 1180 }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className="absolute top-6 h-40 w-52 rounded-full blur-3xl"
        style={{ background: `${accent}28` }}
      />
      <TechOrbit
        tech={tech}
        accent={accent}
        orbitRotateY={smoothOrbitRotateY}
        orbitRotateX={smoothOrbitRotateX}
      />
      <motion.div
        className="relative w-[244px] rounded-[1.2rem] border border-[#97b4ef] bg-white shadow-[0_24px_45px_rgba(15,23,42,0.16)]"
        style={{
          transformStyle: "preserve-3d",
          rotateX: smoothTiltX,
          rotateY: smoothTiltY,
          y: smoothFloatY,
        }}
      >
        <div className="flex items-center gap-2 border-b border-[#d5def4] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 h-3 w-24 rounded-full bg-slate-100" />
        </div>
        <div className="m-2 rounded-[0.9rem] border border-[#a8c1f1] bg-gradient-to-b from-[#e8f0ff] to-white p-3">
          <div className="h-3 w-16 rounded-full" style={{ background: accent }} />
          <div className="mt-4 h-3 w-[85%] rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-[76%] rounded-full bg-slate-100" />
          <div className="mt-2 h-3 w-[68%] rounded-full bg-slate-100" />
          <div className="mt-4 flex justify-between gap-2">
            <div className="h-12 flex-1 rounded-lg bg-white/80" />
            <div className="h-7 w-20 rounded-lg" style={{ background: accent }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SurfacePanel({ surface, index }: { surface: SurfaceCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center text-center"
    >
      <DeviceVisual
        kind={surface.kind}
        accent={surface.accent}
        icon={surface.icon}
        tech={surface.tech}
      />
      <h3 className="mt-8 text-[2rem] font-semibold tracking-[-0.04em] text-slate-950">
        {surface.title}
      </h3>
      <p className="mt-3 max-w-[24rem] text-[15px] leading-8 text-slate-600 sm:text-[16px]">
        {surface.description}
      </p>
    </motion.article>
  );
}

export default function SoftwareDevelopmentPlatforms() {
  return (
    <SectionReveal className="container py-16 sm:py-20">
      <section
        id="software-development-platforms"
        className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-[linear-gradient(180deg,#f7fbff_0%,#edf4ff_100%)] px-6 py-12 shadow-[0_24px_90px_rgba(15,23,42,0.06)] sm:px-8 lg:px-12 lg:py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(98,211,176,0.16),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(124,197,239,0.18),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(95,176,194,0.12),transparent_30%)]" />
        <div className="relative z-10">
          <SectionHeader
            title="Deep, production-grade expertise across web, mobile, and native desktop the three surfaces where we design, build, and ship your software."
            align="center"
            maxWidth="5xl"
            descriptionWidth="3xl"
            titleClassName="!text-[clamp(2rem,3.2vw,3.25rem)] !font-semibold !leading-[1.15] !tracking-[-0.04em] !text-slate-800 !capitalize-none"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {surfaces.map((surface, index) => (
              <SurfacePanel key={surface.title} surface={surface} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-14 flex flex-col items-center"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.38em] text-slate-500">
              Next
            </span>
            <span className="mt-4 flex h-10 w-6 items-start justify-center rounded-full border border-slate-400/70 p-1.5">
              <Mouse className="h-6 w-6 text-slate-400/80" strokeWidth={1.4} />
            </span>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}
