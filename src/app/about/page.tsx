import type { Metadata } from "next";

import WhoWeAre from "@/components/about/WhoWeAre";
import Testimonials from "@/components/home/Testimonials";
import StatsCounter from "@/components/home/StatsCounter";

import AboutOverviewHero from "@/components/about/AboutOverviewHero";
import AboutStory from "@/components/about/AboutStory";
import AboutPhilosphy from "@/components/about/AboutPhilospy";
import AboutDrive from "@/components/about/AboutDrive";
import AboutThink from "@/components/about/AboutThink";
import AboutVision from "@/components/about/AboutVision";
import AboutDifference from "@/components/about/AboutDifference";
import CaseStudies from '@/components/home/CaseStudies';
import AboutDelivery from "@/components/about/AboutDelivery";
export const metadata: Metadata = {
  title: "About - InvoLead",
  description: "About InvoLead, mission, values, leadership, and how we work with data-driven teams.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden ">
      {/* <HeroVariationFour /> */}
      <AboutOverviewHero />
      <WhoWeAre />
      <AboutStory />
      <AboutPhilosphy />
      <AboutDrive />
      <AboutThink />
      <AboutDifference />
      <AboutVision />
      <AboutDelivery />
      <CaseStudies />
     <Testimonials />
           <StatsCounter />
    </main>
  );
}
