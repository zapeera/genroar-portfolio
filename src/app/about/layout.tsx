import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description: "Learn about our mission, values, and the team that turns ideas into reality.",
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

