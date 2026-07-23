"use client";

import HealthcareChallengesSection from "./challenges";
import HealthcareCapabilities from "./capabilities";
import HealthCareHero from "./healthcarehero";
import HealthcareResults from "./result";
import StrategicPartner from "./strategic-partner";
import WhyInvolead from "./why-involead";
import BlogSection from "./blog-section";
import CaseStudies from "./case-studies";

export default function HealthCareIndustryPage() {
  return (
    <main className="overflow-clip bg-white text-slate-950">
      <HealthCareHero />
      <WhyInvolead/ >
      <HealthcareChallengesSection />
      
      <StrategicPartner />
      <HealthcareCapabilities />
      <HealthcareResults />
      <CaseStudies />
      <BlogSection />
    </main>
  );
}
