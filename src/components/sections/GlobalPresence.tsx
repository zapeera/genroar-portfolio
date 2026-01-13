"use client";
import { motion } from "framer-motion";
import { MapPin, Globe, Users, Clock } from "lucide-react";

const offices = [
  {
    city: "San Francisco",
    country: "USA",
    icon: MapPin,
  },
  {
    city: "London",
    country: "UK",
    icon: MapPin,
  },
  {
    city: "Singapore",
    country: "Singapore",
    icon: MapPin,
  },
  {
    city: "Remote",
    country: "Worldwide",
    icon: Globe,
  },
];

export function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10 py-16 sm:py-20 md:py-24 dark:from-primary/20 dark:via-[#0B0C10] dark:to-accent/20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Global Presence
          </h2>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            Serving clients worldwide with remote-first excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, index) => {
            const Icon = office.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {office.city}
                </h3>
                <p className="text-sm text-gray-900 dark:text-gray-200">
                  {office.country}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Support</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">50+</div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Countries</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">15+</div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Timezones</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">200+</div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Team Members</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
