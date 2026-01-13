import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Mobile Development",
	description: "iOS, Android, and cross-platform app development focused on UX and performance.",
};

export default function MobileDevPage() {
	return (
		<main>
			<Section className="pt-16">
				<Heading level={1}>Mobile Development</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					Native and cross-platform mobile apps that users love to use and teams love to maintain.
				</Paragraph>
			</Section>
			<Section title="Capabilities">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"iOS and Android native",
						"React Native cross‑platform",
						"Offline‑first and sync",
						"Push notifications and deep links",
						"Analytics and A/B testing",
						"App Store and Play Store readiness",
					].map((c) => (
						<div key={c} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{c}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Product definition:</span> user stories, flows, and success metrics</li>
					<li><span className="font-medium">Architecture:</span> data model, sync strategy, platform choices</li>
					<li><span className="font-medium">Build:</span> iterative sprints with CI and test coverage</li>
					<li><span className="font-medium">Ship:</span> store submission, release plan, and observability</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Stack">
				<div className="flex flex-wrap gap-2 text-sm">
					{["React Native", "Swift", "Kotlin", "Expo", "Firebase", "SQLite", "Sentry"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}


