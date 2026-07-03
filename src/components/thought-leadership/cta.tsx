import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";
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
export default function TLCTA() {
    return (
        <CallToAction1 data={ctaData} />
    )
}