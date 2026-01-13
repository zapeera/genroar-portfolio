import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Services",
	description: "End-to-end services to validate, build, and grow your business. From strategic planning to development, marketing, and AI solutions.",
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

