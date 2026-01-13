import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Selected work and case studies across industries and stages.",
};

export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

