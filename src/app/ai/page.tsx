import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "AI Services",
	description: "Applied AI, automation, copilots, and data products for real business impact.",
};

export default function AIPage() {
	return (
		<main>
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
				</div>
				<div className="mx-auto max-w-7xl px-6 text-center sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI Services</h1>
					<p className="mt-3 max-w-2xl text-zinc-300">Applied AI, automation, copilots, and analytics focused on ROI and reliability.</p>
				</div>
			</section>
			<Section>
				<Heading level={1}>AI Services</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We design, evaluate, and implement AI solutions—from copilots and RAG to automations and analytics—focused on ROI and reliability.
				</Paragraph>
			</Section>
			<Section title="Use cases">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Sales & support copilots",
						"Knowledge base search (RAG)",
						"Workflow automations",
						"Structured data extraction",
						"Quality checks & compliance",
						"Analytics & forecasting",
					].map((u) => (
						<div key={u} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{u}</div>
					))}
				</div>
			</Section>
			<Section title="Approach">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Problem framing:</span> high‑ROI candidates with clear success metrics</li>
					<li><span className="font-medium">Evaluation:</span> model & vendor selection, safety, latency, cost</li>
					<li><span className="font-medium">Prototype:</span> measurable pilot with human‑in‑the‑loop where needed</li>
					<li><span className="font-medium">Productionize:</span> guardrails, monitoring, and change management</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Stack">
				<div className="flex flex-wrap gap-2 text-sm">
					{["OpenAI", "Anthropic", "Azure OpenAI", "LangChain", "Pinecone", "Weaviate", "Vercel AI SDK"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}


