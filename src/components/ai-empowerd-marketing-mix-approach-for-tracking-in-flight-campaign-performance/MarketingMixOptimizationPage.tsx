"use client";

import CallToAction1, { type CTAData } from "@/components/ui/call-to-action-1";

import BusinessChallenges from "./BusinessChallenges";
import Hero from "./Hero";
import HowInvoLeadHelps from "./HowInvoLeadHelps";
import Intro from "./Intro";
import PotentialBenefits from "./PotentialBenefits";

const ctaData: CTAData = {
  title: "Ready to Optimize Your Marketing Spend?",
  description:
    "Discover how InvoLead can help you measure campaign impact, optimize budgets, and improve marketing ROI with AI-powered decision intelligence.",
  buttonText: "Explore Solutions",
  buttonLink: "/our-solutions",
  video: "/video/bg-1.mp4",
  members: 100,
  avatars: ["/img/avatar-1.webp", "/img/avatar-2.webp", "/img/avatar-3.webp"],
};

export default function MarketingMixOptimizationPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Hero />
      <Intro />
      <BusinessChallenges />
      <HowInvoLeadHelps />
      <PotentialBenefits />
      <CallToAction1 data={ctaData} />
    </main>
  );
}
