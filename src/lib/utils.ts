export function createServicePage(slug: string) {
	return `
import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
	title: "${slug}",
	description: "Service description",
};

export default function ServicePage() {
	const service = getServiceBySlug("${slug}");
	if (!service) return null;

	const processSteps = service.process.map((step, index) => ({
		number: String(index + 1),
		title: step.split(":")[0],
		description: step.split(":")[1]?.trim() || step,
	}));

	return (
		<main>
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						{service.title}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						{service.fullDescription}
					</motion.p>
				</div>
			</section>

			{/* Overview */}
			<section className="py-20">
				<div className="mx-auto max-w-4xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Overview
						</h2>
						<p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
							{service.fullDescription}
						</p>
					</motion.div>
				</div>
			</section>

			{/* Process */}
			<ProcessSection
				title={\`Our Process for \${service.title}\`}
				subtitle="How we deliver results"
				steps={processSteps}
			/>

			{/* Benefits */}
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
							Benefits for Clients
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{service.benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="flex items-start gap-3 rounded-xl border-2 border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
							>
								<CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
								<p className="text-sm font-medium text-neutral-900 dark:text-white">
									{benefit}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Tools */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Tools & Technologies
						</h2>
					</motion.div>
					<div className="flex flex-wrap justify-center gap-3">
						{service.tools.map((tool, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								className="rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
							>
								{tool}
							</motion.span>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title={\`Start Your \${service.shortTitle} Project\`}
				primaryButtonText="Get Started"
				primaryButtonHref="/contact"
				secondaryButtonText="Schedule Consultation"
				secondaryButtonHref="/contact"
			/>
		</main>
	);
}
`;
}

