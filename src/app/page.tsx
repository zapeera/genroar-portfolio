import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
	title: "Home",
	description: "We turn ideas into reality. From concept to launch — our planners, developers, and marketers build your business success.",
};

export default function HomePage() {
	return <HomePageContent />;
}
