"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SectionHeader } from "@/components/ui/section-header";
import CornerShape from "../ui/shape";

const ANIMATION_DURATION = 3400;
const DRAW_WEIGHT = 1;
const PAUSE_WEIGHT = 0.42;
const FINAL_HOLD_WEIGHT = 0.9;

// Where each step's point sits along the wave, as an offset from a baseline.
// Positive = lower on the curve, negative = higher. This is the only place
// the "shape" of the wave is authored — everything else is measured live
// from the DOM, so the line always lands exactly on its card.
const WAVE_BASE_Y = 92;
const WAVE_AMPLITUDE = 58;

type Step = {
  number: string;
  title: string;
  description: string;
  cardClassName: string;
  waveOffset: number;
  desktopCardClassName: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    description: "Align on business priorities, challenges, and opportunities.",
    cardClassName: "border-[#cfd4ff] bg-[#f1f0ff]",
    waveOffset: -0.15,
    desktopCardClassName: "xl:mt-16",
  },
  {
    number: "02",
    title: "Design",
    description: "Create a scalable data and AI strategy tailored to business objectives.",
    cardClassName: "border-[#bfe7f3] bg-[#eaf9ff]",
    waveOffset: -0.62,
    desktopCardClassName: "xl:mt-3",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop secure, production-ready solutions using modern technologies and best practices.",
    cardClassName: "border-[#f2dca5] bg-[#fff6df]",
    waveOffset: 0.35,
    desktopCardClassName: "xl:mt-24",
  },
  {
    number: "04",
    title: "Embed",
    description:
      "Integrate solutions into business processes and empower teams to adopt them effectively.",
    cardClassName: "border-[#c1ece1] bg-[#edf9f5]",
    waveOffset: -0.38,
    desktopCardClassName: "xl:mt-8",
  },
  {
    number: "05",
    title: "Evolve",
    description: "Continuously refine, optimize, and expand capabilities as business needs grow.",
    cardClassName: "border-[#d3d7ff] bg-[#f1f2ff]",
    waveOffset: 0.12,
    desktopCardClassName: "xl:mt-20",
  },
];

type Anchor = { x: number; y: number };

