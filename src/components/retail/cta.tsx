"use client";

import CallToAction1, { CTAData } from "@/components/ui/call-to-action-1";
import { SectionHeader } from "../ui/section-header";

const ctaData: CTAData = {
    title: "Turn retail complexity into commercial advantage.",
    description:
      "Bring your highest-value growth challenge. We’ll show you where data and AI can create measurable impact first.",
    buttonText: "Explore Solutions",
    buttonLink: "/our-solutions",
    video: "/video/bg-2.mp4",
    members: 100,
    avatars: [
      "/img/avatar-1.webp",
      "/img/avatar-2.webp",
      "/img/avatar-3.webp",
    ],
};

export default function CallToAction() {
  return (
    <CallToAction1 data={ctaData} />
  );
}