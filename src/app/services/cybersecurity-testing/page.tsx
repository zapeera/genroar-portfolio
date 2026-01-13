"use client";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";

// Note: Metadata export is not available in client components
// You may need to handle SEO differently for this page

export default function CybersecurityTestingPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Cybersecurity & Testing"
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
							Cybersecurity & Testing
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							Comprehensive cybersecurity services and quality assurance testing to protect your applications and ensure reliability.
						</motion.p>
					</div>
				</Container>
			</section>
			<Section>
				<Heading level={1}>Cybersecurity & Testing</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					Protect your applications and data with comprehensive security assessments and rigorous testing. We help you identify vulnerabilities, ensure compliance, and maintain high-quality standards.
				</Paragraph>
			</Section>
			<Section title="Cybersecurity Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Security audits & assessments",
						"Penetration testing",
						"Vulnerability scanning",
						"Code security reviews",
						"Security architecture design",
						"Compliance consulting (GDPR, HIPAA)",
						"Incident response planning",
						"Security training & awareness",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Testing Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Unit & integration testing",
						"End-to-end (E2E) testing",
						"Performance & load testing",
						"Security testing",
						"Usability testing",
						"Accessibility testing",
						"Regression testing",
						"Test automation",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Our Approach">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Assessment:</span> Comprehensive security and quality evaluation</li>
					<li><span className="font-medium">Planning:</span> Risk analysis and test strategy development</li>
					<li><span className="font-medium">Execution:</span> Systematic testing and security audits</li>
					<li><span className="font-medium">Remediation:</span> Issue tracking and resolution support</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Tools & Standards">
				<div className="flex flex-wrap gap-2 text-sm">
					{["OWASP", "Snyk", "SonarQube", "Jest", "Cypress", "Playwright", "Burp Suite", "Nmap", "OWASP ZAP"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}
