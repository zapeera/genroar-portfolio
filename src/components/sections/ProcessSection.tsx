"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

// Default dummy data for testing
const defaultSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Discovery & Research",
    description: "Deep dive into your business goals, target market, competitive landscape, and user needs. We conduct comprehensive research to understand what you need to succeed in your industry.",
  },
  {
    number: "2",
    title: "Strategy & Planning",
    description: "Create a strategic roadmap with clear milestones, priorities, and success metrics. We develop detailed project plans, timelines, and resource allocation strategies tailored to your objectives.",
  },
  {
    number: "3",
    title: "Design & Prototyping",
    description: "Design intuitive user interfaces and create interactive prototypes. We focus on user experience, visual design, and ensuring your product is both beautiful and functional before development begins.",
  },
  {
    number: "4",
    title: "Development & Build",
    description: "Design and develop your product with agile sprints, weekly demos, and continuous feedback. Our team uses modern technologies and best practices to build scalable, maintainable solutions.",
  },
  {
    number: "5",
    title: "Quality Assurance",
    description: "Rigorous quality assurance, security audits, and performance testing before launch. We ensure your product is bug-free, secure, and performs optimally across all devices and browsers.",
  },
  {
    number: "6",
    title: "Launch & Deployment",
    description: "Execute a smooth launch with proper deployment strategies, monitoring, and support. We handle all technical aspects of going live and ensure everything runs smoothly from day one.",
  },
  {
    number: "7",
    title: "Optimization & Growth",
    description: "Launch, measure, optimize, and iterate with marketing, analytics, and ongoing support. We track performance metrics and continuously improve your product based on real user data.",
  },
  {
    number: "8",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and support to keep your product running smoothly. We provide 24/7 monitoring, regular updates, and quick response times for any issues that arise.",
  },
];

export function ProcessSection({
  title = "Our Process",
  subtitle = "A clear, collaborative journey from idea to success",
  steps = defaultSteps,
}: ProcessSectionProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % steps.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const nextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % steps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevStep = () => {
    setCurrentStepIndex((prev) => (prev - 1 + steps.length) % steps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const processImages = [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Process Slider */}
        <div className="relative">
          <div
            className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              {steps.map((step, index) => {
                if (index !== currentStepIndex) return null;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Background Image */}
                    <ImageReveal
                      src={processImages[index] || processImages[0]}
                      alt={`${step.number}. ${step.title}`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={index === 0}
                      overlay={true}
                      overlayVariant="gradient"
                    />

                    {/* Content Container */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 h-full">
                      {/* Step Number Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6 sm:mb-8"
                      >
                        <div className="relative">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"
                          />
                          <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent shadow-2xl border-2 border-white/30">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-2xl">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Step Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl leading-tight"
                      >
                        {step.title}
                      </motion.h3>

                      {/* Step Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-2xl font-medium leading-relaxed"
                      >
                        {step.description}
                      </motion.p>

                      {/* Progress Dots */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 sm:mt-10 flex gap-2 sm:gap-3"
                      >
                        {steps.map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                              i === currentStepIndex
                                ? "w-8 sm:w-10 bg-white"
                                : "w-2 sm:w-3 bg-white/40"
                            }`}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevStep}
              className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 border border-white/30"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
            </button>
            <button
              onClick={nextStep}
              className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 border border-white/30"
              aria-label="Next step"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
