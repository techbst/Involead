"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  BrainCircuit,
  Gauge,
  LayoutDashboard,
  Megaphone,
  ShoppingBasket,
  UsersRound,

  type LucideIcon,
} from 'lucide-react';

import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const timelineItems = [
  { title: 'Forecasting & Planning', description: 'Boost accuracy by 25% and cut stock-outs by 15% with ML, Bayesian models, and GenAI planning. Forecasts stay dynamic—not static.', icon: BarChart3 },
  { title: 'Marketing Analytics', description: 'Track ROI, optimize spend, and act on real-time AI recommendations. Continuous learning can lift conversions by up to 30%.', icon: Megaphone },
  { title: 'Content Personalization', description: 'Create context-aware content and offers for each audience, channel, and moment—at enterprise scale.', icon: BrainCircuit },
  { title: 'Unified Intelligence', description: 'Unify products, regions, and campaigns in automated dashboards that turn data into instant decisions.', icon: LayoutDashboard },
  { title: 'Customer Insights', description: 'Identify high-value customers, uncover hidden segments, and anticipate demand with predictive analytics.', icon: UsersRound },
  { title: 'Commercial Effectiveness', description: 'Map pricing power, predict promotion impact, and make every rupee work harder across channels and stores.', icon: Gauge },
  { title: 'CPG Intelligence', description: 'Give brand leaders a living view of the market so they can act early, learn quickly, and keep an edge.', icon: ShoppingBasket },
];

function generateTimelinePath(count: number) {
  const startY = 73;
  const step = 209;

  let d = `M433 ${startY}`;

  for (let i = 0; i < count - 1; i++) {
    const y = startY + i * step;

    if (i % 2 === 0) {
      d += ` H500 V${y + step} H567`;
    } else {
      d += ` H500 V${y + step} H433`;
    }
  }

  return d;
}

export default function GrowthTimelinePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduceMotion = useReducedMotion();
  const arrowPositions = Array.from(
    { length: Math.max(timelineItems.length - 1, 0) },
    (_, i) => 180 + i * 209
    );
  useEffect(() => {
    if (!sectionRef.current || !pathRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const path = pathRef.current!;
      const length = path.getTotalLength();
      const cards = gsap.utils.toArray<HTMLElement>('[data-timeline-card]');

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: reduceMotion ? 0 : length,
      });

      if (reduceMotion) {
        gsap.set('[data-mobile-progress]', { scaleY: 1 });
        gsap.set('[data-timeline-arrow]', { opacity: 1 });
        return;
      }

      const progress = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 15%',
          end: 'bottom 55%',
          scrub: 0.6,
        },
      });

      progress.to(path, { strokeDashoffset: 0, duration: 1, ease: 'none' }, 0);

      const arrowStops = Array.from(
        { length: Math.max(timelineItems.length - 1, 0) },
        (_, i) => (i + 1) / timelineItems.length
        );
      gsap.utils.toArray<SVGPathElement>('[data-timeline-arrow]').forEach((arrow, index) => {
        progress.to(arrow, { opacity: 1, duration: 0.02, ease: 'none' }, arrowStops[index]);
      });

      gsap.fromTo(
        '[data-mobile-progress]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        }
      );

      const media = gsap.matchMedia();
      media.add('(min-width: 1024px)', () => {
        cards.forEach((card, index) => {
          gsap.from(card, {
            x: index % 2 === 0 ? -80 : 80,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          });
        });
      });
      media.add('(max-width: 1023px)', () => {
        cards.forEach((card) => {
          gsap.from(card, {
            y: 32,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          });
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);
  const timelinePath = generateTimelinePath(timelineItems.length);
  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/20 py-20">
          <div className="container mx-auto">
            <SectionHeader
              eyebrow="The intelligence journey"
              title="Unlocking CPG Growth: From Legacy Limits to AI-Driven Wins"
              description="In a market shaped by tight margins and changing consumer behavior, InvoLead turns fragmented signals into precise, real-time action."
            />
            <div className="relative mx-auto mt-16 max-w-6xl">
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 1400"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 left-1/2 z-0 hidden h-full w-[90%] -translate-x-1/2 lg:block"
              >
                <path
                d={timelinePath}
                fill="none"
                stroke="rgba(95,176,194,.18)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                />

                <path
                ref={pathRef}
                d={timelinePath}
                fill="none"
                stroke="#5fb0c2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                {[180, 384, 593, 802, 1010, 1220].map((y) => (
                  <path
                    data-timeline-arrow
                    key={y}
                    d={`M490 ${y - 10} L500 ${y} L510 ${y - 10}`}
                    fill="none"
                    stroke="#5fb0c2"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0"
                  />
                ))}
              </svg>
              <div className="absolute bottom-0 left-5 top-0 w-px bg-[#5fb0c2]/20 lg:hidden">
                <div data-mobile-progress className="h-full w-full origin-top bg-[#5fb0c2]" />
              </div>
              <div className="relative space-y-10 lg:space-y-16">
                {timelineItems.map((item, index) => (
                  <article
                    data-timeline-card
                    key={item.title}
                    className={cn(
                      'relative z-10 ml-12 rounded-[24px] border border-secondary/40 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:ml-0 lg:w-[44%]',
                      index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                    )}
                  >
                    <div className="flex items-center gap-5">
                      <div className="grid size-[110px] shrink-0 place-items-center rounded-xl border border-[#d7eef3] bg-secondary">
                        <item.icon className="size-14 text-white" strokeWidth={1.8} />
                      </div>
    
                      <div className="pt-1">
                        <h3 className="font-bold leading-tight">{item.title}</h3>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
  );
}