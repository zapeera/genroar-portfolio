import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ",
	description: "Frequently asked questions about our services, process, pricing, and how we work.",
};

export default function FAQLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

