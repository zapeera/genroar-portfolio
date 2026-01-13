"use client";
import { useState, useEffect, useRef } from "react";
import { EnhancedHero } from "@/components/sections/EnhancedHero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ParallaxCTA } from "@/components/sections/ParallaxCTA";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { Button } from "@/components/ui/Button";
import { Spacer } from "@/components/ui/Spacer";
import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { motion, useScroll, useTransform } from "framer-motion";

export function HomePageContent() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const serviceImages = [
		"/business1.jpeg", // Business Planning
		"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&auto=format&fit=crop&q=80", // Product Development
		"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&auto=format&fit=crop&q=80", // Web & Mobile
		"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&auto=format&fit=crop&q=80", // Marketing
		"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&auto=format&fit=crop&q=80", // AI & Automation
		"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&auto=format&fit=crop&q=80", // Security
	];

	// Scroll tracking for sticky cards
	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const section = sectionRef.current;
			const rect = section.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Calculate scroll progress within the section
			// When section top is at viewport top, progress is 0
			// When section bottom is at viewport bottom, progress is 1
			const sectionTop = rect.top;
			const sectionHeight = rect.height;

			// Only calculate when section is in viewport
			if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) {
				return;
			}

			// Calculate progress: 0 when section enters viewport, 1 when it exits
			// Adjust calculation to ensure we can reach the last card
			const totalCards = services.length;
			const effectiveHeight = sectionHeight + windowHeight;
			const scrollProgress = Math.max(0, Math.min(1,
				(windowHeight - sectionTop) / effectiveHeight
			));

			// Map scroll progress to card index (0 to services.length - 1)
			// Distribute progress evenly across all cards, ensuring last card is reachable
			// Use a slightly adjusted calculation to ensure we reach the last card
			const adjustedProgress = Math.min(1, scrollProgress * (totalCards / (totalCards - 0.5)));
			const cardIndex = Math.min(
				Math.floor(adjustedProgress * totalCards),
				totalCards - 1
			);

			// Ensure we can reach the last card when scrolling near the end
			// Use a threshold to activate the last card earlier
			const threshold = 1 - (1 / totalCards);
			const finalIndex = scrollProgress >= threshold ? totalCards - 1 : Math.max(0, cardIndex);

			setActiveIndex(finalIndex);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll, { passive: true });
		handleScroll(); // Initial call

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	const processSteps = [
		{
			number: "1",
			title: "Discovery & Research",
			description: "Deep dive into your business goals, target market, competitive landscape, and user needs. We conduct comprehensive research to understand what you need to succeed in your industry.",
		},
		{
			number: "2",
			title: "Strategy & Planning",
			description: "Create a strategic roadmap with clear milestones, priorities, and success metrics. We develop detailed project plans, timelines, and resource allocation strategies tailored to your objectives.",
		},
		{
			number: "3",
			title: "Design & Prototyping",
			description: "Design intuitive user interfaces and create interactive prototypes. We focus on user experience, visual design, and ensuring your product is both beautiful and functional before development begins.",
		},
		{
			number: "4",
			title: "Development & Build",
			description: "Design and develop your product with agile sprints, weekly demos, and continuous feedback. Our team uses modern technologies and best practices to build scalable, maintainable solutions.",
		},
		{
			number: "5",
			title: "Quality Assurance",
			description: "Rigorous quality assurance, security audits, and performance testing before launch. We ensure your product is bug-free, secure, and performs optimally across all devices and browsers.",
		},
		{
			number: "6",
			title: "Launch & Deployment",
			description: "Execute a smooth launch with proper deployment strategies, monitoring, and support. We handle all technical aspects of going live and ensure everything runs smoothly from day one.",
		},
		{
			number: "7",
			title: "Optimization & Growth",
			description: "Launch, measure, optimize, and iterate with marketing, analytics, and ongoing support. We track performance metrics and continuously improve your product based on real user data.",
		},
		{
			number: "8",
			title: "Maintenance & Support",
			description: "Ongoing maintenance, updates, and support to keep your product running smoothly. We provide 24/7 monitoring, regular updates, and quick response times for any issues that arise.",
		},
	];

	return (
		<main>
			{/* 1. Enhanced Hero Section */}
			<EnhancedHero
				headline="We Turn Ideas into Reality"
				subtext="From concept to launch — our planners, developers, and marketers build your business success."
				primaryButtonText="Start Your Project"
				primaryButtonHref="/contact"
				secondaryButtonText="Book a Free Consultation"
				secondaryButtonHref="/contact"
			/>

			<Spacer size="md" />

			{/* 2. Why Choose Us */}
			<WhyChooseUs />

			<Spacer size="md" />

			{/* 3. What We Do - Scroll Triggered Cards */}
			<section
				ref={sectionRef}
				className="relative bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300"
				style={{ minHeight: `${services.length * 100}vh` }}
			>
				{/* Background decoration */}
				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.03, 0.06, 0.03],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
					/>
					<motion.div
						animate={{
							scale: [1.2, 1, 1.2],
							opacity: [0.05, 0.08, 0.05],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1,
						}}
						className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
					/>
				</div>

				{/* Sticky wrapper that centers the entire section vertically */}
				<div className="sticky top-0 h-screen flex items-center justify-center z-10">
					<Container className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24" fullWidth>
						<div className="flex flex-col h-full justify-center">
							{/* Header - Fixed at top of centered area */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-center mb-12 sm:mb-16 md:mb-30 relative z-30"
								style={{ flexShrink: 0 }}
							>
								<h2 className="mb-4 text-fluid-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight">
									What We Do
								</h2>
								<p className="mx-auto max-w-3xl text-fluid-xl text-gray-600 dark:text-gray-300 font-medium">
									Comprehensive solutions from strategy to execution
								</p>
							</motion.div>

							{/* Scroll-triggered Cards Container - Below header */}
							<div className="relative w-full flex-1 flex items-start justify-center" style={{ minHeight: '500px', paddingTop: '0px' }}>
						{services.map((service, index) => {
							const Icon = service.icon;
							const isActive = index === activeIndex;
							const isPast = index < activeIndex;
							const isFuture = index > activeIndex;

							// All cards stay in the same centered position - no upward movement
							// Base position is centered in the cards container
							const basePosition = 200; // Center position in pixels from top of container

							return (
								<div
									key={service.id}
									className="absolute inset-x-0"
									style={{
										zIndex: isActive ? services.length : index, // Active card on top
										top: `${basePosition}px`,
										transform: 'translateY(-50%)',
										width: '100%',
									}}
								>
									<motion.div
										initial={{ opacity: 0, y: 50, scale: 0.9 }}
										animate={{
											opacity: isActive ? 1 : 0, // Only active card is visible
											y: isActive ? 0 : 50,
											scale: isActive ? 1 : 0.9,
										}}
										transition={{ duration: 0.5, ease: "easeOut" }}
										className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full max-w-[2000px] mx-auto rounded-3xl overflow-hidden shadow-2xl"
										style={{
											pointerEvents: isActive ? 'auto' : 'none',
										}}
									>
										{/* Background Image */}
										<ImageReveal
											src={serviceImages[index] || serviceImages[0]}
											alt={service.title}
											fill
											sizes="100vw"
											className="object-cover"
											priority={index === 0}
											overlay={true}
											overlayVariant="gradient"
										/>

										{/* Content Container */}
										<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 h-full">
											{/* Icon */}
											<div className="mb-4 sm:mb-5">
												<div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-2xl">
													<Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white drop-shadow-2xl" />
												</div>
											</div>

											{/* Service Title */}
											<h3 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl leading-tight">
												{service.title}
											</h3>

											{/* Service Description */}
											<p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white drop-shadow-2xl font-medium">
												{service.description}
											</p>

											{/* CTA Button */}
											<motion.div
												animate={{
													opacity: isActive ? 1 : 0,
													y: isActive ? 0 : 20,
												}}
												transition={{ duration: 0.4, delay: 0.2 }}
												className="mt-6 sm:mt-8"
											>
												<Button
													href={`/services/${service.slug}`}
													variant="glass"
													size="lg"
													showArrow
													className="text-base sm:text-lg"
												>
													Learn More
												</Button>
											</motion.div>
										</div>
									</motion.div>
								</div>
							);
						})}
							</div>
						</div>
					</Container>
				</div>
			</section>

			<Spacer size="md" />

			{/* 3.5. What We Do - Business Planning & Strategy Detail Section */}


			{/* 4. How We Work - Enhanced Process */}
			<ProcessSection
				title="How We Work"
				subtitle="A clear, collaborative process from idea to launch."
				steps={processSteps.slice(0, 4)}
			/>

			<Spacer size="md" />

			{/* 5. Testimonials (Enhanced) */}
			<TestimonialsSection
				testimonials={testimonials}
				title="What Our Clients Say"
				subtitle="Real feedback from real projects."
			/>

			<Spacer size="md" />

			{/* 6. Final CTA with Parallax */}
			<ParallaxCTA />
		</main>
	);
}
