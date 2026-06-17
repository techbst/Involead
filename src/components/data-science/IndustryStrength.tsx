"use client";

import { motion } from "framer-motion";

export interface IndustryMetric {
  title: string;
  value: string;
  description: string;
}

interface IndustryStrengthSectionProps {
  title?: string;
  subtitle?: string;
  metrics?: IndustryMetric[];
}

const defaultMetrics: IndustryMetric[] = [
  {
    title: "Engagement Rate",
    value: "35–45%",
    description: "Increase through AI-led personalization",
  },
  {
    title: "Planning Cycle",
    value: "30–40%",
    description: "Reduction in time-to-decision",
  },
  {
    title: "Revenue Growth",
    value: "5–18%",
    description: "Uplift across client portfolios",
  },
  {
    title: "Forecast Accuracy",
    value: "20–30%",
    description: "Improved prediction accuracy",
  },
  {
    title: "Marketing ROI",
    value: "15–20%",
    description: "Increase in campaign efficiency",
  },
  {
    title: "Hours Saved",
    value: "25–35H",
    description: "Operational time savings",
  },
];

export default function IndustryStrengthSection({
  title = "Our Strength Across Industries",
  subtitle = "From FMCG to Pharma, Retail to Finance, Involead delivers proven AI and data science outcomes across the industries that matter most.",
  metrics = defaultMetrics,
}: IndustryStrengthSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="absolute right-0 top-0 h-full w-[300px] bg-gradient-to-l from-cyan-400/10 to-transparent" />

      <div className="relative z-10 container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="mb-8 text-xl font-semibold text-black lg:text-2xl">
                  {item.title}
                </h3>

                <div className="mb-4 text-5xl font-bold tracking-tight text-black lg:text-6xl">
                  {item.value}
                </div>

                <p className="text-base leading-relaxed text-neutral-600 lg:text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}