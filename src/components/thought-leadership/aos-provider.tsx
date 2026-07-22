"use client";

import { useEffect } from "react";

export default function ThoughtLeadershipAos() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-aos]"),
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            continue;
          }

          element.style.opacity = "1";
          element.style.transform = "translate3d(0, 0, 0)";
          element.dataset.aosAnimated = "true";
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    for (const element of elements) {
      const duration = Number.parseInt(element.dataset.aosDuration ?? "", 10) || 750;
      const delay = Number.parseInt(element.dataset.aosDelay ?? "", 10) || 0;

      element.style.opacity = "0";
      element.style.transform = "translate3d(0, 24px, 0)";
      element.style.transitionProperty = "opacity, transform";
      element.style.transitionDuration = `${duration}ms`;
      element.style.transitionDelay = `${delay}ms`;
      element.style.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)";
      element.style.willChange = "opacity, transform";

      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
