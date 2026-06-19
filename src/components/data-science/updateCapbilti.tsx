"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
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

import SectionReveal from "@/components/home/SectionReveal";
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

// How many cards show before the list scrolls. Height is measured from
// the real rendered cards (see useEffect below) rather than a guessed
// pixel value, so it stays correct regardless of font size or how the
// summary text wraps.
const VISIBLE_CARDS = 5;

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
          "group flex h-full w-full flex-col rounded-2xl border p-4 text-left transition-all duration-300",
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
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-5 text-slate-950">
              {item.title}
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-600">
              {item.summary}
            </span>
          </span>
        </div>

        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-secondary transition-transform duration-300 group-hover:translate-x-1">
          {active ? "Showing full details" : "Read More"}
          <ArrowRight className="size-3.5" />
        </span>
      </button>
    </motion.article>
  );
}

export default function OurCapabilities() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = capabilities[selectedIndex];
  const FeaturedIcon = selected.icon;

  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [listMaxHeight, setListMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    function measure() {
      const list = listRef.current;
      const visibleCards = cardRefs.current
        .slice(0, VISIBLE_CARDS)
        .filter((el): el is HTMLDivElement => el !== null);

      if (!list || visibleCards.length === 0) return;

      const listTop = list.getBoundingClientRect().top;
      const lastCardBottom =
        visibleCards[visibleCards.length - 1].getBoundingClientRect().bottom;

      setListMaxHeight(lastCardBottom - listTop);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="py-10 md:py-12">
      <SectionReveal className="container mx-auto">
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

        {/*
          lg:items-stretch (the grid default) makes both columns match
          height. The right column's height is pinned by JS to exactly
          VISIBLE_CARDS real cards (see the measurement effect above) with
          the rest reachable by scrolling inside it; the left detail panel
          then stretches to match that same height automatically.
        */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <motion.div
            layout
            style={
              listMaxHeight !== null
                ? ({ "--list-h": `${listMaxHeight}px` } as CSSProperties)
                : undefined
            }
            className="relative flex flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] md:p-6 lg:min-h-[var(--list-h)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(95,176,194,0.2),transparent_32%)]" />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.title}
                variants={contentMotion}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Selected Capability
                    </p>
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
                      className="text-sm leading-7 text-white/72"
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
                        className="text-3xl font-semibold leading-none md:text-[2.05rem]"
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
                  <div className="flex items-center gap-2 text-xs font-medium text-white/55">
                    <Sparkles className="size-4 text-[#5fb0c2]" />
                    Enterprise-ready delivery path
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/*
            grid-cols-1: always one card per row, regardless of breakpoint.
            maxHeight is set in px by the measurement effect once the real
            cards have rendered (falls back to a sensible cap before that
            runs, so there's no flash of the full unscrolled list).
            overflow-y-auto + pr-1 (room for the scrollbar) reveals the
            remaining cards on scroll instead of pushing the section taller.
          */}
          <div
            ref={listRef}
            className={cn(
              "grid grid-cols-1 gap-2.5 overflow-y-auto pr-1",
              listMaxHeight === null && "max-h-[640px]"
            )}
            style={
              listMaxHeight !== null ? { maxHeight: listMaxHeight } : undefined
            }
          >
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
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
      </SectionReveal>
    </section>
  );
}