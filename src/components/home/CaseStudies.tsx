// "use client";

// import {
//   BriefcaseBusiness,
//   ChartColumnIncreasing,
//   Database,
// } from "lucide-react";

// import StoryShowcase, {
//   type StoryShowcaseItem,
// } from "@/components/ui/story-showcase";

// const caseStudies: StoryShowcaseItem[] = [
//   {
//     title: "Sales & Retention Growth - Agentic AI Across 500+ Stores",
//     category: "Case study",
//     description:
//       "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
//     image:
//       "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=85",
//     icon: ChartColumnIncreasing,
//     metrics: [
//       { value: "+15-25%", label: "Revenue Growth" },
//       { value: "-15-20%", label: "Churn Reduction" },
//       { value: "+25-35%", label: "Faster Cycles" },
//     ],
//   },
//   {
//     title: "Predictive Maintenance Across Global Plants",
//     category: "Case study",
//     description:
//       "Production leaders need early signals before downtime compounds. Our predictive maintenance fabric connects machine telemetry, operator context, and quality data into prioritized action.",
//     image:
//       "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
//     icon: Database,
//     metrics: [
//       { value: "41%", label: "Downtime Cut" },
//       { value: "18%", label: "OEE Increase" },
//       { value: "9mo", label: "ROI Window" },
//     ],
//   },
//   {
//     title: "Clinical Intelligence for Faster Care Decisions",
//     category: "Case study",
//     description:
//       "Care teams move faster when clinical, operational, and patient signals are connected. We built a governed intelligence workspace for consistent review and faster triage.",
//     image:
//       "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
//     icon: BriefcaseBusiness,
//     metrics: [
//       { value: "32%", label: "Faster Review" },
//       { value: "94%", label: "Accuracy" },
//       { value: "24/7", label: "Visibility" },
//     ],
//   },
// ];

// export default function CaseStudies() {
//   return (
//     <StoryShowcase
//       eyebrow="Case Studies"
//       title="Proven Outcomes Across Modern Digital Enterprises"
//       description="From automation to predictive intelligence, our solutions deliver measurable results at enterprise scale."
//       items={caseStudies}
//       sectionClassName="bg-black"
//       textColor="white"
//       compact
//       readMoreHref="/case-studies"
//       showClipshape={false}
//     />
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import CaseStudiesCard, {
  type CaseStudyMetric,
} from "@/components/ui/case-studies-card";
import ClipShape from "../ui/clip-shape";
import { SectionHeader } from "../ui/section-header";
import CornerShape from "../ui/shape";

import Slider from "react-slick";
import { sliderSettings1 } from "../ui/slick-slider";
import { useRef } from "react";

type CaseStudyItem = {
  image: string;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  category: string;
  href: string;
};

const caseStudies: CaseStudyItem[] = [
  {
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=85",
    title: "Commercial Effectiveness",
    description:
      "Leverage AI, advanced analytics, & econometric modeling to optimize pricing, promotions, marketing spend, & channel strategies. Drive data-backed decisions across the commercial ecosystem to maximize revenue, profitability, and market impact.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],
    category: "Category Name",
    href: "/case-studies/commercial-effectiveness",
  },
  {
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
    title: "Predictive Customer Intelligence",
    description:
      "Unify customer, campaign, and transaction data to predict churn, identify growth opportunities, and personalize customer engagement at enterprise scale.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],
    category: "Category Name",
    href: "/case-studies/predictive-customer-intelligence",
  },
  {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    title: "Sales & Retention Growth — Agentic AI Across 500–2000+ SKUs",
    description:
      "Retail growth is won by those who act faster and more precisely than the market. We deploy autonomous demand forecasting and churn intelligence, continuously optimizing inventory positioning and personalizing engagement at scale.",
    metrics: [
      { value: "+15–25%", label: "Revenue Growth" },
      { value: "−15–20%", label: "Churn Reduction" },
      { value: "+25–35%", label: "Faster Cycles" },
    ],
    category: "Category Name",
    href: "/case-studies/supply-chain-optimization",
  },
];

export default function CaseStudies() {
  const sliderRef = useRef<Slider | null>(null);
  return (
    <section className="case_studies relative py-20 bg-black">
      <div className="container relative">
        <SectionHeader 
          eyebrow="Case Studies"
          title="Proven Outcomes Across Modern Digital Enterprises"
          description="From automation to predictive intelligence, our solutions deliver measurable results at enterprise scale."
          textColor="white"
        />
        <Slider
            ref={sliderRef}
            {...sliderSettings1}
          className="case-studies-swiper custom-swiper-style-2 mt-12"
        >
          {caseStudies.map((item) => (
            <div key={item.title}>
              <CaseStudiesCard
                image={item.image}
                title={item.title}
                description={item.description}
                metrics={item.metrics}
                category={item.category}
                href={item.href}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-white">
      <CornerShape color="#000" />
      </div>
    </section>
  );
}