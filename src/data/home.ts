export type ServiceCard = {
    title: string
    href: string
    image: string
    description: string
}

export type ServicesSection = {
    eyebrow: string
    title: string
    description: string
    cards: ServiceCard[]
}

export const servicesSection: ServicesSection = {
    eyebrow: "Our Services",
    title: "Building Intelligent Solutions that Drive Real-World Results",
    description:
        "We empower life sciences, retail, hospitality, and pharma brands by transforming complex data into intelligent solutions that unlock.",
    cards: [
        {
            title: "Generative AI",
            description: "Harness the power of generative AI to create innovative solutions that drive business growth and efficiency.",
            href: "/solutions/generative-ai",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
        },
        {
            title: "Data Engineering",
            description: "Build robust data pipelines and infrastructure to support your analytics and AI initiatives.",
            href: "/solutions/data-engineering",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
        },
        {
            title: "Software Development",
            description: "Design and develop custom software solutions tailored to your business needs.",
            href: "/solutions/software-development",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
        },
        {
            title: "Data Science",
            description: "Extract insights from your data using advanced analytics and machine learning techniques.",
            href: "/solutions/data-science",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
        },
    ],
}
