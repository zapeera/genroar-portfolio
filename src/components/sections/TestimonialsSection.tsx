"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Real feedback from real projects.",
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive number of items
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalTestimonials = testimonials.length;

  // Auto slide every few seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalTestimonials]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  }, [totalTestimonials]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  }, [totalTestimonials]);

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-[1]" />

      {/* Gradient Blurs */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none z-[2]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white dark:bg-[#111] rounded-full shadow-md hover:scale-110 transition-transform p-3"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          {/* Testimonials */}
          <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid gap-6 sm:gap-8"
              style={{
                gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: itemsPerView }).map((_, i) => {
                const index = (currentIndex + i) % totalTestimonials;
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}-${i}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-8 shadow-md hover:shadow-xl transition-all"
                  >
                    <Quote className="w-8 h-8 text-primary opacity-20 mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
                      “{testimonial.quote}”
                    </p>
                    <div className="flex items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                      <div className="relative h-14 w-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                        <ImageReveal
                          src={[
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
                          ][index % 6] || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"}
                          alt={testimonial.author}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white font-semibold">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm font-medium text-primary dark:text-primary/80">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white dark:bg-[#111] rounded-full shadow-md hover:scale-110 transition-transform p-3"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
