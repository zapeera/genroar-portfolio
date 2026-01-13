"use client";
import React from "react";

interface ImageOverlayProps {
  children: React.ReactNode;
  variant?: "default" | "dark" | "gradient" | "subtle" | "banner";
  className?: string;
}

/**
 * Reusable overlay component for images to ensure text and buttons are visible
 * Provides consistent contrast and readability across all image backgrounds
 */
export function ImageOverlay({
  children,
  variant = "default",
  className = ""
}: ImageOverlayProps) {
  const variantClasses = {
    default: "bg-gradient-to-b from-black/55 via-black/40 to-black/60",
    dark: "bg-gradient-to-b from-black/70 via-black/60 to-black/75",
    gradient: "bg-gradient-to-br from-primary/65 via-primary/55 to-accent/65",
    subtle: "bg-gradient-to-b from-black/45 via-black/30 to-black/55",
    banner: "bg-gradient-to-b from-white/20 via-white/10 to-white/20 dark:from-black/20 dark:via-black/10 dark:to-black/20",
  };

  return (
    <div className={`absolute inset-0 ${variantClasses[variant]} ${className}`}>
      {/* Base layer for text contrast - lighter */}
      {variant !== "banner" && <div className="absolute inset-0 bg-black/25" />}
      {variant === "banner" && (
        <>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10" />
        </>
      )}
      {/* Rich gradient overlay for depth */}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/25" />
      )}
      {/* Additional radial gradient for better text contrast - lighter */}
      {variant !== "banner" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      )}
      {variant === "banner" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.05)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
      )}
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
