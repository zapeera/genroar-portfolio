"use client";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Lightbulb, Rocket, Zap, TrendingUp } from "lucide-react";

const processSteps = [
	{
		number: "1",
		title: "Discovery & Consultation",
		description: "Deep dive into your goals, market, and audience. We conduct workshops to clarify objectives, identify constraints, and define success metrics. This phase sets the foundation for everything that follows.",
		icon: Lightbulb,
		image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600",
	},
	{
		number: "2",
		title: "Strategy & Planning",
		description: "Create a strategic roadmap with clear milestones, priorities, and success metrics. We analyze feasibility, assess risks, and align on a shippable roadmap that balances ambition with pragmatism.",
		icon: Target,
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
	},
	{
		number: "3",
		title: "Design & Prototyping",
		description: "Transform strategy into tangible designs. We create wireframes, prototypes, and visual designs based on user research and feedback. Design systems ensure consistency and scalability.",
		icon: Rocket,
		image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
	},
	{
		number: "4",
		title: "Development & Testing",
		description: "Build with agile sprints, weekly demos, and continuous feedback. We maintain high code quality through code reviews, automated testing, and security audits. You see progress every week.",
		icon: Zap,
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
	},
	{
		number: "5",
		title: "Launch & Growth Support",
		description: "Deploy with confidence and iterate based on data. We handle launch support, performance monitoring, SEO optimization, and ongoing marketing to help you grow sustainably.",
		icon: TrendingUp,
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
	},
];

function ProcessSlider({ steps }: { steps: typeof processSteps }) {
	return (
		<section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10]">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center"
				>
					<h2 className="mb-4 text-fluid-4xl font-bold text-neutral-900 dark:text-white">
						Our Process
					</h2>
					<p className="text-fluid-xl text-neutral-900 dark:text-neutral-200">
						A clear, collaborative journey from idea to success
					</p>
				</motion.div>

				{/* Process Steps Grid - 2 columns */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{steps.map((step, index) => {
						const Icon = step.icon;

						return (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
							>
								{/* Image */}
								<div className="relative h-64 overflow-hidden">
									<ImageReveal
										src={step.image}
										alt={step.title}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform duration-700 group-hover:scale-110"
										priority={index < 2}
										overlay={true}
										overlayVariant="gradient"
									/>

									{/* Icon Badge */}
									<div className="absolute top-6 left-6 z-10">
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl border-2 border-white/30"
										>
											<Icon className="h-8 w-8 text-white" />
										</motion.div>
									</div>

									{/* Step Number */}
									<div className="absolute top-6 right-6 z-10">
										<div className="text-fluid-5xl font-black text-white drop-shadow-2xl">
											0{step.number}
										</div>
									</div>
								</div>

								{/* Text Content */}
								<div className="p-6 sm:p-8">
									<h3 className="mb-3 text-fluid-2xl font-bold text-neutral-900 dark:text-white">
										{step.title}
									</h3>
									<p className="text-fluid-lg leading-relaxed text-neutral-700 dark:text-gray-200">
										{step.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}

export default function ProcessPage() {
	return (
		<main>
		{/* Hero */}
		<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
			{/* Background Image */}
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
					alt="How we work"
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
						How We Work
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
					>
						Our proven process from discovery to delivery, designed for clarity, speed, and measurable results.
					</motion.p>
				</div>
			</Container>
		</section>

			{/* Process Slider */}
			<ProcessSlider steps={processSteps} />

			{/* Communication & Transparency */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Communication & Transparency
						</h2>
						<p className="text-lg text-neutral-900 dark:text-neutral-200">
							We believe in clear, open communication throughout the project
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{ title: "Weekly Updates", desc: "Status reports and sprint reviews keep you informed every step of the way.", image: "/weekly.jpeg" },
							{ title: "Clear Documentation", desc: "Technical docs and knowledge transfer ensure smooth handoffs.", image: "/documentation.jpeg" },
							{ title: "Real-time Collaboration", desc: "Access to project tools, code repositories, and design files.", image: "/realtime.jpeg" },
							{ title: "Transparent Pricing", desc: "Clear cost breakdowns and no hidden fees throughout the project.", image: "/pricing.jpeg" },
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
							>
								<div className="relative h-40 overflow-hidden">
									<ImageReveal
										src={item.image}
										alt={item.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
								</div>
								<div className="p-6">
									<h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
										{item.title}
									</h3>
									<p className="text-sm text-neutral-900 dark:text-neutral-200">
										{item.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Ready to Start?"
				subtitle="Let's discuss your project and how our process can help you achieve your goals."
				primaryButtonText="Schedule a Call"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
