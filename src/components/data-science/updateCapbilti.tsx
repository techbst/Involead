"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Compass,
  LayoutDashboard,
  LineChart,
  Megaphone,
  PieChart,
  ScanSearch,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedNumber from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Metric = {
  value: string;
  valuecomp: string;
  label: string;
};

// Shape exactly as the content is authored/passed in.
type RawCapability = {
  title: string;
  description: string;
  metricBg?: string;
  metricTextColor?: string;
  metrics: Metric[];
  image:string;
};

// Shape the UI actually renders: the raw fields, plus a short teaser
// (`summary`) and the full text split into paragraphs (`paragraphs`),
// both derived from `description`, plus an `icon` looked up by title.
type Capability = RawCapability & {
  summary: string;
  paragraphs: string[];
  icon: LucideIcon;
};


const rawCapabilities: RawCapability[] = [
  {
    title: "Pricing & Dynamic Pricing",
    description:
      "The right price at the right moment turns demand into margin without eroding trust.\n\nOur Agentic AI continuously ingests elasticity signals, competitive moves, and inventory positions to recommend and automate price ladders, guardrails, and experiments — so teams move from static rules to adaptive pricing that compounds revenue.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
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
      "Trade and promo dollars only work when every lever is aligned to the same growth story.\n\nAgentic models simulate lift, cannibalization, and retailer behavior in parallel, then orchestrate scenarios across brands and channels — surfacing where to invest, where to cut, and how to negotiate with evidence-backed targets.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
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
      "Attribution that ignores long arcs and offline effects quietly misallocates millions every quarter.\n\nWe rebuild MMM on fresh priors, hierarchical media curves, and business constraints — with agents stress-testing assumptions, refreshing coefficients as new data lands, and explaining drivers in language stakeholders actually use.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
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
      "RGM breaks when pricing, assortment, and promo strategies are optimized in silos.\n\nWe connect elasticity, assortment productivity, and trade effectiveness in a single agentic layer that explores coordinated moves — always anchored to P&L guardrails and channel realities — so growth is deliberate, not accidental.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
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
      "Relevance at scale demands segmentation that evolves as fast as customers do.\n\nOur Agentic AI-driven segmentation creates and continuously refines 10-50+ dynamic cohorts using real-time behavioral and transactional data. Agents adapt segment definitions and orchestrate hyper-personalized engagement strategies ensuring every customer interaction is precisely calibrated.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85",
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
      "Forecast error is not a spreadsheet problem — it is a service-level, cash, and credibility problem.\n\nHierarchical models fuse sell-in, sell-through, and external signals while agents monitor drift, inject shocks, and reconcile plans across nodes — giving supply, finance, and commercial teams one aligned number they can defend.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85",
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
      "Static budgets freeze strategy the moment markets shift; optimization has to breathe with performance.\n\nAgentic optimizers pair MMM outputs with operational limits — flighting rules, minimum spends, and channel capacity — to propose reallocations weekly, not quarterly, with transparent trade-offs between growth, efficiency, and risk.",
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
      "Pipeline health depends less on volume than on knowing which accounts will actually move and why.\n\nAgentic scoring blends firmographic fit, intent, product usage, and seller notes to refresh role definitions continuously, route plays automatically, and explain the next best action so revenue teams spend time closing, not debating lists.",
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
      "Journeys fragment when channels, policies, and models each optimize different definitions of success.\n\nCustomer-Wing pairs orchestration agents with policy-aware copilots — unifying data, decisions, and creative variants so every touchpoint stays on-brand, compliant, and tuned to the live state of each relationship.",
    image:
      "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?",
    metrics: [
      { value: "3", valuecomp: "7%", label: "Margin Improvement" },
      { value: "5", valuecomp: "12%", label: "Revenue Lift" },
      { value: "4", valuecomp: "9%", label: "Price Realization" },
      { value: "10", valuecomp: "18%", label: "Promo Leakage Reduction" },
    ],
  },
];
 
 
// One icon per capability — looked up by title rather than authored inline,
// since the content above is the same shape it's authored/fetched in.
const iconMap: Record<string, LucideIcon> = {
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

const capabilities: Capability[] = rawCapabilities.map((item) => {
  const paragraphs = item.description.split("\n\n").map((p) => p.trim());
  return {
    ...item,
    summary: paragraphs[0],
    paragraphs,
    icon: iconMap[item.title] ?? ScanSearch,
  };
});

const contentMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const PIN_START = "top 82px";

function SelectorCard({
  item,
  active,
  onSelect,
}: {
  item: Capability;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22 }}
      className="h-full"
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        className={cn(
          "group flex h-full w-full flex-col rounded-2xl border p-4 text-left transition-all duration-300 lg:min-h-[16vh] lg:p-4",
          active
            ? "border-secondary/35 bg-[#eaf7fb] shadow-[0_18px_42px_rgba(95,176,194,0.16)]"
            : "border-slate-200 bg-white shadow-sm hover:border-secondary/20 hover:bg-slate-50 hover:shadow-md"
        )}
      >
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300",
              active
                ? "border-secondary/20 bg-white text-secondary"
                : "border-slate-200 bg-[#f8fbfc] text-slate-500 group-hover:text-secondary"
            )}
          >
            <Icon className="size-4" />
          </span>
          <div className="flex flex-col">
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-5 text-slate-950">
              {item.title}
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-600 lg:text-[11px]">
              {item.summary}
            </span>
          </span>
           <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-secondary transition-transform duration-300 group-hover:translate-x-1">
          {active ? "Showing full details" : "Read More"}
          <ArrowRight className="size-3.5" />
        </span></div>
          
        </div>

       
      </button>
    </motion.article>
  );
}

