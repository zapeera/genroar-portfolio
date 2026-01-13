"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ImageOverlay } from "./ImageOverlay";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  overlay?: boolean;
  overlayVariant?: "default" | "dark" | "gradient" | "subtle" | "banner";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  style?: React.CSSProperties;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  overlay = true,
  overlayVariant = "gradient",
  objectFit = "cover",
  style
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "0px" });
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure image is visible even if animation hasn't triggered
  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  if (fill) {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden ${className}`}
        style={{ minHeight: '100%', width: '100%', position: 'absolute', inset: 0 }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: priority ? 1 : 0 }}
          animate={isInView || isLoaded || priority ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={
              objectFit === "contain" ? "object-contain" :
              objectFit === "fill" ? "object-fill" :
              objectFit === "none" ? "object-none" :
              objectFit === "scale-down" ? "object-scale-down" :
              "object-cover"
            }
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            style={style}
          />
        </motion.div>
        {overlay && (
          <ImageOverlay variant={overlayVariant}>
            <div />
          </ImageOverlay>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.1, opacity: priority ? 1 : 0 }}
        animate={isInView || isLoaded || priority ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={
            objectFit === "contain" ? "object-contain" :
            objectFit === "fill" ? "object-fill" :
            objectFit === "none" ? "object-none" :
            objectFit === "scale-down" ? "object-scale-down" :
            "object-cover"
          }
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          style={style}
        />
        {overlay && (
          <ImageOverlay variant={overlayVariant}>
            <div />
          </ImageOverlay>
        )}
      </motion.div>
    </div>
  );
}
