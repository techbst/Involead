import Link from "next/link";
import { BlogCard, type BlogPost } from "@/components/ui/blog-card";
import { SectionHeader } from "../ui/section-header";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";




const CardPosts: BlogPost[] = [
  {
    featuredimg: "/img/cap-1.webp",
    title: "AI Empowered Marketing Mix approach for Tracking In-flight Campaign Performance",
    excerpt: "Marketing Mix Optimization helps estimate the impact of past marketing campaigns on sales/footfalls and recommend the right mix of budget among marketing tactics for future period.",
  },
  {
    featuredimg: "/img/cap-2.webp",
    title: "Price Setting Transforming through Pricing Optimization",
    excerpt: "Pricing is important for any business as it has the power to steer or destroy a company’s operating margins & revenue.",
  },
  {
    featuredimg: "/img/cap-3.webp",
    title: "Improve Workforce Productivity by Using AI solutions",
    excerpt: "Maintaining the workforce productivity is very challenging for the operation leads and this is very important as far as Customer Satisfaction score is concerned.",
  },
];

export default function TL_CARDS() {
    return (
    <section className="py-20">
      <div className="mx-auto container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="center"
              eyebrow="Marketing Analytics"
              title="AI-Powered Marketing Mix Optimization"
              description="Leverage AI to measure campaign performance, identify the impact of every marketing channel, and optimize budget allocation for higher ROI and sustainable business growth."
              maxWidth="5xl"
              descriptionWidth="4xl"
            />
          </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CardPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
    )
}