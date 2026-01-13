import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AI & Automation",
	description: "Applied AI, automation, and copilots for real ROI. Intelligent solutions that transform workflows.",
};

export default function AIAutomationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

