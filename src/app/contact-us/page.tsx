import type { Metadata } from 'next';

import ContactPage from '@/components/contact/contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | InvoLead',
  description:
    'Talk to InvoLead about your AI, data, and enterprise transformation goals. Our team replies within one business day.',
};

export default function ContactUsPage() {
  return <ContactPage />;
}
