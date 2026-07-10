"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { SectionHeader } from "@/components/ui/section-header";
import CornerShape from "../ui/shape";

const animationDuration = 9000;
const drawWeight = 1;
const pauseWeight = 0.38;
const finalHoldWeight = 0.9;

const wavePath =
  "M -20 150 C 120 145, 270 140, 420 146 S 760 170, 920 190 S 1240 206, 1430 172 S 1760 126, 2060 148";

const steps = [
  {
    title: "Understand",
    description: "Align on business priorities, challenges, and opportunities.",
    cardClassName: "border-[#cfd4ff] bg-[#f1f0ff]",
    pointProgress: 0.066,
    desktopCardClassName: "xl:mt-14",
  },
  {
    title: "Design",
    description:
      "Create a scalable data and AI strategy tailored to business objectives.",
    cardClassName: "border-[#bfe7f3] bg-[#eaf9ff]",
    pointProgress: 0.253,
    desktopCardClassName: "xl:mt-20",
  },
  {
    title: "Build",
    description:
      "Develop secure, production-ready solutions using modern technologies and best practices.",
    cardClassName: "border-[#f2dca5] bg-[#fff6df]",
    pointProgress: 0.442,
    desktopCardClassName: "xl:mt-28",
  },
  {
    title: "Embed",
    description:
      "Integrate solutions into business processes and empower teams to adopt them effectively.",
    cardClassName: "border-[#c1ece1] bg-[#edf9f5]",
    pointProgress: 0.632,
    desktopCardClassName: "xl:mt-36",
  },
  {
    title: "Evolve",
    description:
      "Continuously refine, optimize, and expand capabilities as business needs grow.",
    cardClassName: "border-[#d3d7ff] bg-[#f1f2ff]",
    pointProgress: 0.823,
    desktopCardClassName: "xl:mt-24",
  },
] as const;

type Step = (typeof steps)[number];

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

function buildTimelineState(elapsedMs: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      lineProgress: 1,
      activeIndex: steps.length - 1,
      pointActive: steps.map(() => true),
      connectorProgress: steps.map(() => 1),
      cardActive: steps.map(() => true),
    };
  }

  const drawUnit = drawWeight;
  const pauseUnit = pauseWeight;
  const totalUnits = steps.length * (drawUnit + pauseUnit) + finalHoldWeight;
  const cycleUnits = (elapsedMs / animationDuration) * totalUnits;

  const pointActive = steps.map(() => false);
  const connectorProgress = steps.map(() => 0);
  const cardActive = steps.map(() => false);

  let remainingUnits = cycleUnits;
  let previousProgress = 0;
  let lineProgress = 0;
  let activeIndex = -1;

  for (let index = 0; index < steps.length; index += 1) {
    const step = steps[index];

    if (remainingUnits <= drawUnit) {
      const drawProgress = easeInOut(clamp(remainingUnits / drawUnit, 0, 1));
      lineProgress = lerp(previousProgress, step.pointProgress, drawProgress);

      return {
        lineProgress,
        activeIndex,
        pointActive,
        connectorProgress,
        cardActive,
      };
    }

    remainingUnits -= drawUnit;
    lineProgress = step.pointProgress;
    pointActive[index] = true;

    if (remainingUnits <= pauseUnit) {
      const connectorDraw = easeInOut(clamp(remainingUnits / pauseUnit, 0, 1));
      connectorProgress[index] = connectorDraw;
      cardActive[index] = connectorDraw > 0.08;
      activeIndex = index;

      return {
        lineProgress,
        activeIndex,
        pointActive,
        connectorProgress,
        cardActive,
      };
    }

    remainingUnits -= pauseUnit;
    connectorProgress[index] = 1;
    cardActive[index] = true;
    activeIndex = index;
    previousProgress = step.pointProgress;
  }

  return {
    lineProgress: 1,
    activeIndex,
    pointActive,
    connectorProgress: steps.map(() => 1),
    cardActive: steps.map(() => true),
  };
}

