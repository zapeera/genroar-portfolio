import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description: "Let's talk about your idea. Get in touch and let's discuss how we can turn your vision into reality.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

