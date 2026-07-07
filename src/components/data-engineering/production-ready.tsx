import { Database, ShieldCheck, Cloud } from "lucide-react";
import FeatureCard from "../ui/card-2";
import { SectionHeader } from "../ui/section-header";
import CornerShape from "../ui/shape";

const iconMap = {
    database: Database,
    security: ShieldCheck,
    cloud: Cloud,
};

const cards = [
    {
        title: "Data Infrastructure",
        description:
            "Resilient lakehouse foundations engineered for trusted, governed access.",
        image: "/home/client-first.webp",
        icon: "database",
        bgColor: "#4AA3BE",
    },
    {
        title: "Cloud Solutions",
        description:
            "Elastic multi-cloud systems that scale workload, cost, and control together.",
        image: "/home/client-first.webp",
        icon: "security",
        bgColor: "#0F766E",
    },
    {
        title: "AI-Powered",
        description:
            "Intelligent pipelines that generate, validate, monitor, and heal themselves.",
        image: "/home/client-first.webp",
        icon: "cloud",
        bgColor: "#2563EB",
    },
];

export default function Productions() {
    return (
        <section className="relative overflow-hidden bg-white py-20">
            <div className="container">
                <SectionHeader
                    eyebrow="Built for production"
                    title="Production-ready data platforms for regulated industries"
                    description="Data engineering is the foundation of modern data-driven organizations. We design the systems that collect, store, process, and transform raw data into meaningful insight."
                />
                <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <FeatureCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            icon={iconMap[card.icon as keyof typeof iconMap]}
                            bgColor={card.bgColor}
                            index={index}
                        // reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-[8px] left-0 w-[290px] bg-[#000] ">
                <CornerShape color="#fff" />
            </div>
        </section>
    );
}
