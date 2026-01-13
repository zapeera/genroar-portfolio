"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { 
  Lightbulb, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Bot, 
  Shield,
  ChevronRight
} from "lucide-react";

const aboutLinks = [
  { href: "/about", label: "About Us", desc: "Our story and mission" },
  { href: "/process", label: "How We Work", desc: "Our proven process" },
  { href: "/testimonials", label: "Testimonials", desc: "Client success stories" },
  { href: "/careers", label: "Careers", desc: "Join our team" },
];

export function MegaMenu({ 
  isOpen, 
  type 
}: { 
  isOpen: boolean; 
  type: "services" | "about" 
}) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "business-planning": Lightbulb,
    "product-development": Code,
    "web-mobile-development": Smartphone,
    "marketing": TrendingUp,
    "ai-automation": Bot,
    "security-testing": Shield,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 z-50 border-t-2 border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-[#0B0C10]"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 w-full">
              {type === "services" ? (
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => {
                    const Icon = iconMap[service.slug] || Code;
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="group relative rounded-xl border-2 border-gray-200 bg-white p-4 sm:p-6 transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
                      >
                        <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-primary dark:text-gray-400" />
                        </div>
                        <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-900 dark:text-gray-200">
                          {service.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group rounded-xl border-2 border-gray-200 bg-white p-4 sm:p-6 transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
                    >
                      <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {link.label}
                      </h3>
                      <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-gray-900 dark:text-gray-200">
                        {link.desc}
                      </p>
                      <ChevronRight className="mt-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
