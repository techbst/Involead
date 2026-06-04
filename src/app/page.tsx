import type { Metadata } from 'next';

import CaseStudies from '@/components/home/CaseStudies';
import CoreValues from '@/components/home/CoreValues';
import Hero from '@/components/home/Hero';
import IndustryTabs from '@/components/home/IndustryTabs';
import MarqueeBar from '@/components/home/MarqueeBar';
import ProductsInnovation from '@/components/home/ProductsInnovation';
import ServicesSection from '@/components/home/ServicesSection';
import StatsCounter from '@/components/home/StatsCounter';
import TechnologyScale from '@/components/home/TechnologyScale';
import Testimonials from '@/components/home/Testimonials';

export const metadata: Metadata = {
  title: 'AI & Data Solutions - InvoLead',
  description: 'Enterprise AI, data, automation, and digital innovation solutions.',
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-slate-950">
      <Hero />
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
