import HealthCareIndustryPage from '@/components/retail/healthcare-industry-page';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Healthcare | InvoLead',
  description:
    'Governed intelligence for clinical and operational work. InvoLead is a healthcare intelligence platform that helps healthcare organizations make data-driven decisions, improve patient outcomes, and optimize operational efficiency.',
};

export default function RetailPage() {
  return <HealthCareIndustryPage />;
}
