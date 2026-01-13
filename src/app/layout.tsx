import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeScript } from "@/components/ThemeScript";
import { ErrorHandler } from "@/components/ui/ErrorHandler";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "genroar — Idea to Reality for SMBs",
		template: "%s | genroar",
	},
	description:
		"We help small and medium businesses turn ideas into reality: product strategy, web/mobile/software development, SEO, marketing, and AI services.",
	metadataBase: new URL("https://genroar.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
			<head>
				<ThemeScript />
			</head>
			<body className={`${inter.variable} ${poppins.variable} antialiased bg-white text-gray-900 dark:bg-[#0B0C10] dark:text-gray-100 transition-colors duration-300`} suppressHydrationWarning>
				<ThemeProvider>
					<ErrorHandler />
					<OrganizationSchema />
					<main className="min-h-screen bg-white dark:bg-[#0B0C10] transition-colors duration-300">
						<Navbar />
						{children}
						<Footer />
						<ScrollToTop />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
