import { SectionHeader } from "../ui/section-header";
import { motion } from "framer-motion";
const partnerPoints = [
  {
    number: "01",
    title: "Healthcare Domain Expertise",
    description:
      "Deep understanding of healthcare data ecosystems, regulatory standards, and industry-specific analytics use cases.",
  },
  {
    number: "02",
    title: "Cloud-Native Delivery",
    description:
      "Build secure, scalable, and high-performance data platforms on Azure, AWS, and Google Cloud.",
  },
  {
    number: "03",
    title: "End-to-End Data Engineering",
    description:
      "Deliver complete data solutions from ingestion and transformation to governance, visualization, and AI enablement.",
  },
  {
    number: "04",
    title: "Security & Compliance First",
    description:
      "Design solutions with HIPAA, GDPR, and enterprise-grade governance embedded at every layer.",
  },
  {
    number: "05",
    title: "Accelerated Time-to-Value",
    description:
      "Leverage proven frameworks, accelerators, and best practices to deliver measurable business outcomes faster.",
  },
  {
    number: "06",
    title: "AI-Ready Data Foundations",
    description:
      "Build trusted, high-quality data platforms that power advanced analytics, machine learning, and Generative AI initiatives.",
  },
];

export default function StrategicPartner() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-20">
      <div className="container mx-auto ">
        <div className="rounded-[24px] bg-secondary px-4 pt-14 pb-8">
          <SectionHeader
            eyebrow="Why InvoLead"
            title="A Strategic Partner for Healthcare Data Transformation"
            description="Combining healthcare expertise, modern data engineering, and AI to deliver secure, scalable, and business-focused solutions."
            textColor="white"
          />

          <div className="mt-11 grid gap-1.5 md:grid-cols-2 lg:grid-cols-3">
            {partnerPoints.map((point, index) => (
              <motion.article
                key={point.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.155,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[10px] bg-white p-8"
              >
                <span className="mb-5 block text-sm font-semibold tracking-[0.52px] text-secondary">
                  {point.number}
                </span>
                <div className="text-[20px] font-semibold tracking-[-0.38px] text-[#1D1D1D]">
                  {point.title}
                </div>
                <p className="mt-1 text-sm leading-5 text-[#1D1D1D]">
                  {point.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
