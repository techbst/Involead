import { ProductCard } from "@/components/home/ProductsInnovation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const products: ProductCard[] = [
  {
    title: "AI Assistant Studio",
    description: "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image: "../../public/product-card/ai.png",
  },
  {
    title: "Insight Control Tower",
    description: "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Workflow Orchestrator",
    description: "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Knowledge Graph Engine",
    description: "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Automation Fabric",
    description: "Agents and workflow orchestration across human and machine processes.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",
  },
];
