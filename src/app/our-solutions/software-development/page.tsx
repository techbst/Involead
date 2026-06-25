import type { Metadata } from "next";

import SoftwareDevelopmentPage from "@/components/software-development/software-development-page";
import { marketingPages } from "@/content/marketing-pages";

const page = marketingPages["our-solutions/software-development"];

export const metadata: Metadata = {
  title: `${page.title} - InvoLead`,
  description: page.description,
};

export default function SoftwareDevelopmentRoute() {
  return <SoftwareDevelopmentPage />;
}
