"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ThoughtLeadershipAos() {
  useEffect(() => {
    AOS.init({ once: false, duration: 750, easing: "ease-out-cubic" });
    AOS.refresh();

    return () => {
      document.querySelectorAll("[data-aos].aos-init").forEach((element) => {
        element.classList.remove("aos-init", "aos-animate");
      });
    };
  }, []);

  return null;
}
