// "use client";

// import { useRef, useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
// import { motion, type Variants } from "framer-motion";
// import { ArrowLeft, ArrowRight, Check, CircleCheckBig, type LucideIcon } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import SectionReveal from "@/components/home/SectionReveal";
// import AnimatedNumber from "@/components/ui/animated-number";
// import { CLIP_PATH } from "@/components/ui/clip-card";
// import { cn } from "@/lib/utils";

// import {
//   capabilityData,
//   capabilityIconMap,
//   defaultCapabilityIcon,
//   type CapabilityData,
//   type CapabilityItem,
// } from "./capabilities-data";
// import { SectionHeader } from "../ui/section-header";

// const statVariants: Variants = {
//   hidden: { opacity: 0, y: 12 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.35, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [flipToken, setFlipToken] = useState(index === 0 ? 1 : 0);
//   const Icon: LucideIcon = item.icon;
//   const pointerHeadings = item.metrics.slice(0, 3).map((metric) => metric.label);

//   return (
//     <motion.article
//       // initial={{ opacity: 0, y: 26, scale: 0.98 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
//       // whileHover={{ y: isFlipped ? 0 : -8 }}
//       className="group h-full min-h-[480px] w-full [perspective:1400px]"
//     >
//       <motion.div
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
//         className="group relative h-full min-h-[480px] rounded-[24px]"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         <article
//           className={cn(
//             "absolute inset-0 flex h-full flex-col overflow-hidden border border-slate-200/90 p-7 shadow-[0_22px_70px_rgba(15,23,42,0.12),0_1px_0_rgba(255,255,255,0.9)_inset]",
//             isFlipped ? "pointer-events-none" : "pointer-events-auto",
//           )}
//           style={{
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//             clipPath: CLIP_PATH,
//           }}
//         >
//           <div
//             className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(255,255,255,0.38)_46%,rgba(255,255,255,0.72))]"
//             style={{ clipPath: CLIP_PATH }}
//           />
//           <div
//             className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(15,23,42,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:34px_34px]"
//             style={{ clipPath: CLIP_PATH }}
//           />
//           <div
//             className="absolute inset-0 z-10 transition duration-500 bg-black/50 group-hover:bg-black/70"
//             style={{
//               clipPath: CLIP_PATH,
//             }}
//           />
//           <div className="absolute left-0 top-0 h-full w-full ">
            
//             <img
//               src={item.image}
//               alt=""
//               className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
//             />
//           </div>

//           <div className="relative z-10 flex h-full flex-col">
//             {/* <div className="flex size-14 items-center justify-center rounded-[14px] border border-white/80 bg-white text-[#5fb0c2] shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl ">
//               <Icon className="size-7" />
//             </div> */}

//             <div className="z-20 flex items-center gap-3">
//               <span className="mt-0 h-7 w-1 bg-[#5fb0c2]"></span>
//               <h3 className="!text-[20px] !font-semibold leading-tight text-white">{item.title}</h3>
//             </div>

//             <div className="mt-7 grid gap-3">
//               {pointerHeadings.map((pointer, pointerIndex) => (
//                 <div
//                   key={pointer}
//                   className="flex items-center gap-3 text-sm font-medium text-[16px]"
//                 >
                  
//                   <CircleCheckBig className="text-secondary" />
//                   <span className="text-white">{pointer}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-auto pt-8">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsFlipped(true);
//                   setFlipToken((value) => value + 1);
//                 }}
//                className="absolute -bottom-2 right-0 z-2 grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 hover:text-white hover:bg-black"
    
//               >
                
//                 <ArrowRight className=" size-5" />
//               </button>
//             </div>
//           </div>
//         </article>

//         <article
//           className={cn(
//             "absolute inset-0 flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]",
//             isFlipped ? "pointer-events-auto" : "pointer-events-none"
//           )}
//           style={{
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//             transform: "rotateY(180deg)",
//           }}
//         >

//           {/* <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#5fb0c2,#a7dde9)]" /> */}
//           <div className="absolute -right-1 -top-1 max-w-[200px] opacity-20 -z-1">
//             <img src={'/img/shape-3.webp'} alt="shape" />
//           </div>
//           <div className="flex items-start justify-between gap-4">
//             <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-secondary/10 text-secondary">
//               <Icon className="size-6" />
//             </div>
//             <button
//               type="button"
//               onClick={() => setIsFlipped(false)}
//               className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-secondary hover:text-secondary"
//             >
//               Back
//             </button>
//           </div>

//           <div className="mt-6 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2">
//             <div className="text-[20px] font-bold text-slate-950">
//               {item.title}
//             </div>
//             <p className="mt-4 !text-[15px]">
//               {item.summary}
//             </p>

