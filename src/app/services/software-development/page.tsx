import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Software Development",
	description: "Custom software, APIs, and systems tailored to your business processes.",
};

export default function SoftwareDevPage() {
	return (
		<main>
			<Section className="pt-16">
				<Heading level={1}>Software Engineering</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We design and build robust backends, APIs, and internal tools that scale with your business.
				</Paragraph>
			</Section>
			<Section title="Capabilities">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Backend services & APIs",
						"Databases & schema design",
						"System integrations & ETL",
						"Automation & internal tools",
						"DevOps & CI/CD",
						"Observability & reliability",
					].map((c) => (
						<div key={c} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{c}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Requirements:</span> domain modeling and non‑functional needs</li>
					<li><span className="font-medium">Design:</span> architecture, interfaces, and data contracts</li>
					<li><span className="font-medium">Implementation:</span> iterative delivery with tests and reviews</li>
					<li><span className="font-medium">Operate:</span> monitoring, alerting, and cost control</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Stack">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Node.js", "Python", "PostgreSQL", "Redis", "Prisma", "Docker", "AWS", "GCP"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}


