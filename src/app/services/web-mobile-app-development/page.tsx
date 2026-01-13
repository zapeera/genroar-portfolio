"use client";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";

// Note: Metadata export is not available in client components
// You may need to handle SEO differently for this page

export default function WebMobileAppDevelopmentPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Web & Mobile App Development"
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
							Web & Mobile App Development
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							Full-stack web and mobile application development for iOS, Android, and cross-platform solutions.
						</motion.p>
					</div>
				</Container>
			</section>
			<Section>
				<Heading level={1}>Web & Mobile App Development</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We build fast, scalable web and mobile applications that deliver exceptional user experiences. From responsive web apps to native mobile solutions, we choose the right technology for your needs.
				</Paragraph>
			</Section>
			<Section title="Web Development">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Responsive web applications",
						"Progressive Web Apps (PWA)",
						"Single Page Applications (SPA)",
						"Server-side rendering",
						"E-commerce platforms",
						"Content management systems",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Mobile Development">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Native iOS development (Swift)",
						"Native Android development (Kotlin)",
						"Cross-platform (React Native, Flutter)",
						"Mobile app design & UX",
						"App Store optimization",
						"Push notifications & analytics",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Discovery:</span> Requirements analysis, platform selection, and architecture design</li>
					<li><span className="font-medium">Design:</span> User flows, wireframes, and UI design</li>
					<li><span className="font-medium">Development:</span> Agile sprints with code reviews and testing</li>
					<li><span className="font-medium">Deployment:</span> App store submission, hosting setup, and launch support</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Technologies">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Next.js", "React", "React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Vercel"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}
