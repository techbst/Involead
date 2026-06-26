"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import {
  ArrowRight, BrainCircuit, Check, Cloud,
  Code2, Database,
  Quote, Radar, Search, ShieldCheck, Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";
import DataEngineeringHero from "@/components/data-engineering/data-engineering-hero";
import InteractiveNeuralVortex from "../ui/animated-svg-background";
import CallToAction from "../ui/call-to-action";
import FAQ, { FAQCategory } from "../ui/faq";
import ValueCard from "../ui/value-card";
import { BlogCard, type BlogPost } from "../ui/blog-card";
import { SectionHeader } from "../ui/section-header";
import Stats from "./number";
import ClipShape from "../ui/clip-shape";
import ClipCard from "../ui/clip-card";
import CallToAction1 from "../ui/call-to-action-1";

const cn = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(" ");
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function SectionHeading({ eyebrow, title, body, inverse = false }: { eyebrow?: string; title: string; body?: string; inverse?: boolean }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .55 }} className="mx-auto max-w-4xl text-center">
      {eyebrow && <p className={cn("text-xs font-bold uppercase tracking-[.24em]", inverse ? "text-cyan-300" : "text-secondary")}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-[clamp(2.15rem,4.8vw,4rem)] font-bold leading-[1.04] tracking-[-.035em]", inverse ? "text-white" : "text-slate-950")}>{title}</h2>
      {body && <p className={cn("mx-auto mt-5 max-w-3xl text-base leading-8 sm:text-lg", inverse ? "text-slate-300" : "text-slate-600")}>{body}</p>}
    </motion.div>
  );
}
const foundations = [{ title: "Data Infrastructure", text: "Resilient lakehouse foundations engineered for trusted, governed access.", icon: Database }, { title: "Cloud Solutions", text: "Elastic multi-cloud systems that scale workload, cost, and control together.", icon: Cloud }, { title: "AI-Powered", text: "Intelligent pipelines that generate, validate, monitor, and heal themselves.", icon: BrainCircuit }];
function Foundations() { const ref = useRef<HTMLElement>(null); useEffect(() => { let clean = () => { }; (async () => { const { gsap } = await import("gsap"); const { ScrollTrigger } = await import("gsap/ScrollTrigger"); gsap.registerPlugin(ScrollTrigger); const ctx = gsap.context(() => { gsap.from(".foundation-step", { scrollTrigger: { trigger: ref.current, start: "top 72%" }, opacity: 0, y: 60, stagger: .18, duration: .8, ease: "power3.out" }); gsap.fromTo(".foundation-line", { scaleX: 0 }, { scaleX: 1, scrollTrigger: { trigger: ref.current, start: "top 70%" }, duration: 1.5, ease: "power2.inOut" }) }, ref); clean = () => ctx.revert() })(); return () => clean() }, []); 
return <section ref={ref} className="relative overflow-hidden bg-black py-20 text-white">
    <div className="container">
        <SectionHeader eyebrow="Built for production"
            title="Production-ready data platforms for regulated industries"
            description="Data engineering is the foundation of modern data-driven organizations. We design the systems that collect, store, process, and transform raw data into meaningful insight."
            textColor="white" />
        <div className="relative mt-12 grid gap-8 lg:grid-cols-3">
            
            {foundations.map((x, i) => <motion.article key={x.title} whileHover={{ y: -10 }}
                className="foundation-step group relative rounded-[24px] border border-white/10 bg-white/[.04] p-8 backdrop-blur">
                <div
                    className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_var(--x,50%)_0%,rgba(95,176,194,.18),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div
                    className="relative grid size-14 place-items-center rounded-2xl border border-cyan-300/20 bg-secondary text-white">
                    <x.icon />
                </div><span className="mt-12 block text-xs text-slate-500">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-bold">{x.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{x.text}</p>
                <div className="mt-8 flex gap-1">{[1, 2, 3, 4, 5].map(n =>
                    <motion.span key={n} animate={{ opacity: [.2, 1, .2] }} transition={{ repeat: Infinity, duration: 2,
                        delay: (i + n) * .15 }} className="h-1 flex-1 rounded-full bg-cyan-300" />)}
                </div>
            </motion.article>)}
        </div>
    </div>
</section>}

