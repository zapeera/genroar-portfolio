"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Send } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import Container from "./Container";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);
		const checkTheme = () => {
			if (typeof window !== "undefined") {
				setIsDark(document.documentElement.classList.contains("dark"));
			}
		};
		checkTheme();
		
		const handleThemeChange = () => checkTheme();
		window.addEventListener("themechange", handleThemeChange);
		
		const observer = new MutationObserver(() => checkTheme());
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});
		
		return () => {
			window.removeEventListener("themechange", handleThemeChange);
			observer.disconnect();
		};
	}, []);

	const socialLinks = [
		{ icon: Twitter, href: "https://twitter.com/genroar", label: "Twitter" },
		{ icon: Linkedin, href: "https://linkedin.com/company/genroar", label: "LinkedIn" },
		{ icon: Github, href: "https://github.com/genroar", label: "GitHub" },
		{ icon: Instagram, href: "https://instagram.com/genroar", label: "Instagram" },
	];

	return (
		<footer className="relative border-t-2 border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-[#0B0C10] transition-colors duration-300">
			{/* Wave Top Border */}
			<div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
				<div className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary" />
			</div>

		<Container>
		<div className="">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Company */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						{mounted ? (
							<Link href="/" className="z-50 relative flex items-center ml-[-40px] h-4 sm:h-16">
							{mounted ? (
								<div className="relative" style={{ background: 'transparent' }}>
									<Image
										src={isDark ? "/whitel.png" : "/blackl.png"}
										alt="GENROAR Logo"
										width={240}
										height={10}
										className=" object-contain"
										style={{ 
											background: 'transparent',
											backgroundColor: 'transparent',
											mixBlendMode: 'normal'
										}}
										priority
										unoptimized
									/>
								</div>
							) : (
								<span className="text-lg sm:text-xl font-bold tracking-tight text-black">GENROAR</span>
							)}
						</Link>
						) : (
							<h3 className="mb-4 text-xl font-bold">
								<span className="text-black">GENROAR</span>
							</h3>
						)}
						<p className="mb-6 text-sm leading-relaxed text-neutral-900 dark:text-neutral-200">
							Turning ideas into reality. We help entrepreneurs and businesses plan, build, and grow their products with cutting-edge technology and strategic expertise.
						</p>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/services/business-planning" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Business Planning
								</Link>
							</li>
							<li>
								<Link href="/services/product-development" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Product Development
								</Link>
							</li>
							<li>
								<Link href="/services/web-mobile-development" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Web & Mobile
								</Link>
							</li>
							<li>
								<Link href="/services/marketing" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Marketing & Growth
								</Link>
							</li>
							<li>
								<Link href="/services/ai-automation" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									AI & Automation
								</Link>
							</li>
							<li>
								<Link href="/services/security-testing" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Security & Testing
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Resources */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Resources</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/about" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/portfolio" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Portfolio
								</Link>
							</li>
							<li>
								<Link href="/process" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									How We Work
								</Link>
							</li>
							<li>
								<Link href="/blog" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Blog & Insights
								</Link>
							</li>
							<li>
								<Link href="/faq" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/careers" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
									Careers
								</Link>
							</li>
						</ul>

						{/* Newsletter */}
						<div className="mt-6">
							<h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Newsletter</h4>
							<p className="mb-3 text-xs text-neutral-900 dark:text-neutral-200">
								Get updates on product development, AI, and growth strategies.
							</p>
							<form className="flex gap-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 rounded-lg border-2 border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
								/>
								<button
									type="submit"
									className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg"
								>
									<Send className="h-4 w-4" />
								</button>
							</form>
						</div>
					</motion.div>

					{/* Contact */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Contact</h4>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start gap-2">
								<Mail className="h-4 w-4 shrink-0 mt-0.5 text-neutral-800 dark:text-neutral-300" />
								<a href="mailto:info.genroar7@gmail.com" className="text-neutral-900 transition-colors hover:text-primary dark:text-white">
									info.genroar7@gmail.com
								</a>
							</li>
							<li className="flex items-start gap-2">
								<Phone className="h-4 w-4 shrink-0 mt-0.5 text-neutral-800 dark:text-neutral-300" />
								<a href="tel:+923107100663" className="text-neutral-900 transition-colors hover:text-primary dark:text-white dark:hover:text-primary-400">
									+92 (310) 7100-663
								</a>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="h-4 w-4 shrink-0 mt-0.5 text-neutral-800 dark:text-neutral-300" />
								<span className="text-neutral-900 dark:text-neutral-200">Remote Worldwide</span>
							</li>
						</ul>
					</motion.div>
				</div>

				<div className="mt-10 flex flex-col items-center justify-between gap-4 border-t-2 border-neutral-200 pt-6 text-sm dark:border-neutral-800 sm:flex-row">
						<p className="text-neutral-900 dark:text-neutral-200">© {currentYear} Genroar. All rights reserved.</p>
					<div className="flex gap-6">
						<Link href="/terms" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
							Terms
						</Link>
						<Link href="/privacy" className="text-neutral-900 transition-colors hover:text-primary dark:text-neutral-200">
							Privacy
						</Link>
					</div>
				</div>
			</div>
		</Container>
		</footer>
	);
}
