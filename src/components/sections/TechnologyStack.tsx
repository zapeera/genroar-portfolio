"use client";
import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL",
  "Tailwind CSS", "Framer Motion", "TensorFlow", "Kubernetes",
];

export function TechnologyStack() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Technology & Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
            Modern tech stack for cutting-edge solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="rounded-xl border-2 border-gray-200 bg-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-gray-900 shadow-md transition-all hover:border-primary hover:shadow-[0_0_15px_rgba(47,47,162,0.3)] dark:border-gray-800 dark:bg-[#111] dark:text-gray-200"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
