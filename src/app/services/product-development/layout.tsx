import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Product Design & Development",
	description: "End-to-end product design and development from concept to launch, with user-centered design and agile delivery.",
};

export default function ProductDevelopmentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

