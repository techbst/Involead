import { Activity } from "lucide-react";

import { SectionHeader } from "../ui/section-header";

const results = [
  {
    title: "Improve Patient Outcomes",
    description:
      "Unified healthcare data provides clinicians with timely, accurate insights that improve diagnosis, treatment planning, and patient care while reducing clinical decision-making time by",
    metric: "X%",
  },
  {
    title: "Accelerate Clinical & Operational Decisions",
    description:
      "Real-time analytics give healthcare leaders complete operational visibility, improving reporting speed by",
    metric: "X%",
    suffix: "and enabling proactive decision-making.",
  },
  {
    title: "Optimize Revenue Cycle Operations",
    description:
      "Automated data processing reduces manual effort, minimizes claims errors, and accelerates reimbursement cycles, improving operational efficiency by",
    metric: "X%",
  },
  {
    title: "Modernize Healthcare Data Infrastructure",
    description:
      "Migrating from legacy infrastructure to scalable cloud platforms improves system performance, reduces maintenance costs by",
    metric: "X%",
    suffix: "and establishes an AI-ready data foundation.",
  },
  {
    title: "Strengthen Governance & Compliance",
    description:
      "Centralized governance and automated quality controls improve regulatory reporting accuracy by",
    metric: "X%",
    suffix: "while ensuring secure and compliant healthcare data management.",
  },
];

const LEFT_PLACEHOLDER_IMAGE =
  "/healthcare/modern-medical.webp";
const RIGHT_PLACEHOLDER_IMAGE =
  "/healthcare/dynamic-data.webp";

export default function HealthcareResults() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Results That Matter"
          title="Turning Healthcare Data into Measurable Business Value"
          description="Transform trusted data into better patient outcomes, operational efficiency, financial performance, and regulatory compliance."
          maxWidth="4xl"
          descriptionWidth="3xl"
        />

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-[194px_minmax(0,1fr)_194px] md:items-stretch">
          <img
            src={LEFT_PLACEHOLDER_IMAGE}
            alt="Placeholder for healthcare results"
            className="hidden h-full min-h-[450px] w-full rounded-[10px] object-cover lg:block"
          />

          <div className="grid gap-2">
            {results.map((result) => (
              <article
                key={result.title}
                className="flex gap-3 rounded-[10px] bg-[#e7f5f8] p-3 sm:gap-4 sm:p-4"
              >
                <span className="grid w-[60px] h-[60px] shrink-0 place-items-center rounded-[12px] bg-white text-secondary mt-2">
                  <Activity className="size-8 stroke-[1.5]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium leading-[24px] -tracking-[-0.38px] text-[#1D1D1D]">
                    {result.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-[13px]]">
                    {result.description}{" "}
                    <span className="inline-flex rounded-[8px] bg-[#E7F5F8] px-[8px] py-[1px] font-bold text-secondary  border border-[0.67px] border-[#46A4B9] leading-normal">
                      {result.metric}
                    </span>{" "}
                    {result.suffix}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <img
            src={RIGHT_PLACEHOLDER_IMAGE}
            alt="Placeholder for healthcare results"
            className="hidden h-full min-h-[450px] w-full rounded-[10px] object-cover lg:block"
          />
        </div>
      </div>
    </section>
  );
}
