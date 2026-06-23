import {
  BadgePercent,
  BarChart3,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  CircleDollarSign,
  ClipboardList,
  Gauge,
  LayoutDashboard,
  Megaphone,
  PackageSearch,
  ScanSearch,
  ShoppingBasket,
  Store,
  Target,
  UsersRound,
  TrendingUp,
  DollarSign,

  type LucideIcon,
} from 'lucide-react';

export type RetailCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MetricsCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const solutionCards: RetailCard[] = [
  { title: 'Commercial Effectiveness', description: 'Achieved 8–12% uplift in gross margin, 20% faster pricing decisions, and 15% more accurate ROI forecasts.', icon: ChartNoAxesCombined },
  { title: 'Pricing & Promotion', description: 'Improve promotion ROI by 10–15%, reduce non-performing spend by 25%, and lift promotional sales volume by 12%.', icon: BadgePercent },
  { title: 'Marketing Mix Optimization', description: 'Gain 15–20% in marketing efficiency, plan media 30% faster, and drive 10% incremental brand engagement.', icon: Megaphone },
  { title: 'BI & Dashboarding', description: 'Reduce manual reporting by 30–40%, accelerate time-to-insight by 20%, and improve forecast reliability by 15%.', icon: LayoutDashboard },
  { title: 'Demand Forecasting', description: 'Use granular demand signals to improve forecast accuracy, reduce stock-outs, and respond faster to market shifts.', icon: BarChart3 },
  { title: 'Assortment Optimization', description: 'Build store- and channel-specific assortments that balance customer relevance, availability, and margin.', icon: ShoppingBasket },
  { title: 'Inventory Intelligence', description: 'Optimize safety stock, replenishment, and allocation with predictive, exception-led decision support.', icon: Boxes },
  { title: 'Customer Segmentation', description: 'Discover high-value audiences, emerging needs, and actionable micro-segments with AI-powered analysis.', icon: UsersRound },
  { title: 'Revenue Growth Management', description: 'Connect price, pack, promotion, and mix decisions in a single commercial growth framework.', icon: CircleDollarSign },
  { title: 'Store Performance', description: 'Benchmark outlets, isolate growth drivers, and prioritize actions for field and category teams.', icon: Store },
  { title: 'Market Intelligence', description: 'Track competitive moves, category trends, and consumer signals before they affect performance.', icon: ScanSearch },
  { title: 'Supply Chain Visibility', description: 'Unify demand, inventory, and fulfillment signals to identify risk and improve service levels.', icon: PackageSearch },
  { title: 'Sales Force Effectiveness', description: 'Prioritize accounts, opportunities, and next-best actions to make every commercial interaction count.', icon: Target },
  { title: 'Strategic Planning', description: 'Turn scenarios into aligned plans with governed assumptions, measurable targets, and faster review cycles.', icon: ClipboardList },
];

export const timelineItems: RetailCard[] = [
  { title: 'Forecasting & Planning', description: 'Boost accuracy by 25% and cut stock-outs by 15% with ML, Bayesian models, and GenAI planning. Forecasts stay dynamic—not static.', icon: BarChart3 },
  { title: 'Marketing Analytics', description: 'Track ROI, optimize spend, and act on real-time AI recommendations. Continuous learning can lift conversions by up to 30%.', icon: Megaphone },
  { title: 'Content Personalization', description: 'Create context-aware content and offers for each audience, channel, and moment—at enterprise scale.', icon: BrainCircuit },
  { title: 'Unified Intelligence', description: 'Unify products, regions, and campaigns in automated dashboards that turn data into instant decisions.', icon: LayoutDashboard },
  { title: 'Customer Insights', description: 'Identify high-value customers, uncover hidden segments, and anticipate demand with predictive analytics.', icon: UsersRound },
  { title: 'Commercial Effectiveness', description: 'Map pricing power, predict promotion impact, and make every rupee work harder across channels and stores.', icon: Gauge },
  { title: 'CPG Intelligence', description: 'Give brand leaders a living view of the market so they can act early, learn quickly, and keep an edge.', icon: ShoppingBasket },
];

export const metrics: MetricsCard[] = [
  {
    title: "85%",
    description: "of consumer brands report improved decisions with GenAI-powered automation",
    icon: BrainCircuit,
  },
  {
    title: "40%",
    description: "faster forecasting and planning cycles",
    icon: TrendingUp,
  },
  {
    title: "3x",
    description: "faster ROI on marketing investments",
    icon: DollarSign,
  },
  {
    title: "5-12%",
    description: "revenue growth across client portfolios",
    icon: BarChart3,
  },
];

export const caseStudies = [
  { tag: 'Revenue growth management', title: 'A unified pricing engine unlocked profitable growth', description: 'Connected price, promotion, and elasticity signals helped commercial teams act with confidence.', metric: '+11%', label: 'Gross margin uplift', image: '/img/cap-1.webp' },
  { tag: 'Demand intelligence', title: 'A living forecast transformed inventory planning', description: 'Store-level predictive signals reduced waste while protecting availability in priority categories.', metric: '26%', label: 'Forecast improvement', image: '/img/cap-2.webp' },
  { tag: 'Customer analytics', title: 'AI segments made every campaign more relevant', description: 'Behavioral micro-segments and next-best actions improved conversion across owned channels.', metric: '1.8x', label: 'Campaign ROI', image: '/img/cap-3.webp' },
];

export const faqs = [
  ['How does InvoLead improve retail and CPG performance?', 'We connect commercial, customer, marketing, and supply-chain data to the decisions that move revenue and margin. Each engagement begins with measurable outcomes and a practical adoption plan.'],
  ['Can you work with our existing data and cloud stack?', 'Yes. We design around your current platforms, models, governance, and operating processes, adding only the capabilities needed to create dependable business value.'],
  ['How quickly can we see measurable value?', 'Focused pilots commonly establish measurable value in 8–12 weeks. We then scale the proven use case across brands, markets, or business units.'],
  ['Do your solutions support human decision-making?', 'Absolutely. Our systems are designed to explain recommendations, preserve expert oversight, and make accountability clear—not to create an opaque black box.'],
  ['How do you govern enterprise AI?', 'We embed access controls, quality monitoring, evaluation, auditability, and human approval patterns according to the risk and importance of each use case.'],
];

export const blogs = [
  { category: 'Retail AI', title: 'From dashboards to decisions: the new retail intelligence stack', image: '/img/cap-4.webp' },
  { category: 'Commercial analytics', title: 'Why promotion measurement needs a causal reset', image: '/img/cap-5.webp' },
  { category: 'Demand planning', title: 'Building forecasts that learn as fast as the market moves', image: '/img/cap-6.webp' },
];
