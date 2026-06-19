import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarketingDetailPage from '@/components/marketing/detail-page';
import { marketingPages } from '@/content/marketing-pages';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = marketingPages[`our-solutions/${slug}`];

  if (!page) {
    return {
      title: 'What We Do - InvoLead',
    };
  }

  return {
    title: `${page.title} - InvoLead`,
    description: page.description,
  };
}

export default async function WhatWeDoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = marketingPages[`our-solutions/${slug}`];

  if (!page) {
    notFound();
  }

  return <MarketingDetailPage {...page} />;
}
