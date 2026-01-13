"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "👩‍💼",
    bio: "10+ years in product strategy",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mike Rodriguez",
    role: "CTO",
    image: "👨‍💻",
    bio: "Full-stack architect expert",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Alex Johnson",
    role: "Head of Design",
    image: "👨‍🎨",
    bio: "UX/UI design leader",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Davis",
    role: "Growth Lead",
    image: "👩‍💼",
    bio: "Marketing & growth strategist",
    linkedin: "#",
    twitter: "#",
  },
];

export function TeamPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            Expert professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl mx-auto">
                {member.image}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-200">{member.role}</p>
              <p className="mb-4 text-xs font-medium text-gray-900 dark:text-gray-200">
                {member.bio}
              </p>
              <div className="flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 text-gray-800 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 text-gray-800 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/about"
            className="text-gray-900 hover:text-primary transition-colors font-semibold text-lg dark:text-white dark:hover:text-primary-400"
          >
            View Full Team →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
