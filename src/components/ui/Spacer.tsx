"use client";
import React from "react";

interface SpacerProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

/**
 * Reusable Spacer component for consistent section separation
 * Provides uniform spacing between sections across the website
 */
export function Spacer({ size = "md", className = "" }: SpacerProps) {
  const sizeClasses = {
    sm: "h-8 sm:h-12 md:h-16",
    md: "h-12 sm:h-16 md:h-20 lg:h-24",
    lg: "h-16 sm:h-20 md:h-24 lg:h-28",
    xl: "h-20 sm:h-24 md:h-28 lg:h-32",
    "2xl": "h-24 sm:h-28 md:h-32 lg:h-40",
  };

  return <div className={`${sizeClasses[size]} ${className}`} aria-hidden="true" />;
}
