"use client";
import { testimonials } from "@/data/testimonials";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, Star, Filter } from "lucide-react";

const categories = ["All", "Tech", "Marketing", "AI"];

export default function TestimonialsPage() {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredTestimonials =
		activeFilter === "All"
			? testimonials
			: testimonials.filter((t) => t.category === activeFilter);

	return (
		<main>
		{/* Hero */}
		<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
			{/* Background Image */}
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
					alt="Client testimonials"
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
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="mb-6 flex justify-center"
					>
						<Quote className="h-16 w-16 text-white/30" />
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-6 text-fluid-5xl font-bold text-white drop-shadow-2xl"
					>
						Client Reviews
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
					>
						Don't just take our word for it. Here's what our clients have to say about their experience working with us.
					</motion.p>
				</div>
			</Container>
		</section>

			{/* Filter Tabs */}
			<section className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm py-4 dark:border-gray-800 dark:bg-[#0B0C10]/95 transition-colors duration-300">
				<Container>
					<div className="flex flex-wrap items-center justify-center gap-3">
						<Filter className="h-5 w-5 text-gray-900 dark:text-gray-300" />
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveFilter(category)}
								className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
									activeFilter === category
										? "bg-gradient-to-r from-primary to-accent text-black dark:text-white shadow-lg border-2 border-primary/20"
										: "border-2 border-gray-300 bg-white text-gray-900 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-[#111] dark:text-gray-200"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</Container>
			</section>

			{/* Testimonials */}
			<AnimatePresence mode="wait">
				<motion.div
					key={activeFilter}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
				>
					<TestimonialsSection
						testimonials={filteredTestimonials}
						title="What Our Clients Say"
						subtitle="Real feedback from real projects."
					/>
				</motion.div>
			</AnimatePresence>

			{/* Partner Logos */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
							Trusted By Leading Companies
						</h2>
						<p className="text-gray-900 dark:text-gray-200">
							We're proud to partner with innovative businesses
						</p>
					</motion.div>
					<div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
						{["TechStart Inc.", "Growth Labs", "Innovate Co.", "ScaleUp Solutions", "Digital Ventures", "NextGen Platforms"].map((company, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, amount: 0.3, margin: "-50px" }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.1 }}
								className="flex h-20 items-center justify-center rounded-xl border-2 border-gray-200 bg-white text-center text-sm font-medium text-gray-900 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-[#111] dark:text-gray-200"
							>
								{company}
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Results */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
							Results That Matter
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3, margin: "-50px" }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-[#111]"
						>
							<div className="mb-2 text-4xl font-bold text-primary">50%+</div>
							<p className="text-sm font-medium text-gray-900 dark:text-gray-200">
								Time reduction on average project
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3, margin: "-50px" }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-[#111]"
						>
							<div className="mb-2 flex items-center justify-center gap-2 text-4xl font-bold text-primary">
								<Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
								4.9
							</div>
							<p className="text-sm font-medium text-gray-900 dark:text-gray-200">
								Average client rating
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3, margin: "-50px" }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-[#111]"
						>
							<div className="mb-2 text-4xl font-bold text-primary">99%+</div>
							<p className="text-sm font-medium text-gray-900 dark:text-gray-200">
								Client satisfaction rate
							</p>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* CTA */}
			<CTASection
				title="Join Our Happy Clients"
				subtitle="Ready to experience the same results? Let's discuss how we can help turn your vision into reality."
				primaryButtonText="Get in Touch"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
