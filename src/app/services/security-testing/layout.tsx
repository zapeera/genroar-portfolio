import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cybersecurity & Testing",
	description: "Comprehensive cybersecurity services and quality assurance testing to protect your applications and ensure reliability.",
};

export default function SecurityTestingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

