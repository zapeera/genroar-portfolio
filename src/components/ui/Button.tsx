"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  showArrow = false,
  disabled = false,
}: ButtonProps) {
  const baseClasses = `font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer pointer-events-auto"}`;

  const variantClasses = {
    primary: "btn-gradient text-white shadow-lg relative overflow-hidden",
    secondary: "btn-secondary text-white shadow-lg relative overflow-hidden",
    outline: "btn-outline shadow-lg relative overflow-hidden",
    glass: "btn-glass text-white shadow-lg relative",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <span className="relative z-10 inline-flex items-center justify-center">
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`${classes} group relative`} onClick={onClick}>
        <motion.span
          whileHover={{ scale: variant === "glass" || variant === "primary" ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="inline-flex items-center justify-center relative z-10"
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: variant === "glass" || variant === "primary" ? 1 : 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
