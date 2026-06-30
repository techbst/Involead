import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { articles, getArticleBySlug } from "@/data/articles";
import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";
type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(value?: string) {
  if (!value) return null;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | InvoLead",
    };
  }

  return {
    title: `${article.title} | InvoLead`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}
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
export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const moreArticles = articles.filter((item) => item.slug !== article.slug);
  const publishedDate = formatDate(article.publishedAt);

  return (
    <article className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_46%)] text-slate-950">
      <section className="relative pt-40 pb-12">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_26%,rgba(95,176,194,0.2),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.95),transparent_25%),linear-gradient(135deg,rgba(95,176,194,0.1),transparent_62%)]" />

        <div className="container mx-auto">
          <div className="mx-auto text-center">
            <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              {article.category}
            </span>
            <h1 className="mx-auto mt-6 font-bold ">
              {article.title}
            </h1>
            <p className="mx-auto mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {article.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-500">
              {publishedDate && (
                <span className="inline-flex items-center gap-2 text-primary">
                  <CalendarDays className="size-4 text-secondary" />
                  {publishedDate}
                </span>
              )}
              {article.readTime && (
                <span className="inline-flex items-center gap-2 text-primary">
                  <Clock className="size-4 text-secondary" />
                  {article.readTime}
                </span>
              )}
            </div>
          </div>

          <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[2rem] border border-white bg-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="container mx-auto ">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] pb-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-11">
            <div className="space-y-10">
              {article.content.map((block) => (
                <section key={block.heading}>
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    {block.heading}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                    {block.body}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  More Articles
                </h3>
                <div className="mt-5 space-y-4">
                  {moreArticles.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/articles/${item.slug}`}
                      className="group grid grid-cols-[5.5rem_1fr] gap-4 rounded-2xl border border-slate-100 p-3 transition hover:border-secondary/30 hover:bg-slate-50"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="88px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="inline-flex rounded-full bg-secondary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                          {item.category}
                        </span>
                        <div className="mt-2 line-clamp-3 text-sm font-semibold leading-5 text-slate-950 transition group-hover:text-secondary">
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_#6ab8c9_0%,_#4f9fb2_55%,_#2f7f93_100%)] inset_0_10px_10px_rgba(36,104,119,0.35),inset_0_-12px_14px_rgba(0,0,0,0.08)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                <div className="text-2xl font-semibold tracking-tight">
                  Need a data-driven solution?
                </div>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Talk with InvoLead about analytics, AI, and technology work
                  designed around measurable business outcomes.
                </p>
                <Button asChild variant={'outline'} className="mt-8">
                  <Link href="/contact-us">
                    Get in Touch
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CallToAction1 data={ctaData} />
    </article>
  );
}