//             <div className="mt-6 grid grid-rows-2 gap-3 sm:grid-cols-2">
//               {item.metrics.map((metric, metricIndex) => (
//                 <motion.div
//                     key={metric.label}
//                     custom={metricIndex}
//                     variants={statVariants}
//                     initial="hidden"
//                     animate={isFlipped ? "show" : "hidden"}
//                     className={`
//                       rounded-[16px]
//                       px-4 py-3
//                       min-w-0
//                       border border-white/30
//                     bg-[radial-gradient(circle_at_top_left,_#6ab8c9_0%,_#4f9fb2_55%,_#2f7f93_100%)]
//                       inset_0_10px_10px_rgba(36,104,119,0.35),inset_0_-12px_14px_rgba(0,0,0,0.08)]
//                       transition-all duration-300
//                       hover:-translate-y-1
//                       hover:shadow-[0_12px_24px_rgba(0,0,0,0.18),0_24px_45px_rgba(95,176,194,0.45),inset_0_1px_1px_rgba(255,255,255,0.45)]
//                       ${metricIndex % 2 === 0 ? "text-left" : "text-left md:text-left"}
//                     `}
//                   >
//                     <div className="text-[17px] font-bold text-white">
//                       <AnimatedNumber
//                         key={`${metric.label}-${flipToken}`}
//                         value={metric.valuecomp}
//                       />
//                     </div>

//                     <div className="mt-2 break-words !text-[14px] font-medium capitalize leading-5 !text-white">
//                       {metric.label}
//                     </div>
//                   </motion.div>
//               ))}
//             </div>

//             {item.paragraphs.length > 1 ? (
//               <div className="mt-6 grid gap-4 pb-2">
//                 {item.paragraphs.slice(1).map((paragraph) => (
//                   <div
//                     key={paragraph}
//                     className="rounded-[14px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f7fbfd)] p-4"
//                   >
//                     <p className="!text-[14px] leading-7 text-slate-700">
//                       {paragraph}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             ) : null}
//           </div>
//         </article>
//       </motion.div>
//     </motion.article>
//   );
// }

// type CapabilitiesProps = {
//   title?: string;
//   subtitle?: string;
//   items?: CapabilityData[];
// };

// function buildCapabilityItems(items: CapabilityData[]): CapabilityItem[] {
//   return items.map((item) => {
//     const paragraphs = item.description.split("\n\n").map((p) => p.trim());
//     return {
//       ...item,
//       summary: paragraphs[0],
//       paragraphs,
//       icon: capabilityIconMap[item.title] ?? defaultCapabilityIcon,
//     };
//   });
// }

// export default function Capabilities({
//   title = "Where Strategy Meets Intelligence",
//   subtitle = "A compact, premium grid of services with front-and-back content so the most important stats stay one hover away.",
//   items = capabilityData,
// }: CapabilitiesProps) {
//   const cards = buildCapabilityItems(items);
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <SectionReveal className="py-15 ">
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
//             <SectionHeader 
//                    eyebrow="Our Capabilities"
//                    title={title}
//                    description={subtitle}
//                     align="left"
//                     maxWidth="5xl"
//                   />

//           <div className="flex gap-3 sm:gap-4">
//             <button
//               type="button"
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
//               aria-label="Previous capability"
//             >
//               <ArrowLeft className="size-5" />
//             </button>
//             <button
//               type="button"
//               onClick={() => swiperRef.current?.slideNext()}
//               className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black"
//               aria-label="Next capability"
//             >
//               <ArrowRight className="size-5" />
//             </button>
//           </div>
//         </div>

//         <Swiper
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           spaceBetween={20}
//           slidesPerView={3}
//           loop={false}
//           breakpoints={{
//             640: { slidesPerView: 1.15 },
//             768: { slidesPerView: 2 },
//             1200: { slidesPerView: 3 },
//           }}
//           className="mt-9 min-w-0 custom-swiper-style-2"
//         >
//           {cards.map((item, index) => (
//             <SwiperSlide key={item.title} className="h-auto py-2 bg-transparent rounded-xl">
//               <CapabilityCard item={item} index={index} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </SectionReveal>
//   );
// }
import ExpandableCardGrid from "@/components/ui/expandable-card-grid";
import { SectionHeader } from "../ui/section-header";
import CornerShape from "../ui/shape";

