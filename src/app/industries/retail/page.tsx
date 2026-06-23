import type { Metadata } from 'next';

import RetailIndustryPage from '@/components/retail/retail-industry-page';

export const metadata: Metadata = {
  title: 'Retail & CPG Analytics | InvoLead',
  description:
    'Drive retail and CPG growth with AI-powered pricing, forecasting, marketing, customer, and commercial intelligence from InvoLead.',
};

export default function RetailPage() {
  return <RetailIndustryPage />;
}
