import type { Metadata } from 'next';

import DataScienceSolutionsPage from '@/components/data-science/data-science-solutions-page';

export const metadata: Metadata = {
  title: 'Data Science - InvoLead',
  description: 'Data science solutions that deliver measurable business outcomes.',
};

export default function DataSciencePage() {
  return <DataScienceSolutionsPage />;
}
