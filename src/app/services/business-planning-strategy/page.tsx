"use client";
import { useState, useEffect, useCallback } from "react";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Note: Metadata export is not available in client components
// You may need to handle SEO differently for this page

export default function BusinessPlanningStrategyPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&auto=format&fit=crop&q=80"
						alt="Business Planning & Strategy"
						fill
						sizes="100vw"
						className="object-cover grayscale-[0.3] brightness-105"
						priority
						overlay={false}
					/>
				</div>
				{/* Semi-transparent Overlay - Similar to hero section */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
				<Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
					<div className="w-full text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="mb-6 text-fluid-5xl font-bold text-white drop-shadow-2xl"
						>
							Business Planning & Strategy
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							Strategic planning and business consulting to validate ideas, define roadmaps, and accelerate growth.
						</motion.p>
					</div>
				</Container>
			</section>
			<Section>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
					<div>
						<Heading level={1}>Business Planning & Strategy</Heading>
						<Paragraph className="mt-4 max-w-3xl">
							Turn your vision into an actionable plan. We help you validate ideas, define success metrics, prioritize initiatives, and build roadmaps that align with your business goals.
						</Paragraph>
					</div>
					<div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
						<ImageReveal
							src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&auto=format&fit=crop&q=80"
							alt="Strategic Business Planning"
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				</div>
			</Section>
			<Section title="Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{ title: "Market research & validation", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" },
						{ title: "Business model design", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&auto=format&fit=crop&q=80" },
						{ title: "Product-market fit analysis", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
						{ title: "Competitive strategy", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
						{ title: "Go-to-market planning", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80" },
						{ title: "Financial modeling & projections", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80" },
						{ title: "Risk assessment & mitigation", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
						{ title: "OKR & KPI definition", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
						{ title: "Roadmap prioritization", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" },
					].map((s) => (
						<div key={s.title} className="group relative rounded-xl border border-zinc-200 overflow-hidden dark:border-zinc-800 transition-all hover:shadow-lg">
							<div className="relative h-32 overflow-hidden">
								<ImageReveal
									src={s.image}
									alt={s.title}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
							</div>
							<div className="p-6">
								<h3 className="font-semibold text-gray-900 dark:text-white">{s.title}</h3>
							</div>
						</div>
					))}
				</div>
			</Section>
			<Section title="Our Approach">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
					<div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
						<ImageReveal
							src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
							alt="Strategic Approach"
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
					<div>
						<ol className="space-y-4 text-base">
							<li className="flex items-start gap-3">
								<span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</span>
								<div>
									<span className="font-semibold text-gray-900 dark:text-white">Discovery:</span>
									<span className="ml-2 text-gray-700 dark:text-gray-300">Deep dive into your market, customers, and objectives</span>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
								<div>
									<span className="font-semibold text-gray-900 dark:text-white">Analysis:</span>
									<span className="ml-2 text-gray-700 dark:text-gray-300">Competitive landscape, opportunities, and risks</span>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</span>
								<div>
									<span className="font-semibold text-gray-900 dark:text-white">Strategy:</span>
									<span className="ml-2 text-gray-700 dark:text-gray-300">Clear recommendations with data-driven rationale</span>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</span>
								<div>
									<span className="font-semibold text-gray-900 dark:text-white">Planning:</span>
									<span className="ml-2 text-gray-700 dark:text-gray-300">Prioritized roadmap with milestones and metrics</span>
								</div>
							</li>
						</ol>
					</div>
				</div>
			</Section>
			<Section className="pb-20" title="Deliverables">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
					<div className="flex flex-wrap gap-2 text-sm">
						{["Strategic plan document", "Business model canvas", "Market analysis report", "Go-to-market strategy", "Product roadmap", "Financial projections"].map((d) => (
							<span key={d} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{d}</span>
						))}
					</div>
					<div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
						<ImageReveal
							src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80"
							alt="Business Planning Deliverables"
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				</div>
			</Section>
		</main>
	);
}
 