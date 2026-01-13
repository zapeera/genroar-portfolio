"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  // Ensure container always has non-static position for scroll calculation
  const hasPosition = className.includes('absolute') || className.includes('fixed') || className.includes('relative');
  const finalClassName = hasPosition ? className : `relative ${className}`.trim();

  return (
    <div ref={ref} className={finalClassName}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

