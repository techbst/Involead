import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";
const ctaData: CTAData = {
    title: "Ready To Turn Your Data Into A Decision Engine?",
    description:
      "Let's map the right use case, define the success metric, and ship a first version that proves value quickly.",
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