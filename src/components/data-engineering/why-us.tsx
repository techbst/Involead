"use client";

import { useEffect, useRef } from "react";
import { SectionHeader } from "../ui/section-header";


const reasons = [
    [
        "Enterprise-Grade Delivery",
        "Built for large-scale, mission-critical data platforms.",
    ],
    [
        "Cloud Native",
        "Modern cloud architecture with security and scalability at its core.",
    ],
    [
        "AI Accelerated",
        "Automation and AI-powered workflows for faster delivery.",
    ],
    [
        "Long-Term Partnership",
        "We don't just deliver projects—we help build lasting capability.",
    ],
];

export default function WhyPartner() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx: gsap.Context | undefined;

        const init = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");

            if (!ref.current) return;

            gsap.registerPlugin(ScrollTrigger);

            const handleLoad = () => {
                ScrollTrigger.refresh();
            };

            ctx = gsap.context(() => {
                const cards = gsap.utils.toArray<HTMLElement>(".reason-card");

                // Progress Line
                gsap.fromTo(
                    ".reason-progress",
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".reason-list",
                            start: "top 80%",
                            end: "bottom 80%",
                            scrub: true,
                            invalidateOnRefresh: true,
                        },
                    }
                );

                // Cards
                cards.forEach((card) => {
                    gsap.fromTo(
                        card,
                        {
                            opacity: 0.3,
                            y: 40,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                                invalidateOnRefresh: true,
                            },
                        }
                    );
                });

                requestAnimationFrame(() => ScrollTrigger.refresh());

                window.addEventListener("load", handleLoad);

                document.fonts?.ready.then(() => {
                    ScrollTrigger.refresh();
                });

                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 300);
            }, ref);

            return handleLoad;
        };

        let handleLoad: (() => void) | undefined;

        init().then((fn) => {
            handleLoad = fn;
        });

        return () => {
            if (handleLoad) {
                window.removeEventListener("load", handleLoad);
            }
            ctx?.revert();
        };
    }, []);

    return (
        <section ref={ref} className="relative bg-black py-20 text-white">
      <div className="container grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left */}
        <div className="self-start lg:sticky lg:top-12">
          <SectionHeader
            eyebrow="The InvoLead advantage"
            title="Why Partner with InvoLead?"
            description="A delivery model built to turn ambitious data strategy into durable enterprise capability."
            maxWidth="5xl"
            textColor="white"
            align="left"
          />
        </div>

        {/* Right */}
        <div className="reason-list relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10">
            <div className="reason-progress h-full origin-top bg-cyan-300" />
          </div>

          <div className="space-y-4">
            {reasons.map(([title, description], index) => (
              <article
                key={title}
                className="reason-card rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm sm:p-8"
              >
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {description}
                    </p>
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