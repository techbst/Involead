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
  ShieldCheck,
  HeartPulse,
  FileCheck,
  ClipboardCheck,
  BadgeCheck,
  LockKeyhole,
} from "lucide-react";
import CornerShape from "../ui/shape";

const valuess = [
  {
    icon: ShieldCheck,
    image: "/home/client-first.webp",
    title: "GDPR Ready",
    desc: "Compliant with EU rules for responsible data collection, storage, and deletion."
  },
  {
    icon: HeartPulse,
    image: "/home/client-first.webp",
    title: "HIPAA Compliant",
    desc: "Keeps healthcare data safe and private so you can work with US providers and sign BAAs with confidence."
  },
  {
    icon: FileCheck,
    image: "/home/client-first.webp",
    title: "FDA 21 CFR Part 11",
    desc: "Ensures electronic records and e-signatures are reliable, traceable, and acceptable to regulators."
  },
  {
    icon: ClipboardCheck,
    image: "/home/client-first.webp",
    title: "GxP Compliant",
    desc: "Supports Good Practice standards so your processes stay auditable and inspection-ready."
  },
  {
    icon: BadgeCheck,
    image: "/home/client-first.webp",
    title: "ISO 9001 Certified",
    desc: "Delivers consistent quality through clear processes and ongoing improvement."
  },
  {
    icon: LockKeyhole,
    image: "/home/client-first.webp",
    title: "SOC 2 Type II Certified",
    desc: "Audited controls keep your data secure, available, and protected from unauthorized access."
  }
];

export default function Compliance() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(0);
  const rows = [valuess.slice(0, 3), valuess.slice(3, 6)];

  return <section className="py-20 overflow-hidden relative bg-secondary/15">
    <div className="container relative">
      <SectionHeader
        eyebrow="Trust by design" title="Standards-Verified Compliance"
        description="Our data platforms adhere to the highest security standards. We protect your data, simplify audits, and guarantee compliance."
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
    <div className="absolute -bottom-[8px] left-0 w-[290px] bg-[#fff] ">
      <CornerShape color="#5fb0c226" />
    </div>
  </section>
}