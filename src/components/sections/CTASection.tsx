"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "gradient";
}

export function CTASection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  variant = "default",
}: CTASectionProps) {
  const bgClass = variant === "gradient"
    ? "bg-gradient-to-br from-primary via-primary/90 to-accent"
    : "bg-white dark:bg-[#0B0C10] transition-colors duration-300";

  const textClass = variant === "gradient" ? "text-white" : "text-gray-900 dark:text-white";

  return (
    <section className={`${bgClass} py-16 sm:py-20 md:py-24`}>
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${textClass}`}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-6 sm:mb-8 text-base sm:text-lg ${variant === "gradient" ? "text-white/90" : "text-gray-900 dark:text-gray-200"}`}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
        >
          <Button
            href={primaryButtonHref}
            variant="primary"
            size="lg"
          >
            {primaryButtonText}
          </Button>
          {secondaryButtonText && secondaryButtonHref && (
            <Button
              href={secondaryButtonHref}
              variant={variant === "gradient" ? "glass" : "outline"}
              size="lg"
              showArrow={variant === "gradient"}
            >
              {secondaryButtonText}
            </Button>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
