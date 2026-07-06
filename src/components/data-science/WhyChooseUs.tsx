"use client";

import Image from "next/image";
import Link from "next/link";
import ClipShape from "../ui/clip-shape";
import { SectionHeader } from "../ui/section-header";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";
import CoreValueCard from "../ui/card-3";
import {
  Target,
  BadgeCheck,
  Users,
  FlaskConical,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import CornerShape from "../ui/shape";

const valuess = [
  {
    icon: Target,
    image: "/home/client-first.webp",
    title: "Outcome-first thinking",
    desc:
      "Every roadmap starts with a KPI, a decision point, and the business value the model must improve.",
    hint: "KPI-led roadmaps with measurable business value.",
  },
  {
    icon: BadgeCheck,
    image: "/home/client-first.webp",
    title: "Practical explainability",
    desc:
      "Models should be easy to trust, inspect, and defend in front of the people who use them.",
    hint: "Transparent models teams can trust and defend.",
  },
  {
    icon: Users,
    image: "/home/client-first.webp",
    title: "Built for adoption",
    desc:
      "We align delivery with how teams actually work, not how slide decks imagine they should.",
    hint: "Delivery shaped around real team workflows.",
  },
  {
    icon: FlaskConical,
    image: "/home/client-first.webp",
    title: "Fast validation",
    desc:
      "Compact experiments and clear checkpoints keep the section light, useful, and easy to act on.",
    hint: "Quick experiments with clear checkpoints.",
  },
  {
    icon: ShieldCheck,
    image: "/home/client-first.webp",
    title: "Governed delivery",
    desc:
      "Controls, visibility, and traceability stay built in so the work is enterprise-ready from day one.",
    hint: "Enterprise-ready delivery with built-in governance.",
  },
  {
    icon: TrendingUp,
    image: "/home/client-first.webp",
    title: "Scalable thinking",
    desc:
      "We design for reuse, resilient workflows, and data science patterns that grow with the business.",
    hint: "Reusable patterns that scale with the business.",
  },
];

export default function WhyChooseUs() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(0);
  const rows = [valuess.slice(0, 3), valuess.slice(3, 6)];

  return <section className="py-20 overflow-hidden relative">
    <div className="container relative">
      
      <SectionHeader 
        eyebrow="Built for trust"
        title="Why Choose Us"
        description="AI and data science solutions should feel practical, trustworthy, and ready to adopt. We design for outcomes, explainability, and real team workflows."
        align="center"
         textColor="black"
         maxWidth="5xl"
        />

      <div className="mt-12 space-y-4">
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-col gap-4 lg:flex-row">
                    {row.map((item, itemIndex) => {
                      const index = rowIndex * 3 + itemIndex;
      
                      return (
                        <CoreValueCard
                          key={item.title}
                          item={item}
                          index={index}
                          active={active}
                          setActive={setActive}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
      <div className="mt-10 text-center">
        <Button asChild>
          <Link href="/contact-us">Speak to Our Experts
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
    <div className="absolute -bottom-[7px] left-0 w-[290px] bg-[#5fb0c226] ">
      <CornerShape color="#fff" />
    </div>
  </section>
}