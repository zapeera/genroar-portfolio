"use client";
import { motion } from "framer-motion";
import { StatsCounter } from "@/components/ui/StatsCounter";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export function StatsSection({ stats, title = "Our Impact", subtitle = "Results that speak for themselves" }: StatsSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-white/90">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Divider line between items (except last item of each row) */}
              {(index + 1) % 4 !== 0 && (
                <div className="hidden sm:block absolute top-1/2 -right-6 w-px h-16 bg-white/20 -translate-y-1/2" />
              )}
              
              <div className="mb-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                <StatsCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-base sm:text-lg font-semibold text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

