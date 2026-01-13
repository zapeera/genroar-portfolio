"use client";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";

const journeyStages = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    title: "Ideation",
    description: "Your innovative idea sparks the journey",
    color: "from-yellow-400 to-orange-500",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    title: "Strategy",
    description: "We plan the perfect roadmap",
    color: "from-blue-500 to-indigo-600",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
    title: "Development",
    description: "Building with cutting-edge tech",
    color: "from-purple-500 to-pink-600",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    title: "Launch",
    description: "Going live with confidence",
    color: "from-green-500 to-emerald-600",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
    title: "Success",
    description: "Achieving your business goals",
    color: "from-primary to-accent",
  },
];

function BusinessJourneyComponent() {
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
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Your Business Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
            From idea to success — we're with you every step
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 bg-gradient-to-r from-primary via-accent to-primary lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {journeyStages.map((stage, index) => {
              const gradientClass = `bg-gradient-to-br ${stage.color}`;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className={`relative z-10 mb-3 sm:mb-4 h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full ${gradientClass} shadow-lg ring-2 sm:ring-4 ring-white dark:ring-gray-800 transition-transform group-hover:scale-110`}
                    >
                      <ImageReveal
                        src={stage.image}
                        alt={stage.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 ${gradientClass} opacity-60 mix-blend-overlay`} />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="absolute inset-0 rounded-full border-2 sm:border-4 border-white dark:border-gray-700"
                      />
                    </div>
                    <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-200">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const BusinessJourney = BusinessJourneyComponent;
