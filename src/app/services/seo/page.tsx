"use client";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";

// Note: Metadata export is not available in client components
// You may need to handle SEO differently for this page

export default function SEOPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="SEO"
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
							SEO
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							Technical SEO, on-page optimization, and content strategy to grow organic traffic.
						</motion.p>
					</div>
				</Container>
			</section>
			<Section className="pt-16">
				<Heading level={1}>SEO</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					From technical audits to content plans, we improve visibility and drive sustainable growth.
				</Paragraph>
			</Section>
			<Section title="Capabilities">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Technical audits & fixes",
						"Site architecture & internal linking",
						"Keyword research & mapping",
						"On‑page optimization",
						"Content strategy & briefs",
						"Analytics & reporting",
					].map((c) => (
						<div key={c} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{c}</div>
					))}
				</div>
			</Section>
			<Section className="pb-20" title="Tooling">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Search Console", "GA4", "Ahrefs", "Screaming Frog", "Sitebulb"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}
