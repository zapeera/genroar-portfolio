"use client";
import { OurStory } from "@/components/sections/OurStory";
import { LeadershipTeam } from "@/components/sections/LeadershipTeam";
import { CompanyCulture } from "@/components/sections/CompanyCulture";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Award } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ImageOverlay } from "@/components/ui/ImageOverlay";

const values = [
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
		image: "/inovation.jpeg",
	},
	{
		icon: Heart,
		title: "Integrity",
		description: "Honest communication, transparent processes, and ethical business practices in everything we do.",
		image: "/integrity.jpeg",
	},
	{
		icon: Users,
		title: "Collaboration",
		description: "We work as partners with our clients, fostering strong relationships built on trust and respect.",
		image: "/collaboration.jpeg",
	},
	{
		icon: Award,
		title: "Excellence",
		description: "We strive for excellence in every project, delivering quality results that exceed expectations.",
		image: "/excellence.jpeg",
	},
];

export default function AboutPage() {
	return (
		<main>
			{/* 1. Hero Banner with Background Image */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Our team"
						fill
						sizes="100vw"
						className="object-cover grayscale-[0.3] brightness-105"
						priority
						overlay={false}
					/>
				</div>
				{/* Semi-transparent Overlay - Similar to hero section */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
				<div className="relative z-10 mx-auto flex min-h-[85vh] sm:min-h-[90vh] w-full max-w-[1920px] items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-20">
					<div className="w-full text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="mb-6 text-fluid-5xl font-bold text-white"
						>
							Who We Are
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white"
						>
							We're a team of planners, developers, designers, and marketers passionate about turning ideas into reality.
						</motion.p>
						<motion.blockquote
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mt-8 text-fluid-xl italic text-white"
						>
							"Building the future, one idea at a time."
						</motion.blockquote>
					</div>
				</div>
			</section>

			{/* 2. Our Story */}
			<OurStory />

			{/* 3. Mission, Vision & Values */}
			<section className="bg-gradient-to-b from-white via-gray-50/50 to-white py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 sm:mb-16 text-center"
					>
						<h2 className="mb-4 text-fluid-4xl font-extrabold text-gray-900 dark:text-white">
							Our Vision & Values
						</h2>
						<p className="mx-auto max-w-2xl text-fluid-xl text-gray-600 dark:text-gray-300">
							The principles that guide everything we do
						</p>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
						{values.map((value, index) => {
							const Icon = value.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
								>
									{/* Image Background */}
									<div className="relative h-64 overflow-hidden">
										<ImageReveal
											src={value.image}
											alt={value.title}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											priority={index < 2}
											overlay={true}
											overlayVariant="gradient"
										/>

										{/* Icon Badge */}
										<div className="absolute top-6 left-6 z-10">
											<motion.div
												whileHover={{ scale: 1.1, rotate: 5 }}
												className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl border-2 border-white/30"
											>
												<Icon className="h-8 w-8 text-white" />
											</motion.div>
										</div>
									</div>

									{/* Content */}
									<div className="p-6 sm:p-8">
										<h3 className="mb-3 text-fluid-3xl font-bold text-gray-900 dark:text-white">
											{value.title}
										</h3>
										<p className="text-fluid-lg leading-relaxed text-gray-700 dark:text-gray-300">
											{value.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</Container>
			</section>

			{/* 4. Leadership Team */}
			<LeadershipTeam />

			{/* 5. Our Culture */}
			<CompanyCulture />
		</main>
	);
}
