import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { BlogCard } from "@/components/ui/blog-card";
import { articles } from "@/data/articles";
import { SectionHeader } from "@/components/ui/section-header";
import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";

export const metadata: Metadata = {
  title: "Articles | InvoLead",
  description:
    "Insights from InvoLead on analytics, enterprise technology, data strategy, and business growth.",
};

const ARTICLES_PER_PAGE = 12;

type ArticlesPageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

function getPageHref(page: number) {
  return page <= 1 ? "/articles" : `/articles?page=${page}`;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = Number(resolvedSearchParams?.page ?? "1");
  const totalPages = Math.max(1, Math.ceil(articles.length / ARTICLES_PER_PAGE));
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(Math.trunc(requestedPage), 1), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = articles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );
const ctaData: CTAData = {
    title: "Start building enterprise-grade Generative AI systems",
    description:
      "Partner with us to transform your enterprise with intelligent, scalable AI solutions",
    buttonText: "Explore Solutions",
    buttonLink: "/our-solutions",
    video: "/video/bg-1.mp4",
    members: 100,
    avatars: [
      "/img/avatar-1.webp",
      "/img/avatar-2.webp",
      "/img/avatar-3.webp",
    ],
};
  return (
    <div className="overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] py-12 pb-0">
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_20%_28%,rgba(95,176,194,0.18),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.95),transparent_24%),linear-gradient(135deg,rgba(95,176,194,0.08),transparent_62%)]" />

        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Blogs and Insights"
            title="Get Insights & Tips from Our Blog"
            description="Check out our blog for the latest AI trends and insights!"
            align="center"
            textColor="black"
          />
          
        </div>
      </section>

      <section className="container mx-auto mb-20">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {paginatedArticles.map((article, index) => (
            <BlogCard
              key={`${article.slug}-${startIndex + index}`}
              index={index}
              post={{
                featuredimg: article.image,
                category: article.category,
                title: article.title,
                excerpt: article.description,
                href: `/articles/${article.slug}`,
              }}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Articles pagination"
            className="mt-14 mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            {currentPage > 1 ? (
              <Link
                href={getPageHref(currentPage - 1)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-white"
                aria-label="Go to previous articles page"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </Link>
            ) : (
              <span
                className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-300"
                aria-hidden="true"
              >
                <ChevronLeft className="size-4" />
              </span>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isCurrent = page === currentPage;

              return (
                <Link
                  key={page}
                  href={getPageHref(page)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex size-11 items-center justify-center rounded-full border text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
                    isCurrent
                      ? "border-secondary bg-secondary text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {currentPage < totalPages ? (
              <Link
                href={getPageHref(currentPage + 1)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-white"
                aria-label="Go to next articles page"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            ) : (
              <span
                className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-300"
                aria-hidden="true"
              >
                <ChevronRight className="size-4" />
              </span>
            )}
          </nav>
        )}
      </section>
      <CallToAction1 data={ctaData} />
    </div>
  );
}
