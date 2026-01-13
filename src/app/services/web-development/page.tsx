import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Web Development",
	description: "Modern websites and web apps using Next.js, React, and best practices.",
};

export default function WebDevPage() {
	return (
		<main>
			<Section className="pt-16">
				<Heading level={1}>Web Development</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We build fast, accessible, and maintainable web experiences using modern stacks like Next.js, TypeScript, and Tailwind.
				</Paragraph>
			</Section>
			<Section title="Capabilities">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Marketing sites & landing pages",
						"Design systems & component libraries",
						"Headless CMS (Sanity, Contentful)",
						"E‑commerce (Headless, Shopify Storefront)",
						"Performance & accessibility audits",
						"Internationalization & SEO",
					].map((c) => (
						<div key={c} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{c}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Discovery:</span> goals, audience, sitemap, success metrics</li>
					<li><span className="font-medium">Design:</span> wireframes, content, components</li>
					<li><span className="font-medium">Build:</span> Next.js app router, TypeScript, Tailwind</li>
					<li><span className="font-medium">Launch:</span> performance pass, SEO, analytics</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Stack">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Sanity", "Contentful"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}