function ThinkCard({
  step,
  revealed,
  active,
  complete,
}: {
  step: Step;
  revealed: boolean;
  active: boolean;
  complete: boolean;
}) {
  return (
    <article
      className={`min-h-[180px] w-full rounded-[20px] border p-4 transition-all duration-500 ease-out sm:p-5 xl:min-h-[220px] xl:p-6 ${step.cardClassName}`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? active
            ? "translateY(-10px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(20px) scale(0.96)",
        boxShadow: active
          ? "0 28px 80px rgba(74,169,196,0.16)"
          : complete
            ? "0 16px 38px rgba(74,169,196,0.08)"
            : revealed
              ? "0 12px 28px rgba(15,23,42,0.05)"
              : "0 0 0 rgba(15,23,42,0)",
      }}
    >
      <h3 className="text-[24px] font-medium leading-[1.15] text-slate-900">
        {step.title}
      </h3>
      <p className="mt-4 text-[16px] leading-8 text-slate-700">
        {step.description}
      </p>
    </article>
  );
}

export default function AboutThink() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const desktopStageRef = useRef<HTMLDivElement | null>(null);
  const desktopCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [elapsedMs, setElapsedMs] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [pointCoordinates, setPointCoordinates] = useState<{ x: number; y: number }[]>([]);
  const [connectorEndYPositions, setConnectorEndYPositions] = useState<number[]>([]);

  useEffect(() => {
    if (!pathRef.current) {
      return;
    }

    const totalLength = pathRef.current.getTotalLength();
    setPathLength(totalLength);
    setPointCoordinates(
      steps.map((step) => {
        const point = pathRef.current!.getPointAtLength(totalLength * step.pointProgress);
        return { x: point.x, y: point.y };
      })
    );
  }, []);

  useEffect(() => {
    const updateConnectorPositions = () => {
      if (!desktopStageRef.current) {
        return;
      }

      const stageRect = desktopStageRef.current.getBoundingClientRect();
      const nextConnectorPositions = steps.map((_, index) => {
        const cardNode = desktopCardRefs.current[index];
        if (!cardNode) {
          return 0;
        }

        const cardRect = cardNode.getBoundingClientRect();
        return cardRect.top - stageRect.top + 50;
      });

      setConnectorEndYPositions(nextConnectorPositions);
    };

    updateConnectorPositions();

    const resizeObserver = new ResizeObserver(() => {
      updateConnectorPositions();
    });

    if (desktopStageRef.current) {
      resizeObserver.observe(desktopStageRef.current);
    }

    desktopCardRefs.current.forEach((cardNode) => {
      if (cardNode) {
        resizeObserver.observe(cardNode);
      }
    });

    window.addEventListener("resize", updateConnectorPositions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateConnectorPositions);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setElapsedMs(animationDuration);
      return;
    }

    let frameId = 0;
    let startTime = 0;

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      setElapsedMs((timestamp - startTime) % animationDuration);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [prefersReducedMotion]);

  const timelineState = useMemo(
    () => buildTimelineState(elapsedMs, prefersReducedMotion),
    [elapsedMs, prefersReducedMotion]
  );

  const mobileProgressHeight = useMemo(() => {
    if (prefersReducedMotion) {
      return "100%";
    }

    const reachedSteps = timelineState.connectorProgress.filter((value) => value >= 1).length;
    const activeConnector = timelineState.connectorProgress.find((value) => value > 0 && value < 1) ?? 0;
    const totalSegments = steps.length - 1;
    const progress = totalSegments === 0 ? 1 : (reachedSteps + activeConnector) / totalSegments;
    return `${clamp(progress, 0, 1) * 100}%`;
  }, [prefersReducedMotion, timelineState.connectorProgress]);

  return (
    <section className="overflow-hidden relative bg-secondary/15 py-20  ">
      
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

      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-8">
        <div>
          <div className="hidden xl:block">
            <div ref={desktopStageRef} className="relative ">
              <div className="pointer-events-none absolute left-1/2 top-0 w-full min-w-[1200px] max-w-[2048px] -translate-x-1/2">
                <svg viewBox="0 0 2048 560" className="h-[500px] w-full overflow-visible 2xl:h-[560px]">
                  <path
                    d={wavePath}
                    fill="none"
                    stroke="#cddde3"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    ref={pathRef}
                    d={wavePath}
                    fill="none"
                    stroke="#48a9c4"
                    strokeWidth="5"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: pathLength || undefined,
                      strokeDashoffset: pathLength ? pathLength * (1 - timelineState.lineProgress) : undefined,
                      transition: prefersReducedMotion ? "none" : "stroke-dashoffset 120ms linear",
                    }}
                  />

                  {steps.map((step, index) => {
                    const point = pointCoordinates[index];
                    if (!point) {
                      return null;
                    }

                    const isPointActive = timelineState.pointActive[index];
                    const isCardComplete = timelineState.connectorProgress[index] >= 1;
                    const connectorProgress = timelineState.connectorProgress[index];
                    const connectorEnd = connectorEndYPositions[index] ?? point.y + 16;
                    const connectorCurrentY = lerp(point.y + 16, connectorEnd, connectorProgress);

                    return (
                      <g key={step.title}>
                        {(isPointActive || connectorProgress > 0 || isCardComplete) ? (
                          <line
                            x1={point.x}
                            y1={point.y + 14}
                            x2={point.x}
                            y2={connectorEnd}
                            stroke="#d9e7ec"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        ) : null}
                        <line
                          x1={point.x}
                          y1={point.y + 14}
                          x2={point.x}
                          y2={connectorCurrentY}
                          stroke="#48a9c4"
                          strokeWidth="4"
                          strokeLinecap="round"
                          opacity={connectorProgress > 0 ? 1 : 0}
                        />
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="19"
                          fill="white"
                          stroke={isPointActive ? "#48a9c4" : "#b8d8e1"}
                          strokeWidth="5"
                        />
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="8"
                          fill={isPointActive || isCardComplete ? "#48a9c4" : "#dbe8ed"}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="relative grid grid-cols-5 gap-4 pt-[244px] xl:gap-5 2xl:gap-6 2xl:pt-[280px] mt-[-80px]">
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
                      revealed={timelineState.pointActive[index] || timelineState.connectorProgress[index] > 0}
                      active={timelineState.cardActive[index]}
                      complete={timelineState.connectorProgress[index] >= 1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:hidden">
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute bottom-8 left-4 top-8 w-[3px] rounded-full bg-[#d5e6eb]" />
              <div
                className="absolute left-4 top-8 w-[3px] rounded-full bg-[#48a9c4] transition-all duration-300"
                style={{ height: mobileProgressHeight }}
              />

              <div className="space-y-5">
                {steps.map((step, index) => {
                  const active = timelineState.cardActive[index];
                  const complete = timelineState.connectorProgress[index] >= 1;
                  const pointActive = timelineState.pointActive[index];

                  return (
                    <div key={step.title} className="relative pl-12 sm:pl-14">
                      <div className="absolute left-4 top-8 -translate-x-1/2">
                        <div
                          className="grid size-8 place-items-center rounded-full border-4 bg-white transition-all duration-500"
                          style={{
                            borderColor: pointActive ? "#48a9c4" : "#b8d8e1",
                            boxShadow: active ? "0 0 0 10px rgba(72,169,196,0.10)" : "none",
                          }}
                        >
                          <div
                            className="size-3 rounded-full"
                            style={{ backgroundColor: pointActive || complete ? "#48a9c4" : "#dbe8ed" }}
                          />
                        </div>
                      </div>

                      <ThinkCard
                        step={step}
                        revealed={pointActive || complete}
                        active={active}
                        complete={complete}
                      />
                    </div>
                  );
                })}
              </div>
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
