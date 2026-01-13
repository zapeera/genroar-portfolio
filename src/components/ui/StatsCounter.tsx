"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function StatsCounter({ value, suffix = "", prefix = "", duration = 2000 }: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const element = ref.current;
    if (!element) return;

    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        element.textContent = `${prefix}${end}${suffix}`;
        clearInterval(timer);
      } else {
        element.textContent = `${prefix}${Math.floor(start)}${suffix}`;
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, suffix, prefix, duration]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

