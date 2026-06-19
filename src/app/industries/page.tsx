import type { Metadata } from 'next';

import MarketingIndexPage from '@/components/marketing/index-page';
import { sectionIndex } from '@/content/marketing-pages';

export const metadata: Metadata = {
  title: 'Industries - InvoLead',
  description: 'Industry pages for retail, healthcare, and finance.',
};

export default function IndustriesPage() {
  return (
    <MarketingIndexPage
      eyebrow="Industries"
      title="Industry-specific solutions that respect the way each business really operates"
      description="Retail, healthcare, and finance all move differently. These pages frame the same InvoLead theme around the language, outcomes, and trust signals that matter in each sector."
      cards={sectionIndex.industries}
      accent="#5fb0c2"
    />
  );
}
