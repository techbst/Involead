import type { Metadata } from "next";
import ThoughtLeadershipHero from "@/components/thought-leadership/Hero";
import FeaturedResearch from "@/components/thought-leadership/featured-research";
import Leaders from "@/components/thought-leadership/leaders";
import News from "@/components/thought-leadership/news";
import IndustryIntelligence from "@/components/thought-leadership/industry-intelligence";
import ThoughtLeadershipAos from "@/components/thought-leadership/aos-provider";
import TL_CARDS from "@/components/thought-leadership/cards";
import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";
import TLCTA from "@/components/thought-leadership/cta";


export const metadata: Metadata = {
  title: "Thought Leadership - InvoLead",
  description: "About InvoLead, mission, values, leadership, and how we work with data-driven teams.",
};

export default function thought() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <ThoughtLeadershipAos />
      <ThoughtLeadershipHero />
      <FeaturedResearch />
      <Leaders />
      <News />
      <IndustryIntelligence />
      <TL_CARDS />
      <TLCTA />
    </main>
  );
}
