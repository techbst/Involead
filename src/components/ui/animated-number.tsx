"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  value: string;
}

export default function AnimatedNumber({ value }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const numericMatch = value.match(/[\d.]+/);
  const number = numericMatch ? parseFloat(numericMatch[0]) : null;

  const prefix = value.replace(/[\d.]+.*/, "");
  const suffix = value.replace(/.*?[\d.]+/, "");

  const motionValue = useMotionValue(0);

  const rounded = useTransform(motionValue, (latest) =>
    number && number % 1 !== 0
      ? latest.toFixed(1)
      : Math.round(latest).toString()
  );

  useEffect(() => {
    if (!inView || number === null) return;

    const controls = animate(motionValue, number, {
      duration: 2,
    });

    return () => controls.stop();
  }, [inView, number]);

  if (number === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}