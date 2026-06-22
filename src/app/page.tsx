import type { Metadata } from 'next';

import CoreValues from '@/components/home/CoreValues';
import MarqueeBar from '@/components/home/MarqueeBar';
import ServicesSection from '@/components/home/ServicesSection';
import TechnologyScale from '@/components/home/TechnologyScale';
import Testimonials from '@/components/home/Testimonials';
import HeroSection from '@/components/home/Hero';
import IndustryTabs from '@/components/home/IndustryTabs';
import ProductsInnovation from '@/components/home/ProductsInnovation';
import CaseStudies from '@/components/home/CaseStudies';
import StatsCounter from '@/components/home/StatsCounter';

export const metadata: Metadata = {
  title: 'AI & Data Solutions - InvoLead',
  description: 'Enterprise AI, data, automation, and digital innovation solutions.',
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-slate-950">
      <HeroSection
  title="Engineering Products with Intelligent AI & Data Solutions"
  description="We help enterprises leverage AI, analytics, and intelligent automation to streamline operations, accelerate decision-making, and build scalable digital solutions that drive measurable business growth.
"
  ctaText="Explore Services"
  ctaLink="/about"
  heroImage="/img/shape-1.webp"
  bgImage="/img/Feature.png"
  sideImage="/img/List.svg"
  highlightColor="#5fb0c2"
      />
      <MarqueeBar />
      <ServicesSection />
      <IndustryTabs />
      <CoreValues />
      <ProductsInnovation />
      <TechnologyScale />
      <CaseStudies />
      <Testimonials />
      <StatsCounter />
    </div>
  );
}
