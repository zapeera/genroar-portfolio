"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { Container } from "@/components/layout/Container";
import { Sparkles, Award, Target } from "lucide-react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

interface WhyChooseUsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    icon: Award,
  },
  {
    value: 200,
    suffix: "+",
    label: "Happy Clients",
    icon: Sparkles,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: Target,
  },
  {
    value: 50,
    suffix: "+",
    label: "Team Members",
    icon: Award,
  },
];

export function WhyChooseUs({ stats = defaultStats }: WhyChooseUsProps) {
  const featureImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      <Container className="relative">
        {/* Enhanced Header with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 text-center"
        >
 

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight"
          >
            Results-Driven Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-6"
          >

          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed"
          >
            Trusted by leading companies worldwide for exceptional results
          </motion.p>
        </motion.div>

        {/* Beautiful Mixed Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  {/* Background Image */}
                  <ImageReveal
                    src={featureImages[index] || featureImages[0]}
                    alt={stat.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    overlay={true}
                    overlayVariant="gradient"
                  />

                  {/* Content Container */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 h-full">
                {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="mb-4 sm:mb-6"
                    >
                      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white drop-shadow-2xl" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Stat Number */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="mb-3 sm:mb-4"
                    >
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl leading-none">
                        <StatsCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                    </motion.div>

                    {/* Stat Label */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-2xl"
                    >
                      {stat.label}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="mt-4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                    />
                    </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
                </div>

                {/* Connecting Line (for visual connection) */}
                {index < stats.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
