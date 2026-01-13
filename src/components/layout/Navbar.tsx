"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MegaMenu } from "@/components/ui/MegaMenu";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useTheme } from "@/contexts/ThemeContext";
import { services } from "@/data/services";

const aboutLinks = [
	{ href: "/about", label: "About Us", desc: "Our story and mission" },
	{ href: "/process", label: "How We Work", desc: "Our proven process" },
	{ href: "/testimonials", label: "Testimonials", desc: "Client success stories" },
	{ href: "/careers", label: "Careers", desc: "Join our team" },
];

const links: Array<{ href: string; label: string; hasDropdown?: boolean }> = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About", hasDropdown: true },
	{ href: "/services", label: "Services", hasDropdown: true },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

function Navbar() {
	const pathname = usePathname();
	const { theme } = useTheme();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [hoveredMenu, setHoveredMenu] = useState<"services" | "about" | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState<{ [key: string]: boolean }>({});
	const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full">
			<div
				className={`border-b transition-all duration-300 ${
					scrolled
						? "border-gray-200 bg-white/98 backdrop-blur-md shadow-lg dark:border-gray-800 dark:bg-[#0B0C10]/98"
						: "border-transparent bg-white/80 backdrop-blur-sm dark:bg-[#0B0C10]/80"
				}`}
			>
				<div className="mx-auto flex min-h-16 sm:min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
					<Link href="/" className="z-50 relative flex items-center h-14 sm:h-16">
						{mounted ? (
							<div className="relative" style={{ background: 'transparent' }}>
								<Image
									src={isDark ? "/whitel.png" : "/blackl.png"}
									alt="GENROAR Logo"
									width={240}
									height={80}
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

					{/* Desktop Navigation - Only visible at 1280px+ */}
					<nav className="hidden xl:flex items-center gap-4 xl:gap-6 2xl:gap-8">
						{links.map((l) => {
							const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
							const isServicesOrAbout = l.label === "Services" || l.label === "About";

							return (
								<div
									key={l.href}
									className="relative"
									onMouseEnter={() => l.hasDropdown && isServicesOrAbout && setHoveredMenu(isServicesOrAbout ? (l.label === "Services" ? "services" : "about") : null)}
									onMouseLeave={() => setHoveredMenu(null)}
								>
									<Link
										href={l.href}
										className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
											active ? "text-primary" : "text-gray-900 dark:text-gray-100"
										}`}
									>
										{l.label}
										{l.hasDropdown && <ChevronDown className="h-4 w-4" />}
									</Link>
									{l.hasDropdown && isServicesOrAbout && (
										<MegaMenu
											isOpen={hoveredMenu === (l.label === "Services" ? "services" : "about")}
											type={l.label === "Services" ? "services" : "about"}
										/>
									)}
								</div>
							);
						})}
					</nav>

					{/* Desktop Actions (Dark Mode + Get Quote) - Only visible at 1280px+ */}
					<div className="hidden xl:flex items-center gap-3 xl:gap-4">
						<DarkModeToggle />
						<button
							onClick={() => setQuoteModalOpen(true)}
							className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(47,47,162,0.5)] whitespace-nowrap"
						>
							<span className="relative z-10">Get a Free Quote</span>
						</button>
					</div>

					{/* Mobile Menu Button - Only visible below 1280px */}
					<button
						type="button"
						className="xl:hidden flex text-gray-900 dark:text-gray-100 p-2 -mr-2 z-50 relative"
						aria-label="Toggle menu"
						onClick={() => setOpen(!open)}
					>
						{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-[#0B0C10] xl:hidden"
					>
						<div className="flex flex-col gap-3">
							{links.map((l) => {
								const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
								const isServicesOrAbout = l.label === "Services" || l.label === "About";

								return (
									<div key={l.href} className="flex flex-col">
										{l.hasDropdown && isServicesOrAbout ? (
											<>
												<button
													onClick={() => setMobileMenuOpen(prev => ({ ...prev, [l.href]: !prev[l.href] }))}
													className={`flex items-center justify-between text-sm font-medium transition-colors ${
														active ? "text-primary" : "text-gray-900 dark:text-gray-100"
													}`}
												>
													{l.label}
													<ChevronDown className={`h-4 w-4 transition-transform ${mobileMenuOpen[l.href] ? 'rotate-180' : ''}`} />
												</button>
												{mobileMenuOpen[l.href] && (
													<div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-gray-200 pl-4 dark:border-gray-700">
														{l.label === "Services" ? (
															services.map((service) => (
																<Link
																	key={service.id}
																	href={`/services/${service.slug}`}
																	className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
																	onClick={() => setOpen(false)}
																>
																	{service.title}
																</Link>
															))
														) : (
															aboutLinks.map((link) => (
																<Link
																	key={link.href}
																	href={link.href}
																	className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
																	onClick={() => setOpen(false)}
																>
																	{link.label}
																</Link>
															))
														)}
													</div>
												)}
											</>
										) : (
											<Link
												href={l.href}
												className={`text-sm font-medium transition-colors ${
													active ? "text-primary" : "text-gray-900 dark:text-gray-100"
												}`}
												onClick={() => setOpen(false)}
											>
												{l.label}
											</Link>
										)}
									</div>
								);
							})}
							<div className="mt-2 flex items-center justify-between">
								<button
									onClick={() => {
										setQuoteModalOpen(true);
										setOpen(false);
									}}
									className="rounded-full border-2 border-black bg-transparent px-6 py-2 text-center text-sm font-semibold text-black transition-all hover:bg-black hover:text-white hover:scale-105"
								>
									Get a Free Quote
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Quote Modal */}
			<QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
		</header>
	);
}

export default Navbar;
