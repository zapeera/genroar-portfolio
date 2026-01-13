"use client";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";
import Script from "next/script";
import { useState } from "react";
import { HelpCircle, Code, DollarSign, HeadphonesIcon } from "lucide-react";

const faqCategories = {
	General: [
		{ question: "Why go custom instead of off-the-shelf?", answer: "You get exactly what you need: flexibility, scalability, security, and ownership without license lock-in. Custom solutions are tailored to your specific workflows and can evolve with your business." },
		{ question: "How soon can we start?", answer: "Typically within 1–2 weeks after a short discovery call. We'll align on scope, timeline, and approach, then kick off the project quickly." },
		{ question: "Can you integrate with our team?", answer: "Yes — we can work embedded with your squad or as an autonomous pod with weekly demos. We adapt our workflow to match your team structure and preferences." },
	],
	Development: [
		{ question: "What technologies do you work with?", answer: "We primarily work with modern stacks like Next.js, React, TypeScript, Node.js, and cloud platforms. We choose technologies based on your needs, but prefer proven, maintainable tools." },
		{ question: "How do you reduce timeline and cost?", answer: "Senior teams, strong defaults, automation (CI/CD, codegen), and ruthless scope clarity. We use proven tools and patterns to build faster without sacrificing quality." },
		{ question: "Do you provide ongoing support?", answer: "Yes, we offer ongoing support and maintenance packages. This includes bug fixes, updates, monitoring, and feature enhancements as your product evolves." },
	],
	Pricing: [
		{ question: "Do you work fixed-price?", answer: "For well-defined scopes, yes. Otherwise we prefer sprint-based pricing with clear milestones and deliverables. This gives you flexibility while maintaining predictability." },
		{ question: "What's included in your pricing?", answer: "Our pricing includes project planning, design, development, testing, deployment, and initial support. Additional services like ongoing maintenance are quoted separately." },
		{ question: "Do you offer payment plans?", answer: "Yes, we offer flexible payment plans. Typically we structure payments around milestones to align with project progress and your cash flow." },
	],
	Support: [
		{ question: "What does success look like?", answer: "Agreed outcomes (KPIs), predictable delivery, and post-launch support with iteration. We define success metrics upfront and track them throughout the project." },
		{ question: "How do you handle project changes?", answer: "We use an agile approach with weekly demos and feedback loops. Changes are evaluated for impact on timeline and budget, then incorporated into the next sprint." },
		{ question: "What happens after launch?", answer: "We provide post-launch support including bug fixes, monitoring, and optimizations. Many clients continue with us for ongoing feature development and maintenance." },
	],
};

const categoryIcons = {
	General: HelpCircle,
	Development: Code,
	Pricing: DollarSign,
	Support: HeadphonesIcon,
};

export default function FAQPage() {
	const [activeCategory, setActiveCategory] = useState("General");
	const allFAQs = Object.values(faqCategories).flat();

	return (
		<main>
			<Script
				id="faq-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": allFAQs.map((faq) => ({
							"@type": "Question",
							"name": faq.question,
							"acceptedAnswer": {
								"@type": "Answer",
								"text": faq.answer
							}
						}))
					}),
				}}
			/>
		{/* Hero */}
		<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600"
					alt="Frequently asked questions"
					fill
					className="object-cover opacity-20"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						Frequently Asked Questions
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Find answers to common questions about our services, process, and how we work.
					</motion.p>
				</div>
			</section>

			{/* Category Tabs */}
			<section className="sticky top-16 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-sm py-4 dark:border-neutral-800 dark:bg-neutral-950/95">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex flex-wrap items-center justify-center gap-3">
						{Object.keys(faqCategories).map((category) => {
							const Icon = categoryIcons[category as keyof typeof categoryIcons];
							return (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-all ${
										activeCategory === category
											? "bg-gradient-to-r from-primary to-accent text-black dark:text-white shadow-lg border-2 border-primary/20"
											: "border-2 border-neutral-300 bg-white text-neutral-900 hover:border-primary hover:text-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
									}`}
								>
									<Icon className="h-4 w-4" />
									{category}
								</button>
							);
						})}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20">
				<div className="mx-auto max-w-4xl px-6">
					<motion.div
						key={activeCategory}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="mb-8">
							<h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
								{activeCategory} Questions
							</h2>
							<p className="text-neutral-900 dark:text-neutral-200">
								Common questions about {activeCategory.toLowerCase()} topics.
							</p>
						</div>
						<div className="space-y-4">
							{faqCategories[activeCategory as keyof typeof faqCategories].map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
								>
									<Accordion question={faq.question} answer={faq.answer} />
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Didn't find your question?"
				subtitle="Can't find the answer you're looking for? We're here to help. Reach out and we'll get back to you as soon as possible."
				primaryButtonText="Contact Us"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