const cards = [
  {
    image: "/gen-ai/Agentic-Orchestration-Swarms.webp",
    title: "Pricing & Dynamic Pricing",
    shortDesc:
      "The right price at the right moment turns demand into margin without eroding trust.",
    longDesc:
      "Our Agentic AI continuously ingests elasticity signals, competitive moves, and inventory positions to recommend and automate price ladders, guardrails, and experiments - so teams move from static rules to adaptive pricing that compounds revenue.",
    metricBg: "linear-gradient(135deg,#6EB7CC 0%,#4F8D9A 100%)",
    metricTextColor: "#ffffff",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image: "/img/cap-1.webp",
    title: "Promotion & Trade Optimization",
    shortDesc:
      "Trade and promo dollars only work when every lever is aligned to the same growth story.",
    longDesc:
      "Agentic models simulate lift, cannibalization, and retailer behavior in parallel, then orchestrate scenarios across brands and channels - surfacing where to invest, where to cut, and how to negotiate with evidence-backed targets.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image: "/img/cap-3.webp",
    title: "Marketing Mix Modeling (MMM)",
    shortDesc:
      "Attribution that ignores long arcs and offline effects quietly misallocates millions every quarter.",
    longDesc:
      "We rebuild MMM on fresh priors, hierarchical media curves, and business constraints - with agents stress-testing assumptions, refreshing coefficients as new data lands, and explaining drivers in language stakeholders actually use.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image: "/img/cap-4.webp",
    title: "Revenue Growth Management (RGM)",
    shortDesc:
      "RGM breaks when pricing, assortment, and promo strategies are optimized in silos.",
    longDesc:
      "We connect elasticity, assortment productivity, and trade effectiveness in a single agentic layer that explores coordinated moves - always anchored to P&L guardrails and channel realities - so growth is deliberate, not accidental.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image: "/img/cap-5.webp",
    title: "Segmentation & Micro-Segmentation",
    shortDesc:
      "Relevance at scale demands segmentation that evolves as fast as customers do.",
    longDesc:
      "Our Agentic AI-driven segmentation creates and continuously refines 10-50+ dynamic cohorts using real-time behavioral and transactional data. Agents adapt segment definitions and orchestrate hyper-personalized engagement strategies ensuring every customer interaction is precisely calibrated.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image: "/img/cap-6.webp",
    title: "Demand Forecasting & Planning",
    shortDesc:
      "Forecast error is not a spreadsheet problem - it is a service-level, cash, and credibility problem.",
    longDesc:
      "Hierarchical models fuse sell-in, sell-through, and external signals while agents monitor drift, inject shocks, and reconcile plans across nodes - giving supply, finance, and commercial teams one aligned number they can defend.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image:
      "/img/photo-1460925895917-afdab827c52f.avif",
    title: "Marketing Mix Optimization",
    shortDesc:
      "Static budgets freeze strategy the moment markets shift; optimization has to breathe with performance.",
    longDesc:
      "Agentic optimizers pair MMM outputs with operational limits - flighting rules, minimum spends, and channel capacity - to propose reallocations weekly, not quarterly, with transparent trade-offs between growth, efficiency, and risk.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image:
      "/img/photo-1552664730-d307ca884978.jpg",
    title: "Next Best Action (NBA)",
    shortDesc:
      "Pipeline health depends less on volume than on knowing which accounts will actually move and why.",
    longDesc:
      "Agentic scoring blends firmographic fit, intent, product usage, and seller notes to refresh role definitions continuously, route plays automatically, and explain the next best action so revenue teams spend time closing, not debating lists.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
  {
    image:
      "/img/photo-1686061594225-3e92c0cd51b0.jpg",
    title: "BI & Dashboarding",
    shortDesc:
      "Journeys fragment when channels, policies, and models each optimize different definitions of success.",
    longDesc:
      "Customer-Wing pairs orchestration agents with policy-aware copilots - unifying data, decisions, and creative variants so every touchpoint stays on-brand, compliant, and tuned to the live state of each relationship.",
    metrics: [
      { value: "12-18%", valuecomp: "20-30%", label: "Margin Improvement" },
      { value: "12-18%", valuecomp: "20-30%", label: "Revenue Lift" },
      { value: "12-18%", valuecomp: "20-30%", label: "Price Realization" },
      { value: "12-18%", valuecomp: "20-30%", label: "Promo Leakage Reduction" },
    ],
  },
];

export default function Section() {
  return (
    <section className="bg-[#fff] py-20 relative overflow-hidden">
      <div className="container">
        <SectionHeader 
          eyebrow="Our Capabilities"
          title="Where Strategy Meets Intelligence"
          description="A compact, premium grid of services with front-and-back content so the most important stats stay one hover away."
          align="center"
          maxWidth="5xl"
        />
        <ExpandableCardGrid items={cards} className="mt-12" />
      </div>
      <div className="absolute -bottom-[8px] left-0 w-[290px] bg-black ">
        <CornerShape color="#fff" />
      </div>
    </section>
  );
}