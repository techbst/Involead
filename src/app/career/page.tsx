import type { Metadata } from "next";

import CareerPageClient from "@/components/career/career-page";

export const metadata: Metadata = {
  title: "Careers - InvoLead",
  description: "Build what’s next with InvoLead.",
};

export default function CareerPage() {
  return <CareerPageClient />;
}
