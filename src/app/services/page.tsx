"use client";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";

export default function ServicesPage() {
	return (
		<main>
		{/* Hero */}
		<section className="relative min-h-[90vh] overflow-hidden bg-black dark:bg-black">
			{/* Background Image */}
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
					alt="Our services"
					fill
					sizes="100vw"
					className="object-cover grayscale-[0.3] brightness-105 filter"
					priority
					overlay={false}
				/>
			</div>
			{/* Semi-transparent Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
			<Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
				<div className="w-full text-center">
					<motion.h1
						initial={{ opacity: 0, y: 50, scale: 0.95 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
						}}
						transition={{
							duration: 1,
							delay: 0.3,
							type: "spring",
							stiffness: 100,
							damping: 15,
						}}
						className="mb-4 sm:mb-6 text-fluid-6xl font-bold text-white leading-tight drop-shadow-2xl"
					>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							{"Our Services".split(" ").map((word, i) => (
								<motion.span
									key={i}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: 0.6 + i * 0.1,
									}}
									className="inline-block mr-2"
								>
									{word}
								</motion.span>
							))}
						</motion.span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 1,
							delay: 0.8,
							ease: "easeOut",
						}}
						className="text-fluid-xl leading-relaxed text-white px-2 drop-shadow-2xl"
					>
						From idea validation to full-scale builds, explore our comprehensive service areas.
					</motion.p>
				</div>
			</Container>
		</section>

			{/* Services Grid */}
			<section className="bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => (
							<ServiceCard key={service.id} service={service} index={index} />
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}
