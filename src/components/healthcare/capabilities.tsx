"use client";

import { ArrowRight } from "lucide-react";
import { useId, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";

type Capability = {
  title: string;
  image: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    title: "Healthcare Data Platform Modernization",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Transform legacy healthcare systems into scalable cloud-native data platforms that support real-time analytics and AI.",
  },
  {
    title: "Data Integration & Interoperability",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Connect clinical, operational, claims, and patient data to create a unified and accessible healthcare data ecosystem.",
  },
  {
    title: "Advanced Analytics & Business Intelligence",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Turn trusted healthcare data into actionable insights that improve care delivery, operations, and decision-making.",
  },
  {
    title: "Cloud Data Engineering",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Build reliable, secure, and scalable pipelines that make healthcare data available when and where it is needed.",
  },
  {
    title: "AI & Machine Learning Enablement",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Prepare governed, high-quality data foundations that accelerate responsible AI and machine learning initiatives.",
  },
  {
    title: "Data Governance & Quality",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Establish consistent standards, lineage, and quality controls across your most critical healthcare data assets.",
  },
  {
    title: "Real-Time Data Pipelines",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Deliver timely, event-driven data streams that enable responsive clinical, operational, and patient experiences.",
  },
  {
    title: "Regulatory & Compliance Analytics",
    image : "/healthcare/Healthcare-Data-Platform-Modernization.jpg",
    description:
      "Support audit-ready reporting and compliance analytics with secure, traceable, and governed healthcare data.",
  },
];

const PLACEHOLDER_IMAGE =
  "https://placehold.co/1200x650/e1f1f5/397a8d?text=Healthcare+Capability";

export default function HealthcareCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabGroupId = useId();
  const activeCapability = capabilities[activeIndex];

  return (
    <section className="bg-[#edf8fa] py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Our Capabilities"
          title="End-to-End Data & AI Solutions for Healthcare"
          description="From data modernization to AI enablement, our solutions help healthcare organizations build intelligent, scalable, and future-ready data ecosystems."
          maxWidth="4xl"
          descriptionWidth="3xl"
        />

        <div className="mt-10 overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.04)] sm:mt-12 md:grid md:grid-cols-[minmax(270px,0.72fr)_minmax(0,1.85fr)]">
          <div
            className="flex overflow-x-auto border-b border-slate-200/80 bg-white md:block md:overflow-visible md:border-b-0 md:border-r"
            role="tablist"
            aria-label="Healthcare capabilities"
          >
            {capabilities.map((capability, index) => {
              const isActive = index === activeIndex;
              const itemId = `${tabGroupId}-tab-${index}`;
              const panelId = `${tabGroupId}-panel-${index}`;

              return (
                <motion.button
                  key={capability.title}
                  id={itemId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.155,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group flex min-h-[68px] shrink-0 items-center gap-3 border-r border-slate-200/80 px-5 py-4 text-left transition-colors last:border-r-0 md:w-full md:border-r-0 md:border-b md:last:border-b-0 ${
                    isActive
                      ? "bg-secondary text-white"
                      : "bg-white text-slate-900 hover:bg-[#f1fafc]"
                  }`}
                >
                  <span className="text-xs font-semibold tabular-nums opacity-90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-[190px] text-sm font-medium leading-snug md:min-w-0">
                    {capability.title}
                  </span>
                  {isActive && (
                    <ArrowRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div
            id={`${tabGroupId}-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`${tabGroupId}-tab-${activeIndex}`}
            className="p-4 sm:p-6 md:p-6 lg:p-7"
          >
            <img
              src={activeCapability.image}
              alt="Placeholder for healthcare capability"
              className="aspect-[16/8] w-full rounded-[12px] object-cover"
            />
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-2xl">
              {activeCapability.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700 sm:text-[15px]">
              {activeCapability.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
