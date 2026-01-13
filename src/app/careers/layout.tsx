import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Join Our Team",
	description: "Build meaningful products with a team that values quality, clarity, and impact. Explore open positions and join us.",
};

export default function CareersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

