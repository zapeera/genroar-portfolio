"use client";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";

const clients = [
  { 
    name: "TechStart Inc.", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80",
    industry: "Technology"
  },
  { 
    name: "Growth Labs", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop&q=80",
    industry: "Marketing"
  },
  { 
    name: "Innovate Co.", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80",
    industry: "Finance"
  },
  { 
    name: "ScaleUp Solutions", 
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop&q=80",
    industry: "SaaS"
  },
  { 
    name: "Digital Ventures", 
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=80",
    industry: "E-commerce"
  },
  { 
    name: "NextGen Platforms", 
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&auto=format&fit=crop&q=80",
    industry: "Cloud"
  },
  { 
    name: "Future Tech", 
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop&q=80",
    industry: "AI"
  },
  { 
    name: "Cloud First", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
    industry: "Infrastructure"
  },
];

export function ClientLogos() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted By Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
            We're proud to partner with innovative companies across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative h-24 sm:h-28 md:h-32 overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md dark:border-gray-800 dark:bg-[#111]"
            >
              <ImageReveal
                src={client.image}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs font-semibold text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 drop-shadow-lg">
                  {client.industry}
                </p>
                <p className="text-sm font-bold text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 drop-shadow-lg">
                  {client.name}
                </p>
              </div>
              {/* Default state - show name */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-[#0B0C10]/95 backdrop-blur-sm transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white text-center px-2 transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
