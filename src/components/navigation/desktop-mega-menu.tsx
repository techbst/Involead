"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Cloud,
  Database,
  Globe2,
  Landmark,
  LayoutGrid,
  Lightbulb,
  LineChart,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type MenuKey = "solutions" | "industries" | "products" | "about";

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type MenuSection = {
  heading: string;
  featured?: MenuItem | false;
  items: MenuItem[];
};

const menuSections: Record<MenuKey, MenuSection> = {
  solutions: {
    heading: "OUR SOLUTIONS",
    featured: false,
    items: [
      {
      title: "Data Science",
      description: "Predictive modeling and decision intelligence built for measurable outcomes.",
      href: "/our-solutions/data-science",
      icon: LineChart,
    },
      {
        title: "Software Development",
        description: "Modern product builds and responsive web experiences.",
        href: "/our-solutions/software-development",
        icon: Building2,
      },
      {
        title: "Generative AI",
        description: "Assistants, copilots, and agentic workflows.",
        href: "/our-solutions/generative-ai",
        icon: Bot,
      },
      {
        title: "Data Engineering",
        description: "Trusted pipelines and reusable data foundations.",
        href: "/our-solutions/data-engineering",
        icon: Database,
      },
      {
        title: "Cloud Solution",
        description: "Secure migration and scalable architecture.",
        href: "/our-solutions/cloud-solution",
        icon: Cloud,
      },
      {
        title: "Consulting",
        description: "Roadmaps that turn strategy into delivery.",
        href: "/our-solutions/consulting",
        icon: Workflow,
      },
    ],
  },
  industries: {
    heading: "INDUSTRIES",
    featured: {
      title: "Retail",
      description: "Commerce intelligence that improves conversion, inventory, and loyalty.",
      href: "/industries/retail",
      icon: LayoutGrid,
    },
    items: [
      {
        title: "Healthcare",
        description: "Governed intelligence for clinical and operational work.",
        href: "/industries/healthcare",
        icon: Sparkles,
      },
      {
        title: "Finance",
        description: "Risk, compliance, and growth in one control layer.",
        href: "/industries/finance",
        icon: Landmark,
      },
    ],
  },
  products: {
    heading: "PRODUCTS",
    featured: {
      title: "AI Assistant Studio",
      description: "Create and deploy enterprise copilots with guardrails.",
      href: "/products/ai-assistant-studio",
      icon: Bot,
    },
    items: [
      {
        title: "Knowledge Graph Engine",
        description: "Connected enterprise knowledge and discovery.",
        href: "/products/knowledge-graph-engine",
        icon: Database,
      },
      {
        title: "Insight Control Tower",
        description: "Live KPIs, alerts, and decision orchestration.",
        href: "/products/insight-control-tower",
        icon: LineChart,
      },
    ],
  },
  about: {
    heading: "ABOUT",
    items: [
      {
        title: "Overview",
        description: "Discover how we help businesses innovate with AI and digital solutions.",
        href: "/about",
        icon: Briefcase,
      },
      {
        title: "Leadership Team",
        description: "Meet the professional and experienced leaders behind our success.",
        href: "/about#leadership_team",
        icon: Users,
      },
      {
        title: "Thought Leadership",
        description: "AI insights, emerging trends, and proven business strategies.",
        href: "/thought-leadership",
        icon: Lightbulb,
      },
    ],
  },
};

const menuOrder: Array<{ key: MenuKey; label: string }> = [
  { key: "solutions", label: "Our Solutions" },
  { key: "industries", label: "Industries" },
  { key: "products", label: "Products" },
  { key: "about", label: "About Us" },
];

const panelMotion = {
  initial: { opacity: 0, y: -10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.98 },
};

