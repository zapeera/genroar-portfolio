"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { useState } from "react";
import { CTASection } from "@/components/sections/CTASection";

const allProjects = [
	{
		slug: "strap-up",
		title: "Strap Up",
		result: "A multi-vendor e-commerce platform for buying and selling luxury new and worn watches, built with modern web technologies.",
		category: "Web",
		tags: ["Web", "E-commerce", "Multi-vendor"],
	},
	{
		slug: "nissan-uae",
		title: "Nissan UAE",
		result: "A modern, high-performance automotive website showcasing Nissan's latest models, promotions, and after-sales services in the UAE.",
		category: "AI",
		tags: ["AI", "Cloud", "Security"],
	},
	{
		slug: "cray-cups",
		title: "Crazy Cups",
		result: "A vibrant and fun e-commerce website for premium beverage products with colorful visuals and smooth product filtering.",
		category: "Web",
		tags: ["Web", "SaaS"],
	},
	{
		slug: "peugeot",
		title: "Peugeot",
		result: "A sleek corporate website presenting innovative vehicles, brand heritage, and customer services with elegant design.",
		category: "Marketing",
		tags: ["Marketing", "SEO", "E-commerce"],
	},
	{
		slug: "ctw-saudi",
		title: "CTW Saudi",
		result: "A regional CTW exhibition platform for Saudi Arabia highlighting event schedules, industry sectors, and exhibitor lists.",
		category: "Web",
		tags: ["Web", "FinTech", "Analytics"],
	},
	{
		slug: "ctw-global",
		title: "CTW Global",
		result: "A dynamic B2B event platform representing China Trade Week international exhibitions with global event details and business matchmaking.",
		category: "Mobile",
		tags: ["Mobile", "AI", "Health"],
	},
	{
		slug: "mie-group",
		title: "MIE Groups",
		result: "The official website for MIE Groups, a multinational events organizer operating across Africa, Asia, and the Middle East.",
		category: "AI",
		tags: ["AI", "Healthcare"],
	},

];

const categories = ["All", "Web", "Mobile", "AI", "Marketing"];

export default function PortfolioPage() {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredProjects =
		activeFilter === "All"
			? allProjects
			: allProjects.filter((project) => project.category === activeFilter);

	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Our portfolio"
						fill
						sizes="100vw"
						className="object-cover grayscale-[0.3] brightness-105 filter"
						priority
						overlay={false}
					/>
				</div>
				{/* Semi-transparent Overlay - Similar to hero section */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
				<Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
					<div className="w-full text-center">
						<motion.h1
							initial={{ opacity: 0, y: 50, scale: 0.95 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
							}}
							transition={{
								duration: 1,
								delay: 0.3,
								type: "spring",
								stiffness: 100,
								damping: 15,
							}}
							className="mb-4 sm:mb-6 text-fluid-6xl font-bold text-white leading-tight drop-shadow-2xl"
						>
							Case Studies
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.6,
								type: "spring",
								stiffness: 100,
								damping: 15,
							}}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							A snapshot of projects we've delivered—outcomes, learnings, and craft.
						</motion.p>
					</div>
				</Container>
			</section>

			{/* Filter Tabs */}
			<section className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm py-3 sm:py-4 dark:border-gray-800 dark:bg-[#0B0C10]/95 transition-colors duration-300">
				<Container>
					<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveFilter(category)}
								className={`rounded-full px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium transition-all ${
									activeFilter === category
										? "bg-gradient-to-r from-primary to-accent text-black dark:text-white shadow-lg"
										: "border-2 border-gray-300 bg-white t text-gray-900 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-[#111] dark:text-gray-200"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</Container>
			</section>

			{/* Projects Grid */}
			<section className="bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<AnimatePresence mode="wait">
						<motion.div
							key={activeFilter}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
						>
							{filteredProjects.map((project, index) => {
							// Unique images for each project type
							const projectImages = {
								"Nissan UAE": "/nissan.png",
								"Crazy Cups": "/crazycups.png",
								"Peugeot": "/peugot.png",
								"CTW Saudi": "/saudi.png",
								"CTW Global": "/kenya.png",
								"MIE Groups": "/mie.png",
								"Strap Up": "/strapup.png",
							};
							return (
								<TiltCard key={project.slug} intensity={8}>
									<Link href={`/portfolio/${project.slug}`}>
										<div className="group h-full rounded-2xl border-2 border-gray-200 bg-white overflow-hidden shadow-md transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]">
											<div className="relative h-56 overflow-hidden">
												<ImageReveal
													src={projectImages[project.title as keyof typeof projectImages] || "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&=format&fit=crop&q=80"}
													alt={project.title}
													fill
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
												<div className="absolute top-4 right-4">
													<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm border border-white/30">
														{project.category}
													</span>
												</div>
												<div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
													<h3 className="text-lg font-bold text-white drop-shadow-lg">
														{project.title}
													</h3>
												</div>
											</div>
											<div className="p-6">
												<h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors dark:text-white">
													{project.title}
												</h3>
												<p className="mb-4 text-sm text-gray-900 dark:text-gray-200">
													{project.result}
												</p>
												<div className="flex flex-wrap gap-2 mb-4">
													{project.tags.map((tag) => (
														<span
															key={tag}
															className="rounded-full border border-gray-300 bg-white px-2 py-1 text-xs text-gray-900 dark:border-gray-700 dark:bg-[#111] dark:text-gray-200"
														>
															{tag}
														</span>
													))}
												</div>
												<span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
													View Case Study →
												</span>
											</div>
										</div>
									</Link>
								</TiltCard>
							);
						})}
						</motion.div>
					</AnimatePresence>
				</Container>
			</section>

			{/* CTA */}
			<CTASection
				title="Let's Work Together"
				subtitle="Ready to start your next project? Get in touch and let's discuss how we can help."
				primaryButtonText="Start Your Project"
				primaryButtonHref="/contact"
				secondaryButtonText="View All Services"
				secondaryButtonHref="/services"
			/>
		</main>
	);
}
