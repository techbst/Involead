"use client";

import ColorfulNumberCard, {
  ColorfulNumberCardItem,
} from "@/components/ui/colorful-number-card";
import {
  BrainCircuit,
  TrendingUp,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "../ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Stats() {
    const stats: ColorfulNumberCardItem[] = [
        {
            value: "500+",
            icon: BrainCircuit,
            label: "Projects Delivered",
            body: "",
            hoverable:false,
        },
        {
            value: "50+",
            icon: TrendingUp,
            label: "Enterprise Clients",
            body: "",
            hoverable:false,
        },
        {
            value: "99.9%",
            icon: DollarSign,
            label: "Client Satisfaction",
            body: "",
            hoverable:false,
        },
        {
            value: "10+",
            icon: BarChart3,
            label: "Years of Experience",
            body: "",
            hoverable:false,
        },
        {
            value: "300%",
            icon: BarChart3,
            label: "ROI Improvement",
            body: "",
            hoverable:false,
        },
    ] as const;

    return (
        <section className="bg-white pt-20 pb-2">
            <div className="container">
                <SectionHeader
                    maxWidth="5xl"
                    eyebrow="Our Impact"
                    title="AI Outcomes That Move Business Forward"
                    description="We combine enterprise-grade AI strategy, automation, and data engineering to deliver measurable business results."
                />

                <div className="mt-14">
                    
                         <ColorfulNumberCard className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5" items={stats} />
                  
                </div>

                <div className="mx-auto mt-12 max-w-4xl text-center">
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
