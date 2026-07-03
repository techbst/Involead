import type { Metadata } from "next";
import Hero_TL, { Hero_TL_1, Hero_TL_2, Hero_TL_3, Hero_TL_4 } from "@/components/thought-leadership/Hero";
import TL_CARDS from "@/components/thought-leadership/cards";
import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";
import TLCTA from "@/components/thought-leadership/cta";


export const metadata: Metadata = {
  title: "About - InvoLead",
  description: "About InvoLead, mission, values, leadership, and how we work with data-driven teams.",
};

export default function thought() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Hero_TL_4/>
      <TL_CARDS />
      <TLCTA />
    </main>
  );
}
