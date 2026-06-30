"use client";

import FAQ, { FAQCategory } from "@/components/ui/faq";
import { SectionHeader } from "../ui/section-header";

const faqData: FAQCategory[] = [
  {
    title: "General",
    items: [
      {
        question: "What is AI Data Engineering?",
        answer:
          "AI Data Engineering combines modern data pipelines with AI-driven automation.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most enterprise implementations take between 6–12 weeks depending on complexity.",
      },
    ],
  },
  {
    title: "Clients",
    items: [
      {
        question: "Do you offer fixed pricing?",
        answer:
          "Yes, fixed-cost and dedicated team engagement models are available.",
      },
      {
        question: "Is there a free consultation?",
        answer:
          "Yes, every project starts with a free strategy session.",
      },
    ],
  },
  {
    title: "Business",
    items: [
      {
        question: "Do you offer fixed pricing?",
        answer:
          "Yes, fixed-cost and dedicated team engagement models are available.",
      },
      {
        question: "Is there a free consultation?",
        answer:
          "Yes, every project starts with a free strategy session.",
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-secondary/10">
      <div className="container relative">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Get answers to common questions about data engineering and our services."
        />

        <FAQ
          categories={faqData}
          className="mt-10"
        />
      </div>
    </section>
  );
}