"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BlogCard, type BlogPost } from "@/components/ui/blog-card";
import { SectionHeader } from "@/components/ui/section-header";

const blogPosts: BlogPost[] = [
  {
    featuredimg: "/img/cap-1.webp",
    category: "Agentic AI",
    title: "How Agentic AI is Reshaping Enterprise Operations",
    excerpt:
      "A practical view of autonomous workflows, orchestration, and measurable AI operating leverage.",
  },
  {
    featuredimg: "/img/cap-2.webp",
    category: "RAG Systems",
    title: "Building Cost-Efficient RAG Systems for Scale",
    excerpt:
      "How retrieval strategy, model routing, and evaluations help enterprises control quality and cost.",
  },
  {
    featuredimg: "/img/cap-3.webp",
    category: "Private AI",
    title: "Why Small Language Models Are the Future of Private AI",
    excerpt:
      "Domain-specific SLMs can outperform generic models when speed, privacy, and unit economics matter.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="mx-auto container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Insights & Blog"
            title="Perspectives on Healthcare Data, AI & Analytics"
            description="Explore expert insights, industry trends, and practical strategies for building intelligent, data-driven healthcare organizations."
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
