import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog & Insights",
	description: "Insights on product development, technology, AI, growth, and best practices from our team.",
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

