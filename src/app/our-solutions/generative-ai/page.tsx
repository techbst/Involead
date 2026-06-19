import type { Metadata } from "next";

import GenerativeAIPage from "@/components/generative-ai/generative-ai-page";

export const metadata: Metadata = {
  title: "Generative AI - InvoLead",
  description:
    "Enterprise-grade Generative AI systems, autonomous agents, RAG, and AI workflow automation by InvoLead.",
};

export default function Page() {
  return <GenerativeAIPage />;
}
