"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function CaseStudyHighlight() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <span className="mb-3 sm:mb-4 inline-block rounded-full border-2 border-primary bg-primary px-3 py-1 sm:px-4 text-xs sm:text-sm font-medium text-white">
            Featured Case Study
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            AI-Powered Cloud Surveillance Platform
          </h2>
          <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
            Transforming security operations with intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl lg:h-full group"
          >
            <ImageReveal
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80"
              alt="AI-Powered Cloud Surveillance Platform"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">
                AI & Cloud Technology
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                Intelligent Security Solutions
              </h3>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
              <div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  The Challenge
                </h3>
                <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200">
                  Manual review processes were time-consuming and error-prone. The client needed a scalable solution to monitor multiple locations simultaneously while reducing false positives and improving response times.
                </p>
              </div>

              <div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Our Solution
                </h3>
                <p className="text-sm sm:text-base text-gray-900 dark:text-gray-200">
                  We built an intelligent surveillance system leveraging AI and machine learning for real-time threat detection. The platform includes automated alerting, intelligent filtering, and seamless cloud integration.
                </p>
              </div>

              <div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-accent">
                  The Impact
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-3 sm:p-4 dark:border-gray-800 dark:bg-[#111]">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">50%</span>
                    </div>
                    <p className="text-xs font-medium text-gray-900 dark:text-gray-200">
                      Reduction in manual reviews
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-3 sm:p-4 dark:border-gray-800 dark:bg-[#111]">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">3×</span>
                    </div>
                    <p className="text-xs font-medium text-gray-900 dark:text-gray-200">
                      Improvement in accuracy
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-3 sm:p-4 dark:border-gray-800 dark:bg-[#111]">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">40%</span>
                    </div>
                    <p className="text-xs font-medium text-gray-900 dark:text-gray-200">
                      Faster response times
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/portfolio/ai-surveillance-platform">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                View Full Case Study →
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