function MenuItemCard({
  item,
  featured = false,
}: {
  item: MenuItem;
  featured?: boolean;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative block rounded-[16px] border border-slate-200 bg-white p-3 text-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/20 hover:bg-slate-50 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]",
        featured && "p-3.5"
      )}
    >
      <div className="absolute inset-0 rounded-[16px] bg-[linear-gradient(135deg,rgba(95,176,194,0.06),rgba(255,255,255,0.8))] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative z-10 flex items-start gap-3">
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl border border-secondary/10 bg-[#eaf7fb] text-secondary",
            featured ? "size-9" : "size-8"
          )}
        >
          <Icon className={cn(featured ? "size-4" : "size-4")} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={cn("font-semibold !text-base leading-tight text-slate-950", featured ? "text-[14px]" : "text-[13px]")}>
              {item.title}
            </h3>
            {featured && (
              <span className="rounded-full border border-secondary/10 bg-[#eaf7fb] px-2 py-0.5 text-[8px] font-medium uppercase tracking-[0.18em] text-secondary">
                Featured
              </span>
            )}
          </div>
          <p className="mt-1 !text-[12px] leading-[1.15rem] text-slate-600">
            {item.description}
          </p>
          <span className="relative z-10 mt-2 inline-flex items-center gap-2 text-[11px] font-medium text-secondary transition-all duration-200 group-hover:translate-x-1">
        Explore <ArrowRight className="size-3.5" />
      </span>
        </div>
      </div>
      
    </Link>
  );
}

export default function DesktopMegaMenu() {
  const [activeKey, setActiveKey] = React.useState<MenuKey | null>(null);
  const closeTimer = React.useRef<number | null>(null);

  const clearTimer = React.useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openMenu = React.useCallback(
    (key: MenuKey) => {
      clearTimer();
      setActiveKey(key);
    },
    [clearTimer]
  );

  const scheduleClose = React.useCallback(() => {
    clearTimer();
    closeTimer.current = window.setTimeout(() => setActiveKey(null), 120);
  }, [clearTimer]);

  React.useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const activeMenu = activeKey ? menuSections[activeKey] : null;
  const featuredItem = activeMenu && activeMenu.featured ? activeMenu.featured : null;

  return (
    <div className="relative hidden lg:flex lg:items-center">
      <NavigationMenu viewport={false} className="max-w-none">
        <NavigationMenuList className="gap-1.5 rounded-full ">
          {menuOrder.map((menu) => {
            const isActive = activeKey === menu.key;

            return (
              <NavigationMenuItem key={menu.key}>
                <NavigationMenuTrigger
                  // className={cn(
                  //   "h-9 rounded-full bg-transparent px-3 text-[13px] font-medium text-slate-950 transition-colors hover:bg-[#e4fbff] hover:text-slate-950 data-[state=open]:bg-slate-100",
                  //   isActive && "bg-[#e4fbff]"
                  // )}
                  onMouseEnter={() => openMenu(menu.key)}
                  onFocus={() => openMenu(menu.key)}
                  onClick={() => openMenu(menu.key)}
                  aria-expanded={isActive}
                  aria-controls="desktop-mega-menu-panel"
                >
                  {menu.label}
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            id="desktop-mega-menu-panel"
            role="menu"
            aria-label={activeMenu.heading}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={panelMotion}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-[80px] z-[140] w-[min(1120px,calc(100vw-24px))] -translate-x-1/2"
            onMouseEnter={clearTimer}
            onMouseLeave={scheduleClose}
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,176,194,0.08),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(248,250,252,0.8))]" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <div className="absolute right-8 top-6 h-20 w-20 rounded-full bg-[#5fb0c2]/10 blur-3xl" />
              <div className="relative z-10 mb-5 flex items-center justify-between">
                {/* <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-700">
                  {activeMenu.heading}
                </p> */}
               
              </div>

              <div
                className={cn(
                  "relative z-10 grid gap-3 lg:grid-cols-3"
                )}
              >
                {featuredItem && (
                  <MenuItemCard item={featuredItem} featured />
                )}

                <div
                  className={cn(
                    "grid gap-2.5",
                    featuredItem
                      ? "sm:grid-cols-2 lg:col-span-2"
                      : "sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3"
                  )}
                >
                  {activeMenu.items.map((item) => (
                    <MenuItemCard key={item.href} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