type TimelineState = {
  lineProgress: number;
  pointActive: boolean[];
  connectorProgress: number[];
  cardActive: boolean[];
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function easeInOut(t: number) {
  return 0.5 - Math.cos(Math.PI * t) / 2;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

// Smooth curve through arbitrary points (Catmull-Rom -> cubic bezier).
// Works with any number/spacing of points, so it stays correct no matter
// how the cards reflow at different viewport widths.
function catmullRomToBezierPath(points: Anchor[]) {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

// Finds the arc-length at which the path reaches a given x. Assumes x is
// monotonically increasing along the path, which holds since our anchors
// are always ordered left to right.
function findLengthAtX(path: SVGPathElement, targetX: number, totalLength: number) {
  let low = 0;
  let high = totalLength;
  for (let i = 0; i < 28; i += 1) {
    const mid = (low + high) / 2;
    if (path.getPointAtLength(mid).x < targetX) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return (low + high) / 2;
}

function buildTimelineState(
  elapsedMs: number,
  reducedMotion: boolean,
  progressPoints: number[]
): TimelineState {
  const count = steps.length;

  if (reducedMotion) {
    return {
      lineProgress: 1,
      pointActive: steps.map(() => true),
      connectorProgress: steps.map(() => 1),
      cardActive: steps.map(() => true),
    };
  }

  const totalUnits = count * (DRAW_WEIGHT + PAUSE_WEIGHT) + FINAL_HOLD_WEIGHT;
  const cycleUnits = (elapsedMs / ANIMATION_DURATION) * totalUnits;

  const pointActive = steps.map(() => false);
  const connectorProgress = steps.map(() => 0);
  const cardActive = steps.map(() => false);

  let remainingUnits = cycleUnits;
  let previousProgress = 0;
  let lineProgress = 0;

  for (let index = 0; index < count; index += 1) {
    const targetProgress = progressPoints[index] ?? (index + 1) / count;

    if (remainingUnits <= DRAW_WEIGHT) {
      const drawProgress = easeInOut(clamp(remainingUnits / DRAW_WEIGHT, 0, 1));
      lineProgress = lerp(previousProgress, targetProgress, drawProgress);
      return { lineProgress, pointActive, connectorProgress, cardActive };
    }

    remainingUnits -= DRAW_WEIGHT;
    lineProgress = targetProgress;
    pointActive[index] = true;

    if (remainingUnits <= PAUSE_WEIGHT) {
      const connectorDraw = easeInOut(clamp(remainingUnits / PAUSE_WEIGHT, 0, 1));
      connectorProgress[index] = connectorDraw;
      cardActive[index] = connectorDraw > 0.08;
      return { lineProgress, pointActive, connectorProgress, cardActive };
    }

    remainingUnits -= PAUSE_WEIGHT;
    connectorProgress[index] = 1;
    cardActive[index] = true;
    previousProgress = targetProgress;
  }

  return {
    lineProgress: 1,
    pointActive: steps.map(() => true),
    connectorProgress: steps.map(() => 1),
    cardActive: steps.map(() => true),
  };
}

function ThinkCard({
  step,
  revealed,
  active,
  onPointerEnter,
  onPointerLeave,
}: {
  step: Step;
  revealed: boolean;
  active: boolean;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}) {
  return (
    <article
      className={`group relative min-h-[190px] w-full overflow-hidden rounded-[22px] border p-5 transition-all duration-500 ease-out sm:p-6 xl:min-h-[224px] ${step.cardClassName}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? active
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(24px)",
        boxShadow: active
          ? "0 24px 44px -22px rgba(15, 23, 42, 0.32)"
          : "0 10px 24px -18px rgba(15, 23, 42, 0.18)",
      }}
    >
      <span
        className="text-[13px] font-semibold tracking-[0.16em]"
        style={{ color: "#48a9c4" }}
      >
        {step.number}
      </span>
      <h3 className="mt-2 text-[22px] font-medium leading-[1.15] text-slate-900 xl:text-[24px]">
        {step.title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-slate-600 xl:mt-4 xl:text-[16px] xl:leading-8">
        {step.description}
      </p>

      <div
        className="pointer-events-none absolute inset-x-5 bottom-5 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: "#48a9c4", opacity: 0.35 }}
      />
    </article>
  );
}

export default function AboutThink() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const desktopStageRef = useRef<HTMLDivElement | null>(null);
  const desktopCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [elapsedMs, setElapsedMs] = useState(0);
  const elapsedRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Everything below is measured straight from the rendered cards, so the
  // wave and its connector lines always line up with them — at any width.
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [anchors, setAnchors] = useState<Anchor[]>([]);
  const [cardTops, setCardTops] = useState<number[]>([]);
  const [pathD, setPathD] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [pointProgress, setPointProgress] = useState<number[]>(
    steps.map((_, index) => (index + 1) / steps.length)
  );
  const wavePoints = useMemo(() => {
    if (anchors.length !== steps.length || stageSize.width === 0) {
      return [];
    }

    const firstAnchor = anchors[0];
    const lastAnchor = anchors[anchors.length - 1];

    return [
      { x: 0, y: firstAnchor.y + 3 },
      ...anchors,
      { x: stageSize.width, y: lastAnchor.y - 3 },
    ];
  }, [anchors, stageSize.width]);

  useEffect(() => {
    elapsedRef.current = elapsedMs;
  }, [elapsedMs]);

  const measure = useCallback(() => {
    const stage = desktopStageRef.current;
    if (!stage) return;

    const stageRect = stage.getBoundingClientRect();
    const nextAnchors: Anchor[] = [];
    const nextCardTops: number[] = [];

    for (let index = 0; index < steps.length; index += 1) {
      const cardNode = desktopCardRefs.current[index];
      if (!cardNode) return;

      const cardRect = cardNode.getBoundingClientRect();
      const centerX = cardRect.left - stageRect.left + cardRect.width / 2;
      const top = cardRect.top - stageRect.top + 34;

      nextAnchors.push({
        x: centerX,
        y: WAVE_BASE_Y + steps[index].waveOffset * WAVE_AMPLITUDE,
      });
      nextCardTops.push(top);
    }

    setStageSize({ width: stageRect.width, height: stage.scrollHeight });
    setAnchors(nextAnchors);
    setCardTops(nextCardTops);
  }, []);

  useEffect(() => {
    const stage = desktopStageRef.current;
    if (!stage) return;

    measure();

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(stage);
    desktopCardRefs.current.forEach((cardNode) => {
      if (cardNode) resizeObserver.observe(cardNode);
    });

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    if (wavePoints.length < 2) return;
    setPathD(catmullRomToBezierPath(wavePoints));
  }, [wavePoints]);

  useEffect(() => {
    if (!pathRef.current || !pathD) return;

    const total = pathRef.current.getTotalLength();
    setPathLength(total);

    if (total === 0) return;

    const nextProgress = anchors.map((anchor) =>
      findLengthAtX(pathRef.current as SVGPathElement, anchor.x, total) / total
    );

    for (let i = 1; i < nextProgress.length; i += 1) {
      if (nextProgress[i] < nextProgress[i - 1]) {
        nextProgress[i] = nextProgress[i - 1];
      }
    }

    setPointProgress(nextProgress);
  }, [pathD, anchors]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setElapsedMs(ANIMATION_DURATION);
      return;
    }

    if (isPaused) return;

    let frameId = 0;
    let startTime = 0;
    const resumeFromElapsed = elapsedRef.current;

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp - resumeFromElapsed;
      }

      setElapsedMs((timestamp - startTime) % ANIMATION_DURATION);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [isPaused, prefersReducedMotion]);

  const timelineState = useMemo(
    () => buildTimelineState(elapsedMs, prefersReducedMotion, pointProgress),
    [elapsedMs, prefersReducedMotion, pointProgress]
  );

  const mobileProgressHeight = useMemo(() => {
    if (prefersReducedMotion) return "100%";

    const reachedSteps = timelineState.connectorProgress.filter((value) => value >= 1).length;
    const activeConnector =
      timelineState.connectorProgress.find((value) => value > 0 && value < 1) ?? 0;
    const totalSegments = steps.length - 1;
    const progress =
      totalSegments === 0 ? 1 : (reachedSteps + activeConnector) / totalSegments;
    return `${clamp(progress, 0, 1) * 100}%`;
  }, [prefersReducedMotion, timelineState.connectorProgress]);

  const wavesReady = stageSize.width > 0 && anchors.length === steps.length;

  return (
    <section className="relative overflow-hidden bg-secondary/15 py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="How we think"
          title="Our Approach to Every Transformation"
          description="Successful transformation is a journey, not a single project. Our approach helps organizations move from strategy to adoption through structured, outcome-focused execution."
          align="center"
          maxWidth="5xl"
          descriptionWidth="4xl"
          textColor="black"
          titleClassName="mx-auto max-w-3xl"
        />
      </div>

      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Desktop / wide layout: wave with connector lines measured live from each card */}
        <div className="hidden lg:block">
          <div ref={desktopStageRef} className="relative">
            {wavesReady && (
              <svg
                className="pointer-events-none absolute inset-0 overflow-visible"
                width={stageSize.width}
                height={stageSize.height}
                viewBox={`0 0 ${stageSize.width} ${stageSize.height}`}
              >
                <defs>
                  <filter id="think-point-glow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="4.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path d={pathD} fill="none" stroke="#cddde3" strokeWidth="5" strokeLinecap="round" />

                <path
                  ref={pathRef}
                  d={pathD}
                  fill="none"
                  stroke="#48a9c4"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: pathLength || undefined,
                    strokeDashoffset: pathLength
                      ? pathLength * (1 - timelineState.lineProgress)
                      : undefined,
                    transition: prefersReducedMotion ? "none" : "stroke-dashoffset 120ms linear",
                  }}
                />

                {steps.map((step, index) => {
                  const anchor = anchors[index];
                  const cardTop = cardTops[index];
                  if (!anchor || cardTop === undefined) return null;

                  const pointActive = timelineState.pointActive[index];
                  const connectorProgress = timelineState.connectorProgress[index];
                  const isComplete = connectorProgress >= 1;
                  const connectorCurrentY = lerp(anchor.y + 16, cardTop, connectorProgress);

                  return (
                    <g key={step.title}>
                      {(pointActive || connectorProgress > 0) && (
                        <line
                          x1={anchor.x}
                          y1={anchor.y + 16}
                          x2={anchor.x}
                          y2={cardTop}
                          stroke="#d9e7ec"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      )}
                      <line
                        x1={anchor.x}
                        y1={anchor.y + 16}
                        x2={anchor.x}
                        y2={connectorCurrentY}
                        stroke="#48a9c4"
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity={connectorProgress > 0 ? 1 : 0}
                        style={{ transition: prefersReducedMotion ? "none" : "y2 120ms linear" }}
                      />
                      <circle
                        cx={anchor.x}
                        cy={anchor.y}
                        r="18"
                        fill="white"
                        stroke={pointActive ? "#48a9c4" : "#b8d8e1"}
                        strokeWidth="5"
                        filter={pointActive ? "url(#think-point-glow)" : undefined}
                      />
                      <circle
                        cx={anchor.x}
                        cy={anchor.y}
                        r="8"
                        fill={pointActive || isComplete ? "#48a9c4" : "#dbe8ed"}
                      />
                    </g>
                  );
                })}
              </svg>
            )}

            <div className="relative grid grid-cols-5 gap-5 pt-[200px] 2xl:gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  ref={(node) => {
                    desktopCardRefs.current[index] = node;
                  }}
                  className={step.desktopCardClassName}
                >
                  <ThinkCard
                    step={step}
                    revealed={
                      timelineState.pointActive[index] || timelineState.connectorProgress[index] > 0
                    }
                    active={timelineState.cardActive[index]}
                    onPointerEnter={() => setIsPaused(true)}
                    onPointerLeave={() => setIsPaused(false)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact / mobile layout: vertical timeline, always aligned since it's a single column */}
        <div className="lg:hidden">
          <div className="relative mx-auto mt-10 max-w-2xl sm:mt-12">
            <div className="absolute bottom-10 left-5 top-10 w-[2px] rounded-full bg-slate-200" />
            <div
              className="absolute left-5 top-10 w-[2px] rounded-full bg-[#48a9c4] transition-all duration-300"
              style={{ height: mobileProgressHeight }}
            />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const active = timelineState.cardActive[index];
                const complete = timelineState.connectorProgress[index] >= 1;
                const pointActive = timelineState.pointActive[index];

                return (
                  <div key={step.title} className="relative pl-14 sm:pl-16">
                    <div className="absolute left-5 top-10 -translate-x-1/2">
                      <div
                        className="grid size-9 place-items-center rounded-full border-[3px] bg-white transition-all duration-500"
                        style={{
                          borderColor: pointActive || complete ? "#48a9c4" : "#b8d8e1",
                          boxShadow: active ? "0 0 0 8px rgba(72,169,196,0.10)" : "none",
                        }}
                      >
                        <div
                          className="size-3 rounded-full transition-colors duration-500"
                          style={{
                            backgroundColor: pointActive || complete ? "#48a9c4" : "#dbe8ed",
                          }}
                        />
                      </div>
                    </div>

                    <ThinkCard
                      step={step}
                      revealed={pointActive || complete}
                      active={active}
                      onPointerEnter={() => setIsPaused(true)}
                      onPointerLeave={() => setIsPaused(false)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[6px] left-0 w-[290px] bg-[#fff]">
        <CornerShape color="#5fb0c226" />
      </div>
    </section>
  );
}