function Testimonial() { return <section className="bg-white pt-20 pb-8 overflow-hidden relative">
  
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative grid items-center gap-12 lg:grid-cols-[1.4fr_.8fr]"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 text-[120px] font-black leading-none text-secondary/10">
        "
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Quote className="mb-8 h-16 w-16 text-secondary" />

        <blockquote className="max-w-4xl text-[clamp(1rem,3.2vw,2rem)] font-medium leading-[1.4] tracking-[-0.04em] text-main">
          <b>InvoLead</b> helped us automate critical document flows across clinical
          operations. What once took weeks now happens in minutes — with zero
          errors. It's changed how our teams work.
        </blockquote>

        <div className="mt-12">
          <h4 className="text-xl font-bold text-main">
            - Marcus Saito
          </h4>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative flex justify-center lg:justify-end">
        {/* Background Circle */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute h-[380px] w-[380px] rounded-full bg-secondary/10"
        />

        {/* Decorative Shapes */}
        <div className="absolute right-0 top-10 h-20 w-20 rotate-12 rounded-xl bg-secondary/35" />

        <div className="absolute bottom-10 left-0 h-6 w-6 rounded-full bg-secondary" />

        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative z-10"
        >
          <div className="h-[340px] w-[340px] overflow-hidden rounded-full border-8 border-secondary/10">
            <img
              src="/testimonials/marcus.jpg"
              alt="Marcus Saito"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section> }

const compliance = [
  ["/de/gdpr-ready.svg", "GDPR Ready", "Compliant with EU rules for responsible data collection, storage, and deletion."], 
  ["/de/HIPAA-Compliant.svg", "HIPAA Compliant", "Keeps healthcare data safe and private so you can work with US providers and sign BAAs with confidence."], 
  ["/de/HIPAA-Compliant.svg", "FDA 21 CFR Part 11", "Ensures electronic records and e-signatures are reliable, traceable, and acceptable to regulators."], 
  ["/de/HIPAA-Compliant.svg", "GxP Compliant", "Supports Good Practice standards so your processes stay auditable and inspection-ready."], 
  ["/de/ISO-9001-Certified.svg", "ISO 9001 Certified", "Delivers consistent quality through clear processes and ongoing improvement."], 
  ["/de/ISO-9001-Certified.svg", "SOC 2 Type II Certified", "Audited controls keep your data secure, available, and protected from unauthorized access."]
];
const lineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
function Compliance() { return <section className="py-20 overflow-hidden relative">
    <ClipShape />
    <div className="container z-10 mt-26 relative">
        <SectionHeader 
            eyebrow="Trust by design" title="Standards-Verified Compliance"
            description="Our data platforms adhere to the highest security standards. We protect your data, simplify audits, and guarantee compliance." 
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{compliance.map(([a, t, d], i) => <ValueCard
                key={t}
                 image={a}
                title={t}
                description={d}
                index={i}
              />
              
              )}
            </div>
          <div className="mt-10 text-center">
            <Button asChild>
                <Link href="/contact-us">Speak to Our Experts
                <ArrowRight className="size-4" />
                </Link>
            </Button>
          </div>
    </div>
</section> }

const genCards = [
  { title: "Automated Code Generation", desc: "Generate data pipeline code automatically using natural language descriptions, reducing development time by up to 60%.", icon: Code2, image: "/service-img/data-eng.png" },
  { title: "Intelligent Data Quality", desc: "Generate data pipeline code automatically using natural language descriptions, reducing development time by up to 60%.", icon: ShieldCheck, color: "bg-[#dff7f2]" },
  { title: "Predictive Monitoring", desc: "Proactively identify potential issues before they impact your systems, reducing downtime and maintenance costs.", icon: Radar, color: "bg-[#eee8ff]" },
  { title: "Data Discovery & Cataloging", desc: "Automatically discover, catalog, and document data assets, making it easy to find and understand your data landscape.", icon: Search, color: "bg-[#fff0dc]" },
  { title: "Natural Language Interfaces", desc: "Query and manipulate data using plain English, making data engineering accessible to non-technical stakeholders.", icon: Sparkles, image: "/img/data-scie.webp" },
];
function GenAICards() { const [activeRow1, setActiveRow1] = useState<number | null>(null); const [activeRow2, setActiveRow2] = useState<number | null>(null); return <section className="bg-white py-20">
        <div className="container">
            <SectionHeader 
            eyebrow="Generative intelligence"
            title="How GenAI Improves Data Engineering"
            description="We empower life sciences, retail, hospitality, and pharma brands by transforming complex data into intelligent solutions that unlock insights, automate operations, and accelerate business outcomes."
            maxWidth="5xl" />
            <div className="mt-14 space-y-4">
                <motion.div layout className="flex flex-col gap-4 lg:flex-row">{genCards.slice(0, 2).map((c, i) =>
                    <GenCard key={c.title} item={c} active={activeRow1===i} muted={activeRow1 !==null && activeRow1
                        !==i} onHover={()=> setActiveRow1(i)} onLeave={() => setActiveRow1(null)} wide={i === 0} />)}
                </motion.div>
                <motion.div layout className="flex flex-col gap-4 lg:flex-row">{genCards.slice(2).map((c, j) => <GenCard
                        key={c.title} item={c} active={activeRow2===j} muted={activeRow2 !==null && activeRow2 !==j}
                        onHover={()=> setActiveRow2(j)} onLeave={() => setActiveRow2(null)} />)}</motion.div>
            </div>
        </div>
    </section> }
function GenCard({ item, active, muted, onHover, onLeave, wide = false }: { item: typeof genCards[number]; active: boolean; muted: boolean; onHover: () => void; onLeave: () => void; wide?: boolean }) { const baseFlex = wide ? 2 : 1; return <motion.article layout="position" animate={{ flexGrow: active ? baseFlex + .7 : muted ? Math.max(.65, baseFlex - .5) : baseFlex }} transition={{ type: "spring", stiffness: 220, damping: 30, mass: .8 }} className={cn("group relative min-h-[340px] min-w-0 basis-0 overflow-hidden rounded-[24px] p-7 sm:p-9", item.color || "bg-slate-950 text-white")}>{item.image && <><Image src={item.image} alt="" fill className="object-cover opacity-45 transition duration-700 group-hover:scale-105" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" /></>}
<div className="relative flex h-full flex-col">
  <div className="relative grid size-14 place-items-center rounded-2xl border border-slate-200 bg-white">
    <item.icon className={cn("size-7", item.image ? "text-secondary" : "text-secondary")} />
  </div>
  <h3 className={cn("mt-auto pt-20 text-2xl font-bold", item.image ? "text-white" : "text-slate-950")}>{item.title}</h3>
  <p className={cn("mt-3 max-w-xl text-sm leading-7", item.image ? "text-slate-300" : "text-slate-700")}>{item.desc}</p>
  <Button asChild variant={item.image ? "outline" : "outline"} className="mt-6 w-fit rounded-full">
    <Link href="/contact-us">Schedule A Demo <ArrowRight className="size-4" /></Link>
  </Button>
  </div>
  </motion.article> 
}

const excellence = [
  ["Data Pipeline Development", "Build robust, scalable data pipelines that transform raw data into actionable insights.", ["ETL/ELT Pipelines", "Real-time Processing", "Batch Processing", "Data Transformation"]], 
  ["Cloud Data Architecture", "Design and implement cloud-native data architectures on AWS, Azure, and GCP.", ["Multi-cloud Solutions", "Serverless Architecture", "Data Lakes", "Data Warehouses"]], 
  ["AI-Powered Automation", "Leverage Generative AI to automate data engineering tasks and improve efficiency.", ["Code Generation", "Data Quality Automation", "Anomaly Detection", "Predictive Maintenance"]], 
  ["Data Quality & Governance", "Ensure data quality, consistency, and compliance across your entire data ecosystem.", ["Data Validation", "Quality Monitoring", "Governance Frameworks", "Compliance Management"]], 
  ["Data Security & Privacy", "Leverage Generative AI to automate data engineering tasks and improve efficiency.", ["Code Generation", "Data Quality Automation", "Anomaly Detection", "Predictive Maintenance"]], 
  ["Performance Optimization", "Optimize data processing performance to reduce costs and improve speed.", ["Query Optimization", "Resource Management", "Caching Strategies", "Cost Optimization"]], 
  ["Data Integration", "Generate data pipeline code automatically using natural language descriptions, reducing development time by up to 60%.", ["API Integration", "Database Integration", "Streaming Integration", "Legacy System Integration"]], 
  ["Real-time Data Streaming", "Build real-time data streaming solutions for instant insights and decision-making.", ["Kafka Integration", "Stream Processing", "Event-driven Architecture", "Real-time Analytics"]]
];
function Excellence() { return <section className="overflow-hidden py-20 bg-secondary/20" >
<div className="container">
  <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
    <div className="mb-0 max-w-5xl text-left">
      <SectionHeader
      align="left" 
      eyebrow="Core capabilities"
      title="Engineering Excellence for Intelligence"
      description="We transform complex data into intelligent solutions that unlock insight, automate operations, and accelerate business outcomes."
      maxWidth="5xl"
      />
      </div>
      <div className="flex gap-4">
    <button className="swiper-prev grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </button>

    <button className="swiper-next grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 rotate-180"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </button>
  </div>
  </div>
  </div>
  <div className="mx-auto mt-4 container">
    
  <Swiper
  className="py-20 custom-swiper-style-1"
  modules={[Navigation]}
  navigation={{
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  }}
  slidesPerView={3}
  spaceBetween={30}
  loop
  centeredSlides
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {excellence.map(([title, subtitle, items], i) => (
    <SwiperSlide key={title as string} className="h-auto mt-10">
      <article className="relative h-full min-h-[420px] overflow-hidden rounded-[24px] border border-slate-200 p-6">
        <Image
          src={i % 2 ? "/img/data-scie.webp" : "/service-img/data-eng.png"}
          fill
          alt=""
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent hideonactive" />

        <div className="relative flex min-h-[350px] flex-col text-white">
          <span className="text-xs opacity-60">
            0{i + 1}
          </span>

          <h3 className="mt-auto text-xl font-bold">
            {title}
          </h3>

          <p className="mt-3 text-white">{subtitle}</p>

          <ul className="mt-6 space-y-3">
            {(items as string[]).map((x) => (
              <li key={x} className="flex gap-2 text-sm items-center">
                <Check className="size-4 shrink-0 pt-1" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </SwiperSlide>
  ))}
</Swiper></div></section> }

const reasons = [["Human-Centric Design", "Solutions designed with your team in mind, ensuring adoption and long-term success."], ["Speed to Value", "Rapid deployment and iterative improvement to deliver value from day one."], ["Proven Excellence", "Track record of successful implementations for Fortune 500 companies and startups alike."], ["Strategic Focus", "Align data engineering initiatives with your business objectives and growth strategy."], ["Innovation Leadership", "Stay ahead with cutting-edge technologies and best practices in data engineering."], ["Global Expertise", "Deep domain knowledge across industries and geographies, backed by a global team."]];
function WhyPartner() { const ref = useRef<HTMLElement>(null); useEffect(() => { let clean = () => { }; let cancelled = false; (async () => { const { gsap } = await import("gsap"); const { ScrollTrigger } = await import("gsap/ScrollTrigger"); if (cancelled || !ref.current) return; gsap.registerPlugin(ScrollTrigger); const ctx = gsap.context(() => { const cards = gsap.utils.toArray<HTMLElement>(".reason-card"); gsap.fromTo(".reason-progress", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".reason-list", start: "top 80%", end: "bottom", scrub: .5 } }); cards.forEach(card => { gsap.fromTo(card, { opacity: .28, y: 42 }, { opacity: 1, y: 0, duration: .65, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" } }); }); ScrollTrigger.refresh(); }, ref); clean = () => ctx.revert(); })(); return () => { cancelled = true; clean(); } }, []); return <section ref={ref} className="relative overflow-hidden bg-black py-20 text-white">
        <div className="container grid items-start gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-12">
              <SectionHeader 
              eyebrow="The InvoLead advantage"
              title="Why Partner with InvoLead?"
              description="A delivery model built to turn ambitious data strategy into durable enterprise capability."
              maxWidth="5xl"
              textColor="white"
              align="left"
              />
            </div>
            <div className="reason-list relative pl-8">
                <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10">
                    <div className="reason-progress h-full origin-top bg-cyan-300" />
                </div>
                <div className="space-y-4">{reasons.map(([t, d], i) => <article key={t}
                        className="reason-card rounded-[1.5rem] border border-white/10 bg-white/[.04] p-6 backdrop-blur sm:p-8">
                        <div className="flex gap-5"><span className="font-mono text-xs text-cyan-300">0{i + 1}</span>
                            <div>
                                <h3 className="text-xl font-bold">{t}</h3>
                                <p className="mt-2 leading-7 text-slate-400">{d}</p>
                            </div>
                        </div>
                    </article>)}</div>
            </div>
        </div>
    </section> }


<Stats />

const faqData: FAQCategory[] = [
  {
    title: "General",
    items: [
      {
        question: "What is data engineering?",
        answer:
          "Data engineering is the design and operation of the pipelines, platforms, and storage layers that turn raw data into trusted, usable business intelligence.",
      },
      {
        question: "How does Generative AI improve data engineering?",
        answer:
          "Generative AI helps teams accelerate pipeline development, automate quality checks, improve documentation, and create more natural ways to interact with complex data systems.",
      },
      {
        question: "How quickly can InvoLead deliver a data platform?",
        answer:
          "Most scoped implementations are delivered in phased milestones over roughly 90 days, with earlier wins often shipped well before the full platform rollout.",
      },
      {
        question: "Do you support regulated industries?",
        answer:
          "Yes. We work with regulated sectors including life sciences and healthcare, with HIPAA-aware controls, GxP-friendly processes, and audit-ready delivery practices.",
      },
    ],
  },
  {
    title: "Clients",
    items: [
      {
        question: "Can you work with our current cloud and warehouse stack?",
        answer:
          "Yes. We can extend or modernize existing AWS, Azure, GCP, lakehouse, warehouse, and integration setups instead of forcing a full rebuild where it is not needed.",
      },
      {
        question: "Do you offer fixed-scope and dedicated team models?",
        answer:
          "Yes. We support fixed-scope engagements for clearly defined outcomes and flexible delivery squads for ongoing platform evolution.",
      },
    ],
  },
  {
    title: "Business",
    items: [
      {
        question: "What business outcomes do data engineering projects usually improve?",
        answer:
          "Typical outcomes include faster access to insights, cleaner reporting, lower manual effort, stronger governance, and more reliable analytics for commercial and operational decisions.",
      },
      {
        question: "How do you reduce risk during implementation?",
        answer:
          "We reduce delivery risk through phased rollout planning, observability, validation checkpoints, security reviews, and architecture decisions that preserve continuity for business users.",
      },
    ],
  },
];
function FAQSection() { return <section className="py-20 overflow-hidden relative">
    
        <div className="container z-10 relative">
            <SectionHeader 
            title="Frequently Asked Questions"
            description="Get answers to common questions about data engineering and our services." 
            />
            <FAQ categories={faqData} className="mt-10" />
        </div>
    </section> }

function FinalCTA() { return <section className="relative py-25 overflow-hidden bg-[#02070b] text-white">
        {/* <NeuralCanvas /> */}
        <InteractiveNeuralVortex />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="container relative flex flex-col items-center justify-center text-center">
            <Sparkles className="size-10 text-cyan-300" />
            <h2 className="mt-7 max-w-5xl text-[clamp(2.7rem,6vw,5.7rem)] font-bold leading-none tracking-[-.05em]">
                Let&apos;s Shape the Future of Your Business</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Partner with InvoLead to transform complexity
                into clarity through data, AI, and design, creating intelligent solutions that drive sustainable,
                enterprise-wide growth.</p><Button asChild className="mt-9 rounded-full bg-secondary px-8 py-6">
                <Link href="/our-solutions">Explore Solutions
                <ArrowRight className="size-4" />
                </Link>
            </Button>
        </motion.div>
    </section> }

const blogs: BlogPost[] = [
  { featuredimg: "/img/cap-1.webp", category: "Agentic AI", title: "Unified Data Ecosystems: How AI Is Transforming Connected Intelligence", excerpt: "A deep dive into how GenAI and advanced analytics enable organizations to unify data sources..." }, 
  { featuredimg: "/img/cap-2.webp", category: "RAG Systems", title: "Generative AI in Life Sciences: Accelerating Research & Compliance", excerpt: "A deep dive into how GenAI and advanced analytics enable organizations to unify data sources..." }, 
  { featuredimg: "/img/cap-3.webp", category: "Private AI", title: "Predictive Analytics for Modern Retail: Building Smarter Customer Journeys", excerpt: "A deep dive into how GenAI and advanced analytics enable organizations to unify data sources..." }
];
    function Blog() { return <section className="py-20 relative overflow-hidden">
      <ClipShape />
        <div className="container relative mt-26">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <SectionHeader
                    align="left"
                    title="Get Insights & Tips from Our Blog"
                    description="Check out our blog for the latest AI trends and insights!"
                />
                <Button asChild >
                    <Link href="/case-studies">View All Stories
                    <ArrowRight className="size-4" />
                    </Link>
                </Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">{blogs.map((p, i) =>
                <BlogCard key={p.title} post={p} index={i} />)}
            </div>
        </div>
    </section> }

export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  video: string;
  members: number;
  avatars: string[];
}

interface Props {
  data: CTAData;
}    
const ctaData: CTAData = {
    title: "Let's Shape the Future of Your Business",
    description:
      "Partner with InvoLead to transform complexity into clarity through data, AI, and design, creating intelligent solutions that drive sustainable, enterprise-wide growth.",
    buttonText: "Speak to Our Experts",
    buttonLink: "/contact-us",
    video: "/video/bg-2.mp4",
    members: 100,
    avatars: [
      "/img/avatar-1.webp",
      "/img/avatar-2.webp",
      "/img/avatar-3.webp",
    ],
};
export default function DataEngineeringPage() { return <div className="overflow-hidden bg-white text-slate-950">
  <DataEngineeringHero />
  <Foundations />
  <Testimonial />
  <Compliance />
  <GenAICards />
  <Excellence />
  <WhyPartner />
  <Stats />
  
  <Blog />
  <FAQSection />
  <CallToAction1 data={ctaData} />
  </div> 
  }
