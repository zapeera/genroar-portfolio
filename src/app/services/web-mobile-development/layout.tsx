import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Web & Mobile App Development",
	description: "Full-stack web and mobile application development for iOS, Android, and cross-platform solutions.",
};

export default function WebMobileDevelopmentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

