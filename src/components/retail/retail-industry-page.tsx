"use client";

import SystemicArchitectureSection from "./SystemicArchitectureSection";
import RetailBlogSection from "./blog-section";
import CaseStudyShowcase from "./case-studies";
import CallToAction from "./cta";
import FAQSection from "./faq";
import GrowthTimelinePage from "./growth-timeline";
import HeroTwo from "./HeroTwo";
import ResultsSection from "./measured-impact";
import SolutionsSection from "./solutions-section";
import SystemicAISection from "./systemic-ai-section";

export default function RetailIndustryPage() {
  return (
    <main className="overflow-clip bg-white text-slate-950">
      <HeroTwo />
      <ResultsSection />
      <SolutionsSection />
      <GrowthTimelinePage />
      <SystemicAISection />
      <SystemicArchitectureSection />
      <CaseStudyShowcase />
      <RetailBlogSection />
      <FAQSection />
      <CallToAction />
    </main>
  );
}
