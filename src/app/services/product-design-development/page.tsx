"use client";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";

// Note: Metadata export is not available in client components
// You may need to handle SEO differently for this page

export default function ProductDesignDevelopmentPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Product Design & Development"
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
							Product Design & Development
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							End-to-end product design and development from concept to launch, with user-centered design and agile delivery.
						</motion.p>
					</div>
				</Container>
			</section>
			<Section>
				<Heading level={1}>Product Design & Development</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					From ideation to launch, we design and build products that users love. Our integrated approach combines user research, design thinking, and agile development to deliver products that solve real problems.
				</Paragraph>
			</Section>
			<Section title="Design Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"User research & personas",
						"Journey mapping & flows",
						"Wireframing & prototyping",
						"UI/UX design",
						"Design systems",
						"Usability testing",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Development Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Full-stack development",
						"API design & integration",
						"Database architecture",
						"Quality assurance & testing",
						"DevOps & deployment",
						"Performance optimization",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Research:</span> User interviews, market analysis, and requirements gathering</li>
					<li><span className="font-medium">Design:</span> Wireframes, prototypes, and visual design with user feedback</li>
					<li><span className="font-medium">Develop:</span> Agile sprints with continuous integration and testing</li>
					<li><span className="font-medium">Launch:</span> Deployment, monitoring, and iterative improvements</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Stack">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Figma", "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Vercel"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}
