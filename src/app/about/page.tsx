import type { Metadata } from "next";

import AboutCTA from "@/components/about/AboutCTA";
import Collaboration from "@/components/about/Collaboration";
import CoreValues from "@/components/about/CoreValues";
import Hero from "@/components/about/Hero";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Numbers from "@/components/about/Numbers";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhatDrives from "@/components/about/WhatDrives";
import HeroVariationOne from "@/components/about/HeroVariationOne";
import HeroVariationTwo from "@/components/about/HeroVariationTwo";
import HeroVariationThree from "@/components/about/HeroVariationThree";
import HeroVariationFour from "@/components/about/HeroVariationFour";
import AboutOverviewHero from "@/components/about/AboutOverviewHero";
import AboutStory from "@/components/about/AboutStory";
import AboutPhilosphy from "@/components/about/AboutPhilospy";

export const metadata: Metadata = {
  title: "About - InvoLead",
  description: "About InvoLead, mission, values, leadership, and how we work with data-driven teams.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* <HeroVariationFour /> */}
      <AboutOverviewHero />
      <WhoWeAre />
      <AboutStory />
      <AboutPhilosphy />
      <WhatDrives />
      <CoreValues />
      <LeadershipTeam />
      <Collaboration />
      <AboutCTA />
    </main>
  );
}
