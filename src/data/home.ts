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
            image: "/service-img/gen-ai.png",
        },
        {
            title: "Data Engineering",
            description: "Build robust data pipelines and infrastructure to support your analytics and AI initiatives.",
            href: "/solutions/data-engineering",
            image: "/service-img/data-eng.png",
        },
        {
            title: "Software Development",
            description: "Design and develop custom software solutions tailored to your business needs.",
            href: "/solutions/software-development",
            image: "/service-img/softdev.png",
        },
        {
            title: "Data Science",
            description: "Extract insights from your data using advanced analytics and machine learning techniques.",
            href: "/solutions/data-science",
            image: "/service-img/datasci.png",
        },
         {
            title: "Cloud Solution",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            href: "/solutions/cloud-solution",
            image: "/service-img/cloud-solution.webp",
        },
        {
            title: "Consulting",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            href: "/solutions/consulting",
            image: "/service-img/consulting.webp",
        },
    ],
}
