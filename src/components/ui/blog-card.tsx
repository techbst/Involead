"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export type BlogPost = {
  featuredimg: string;
  category: string;
  title: string;
  excerpt: string;
  href?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};
export const CLIP_PATH = "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";
export function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  const href = post.href || "#";

  return (
    <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -7 }}
        className="group relative overflow-hidden bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]
        before:pointer-events-none before:absolute before:inset-0 before:z-20 before:bg-slate-200
        before:[clip-path:inherit]
        after:pointer-events-none after:absolute after:inset-[1px] after:z-20 after:bg-white
        after:[clip-path:inherit]"
        style={{
            clipPath: CLIP_PATH,
            WebkitClipPath: CLIP_PATH,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
        }}
        >
      <Link
        href={href}
        aria-label={`Read article: ${post.title}`}
        className="absolute inset-0 z-[120]"
      />
      <div className="relative z-99 h-48 overflow-hidden bg-[linear-gradient(135deg,_#111827_0%,_#60b0c2_58%,_#59a3b4_100%)]">
        <Image
          alt={post.title}
          src={post.featuredimg}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/20" />
        
      </div>

      <div className="p-6 relative z-99" >
        <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
          {post.category}
        </span>

        <h3 className="mt-4 font-bold line-clamp-2 text-primary">
          {post.title}
        </h3>

        <div className="mt-3 text-primary">
          {post.excerpt}
        </div>

        
        <div className="flex justify-end">
            <Button
            type="button"
            asChild
            className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 hover:text-white hover:bg-black"
            >
                <Link href={href} className="relative z-[130]" aria-label={`Read article: ${post.title}`}>
                    <ArrowRight className="size-4" />
                </Link>
            </Button>
        </div>
      </div>
    </motion.article>
  );
}
