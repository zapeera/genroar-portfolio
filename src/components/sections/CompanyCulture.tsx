"use client";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Users, Coffee, Code, Award, Globe, Zap } from "lucide-react";
import { Container } from "@/components/layout/Container";

const cultureValues = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: Code,
    title: "Innovation",
    description: "Constantly learning and adopting cutting-edge technologies",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable in everything we deliver",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Diversity",
    description: "Building inclusive teams from around the world",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Fast, flexible, and responsive to client needs",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: Coffee,
    title: "Balance",
    description: "Promoting healthy work-life balance for our team",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80",
  },
];

export function CompanyCulture() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="mb-4 text-fluid-4xl font-extrabold text-gray-900 dark:text-white">
            Our Culture
          </h2>
          <p className="mx-auto max-w-2xl text-fluid-xl text-gray-600 dark:text-gray-300">
            Values that drive us every day
          </p>
        </motion.div>

        {/* Culture Values Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cultureValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image Background */}
                <div className="relative h-56 overflow-hidden">
                  <ImageReveal
                    src={value.image}
                    alt={value.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3}
                    overlay={true}
                    overlayVariant="gradient"
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-2xl border-2 border-white/30"
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="mb-3 text-fluid-2xl font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-fluid-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
