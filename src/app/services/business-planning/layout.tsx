import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Business Planning & Strategy",
	description: "Strategic planning and business consulting to validate ideas, define roadmaps, and accelerate growth.",
};

export default function BusinessPlanningLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

