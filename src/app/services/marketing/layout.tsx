import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Marketing & Growth",
	description: "Full-funnel growth across paid, lifecycle, and brand marketing to scale your business.",
};

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

