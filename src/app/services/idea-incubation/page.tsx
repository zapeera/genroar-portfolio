import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Idea Incubation",
	description: "Validate feasibility, sharpen strategy, and shape a buildable roadmap.",
};

export default function IdeaIncubationPage() {
	return (
		<main>
			<Section className="pt-16">
				<Heading level={1}>Idea Incubation</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We pressure-test ideas, align on outcomes, and plan what to build first.
				</Paragraph>
			</Section>
			<Section title="What you get in 1–2 weeks">
				<ul className="list-disc space-y-2 pl-5 text-sm">
					<li>Feasibility assessment and risk map</li>
					<li>Problem statement, audiences, and JTBD</li>
					<li>Lean scope and phased roadmap</li>
					<li>Estimates, team plan, and timeline</li>
				</ul>
			</Section>
			<Section className="pb-20" title="Outputs">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">Product brief & success metrics</div>
					<div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">Scoping doc & timeline</div>
				</div>
			</Section>
		</main>
	);
}


