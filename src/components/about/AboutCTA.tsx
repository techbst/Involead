"use client";

import CallToAction1, { type CTAData } from "@/components/ui/call-to-action-1";

const ctaData: CTAData = {
  title: "Let's Shape the Future of Your Business",
  description:
    "Partner with InvoLead to transform complexity into clarity through data, AI, and design, creating intelligent solutions that drive sustainable, enterprise-wide growth.",
  buttonText: "Explore Solutions",
  buttonLink: "/our-solutions",
  video: "/video/bg-1.mp4",
  members: 100,
  avatars: ["/img/avatar-1.webp", "/img/avatar-2.webp", "/img/avatar-3.webp"],
};

export default function AboutCTA() {
  return <CallToAction1 data={ctaData} />;
}
