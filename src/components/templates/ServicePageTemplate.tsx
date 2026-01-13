"use client";
import type { Service } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ImageOverlay } from "@/components/ui/ImageOverlay";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const processSteps = service.process.map((step, index) => ({
    number: String(index + 1),
    title: step.split(":")[0],
    description: step.split(":")[1]?.trim() || step,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageReveal
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover grayscale-[0.3] brightness-105"
            priority
            overlay={false}
          />
        </div>
        {/* Semi-transparent Overlay - Similar to hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
        <Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
          <div className="w-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-fluid-5xl font-bold text-white drop-shadow-2xl"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
            >
              {service.fullDescription}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
                Overview
              </h2>
              <p className="text-lg leading-relaxed text-neutral-900 dark:text-neutral-200">
                {service.fullDescription}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <ImageReveal
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                overlay={true}
                overlayVariant="gradient"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <ProcessSection
        title={`Our Process for ${service.shortTitle}`}
        subtitle="How we deliver results"
        steps={processSteps}
      />

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              Benefits for Clients
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 rounded-xl border-2 border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              Tools & Technologies
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {service.tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title={`Start Your ${service.shortTitle} Project`}
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
