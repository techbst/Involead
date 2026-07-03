import type { Metadata } from "next";

import Hero from "@/components/about/Hero";
import Hero_TL from "@/components/thought-leadership/Hero";



export const metadata: Metadata = {
  title: "About - InvoLead",
  description: "About InvoLead, mission, values, leadership, and how we work with data-driven teams.",
};

export default function thought() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Hero_TL>
      
    </main>
  );
}
