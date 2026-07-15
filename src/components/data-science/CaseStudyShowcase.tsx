// "use client";

// import {
//   ChartColumnIncreasing,
//   Database,
//   LineChart,
//   type LucideIcon,
// } from "lucide-react";

// import StoryShowcase, { type StoryShowcaseItem } from "../ui/story-showcase";

// const caseStudies: StoryShowcaseItem[] = [
//   {
//     title: "Market Success",
//     category: "Case study",
//     description:
//       "Predictive pricing and demand signals improved margin visibility and planning confidence.",
//     metrics: [
//       { value: "+18%", label: "Revenue Lift" },
//       { value: "30%", label: "Cycle Reduction" },
//       { value: "2.5x", label: "Decision Speed" },
//     ],
//     icon: LineChart,
//     image:
//       "/data-science/photo-1552664730-d307ca884978.avif",
//   },
//   {
//     title: "Operational Intelligence",
//     category: "Case study",
//     description:
//       "Automated workflows connected quality, forecasting, and execution into one governed layer.",
//     metrics: [
//       { value: "41%", label: "Fewer Errors" },
//       { value: "24/7", label: "Visibility" },
//       { value: "9 mo", label: "ROI Window" },
//     ],
//     icon: Database,
//     image:
//       "/data-science/photo-1460925895917-afdab827c52f.jpg",
//   },
//   {
//     title: "Technology-Driven Change",
//     category: "Case study",
//     description:
//       "A connected analytics foundation helped teams move from reporting to action faster.",
//     metrics: [
//       { value: "32%", label: "Faster Review" },
//       { value: "94%", label: "Accuracy" },
//       { value: "3x", label: "Adoption" },
//     ],
//     icon: ChartColumnIncreasing,
//     image:
//       "/data-science/photo-1451187580459-43490279c0fa.jpg",
//   },
// ];

// export default function CaseStudyShowcase() {
//   return (
//     <StoryShowcase
//       eyebrow="Case Studies"
//       title="Use Cases & Success Stories"
//       description="Real impact across industries, driven by data. Every engagement engineered around your most critical KPIs."
//       items={caseStudies}
//     />
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import CaseStudiesCard, {
  type CaseStudyMetric,
} from "@/components/ui/case-studies-card";
import ClipShape from "../ui/clip-shape";
import { SectionHeader } from "../ui/section-header";

import { sliderSettings1 } from "../ui/swiper-slider";
import type { LucideIcon } from "lucide-react";
import { ShoppingCart } from "lucide-react";

type CaseStudyItem = {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  category: string;
  href: string;
};

const caseStudies: CaseStudyItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=85",
    icon: ShoppingCart,
    title: "Commercial Effectiveness",
    description:
      "Leverage AI, advanced analytics, & econometric modeling to optimize pricing, promotions, marketing spend, & channel strategies. Drive data-backed decisions across the commercial ecosystem to maximize revenue, profitability, and market impact.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],

    category: "Retail",
    href: "/case-studies/commercial-effectiveness",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
    icon: ShoppingCart,
    title: "Predictive Customer Intelligence",
    description:
      "Unify customer, campaign, and transaction data to predict churn, identify growth opportunities, and personalize customer engagement at enterprise scale.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],
    category: "Retail",
    href: "/case-studies/predictive-customer-intelligence",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    icon: ShoppingCart,
    title: "Sales & Retention Growth — Agentic AI Across 500–2000+ SKUs",
    description:
      "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],
    category: "Retail",
    href: "/case-studies/supply-chain-optimization",
  },
];

export default function CaseStudies() {
  return (
    <section className="case_studies relative py-20 md:py-20">
      <div className="container relative">
        <SectionHeader
          eyebrow="Case Studies"
          title="Use Cases & Success Stories"
          description="Real impact across industries, driven by data. Every engagement engineered around your most critical KPIs."
        />
        <Swiper
          {...sliderSettings1}
          className="case-studies-swiper -mx-2 mt-12"
        >
          {caseStudies.map((item) => (
            <SwiperSlide key={item.title} className="h-auto">
              <CaseStudiesCard
                image={item.image}
                icon={item.icon}
                title={item.title}
                description={item.description}
                metrics={item.metrics}
                category={item.category}
                href={item.href}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
