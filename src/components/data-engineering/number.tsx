"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { SectionHeader } from "../ui/section-header";
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) { const ref = useRef<HTMLSpanElement>(null); const seen = useInView(ref, { once: true }); const [n, setN] = useState(0); const decimals = Number.isInteger(value) ? 0 : 1; useEffect(() => { if (!seen) return; let start = 0; const duration = 1200, t = performance.now(); const tick = (now: number) => { const p = Math.min((now - t) / duration, 1); setN(Number((value * (1 - Math.pow(1 - p, 3))).toFixed(decimals))); if (p < 1) start = requestAnimationFrame(tick) }; start = requestAnimationFrame(tick); return () => cancelAnimationFrame(start) }, [decimals, seen, value]); return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span> }
export default function Stats() {
    const stats = [
        [500, "+", "Projects Delivered"],
        [50, "+", "Enterprise Clients"],
        [99.9, "%", "Client Satisfaction"],
        [10, "+", "Years of Experience"],
        [300, "%", "ROI Improvement"],
    ] as const;

    return (
        <section className="bg-white pt-20 pb-1">
            <div className="container">
                <SectionHeader
                    maxWidth="5xl"
                    eyebrow="Our Impact"
                    title="AI Outcomes That Move Business Forward"
                    description="We combine enterprise-grade AI strategy, automation, and data engineering to deliver measurable business results."
                />

                <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-5">
                    {stats.map(([n, s, l]) => (
                        <div key={l}>
                            <div className="text-[clamp(2.2rem,4vw,4rem)] font-bold leading-none ">
                                <Counter value={Number(n)} suffix={s} />
                            </div>

                            <p className="mt-4 text-sm font-medium text-slate-700">{l}</p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-20 max-w-4xl text-center">
                    <h3 className="font-semibold">
                        Ready to transform your data engineering with AI?
                    </h3>

                    <Button
                        asChild
                        className="mt-8"
                    >
                        <Link href="/contact-us">
                            Get Custom Solution Proposal
                            <ArrowRight className="size-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}