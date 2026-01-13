"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;
  const serviceImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", // Business Planning
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80", // Product Development
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80", // Web & Mobile
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", // Marketing
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80", // AI & Automation
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80", // Security
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="h-full rounded-2xl border-2 border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]">
          <div className="relative h-48 overflow-hidden">
            <ImageReveal
              src={serviceImages[index] || serviceImages[0]}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              overlay={true}
              overlayVariant="gradient"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                <Icon className="h-6 w-6 text-white" />
              </div>
                <h3 className="text-lg font-bold text-white drop-shadow-2xl">
                  {service.shortTitle}
                </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
              {service.description}
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors dark:text-primary-400 dark:group-hover:text-primary-300">
              Learn More
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
