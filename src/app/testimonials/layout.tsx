import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Testimonials",
	description: "What our clients say about working with us. Real feedback from real projects.",
};

export default function TestimonialsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

