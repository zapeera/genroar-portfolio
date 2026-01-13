"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

const projects = {
  "nissan-uae": {
    title: "Nissan UAE",
    challenge: "Nissan UAE needed a modern, high-performance automotive website to showcase their latest models, promotions, and after-sales services. The existing platform lacked the premium browsing experience and fast navigation required to engage customers effectively in the competitive UAE automotive market.",
    solution: "We developed a modern, high-performance automotive website showcasing Nissan's latest models, promotions, and after-sales services in the UAE. The platform delivers a premium browsing experience with fast navigation, detailed vehicle pages, and an engaging user interface that reflects Nissan's brand excellence.",
    result: "A modern, high-performance automotive website showcasing Nissan's latest models, promotions, and after-sales services in the UAE. The platform delivers a premium browsing experience with fast navigation, detailed vehicle pages, and an engaging user interface.",
    technologies: ["Adobe Experience Manager (AEM)", "HTML", "CSS", "JavaScript", "Java", "Enterprise CMS"],
    image: "/nissan.png",
    client: "Nissan UAE",
    duration: "6 months",
    category: "AI"
  },
  "cray-cups": {
    title: "Crazy Cups",
    challenge: "Crazy Cups required an e-commerce platform that would showcase their premium beverage products with vibrant visuals and smooth shopping experience. The existing site lacked the colorful, creative identity needed to stand out in the competitive beverage market.",
    solution: "We created a vibrant and fun e-commerce website for premium beverage products. Designed with colorful visuals and smooth product filtering, the site enhances the shopping journey and highlights the brand's creative identity, making it easy for customers to discover and purchase their favorite products.",
    result: "A vibrant and fun e-commerce website for premium beverage products. Designed with colorful visuals and smooth product filtering, the site enhances the shopping journey and highlights the brand's creative identity.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Shopify API", "Marketing Automation"],
    image: "/crazycups.png",
    client: "Crazy Cups",
    duration: "4 months",
    category: "Web"
  },
  "peugeot": {
    title: "Peugeot",
    challenge: "Peugeot needed a sleek corporate website that would present their innovative vehicles, brand heritage, and customer services. The existing platform didn't reflect the elegance and performance that matches Peugeot's global automotive image.",
    solution: "We designed and developed a sleek corporate website for Peugeot, presenting their innovative vehicles, brand heritage, and customer services. The design focuses on elegance, clarity, and performance to match Peugeot's global automotive image, creating an immersive brand experience for visitors.",
    result: "A sleek corporate website for Peugeot, presenting their innovative vehicles, brand heritage, and customer services. The design focuses on elegance, clarity, and performance to match Peugeot's global automotive image.",
    technologies: ["Adobe Experience Manager (AEM)", "HTML", "CSS", "JavaScript", "Java", "Enterprise CMS"],
    image: "/peugot.png",
    client: "Peugeot",
    duration: "5 months",
    category: "Marketing"
  },
  "ctw-saudi": {
    title: "CTW Saudi",
    challenge: "CTW needed a regional version of their exhibition platform specifically for Saudi Arabia. The platform had to highlight event schedules, industry sectors, exhibitor lists, and opportunities for Saudi-based businesses to engage with international suppliers effectively.",
    solution: "We developed a regional version of the CTW exhibition platform specifically for Saudi Arabia. It highlights event schedules, industry sectors, exhibitor lists, and opportunities for Saudi-based businesses to engage with international suppliers, providing a comprehensive B2B networking platform.",
    result: "A regional version of the CTW exhibition platform specifically for Saudi Arabia. It highlights event schedules, industry sectors, exhibitor lists, and opportunities for Saudi-based businesses to engage with international suppliers.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Event Management System"],
    image: "/saudi.png",
    client: "CTW Saudi Arabia",
    duration: "7 months",
    category: "Web"
  },
  "ctw-global": {
    title: "CTW Global",
    challenge: "China Trade Week needed a dynamic B2B event platform to represent their international exhibitions globally. The platform had to provide comprehensive event details, exhibitor information, business matchmaking, and resources for companies aiming to connect across emerging markets.",
    solution: "We built a dynamic B2B event platform representing China Trade Week international exhibitions. The website provides global event details, exhibitor information, business matchmaking, and resources for companies aiming to connect across emerging markets, facilitating international trade relationships.",
    result: "A dynamic B2B event platform representing China Trade Week international exhibitions. The website provides global event details, exhibitor information, business matchmaking, and resources for companies aiming to connect across emerging markets.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Event Management System", "Dynamic Content Modules"],
    image: "/kenya.png",
    client: "CTW Global",
    duration: "5 months",
    category: "Mobile"
  },
  "mie-group": {
    title: "MIE Groups",
    challenge: "MIE Groups, a multinational events organizer, needed an official website to showcase their event portfolio, global presence, and expertise. The platform had to represent their operations across Africa, Asia, and the Middle East while highlighting their expertise in creating large-scale trade fairs and B2B platforms.",
    solution: "We created the official website for MIE Groups, a multinational events organizer operating across Africa, Asia, and the Middle East. It showcases their event portfolio, global presence, and expertise in creating large-scale trade fairs and B2B platforms, establishing them as a leading international events company.",
    result: "The official website for MIE Groups, a multinational events organizer operating across Africa, Asia, and the Middle East. It showcases their event portfolio, global presence, and expertise in creating large-scale trade fairs and B2B platforms.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "Multi-event Support", "Corporate CMS"],
    image: "/mie.png",
    client: "MIE Groups",
    duration: "10 months",
    category: "AI"
  },
  "strap-up": {
    title: "Strap Up",
    challenge: "The client needed a sophisticated multi-vendor e-commerce platform specifically designed for the luxury watch market. The platform had to support both new and pre-owned watches, enable multiple vendors to list products, and provide a seamless buying and selling experience for luxury timepieces.",
    solution: "We developed a comprehensive multi-vendor e-commerce platform for buying and selling luxury new and worn watches. Built with React and Node.js, the platform features a robust MongoDB database, vendor management system, secure payment processing, authentication, and a user-friendly interface that showcases luxury watches with detailed product listings and high-quality imagery.",
    result: "A multi-vendor e-commerce platform for buying and selling luxury new and worn watches, built with modern web technologies. The platform enables multiple vendors to list their watches while providing buyers with a premium shopping experience for luxury timepieces.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Payment Integration", "Authentication", "Multi-vendor System"],
    image: "/strapup.png",
    client: "Strap Up",
    duration: "8 months",
    category: "Web"
  }
};

export default function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black dark:bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageReveal
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover grayscale-[0.3] brightness-105 filter"
            priority
            overlay={false}
          />
        </div>
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
        <Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="mb-6 inline-flex items-center gap-2 text-white/90 hover:text-white drop-shadow-lg"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/30">
                {project.category}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="mb-6 text-fluid-6xl font-bold text-white leading-tight drop-shadow-2xl"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-white drop-shadow-lg"
            >
              <div>
                <span className="font-semibold">Client:</span> {project.client}
              </div>
              <div>
                <span className="font-semibold">Duration:</span> {project.duration}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Project Image */}
      <section className="relative -mt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-neutral-200 shadow-xl dark:border-neutral-800">
            <ImageReveal
              src={project.image || "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600"}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              overlay={true}
              overlayVariant="gradient"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Challenge</h2>
              <p className="text-neutral-900 dark:text-neutral-200">{project.challenge}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Solution</h2>
              <p className="text-neutral-900 dark:text-neutral-200">{project.solution}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-accent">Results</h2>
              <p className="font-medium text-neutral-900 dark:text-white">{project.result}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
