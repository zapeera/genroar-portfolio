import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"We partner with SMBs to validate ideas and deliver results across product, engineering, SEO, marketing, and AI.",
};

export default function AboutUsPage() {
	return (
		<main>
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
				</div>
				<div className="mx-auto max-w-7xl px-6 text-center sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
					<p className="mt-3 max-w-2xl text-zinc-300">We partner with SMBs to validate ideas and deliver results across product, engineering, SEO, marketing, and AI.</p>
				</div>
			</section>
			<Section>
				<Heading level={1}>About Us</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We help founders and operators turn ambiguous ideas into shippable roadmaps and market-ready products. From discovery to delivery, we combine strategy, design, and engineering for measurable growth.
				</Paragraph>
			</Section>
			<Section title="Our Mission">
				<Paragraph className="max-w-3xl">
					Enable SMBs to act with the speed and quality of great product teams—reducing risk while accelerating outcomes.
				</Paragraph>
			</Section>
			<Section title="How we work">
				<ul className="list-disc space-y-2 pl-5 text-sm">
					<li>Small, senior teams that ship weekly</li>
					<li>Transparent scopes, timelines, and pricing</li>
					<li>Pragmatic tech choices and measurable results</li>
				</ul>
			</Section>
			<Section title="Our Values">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
						<h3 className="font-semibold">Clarity</h3>
						<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Simple plans, clear ownership, and strong defaults.</p>
					</div>
					<div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
						<h3 className="font-semibold">Quality</h3>
						<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Accessible, performant, and maintainable by design.</p>
					</div>
					<div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
						<h3 className="font-semibold">Outcomes</h3>
						<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Impact over output; value over vanity metrics.</p>
					</div>
				</div>
			</Section>
			<Section className="pb-20" title="Our Team">
				<Paragraph className="max-w-3xl">
					We're a team of experienced product builders, engineers, designers, and growth experts passionate about turning ideas into reality. With backgrounds from startups to Fortune 500 companies, we bring deep expertise and fresh perspectives to every project.
				</Paragraph>
			</Section>
		</main>
	);
}

