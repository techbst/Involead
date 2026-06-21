import type { Metadata } from "next";

import DataEngineeringPage from "@/components/data-engineering/data-engineering-page";

export const metadata: Metadata = {
  title: "AI-Powered Data Engineering - InvoLead",
  description:
    "HIPAA-compliant, GxP-ready data platforms for regulated enterprises, designed and delivered in 90 days.",
};

export default function Page() {
  return <DataEngineeringPage />;
}
