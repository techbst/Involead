import {
  BrainCircuit,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartColumnIncreasing,
  Cloud,
  Database,
  Globe2,
  Layers3,
  Landmark,
  LineChart,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type MarketingCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MarketingPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
  badge: string;
  stats: { value: string; label: string }[];
  highlights: MarketingCard[];
  steps: MarketingCard[];
  outcomes: MarketingCard[];
  cta: {
    label: string;
    href: string;
  };
  related: {
    label: string;
    href: string;
  }[];
};

export type MarketingIndexCard = Pick<
  MarketingPage,
  'slug' | 'eyebrow' | 'title' | 'description' | 'image' | 'imageAlt'
>;

const sharedWhatWeDo = {
  stats: [
    { value: '30%', label: 'Faster delivery' },
    { value: '24/7', label: 'Intelligence layer' },
    { value: '1', label: 'Unified workflow' },
  ],
  related: [
    { label: 'Generative AI', href: '/our-solutions/generative-ai' },
    { label: 'Data Engineering', href: '/our-solutions/data-engineering' },
    { label: 'Cloud Solution', href: '/our-solutions/cloud-solution' },
  ],
};

const sharedIndustry = {
  stats: [
    { value: '3x', label: 'Insight depth' },
    { value: '99%', label: 'Traceable governance' },
    { value: '60%', label: 'Action speed' },
  ],
  related: [
    { label: 'Retail', href: '/industries/retail' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Finance', href: '/industries/finance' },
  ],
};

const sharedProduct = {
  stats: [
    { value: '12', label: 'Modules ready' },
    { value: '5', label: 'Deployment paths' },
    { value: '100%', label: 'Enterprise fit' },
  ],
  related: [
    { label: 'AI Assistant Studio', href: '/products/ai-assistant-studio' },
    { label: 'Knowledge Graph Engine', href: '/products/knowledge-graph-engine' },
    { label: 'Insight Control Tower', href: '/products/insight-control-tower' },
  ],
};

export const marketingPages: Record<string, MarketingPage> = {
  'our-solutions/data-science': {
    slug: 'our-solutions/data-science',
    eyebrow: 'What We Do',
    title: 'Data Science that turns enterprise data into confident decisions',
    description:
      'We combine predictive modeling, experimentation, and decision intelligence to surface the next best move before the market shifts.',
    image: '/img/data-scie.webp',
    imageAlt: 'Data science dashboard visual',
    accent: '#5fb0c2',
    badge: 'Predict • Explain • Act',
    stats: sharedWhatWeDo.stats,
    highlights: [
      {
        title: 'Predictive insight',
        description: 'Forecast demand, churn, risk, and performance with models tuned to your operating realities.',
        icon: LineChart,
      },
      {
        title: 'Explainability',
        description: 'Keep humans in the loop with transparent drivers, scoring rationale, and audit-friendly outputs.',
        icon: ShieldCheck,
      },
      {
        title: 'Decision loops',
        description: 'Move from report-heavy processes to governed intelligence that recommends the next best action.',
        icon: Workflow,
      },
    ],
    steps: [
      {
        title: 'Frame the business problem',
        description: 'We map metrics, stakeholders, and the decision point that the model needs to improve.',
        icon: BriefcaseBusiness,
      },
      {
        title: 'Build the model stack',
        description: 'Feature engineering, validation, and experimentation are assembled with production readiness in mind.',
        icon: Database,
      },
      {
        title: 'Operationalize insights',
        description: 'Dashboards, alerts, and APIs carry the output into teams where action is actually taken.',
        icon: ChartColumnIncreasing,
      },
    ],
    outcomes: [
      { title: 'Better forecast accuracy', description: 'Reduce surprises in planning cycles and budget decisions.', icon: Sparkles },
      { title: 'Less manual analysis', description: 'Free teams from spreadsheet loops and fragmented reporting.', icon: Bot },
      { title: 'Faster executive action', description: 'Turn raw signals into decisions people can trust quickly.', icon: BrainCircuit },
    ],
    cta: { label: 'Schedule a Data Science call', href: '/contact-us' },
    related: sharedWhatWeDo.related,
  },
  'our-solutions/software-development': {
    slug: 'our-solutions/software-development',
    eyebrow: 'What We Do',
    title: 'Software Development that turns ideas into reliable products',
    description:
      'We build modern web applications, internal tools, and product experiences with clean architecture, thoughtful UX, and production-ready delivery.',
    image: '/img/hero_img.webp',
    imageAlt: 'Software development product visual',
    accent: '#5fb0c2',
    badge: 'Design • Build • Ship',
    stats: sharedWhatWeDo.stats,
    highlights: [
      {
        title: 'Product engineering',
        description: 'Ship maintainable apps with a strong front-end and back-end foundation.',
        icon: Workflow,
      },
      {
        title: 'UI implementation',
        description: 'Translate design systems into responsive interfaces that feel polished.',
        icon: LayoutGrid,
      },
      {
        title: 'Scalable delivery',
        description: 'Use practical architecture and code standards so teams can grow safely.',
        icon: Building2,
      },
    ],
    steps: [
      {
        title: 'Define the product scope',
        description: 'We align user needs, technical constraints, and delivery goals before building.',
        icon: BriefcaseBusiness,
      },
      {
        title: 'Design the system',
        description: 'Component structure, data flow, and integrations are mapped with longevity in mind.',
        icon: Layers3,
      },
      {
        title: 'Deliver and iterate',
        description: 'We ship iteratively, validate with real usage, and improve based on feedback.',
        icon: Sparkles,
      },
    ],
    outcomes: [
      {
        title: 'Faster launches',
        description: 'Bring usable software to market without sacrificing quality.',
        icon: Sparkles,
      },
      {
        title: 'Cleaner handoff',
        description: 'Give your team a codebase and UI that are easier to maintain.',
        icon: ShieldCheck,
      },
      {
        title: 'Better adoption',
        description: 'Make tools feel intuitive enough that teams actually use them.',
        icon: Bot,
      },
    ],
    cta: { label: 'Discuss a build', href: '/contact-us' },
    related: sharedWhatWeDo.related,
  },
  'our-solutions/generative-ai': {
    slug: 'our-solutions/generative-ai',
    eyebrow: 'What We Do',
    title: 'Generative AI systems for copilots, assistants, and enterprise workflows',
    description:
      'From internal search to agentic task execution, we build secure GenAI experiences that plug into your data, tools, and teams.',
    image: '/service-img/gen-ai.png',
    imageAlt: 'Generative AI abstract visual',
    accent: '#5fb0c2',
    badge: 'Assist • Retrieve • Automate',
    stats: sharedWhatWeDo.stats,
    highlights: [
      { title: 'Copilot UX', description: 'Give teams a natural-language interface that feels fast and useful.', icon: Bot },
      { title: 'RAG pipelines', description: 'Ground responses in your approved knowledge sources and controls.', icon: Database },
      { title: 'Agent orchestration', description: 'Chain actions, approvals, and human checks into reliable task flows.', icon: Workflow },
    ],
    steps: [
      { title: 'Define the use case', description: 'We identify where AI can remove friction without creating risk.', icon: BriefcaseBusiness },
      { title: 'Connect your knowledge', description: 'Documents, APIs, and systems are indexed into governed retrieval.', icon: Layers3 },
      { title: 'Launch safely', description: 'We add guardrails, observability, and feedback loops for production use.', icon: ShieldCheck },
    ],
    outcomes: [
      { title: 'Lower support load', description: 'Automate repetitive questions and handoffs.', icon: Bot },
      { title: 'Higher task completion', description: 'Help users finish work inside one intelligent flow.', icon: Sparkles },
      { title: 'Safer rollout', description: 'Keep legal, data, and brand concerns in the loop.', icon: ShieldCheck },
    ],
    cta: { label: 'Talk to the GenAI team', href: '/contact-us' },
    related: sharedWhatWeDo.related,
  },
  'our-solutions/data-engineering': {
    slug: 'our-solutions/data-engineering',
    eyebrow: 'What We Do',
    title: 'Data engineering pipelines built for reliability, scale, and reuse',
    description:
      'We create modern data foundations with clean ingestion, trusted transformations, and warehouse-ready delivery for analytics and AI.',
    image: '/service-img/data-eng.png',
    imageAlt: 'Data engineering visual',
    accent: '#5fb0c2',
    badge: 'Ingest • Transform • Serve',
    stats: sharedWhatWeDo.stats,
    highlights: [
      { title: 'Pipeline architecture', description: 'Design batch and streaming flows that stay observable and maintainable.', icon: Workflow },
      { title: 'Warehouse modeling', description: 'Shape curated layers for BI, ML, and executive reporting.', icon: Database },
      { title: 'Data quality', description: 'Build validation checks, lineage, and recovery paths into the stack.', icon: ShieldCheck },
    ],
    steps: [
      { title: 'Assess current state', description: 'We map sources, bottlenecks, and ownership gaps.', icon: BriefcaseBusiness },
      { title: 'Modernize pipelines', description: 'Ingestion and transformation are rebuilt for resilience and scale.', icon: Layers3 },
      { title: 'Activate the platform', description: 'Trusted data products are published to teams that need them.', icon: ChartColumnIncreasing },
    ],
    outcomes: [
      { title: 'Cleaner reporting', description: 'Teams work from one version of truth.', icon: LineChart },
      { title: 'Less pipeline breakage', description: 'Production jobs stay stable and recoverable.', icon: ShieldCheck },
      { title: 'Faster analytics access', description: 'New use cases go live without long bottlenecks.', icon: Sparkles },
    ],
    cta: { label: 'Plan your data platform', href: '/contact-us' },
    related: sharedWhatWeDo.related,
  },
  'our-solutions/cloud-solution': {
    slug: 'our-solutions/cloud-solution',
    eyebrow: 'What We Do',
    title: 'Cloud solution design that balances speed, security, and cost',
    description:
      'We help teams migrate, modernize, and optimize cloud architecture so product delivery and governance can scale together.',
    image: '/img/hero_img.webp',
    imageAlt: 'Cloud architecture visual',
    accent: '#5fb0c2',
    badge: 'Migrate • Modernize • Optimize',
    stats: sharedWhatWeDo.stats,
    highlights: [
      { title: 'Cloud landing zone', description: 'Set up secure foundations, policies, and environments.', icon: Cloud },
      { title: 'Cost control', description: 'Design guardrails that reduce waste while protecting performance.', icon: ChartColumnIncreasing },
      { title: 'Resilient operations', description: 'Build observability and recovery paths into the platform.', icon: ShieldCheck },
    ],
    steps: [
      { title: 'Blueprint architecture', description: 'We align infra, security, and application requirements.', icon: Building2 },
      { title: 'Execute migration', description: 'Workloads move in phases with low risk and clear checkpoints.', icon: Globe2 },
      { title: 'Optimize continuously', description: 'Operations, cost, and performance stay under active review.', icon: LineChart },
    ],
    outcomes: [
      { title: 'Lower cloud waste', description: 'Reduce spend without slowing delivery.', icon: Sparkles },
      { title: 'Safer environments', description: 'Policy and access stay disciplined.', icon: ShieldCheck },
      { title: 'Faster release cycles', description: 'Teams ship more confidently and predictably.', icon: Workflow },
    ],
    cta: { label: 'Review cloud architecture', href: '/contact-us' },
    related: sharedWhatWeDo.related,
  },
  'our-solutions/consulting': {
    slug: 'our-solutions/consulting',
    eyebrow: 'What We Do',
    title: 'Consulting that turns strategy into shipped execution',
    description:
      'We help leadership teams define priorities, de-risk transformations, and move from slide decks to measurable delivery.',
    image: '/img/Feature.png',
    imageAlt: 'Consulting strategy visual',
    accent: '#5fb0c2',
    badge: 'Align • Prioritize • Deliver',
    stats: sharedWhatWeDo.stats,
    highlights: [
      { title: 'Discovery workshops', description: 'Clarify goals, constraints, and the operating model.', icon: BriefcaseBusiness },
      { title: 'Roadmap planning', description: 'Sequence initiatives with value, risk, and dependency in view.', icon: LineChart },
      { title: 'Delivery oversight', description: 'Keep execution on track with practical governance.', icon: ShieldCheck },
    ],
    steps: [
      { title: 'Assess current maturity', description: 'We review process, data, and technology readiness.', icon: Building2 },
      { title: 'Create the roadmap', description: 'Initiatives are arranged by business impact and effort.', icon: Layers3 },
      { title: 'Support implementation', description: 'Teams get guidance from planning through launch.', icon: Workflow },
    ],
    outcomes: [
      { title: 'Clear priorities', description: 'Leaders know what matters first.', icon: Sparkles },
      { title: 'Better alignment', description: 'Teams rally around the same goal and milestones.', icon: Bot },
      { title: 'Visible progress', description: 'Execution becomes trackable and accountable.', icon: ChartColumnIncreasing },
    ],
    cta: { label: 'Start a consulting engagement', href: '/contact-us' },
    related: sharedWhatWeDo.related,
  },
  'industries/retail': {
    slug: 'industries/retail',
    eyebrow: 'Industries',
    title: 'Retail intelligence that improves conversion, inventory, and loyalty',
    description:
      'We connect customer behavior, demand, and supply signals so retail teams can act faster across the full commerce lifecycle.',
    image: '/img/company.png',
    imageAlt: 'Retail environment',
    accent: '#5fb0c2',
    badge: 'Store • Digital • Supply',
    stats: sharedIndustry.stats,
    highlights: [
      { title: 'Demand forecasting', description: 'Predict product demand by location and season.', icon: LineChart },
      { title: 'Personalization', description: 'Recommend offers and experiences with context.', icon: Sparkles },
      { title: 'Inventory intelligence', description: 'Spot stock risks before revenue is lost.', icon: Workflow },
    ],
    steps: [
      { title: 'Unify retail data', description: 'POS, ecommerce, inventory, and loyalty are connected.', icon: Database },
      { title: 'Model behavior', description: 'We look at demand shifts, churn risk, and basket patterns.', icon: BrainCircuit },
      { title: 'Optimize actions', description: 'Promotions, replenishment, and staffing become proactive.', icon: ChartColumnIncreasing },
    ],
    outcomes: [
      { title: 'Higher conversion', description: 'Reduce friction in the shopping journey.', icon: Sparkles },
      { title: 'Reduced stockouts', description: 'Keep the right products available.', icon: ShieldCheck },
      { title: 'Stronger loyalty', description: 'Make every interaction feel more relevant.', icon: Bot },
    ],
    cta: { label: 'Improve retail performance', href: '/contact-us' },
    related: sharedIndustry.related,
  },
  'industries/healthcare': {
    slug: 'industries/healthcare',
    eyebrow: 'Industries',
    title: 'Healthcare workflows with trustworthy intelligence and governance',
    description:
      'We help healthcare teams connect clinical, operational, and patient signals while preserving privacy, compliance, and speed.',
    image: '/img/entrerprise.png',
    imageAlt: 'Healthcare collaboration',
    accent: '#5fb0c2',
    badge: 'Clinical • Operational • Patient',
    stats: sharedIndustry.stats,
    highlights: [
      { title: 'Clinical intelligence', description: 'Summarize and prioritize information for faster review.', icon: BrainCircuit },
      { title: 'Governed automation', description: 'Support workflows without losing oversight.', icon: ShieldCheck },
      { title: 'Operational visibility', description: 'Track throughput, bottlenecks, and service quality.', icon: LineChart },
    ],
    steps: [
      { title: 'Understand the workflow', description: 'We map care journeys and compliance boundaries.', icon: BriefcaseBusiness },
      { title: 'Build safe intelligence', description: 'Models and assistants are aligned to policy and review.', icon: ShieldCheck },
      { title: 'Measure outcomes', description: 'We track time saved, quality uplift, and adoption.', icon: ChartColumnIncreasing },
    ],
    outcomes: [
      { title: 'Faster review', description: 'Reduce time spent searching and summarizing.', icon: Sparkles },
      { title: 'Better coordination', description: 'Teams share one operational picture.', icon: Workflow },
      { title: 'Lower risk', description: 'Governance stays part of the solution.', icon: ShieldCheck },
    ],
    cta: { label: 'Discuss healthcare use cases', href: '/contact-us' },
    related: sharedIndustry.related,
  },
  'industries/finance': {
    slug: 'industries/finance',
    eyebrow: 'Industries',
    title: 'Financial intelligence for risk, compliance, and customer growth',
    description:
      'We build secure analytics and AI experiences that help financial institutions move faster without sacrificing control.',
    image: '/img/hero_img.webp',
    imageAlt: 'Finance and analytics',
    accent: '#5fb0c2',
    badge: 'Risk • Revenue • Control',
    stats: sharedIndustry.stats,
    highlights: [
      { title: 'Risk signals', description: 'Identify exposure earlier with contextual scoring.', icon: Landmark },
      { title: 'Compliance support', description: 'Keep review, lineage, and auditability visible.', icon: ShieldCheck },
      { title: 'Customer intelligence', description: 'Find growth opportunities in behavior data.', icon: ChartColumnIncreasing },
    ],
    steps: [
      { title: 'Map risk domains', description: 'We identify the business decisions that need better intelligence.', icon: BriefcaseBusiness },
      { title: 'Blend secure data', description: 'Transactions, CRM, and operations are connected responsibly.', icon: Database },
      { title: 'Operationalize controls', description: 'Teams get alerts, dashboards, and approvals in flow.', icon: Workflow },
    ],
    outcomes: [
      { title: 'More confident decisions', description: 'Use data without opening compliance gaps.', icon: ShieldCheck },
      { title: 'Lower manual review', description: 'Cut repetitive analysis and handoffs.', icon: Sparkles },
      { title: 'Faster growth motions', description: 'Prioritize the right opportunities sooner.', icon: LineChart },
    ],
    cta: { label: 'Discuss finance transformation', href: '/contact-us' },
    related: sharedIndustry.related,
  },
  'products/ai-assistant-studio': {
    slug: 'products/ai-assistant-studio',
    eyebrow: 'Products',
    title: 'AI Assistant Studio for deploying branded copilots in days, not quarters',
    description:
      'Create, test, and launch assistants that answer questions, execute tasks, and connect to your enterprise systems with control.',
    image: '/product-card/ai.png',
    imageAlt: 'AI assistant product visual',
    accent: '#5fb0c2',
    badge: 'Design • Deploy • Govern',
    stats: sharedProduct.stats,
    highlights: [
      { title: 'Prompt studio', description: 'Design experiences and guardrails in one place.', icon: Sparkles },
      { title: 'Integration layer', description: 'Connect APIs, tools, and knowledge sources.', icon: Layers3 },
      { title: 'Usage analytics', description: 'Track adoption, value, and failure points.', icon: ChartColumnIncreasing },
    ],
    steps: [
      { title: 'Define the assistant', description: 'We scope persona, tasks, and success criteria.', icon: Bot },
      { title: 'Connect systems', description: 'Add approved data and tool access.', icon: Database },
      { title: 'Launch with governance', description: 'Roll out with testing, review, and monitoring.', icon: ShieldCheck },
    ],
    outcomes: [
      { title: 'Faster enablement', description: 'Teams start using AI without long build cycles.', icon: Sparkles },
      { title: 'Enterprise control', description: 'Governance stays built in.', icon: ShieldCheck },
      { title: 'Reusable patterns', description: 'New assistants inherit proven architecture.', icon: Workflow },
    ],
    cta: { label: 'Explore the studio', href: '/contact-us' },
    related: sharedProduct.related,
  },
  'products/knowledge-graph-engine': {
    slug: 'products/knowledge-graph-engine',
    eyebrow: 'Products',
    title: 'Knowledge Graph Engine that maps people, products, and processes',
    description:
      'Unify disconnected knowledge into a searchable intelligence layer that powers discovery, relationships, and decision support.',
    image: '/product-card/knowledge.png',
    imageAlt: 'Knowledge graph product visual',
    accent: '#5fb0c2',
    badge: 'Connect • Contextualize • Query',
    stats: sharedProduct.stats,
    highlights: [
      { title: 'Entity mapping', description: 'Organize information around the relationships that matter.', icon: Layers3 },
      { title: 'Semantic search', description: 'Find answers faster with connected context.', icon: Sparkles },
      { title: 'Knowledge ops', description: 'Maintain a living layer instead of a static repository.', icon: Workflow },
    ],
    steps: [
      { title: 'Model the domain', description: 'We define entities, relations, and core vocabularies.', icon: Database },
      { title: 'Ingest content', description: 'Documents, records, and systems are normalized.', icon: Globe2 },
      { title: 'Expose knowledge', description: 'Search, insights, and APIs make the graph usable.', icon: ChartColumnIncreasing },
    ],
    outcomes: [
      { title: 'Better discovery', description: 'Teams find related information quickly.', icon: Sparkles },
      { title: 'More context', description: 'Relationships become visible across silos.', icon: BrainCircuit },
      { title: 'Reusable intelligence', description: 'Knowledge powers multiple experiences.', icon: Bot },
    ],
    cta: { label: 'Discuss the graph layer', href: '/contact-us' },
    related: sharedProduct.related,
  },
  'products/insight-control-tower': {
    slug: 'products/insight-control-tower',
    eyebrow: 'Products',
    title: 'Insight Control Tower for executive visibility and operational action',
    description:
      'Bring KPIs, alerts, and workflow triggers into a single command center so teams can act on what matters now.',
    image: '/product-card/insight.png',
    imageAlt: 'Insight control tower visual',
    accent: '#5fb0c2',
    badge: 'Monitor • Prioritize • Act',
    stats: sharedProduct.stats,
    highlights: [
      { title: 'Live dashboards', description: 'Track signals that matter at a glance.', icon: LineChart },
      { title: 'Alert orchestration', description: 'Surface anomalies to the right owner quickly.', icon: Workflow },
      { title: 'Decision tracking', description: 'Connect insight to action and measure the loop.', icon: ShieldCheck },
    ],
    steps: [
      { title: 'Define KPI layers', description: 'We map executive, operational, and team-level metrics.', icon: BriefcaseBusiness },
      { title: 'Wire data sources', description: 'The control tower receives live and batch signals.', icon: Database },
      { title: 'Activate response paths', description: 'Alerts, approvals, and tasks are tied to workflows.', icon: Bot },
    ],
    outcomes: [
      { title: 'Greater visibility', description: 'Executives see the business in one place.', icon: Sparkles },
      { title: 'Faster escalation', description: 'Issues reach the right owner sooner.', icon: ChartColumnIncreasing },
      { title: 'Tighter execution', description: 'Teams work from a shared view of progress.', icon: Workflow },
    ],
    cta: { label: 'Build your control tower', href: '/contact-us' },
    related: sharedProduct.related,
  },
};

export const sectionIndex = {
  whatWeDo: [
    marketingPages['our-solutions/data-science'],
    marketingPages['our-solutions/software-development'],
    marketingPages['our-solutions/generative-ai'],
    marketingPages['our-solutions/data-engineering'],
    marketingPages['our-solutions/cloud-solution'],
    marketingPages['our-solutions/consulting'],
  ],
  industries: [
    marketingPages['industries/retail'],
    marketingPages['industries/healthcare'],
    marketingPages['industries/finance'],
  ],
  products: [
    marketingPages['products/ai-assistant-studio'],
    marketingPages['products/knowledge-graph-engine'],
    marketingPages['products/insight-control-tower'],
  ],
} as const;

export function toMarketingIndexCards(
  pages: readonly MarketingPage[]
): MarketingIndexCard[] {
  return pages.map(({ slug, eyebrow, title, description, image, imageAlt }) => ({
    slug,
    eyebrow,
    title,
    description,
    image,
    imageAlt,
  }));
}
