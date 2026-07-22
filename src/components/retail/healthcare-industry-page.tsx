"use client";

import HealthCareHero from "../retail/healthcarehero";
import HealthcareImpactSection from "./healthcare-impact";
import HealthcareChallengesSection from "./healthcare-challenges";
import AboutStory from "../about/AboutStory";
import WhoWeAre from "../about/WhoWeAre";
import StatsCounter from "../home/StatsCounter";
import Testimonials from "../home/Testimonials";
import CaseStudies from "./case-studies";

export default function HealthCareIndustryPage() {
  return (
    <main className="overflow-clip bg-white text-slate-950">
      <HealthCareHero />
      <HealthcareImpactSection />
      <HealthcareChallengesSection />
      <WhoWeAre />
      <AboutStory />
      <CaseStudies />
      <Testimonials />
      <StatsCounter />
    </main>
  );
}
