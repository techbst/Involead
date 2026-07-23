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
import CornerShape from "../ui/shape";
import { BriefcaseMedical, ShoppingCart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    icon: BriefcaseMedical,
    title: "Commercial Effectiveness",
    description:
      "Leverage AI, advanced analytics, & econometric modeling to optimize pricing, promotions, marketing spend, & channel strategies. Drive data-backed decisions across the commercial ecosystem to maximize revenue, profitability, and market impact.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],

    category: "Healthcare",
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
    <section className="case_studies relative pt-20 pb-20 bg-black">
      {/* <ClipShape /> */}
      <div className="container relative ">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Healthcare Transformations. Measurable Results."
          description="Discover how healthcare organizations have modernized data platforms, accelerated analytics, and delivered measurable business outcomes with InvoLead."
          textColor="white"
        />
        <Swiper
          {...sliderSettings1}
          className="case-studies-swiper mt-12"
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
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-white">
        <CornerShape color="#000" />
      </div>
    </section>
  );
}
