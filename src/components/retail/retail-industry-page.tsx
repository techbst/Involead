'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import FAQ, { FAQCategory } from "@/components/ui/faq";

import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  BarChart3,
  DollarSign,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { solutionCards } from './retail-data';
import SystemicArchitectureSection from './SystemicArchitectureSection';
import ValueCard from '../ui/value-card';
import CaseStudyShowcase from './case-studies';
import FAQSection from './faq';
import ResultsSection from './measured-impact';
import GrowthTimelinePage from './growth-timeline';
import CallToAction from './cta';
import { BlogCard, type BlogPost } from "@/components/ui/blog-card";
import HeroOne from './HeroOne';
import HeroTwo from './HeroTwo';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};
const blogPosts: BlogPost[] = [
  {
    featuredimg: "/img/cap-1.webp",
    category: "Agentic AI",
    title: "How Agentic AI is Reshaping Enterprise Operations",
    excerpt: "A practical view of autonomous workflows, orchestration, and measurable AI operating leverage.",
  },
  {
       featuredimg: "/img/cap-2.webp",
    category: "RAG Systems",
    title: "Building Cost-Efficient RAG Systems for Scale",
    excerpt: "How retrieval strategy, model routing, and evaluations help enterprises control quality and cost.",
  },
  {
       featuredimg: "/img/cap-3.webp",
    category: "Private AI",
    title: "Why Small Language Models Are the Future of Private AI",
    excerpt: "Domain-specific SLMs can outperform generic models when speed, privacy, and unit economics matter.",
  },
];
function RetailHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-36 pb-20 md:flex md:items-center md:pt-28">
      
      <motion.div aria-hidden animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[8%] top-[24%] hidden size-[340px] rounded-[42%] border border-white/10 bg-white/5 shadow-[inset_0_0_80px_rgba(95,176,194,.2),0_30px_90px_rgba(0,0,0,.3)] backdrop-blur md:block">
        <div className="absolute inset-12 rounded-full border border-[#73c5d6]/30" /><div className="absolute inset-24 rounded-full border border-white/15" /><Sparkles className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-[#73c5d6]" />
      </motion.div>
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="container mx-auto relative z-10">
        <div className="max-w-4xl">
    
          <motion.h1 variants={fadeUp} className="max-w-4xl text-[36px] md:text-[54px] font-bold leading-[115%]">Driving Commercial Excellence for Leading <span className='text-secondary'>CPG & Retail Brands</span></motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl">We deliver real revenue lifts, optimized margins, and efficient operations through targeted analytics—helping teams act on data where it drives the most impact.</motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button asChild >
              <Link href="/contact-us">Schedule a Free Consultation <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#casestudies">See Enterprise Results <ArrowRight className="size-4" /></a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


function SolutionsSection() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container-fluid mx-auto">
        <SectionHeader
          eyebrow="What we solve"
          title="Empowering Your Business with Data-Driven Insights and Strategies"
          description="Purpose-built intelligence for the decisions that determine retail growth, margin, and customer loyalty."
          maxWidth="5xl"
        />

        <div className="mt-8 space-y-5">
          {/* Row 1 - Left */}
          <div className="marquee-row">
            <div className="marquee-track marquee-left">
              {[...solutionCards.slice(0, 7), ...solutionCards.slice(0, 7)].map(
                (item, index) => (
                  <div key={`${item.title}-${index}`} className="w-[320px] shrink-0">
                    <ValueCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="marquee-row">
            <div className="marquee-track marquee-right">
              {[...solutionCards.slice(7, 14), ...solutionCards.slice(7, 14)].map(
                (item, index) => (
                  <div key={`${item.title}-${index}`} className="w-[320px] shrink-0">
                    <ValueCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      index={index + 7}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function SystemicAI() {
  return (
    <section className="bg-[#000] py-20 text-white">
      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader 
          eyebrow="" 
          title="New Possibilities with Systemic AI" 
          description="Empower teams with AI-driven intelligence to optimize every lever of growth with Systemic AI." textColor="white" align="left" /><div className="mt-8 space-y-5">
            <p className="!text-white/90">Agentic AI introduces a powerful paradigm, but its enterprise value depends on how effectively it is integrated.</p>
            <p className="!text-white/90">Systemic AI builds on this by offering a structured, context-driven approach to embedding intelligence across the organization-delivering scalable, reliable outcomes aligned with business goals.
          </p>
          <p className="font-medium !text-white">With Systemic AI, leaders don’t just use AI-they operationalize it and make it their own.</p>
            </div></div>
        
        <motion.div initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto grid aspect-square w-full max-w-lg place-items-center rounded-full bg-[radial-gradient(circle,rgba(95,176,194,.22),transparent_60%)]">
          <motion.div
            className="absolute inset-[-3%] rounded-full border-2 border-dashed border-secondary/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        <motion.div
            className="absolute inset-[12%] rounded-full border-2 border-dashed border-[#5fb0c2]/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute inset-[27%] rounded-full border-2 border-dashed border-white/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        <span className="grid size-32 place-items-center rounded-full bg-secondary text-white shadow-[0_0_80px_rgba(95,176,194,.35)]">
          <div className="text-center">
            <BrainCircuit className="mx-auto size-10" />
            <span className="mt-1 block text-sm font-semibold">
              Systemic AI
            </span>
          </div>
        </span>
          {['Enterprise Context','Agentic Workflows','Decision Intelligence','Business Outcomes'].map((text, index) => <span key={text} className={cn('absolute rounded-full border border-secondary/10 bg-secondary px-4 py-2 text-xs text-main backdrop-blur', ['top-[8%]','right-[2%]','bottom-[8%]','left-[2%]'][index])}>{text}
          </span>
        )}
        </motion.div>
      </div>
    </section>
  );
}





function Blog() {
  return (
    <section className="py-20">
      <div className="mx-auto container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="left"
              title="Success Stories"
              description="Check out our blog for the latest AI trends and insights!"
            />
            <Button asChild>
              <Link href="/case-studies">
                View All Stories
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RetailIndustryPage() {
  return <main className="overflow-clip bg-white text-slate-950">
    <HeroTwo />
    <ResultsSection />
    <SolutionsSection />
    <GrowthTimelinePage />
    <SystemicAI />
    <SystemicArchitectureSection />
    <CaseStudyShowcase />
    <FAQSection />
    <CallToAction />
    <Blog />
    

    </main>;
}