export default function OurCapabilities() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = capabilities[selectedIndex];
  const FeaturedIcon = selected.icon;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardsFrameRef = useRef<HTMLDivElement | null>(null);
  const cardsTrackRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardsFrame = cardsFrameRef.current;
      const cardsTrack = cardsTrackRef.current;
      const storyBlock = storyRef.current;

      if (storyBlock) {
        const scrollDistance = () =>
          Math.max(
            window.innerHeight * (capabilities.length - 3),
            window.innerHeight * 3
          ); 

        ScrollTrigger.create({
          trigger: storyBlock,
          start: PIN_START,
          end: scrollDistance,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        if (cardsFrame && cardsTrack) {
          const trackOffset = () =>
            Math.max(0, cardsTrack.scrollHeight - cardsFrame.clientHeight);

          gsap.to(cardsTrack, {
            y: () => -trackOffset(),
            ease: "none",
            scrollTrigger: {
              trigger: storyBlock,
              start: PIN_START,
              end: scrollDistance,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }

        ScrollTrigger.refresh();
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 28, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 54%",
              scrub: false,
              onEnter: () => setSelectedIndex(index),
              onEnterBack: () => setSelectedIndex(index),
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Our Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
            Focused data science solutions for measurable business impact
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
            Select one capability at a time and see the full write-up and
            impact metrics without scrolling through repeated long cards.
          </p>
        </div>

        <div
          ref={storyRef}
          className="mt-4 grid gap-5 md:mt-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch"
        >
          <div className="lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.title}
                variants={contentMotion}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] md:p-6 lg:min-h-[calc(100svh-4rem)]"
              >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(95,176,194,0.2),transparent_32%)]" />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-xl">
                   {/* <div className="mb-4 overflow-hidden rounded-2xl">
                      <Image
                        src={selected.image}
                        alt={selected.title}
                        width={1000}
                        height={80}
                        className="h-20 w-80 object-cover rounded-xl"
                        priority={selectedIndex === 0}
                      />
                    </div> */}
                    {/* <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Selected Capability
                    </p> */}
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-3xl">
                      {selected.title}
                    </h3>
                  </div>

                  <div
                    className="hidden size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 md:flex"
                    style={{
                      background: selected.metricBg ?? "rgba(255,255,255,0.1)",
                      color: selected.metricTextColor ?? "#5fb0c2",
                    }}
                  >
                    <FeaturedIcon className="size-6" />
                  </div>
                </div>

                {/* Full description — every paragraph, not just the teaser
                    shown on the card. */}
                <div className="mt-4 space-y-3">
                  {selected.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="!text-sm leading-7 text-white/72"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* All four impact metrics for the selected capability. */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {selected.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 p-4"
                      style={{
                        background:
                          selected.metricBg ?? "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="text-2xl font-semibold leading-none md:text-[1.5rem]"
                        style={{ color: selected.metricTextColor ?? "#ffffff" }}
                      >
                        <AnimatedNumber value={metric.valuecomp} />
                      </div>
                      <p
                        className="mt-2 text-xs leading-5"
                        style={{
                          color: selected.metricTextColor
                            ? "rgba(255,255,255,0.85)"
                            : "rgba(255,255,255,0.6)",
                        }}
                      >
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* mt-auto pins the CTA to the bottom, so when this panel
                    is stretched taller than its own content (to match the
                    card list), the spacing absorbs the extra height
                    instead of leaving the CTA stranded mid-panel. */}
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <Button
                    asChild
                    className="rounded-full bg-white px-5 py-5 text-slate-950 hover:bg-white/90"
                  >
                    <Link href="/contact-us">
                      Discuss this capability
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  {/* <div className="flex items-center gap-2 text-xs font-medium text-white/55">
                    <Sparkles className="size-4 text-[#5fb0c2]" />
                    Enterprise-ready delivery path
                  </div> */}
                </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={cardsFrameRef}
            className="overflow-hidden lg:h-[calc(100svh-4rem)] lg:rounded-[1.6rem]"
          >
            <div
              ref={cardsTrackRef}
              className="space-y-3 md:space-y-4 lg:will-change-transform"
            >
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative scroll-mt-28 transition-all duration-300",
                    index === selectedIndex &&
                      "z-20 -translate-y-1 md:-translate-y-2"
                  )}
                  data-index={index}
                >
                  <SelectorCard
                    item={item}
                    active={index === selectedIndex}
                    onSelect={() => setSelectedIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
