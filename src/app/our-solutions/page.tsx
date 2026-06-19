import type { Metadata } from 'next';

import MarketingIndexPage from '@/components/marketing/index-page';
import { sectionIndex, toMarketingIndexCards } from '@/content/marketing-pages';

export const metadata: Metadata = {
  title: 'Our Solutions - InvoLead',
  description: 'Explore InvoLead services across data science, GenAI, engineering, cloud, and consulting.',
};

export default function WhatWeDoPage() {
  return (
    <MarketingIndexPage
      eyebrow="Our Solutions"
      title="A focused set of transformation services built for real enterprise adoption"
      description="Each service page keeps the InvoLead theme, but adds stronger motion, a clearer section flow, and content that feels closer to the reference site."
      cards={toMarketingIndexCards(sectionIndex.whatWeDo)}
      accent="#5fb0c2"
    />
  );
}
