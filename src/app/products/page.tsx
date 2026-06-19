import type { Metadata } from 'next';

import MarketingIndexPage from '@/components/marketing/index-page';
import { sectionIndex, toMarketingIndexCards } from '@/content/marketing-pages';

export const metadata: Metadata = {
  title: 'Products - InvoLead',
  description: 'Product pages for AI Assistant Studio, Knowledge Graph Engine, and Insight Control Tower.',
};

export default function ProductsPage() {
  return (
    <MarketingIndexPage
      eyebrow="Products"
      title="Product experiences that feel polished, modern, and genuinely enterprise-ready"
      description="The product pages keep the same visual language, but lean harder into motion and high-contrast framing so each offering feels distinct."
      cards={toMarketingIndexCards(sectionIndex.products)}
      accent="#5fb0c2"
    />
  );
}
