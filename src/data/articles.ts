export type ArticleContentBlock = {
  heading: string;
  body: string;
};

export type Article = {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  content: ArticleContentBlock[];
  publishedAt?: string;
  readTime?: string;
};

export const articles: Article[] = [
  {
    slug: "enterprise-wide-analytics-at-scale",
    image:
      "https://www.involead.com/wp-content/uploads/2024/12/Analytics-at-Scale-img.jpg.jpeg",
    category: "Analytics",
    title:
      "Enterprise-Wide Analytics at Scale: Moving from Siloed Insights to Organization-Wide Impact",
    description:
      "Many organizations generate valuable insights within individual departments, yet fail to realize enterprise-wide impact.",
    publishedAt: "2024-12-01",
    readTime: "5 min read",
    content: [
      {
        heading: "Introduction",
        body: "Many organizations generate valuable insights within individual departments, yet fail to realize enterprise-wide impact. This article explains how enterprises can move from isolated analytics to a connected, scalable analytics ecosystem.",
      },
      {
        heading: "The Challenge of Siloed Insights",
        body: "When departments work with separate tools, disconnected datasets, and independent reporting processes, business leaders struggle to gain a unified view of performance. This limits decision-making speed and reduces the value of analytics investments.",
      },
      {
        heading: "Building Enterprise-Wide Analytics",
        body: "A scalable analytics strategy requires centralized data governance, standardized KPIs, reliable data pipelines, and user-friendly dashboards that can serve different business teams while maintaining a single source of truth.",
      },
      {
        heading: "Business Impact",
        body: "By connecting analytics across the organization, enterprises can improve operational visibility, identify growth opportunities faster, reduce duplication, and create a culture of data-driven decision-making.",
      },
    ],
  },
  {
    slug: "making-sense-of-complexity",
    image:
      "https://www.involead.com/wp-content/uploads/2024/12/Making-Sense-of-Complexity-img.jpg.jpeg",
    category: "Data Strategy",
    title:
      "Making Sense of Complexity: Transforming Enterprise Data into a Strategic Competitive Edge",
    description:
      "Enterprises today operate in an environment defined by complexity, multiple data sources, diverse systems.",
    publishedAt: "2024-12-01",
    readTime: "5 min read",
    content: [
      {
        heading: "Introduction",
        body: "Enterprises today operate in an environment defined by complexity, multiple data sources, diverse systems, and rapidly changing business needs. This article explores how organizations can convert complex data into a strategic advantage.",
      },
      {
        heading: "Why Enterprise Data Becomes Complex",
        body: "Data complexity often comes from legacy systems, fragmented platforms, inconsistent formats, and a lack of governance. Without a clear data strategy, organizations may collect large volumes of information without turning it into meaningful action.",
      },
      {
        heading: "Turning Complexity into Clarity",
        body: "Enterprises can simplify complexity by creating structured data models, improving integration between systems, applying analytics automation, and building dashboards that translate raw data into actionable business intelligence.",
      },
      {
        heading: "Competitive Advantage",
        body: "When data is organized, accessible, and trusted, leadership teams can make faster decisions, improve customer experience, optimize operations, and identify new opportunities before competitors.",
      },
    ],
  },
  
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
