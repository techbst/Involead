"use client";

import SoftwareDevelopmentCapabilitiesSection from "./software-development-capabilities-section";
import SoftwareDevelopmentCtaSection from "./software-development-cta-section";
import SoftwareDevelopmentHero from "./software-development-hero";
import SoftwareDevelopmentMetricsSection from "./software-development-metrics-section";
import SoftwareDevelopmentPlatforms from "./software-development-platforms";
import SoftwareDevelopmentPrinciplesSection from "./software-development-principles-section";
import SoftwareDevelopmentProcessSection from "./software-development-process-section";
import SoftwareDevelopmentStackSection from "./software-development-stack-section";

export default function SoftwareDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <SoftwareDevelopmentHero />
      <SoftwareDevelopmentMetricsSection />
      <SoftwareDevelopmentCapabilitiesSection />
      <SoftwareDevelopmentPlatforms />
      <SoftwareDevelopmentProcessSection />
      <SoftwareDevelopmentStackSection />
      <SoftwareDevelopmentPrinciplesSection />
      <SoftwareDevelopmentCtaSection />
    </main>
  );
}
