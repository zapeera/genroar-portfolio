"use client";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";
import { JobApplicationModal } from "@/components/ui/JobApplicationModal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Clock, Filter, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
	const [selectedDepartment, setSelectedDepartment] = useState("All");
	const [selectedType, setSelectedType] = useState("All");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedJob, setSelectedJob] = useState<string | null>(null);

	const openPositions = [
		{
			title: "Senior Full-Stack Engineer",
			location: "Remote",
			type: "Full-time",
			department: "Engineering",
			description: "Build scalable web applications using modern technologies like Next.js, React, Node.js."
		},
		{
			title: "Product Designer",
			location: "Remote",
			type: "Full-time",
			department: "Design",
			description: "Create beautiful, intuitive user experiences for web and mobile applications."
		},
		{
			title: "Growth Marketing Manager",
			location: "Remote",
			type: "Full-time",
			department: "Marketing",
			description: "Drive growth through strategic marketing campaigns and data-driven insights."
		},
		{
			title: "AI/ML Engineer",
			location: "Remote",
			type: "Full-time",
			department: "Engineering",
			description: "Develop AI-powered solutions and machine learning models for client products."
		},
		{
			title: "DevOps Engineer",
			location: "Remote",
			type: "Full-time",
			department: "Engineering",
			description: "Manage infrastructure, CI/CD pipelines, and cloud deployments."
		},
		{
			title: "UX Researcher",
			location: "Remote",
			type: "Part-time",
			department: "Design",
			description: "Conduct user research and gather insights to inform product decisions."
		},
	];

	const benefits = [
		"Competitive salary and equity",
		"Fully remote work",
		"Flexible working hours",
		"Health insurance",
		"Learning & development budget",
		"Top-tier equipment",
		"Unlimited PTO",
		"Annual team retreats",
	];

	const departments = ["All", "Engineering", "Design", "Marketing"];
	const types = ["All", "Full-time", "Part-time", "Contract"];

	const filteredPositions = openPositions.filter((pos) => {
		const deptMatch = selectedDepartment === "All" || pos.department === selectedDepartment;
		const typeMatch = selectedType === "All" || pos.type === selectedType;
		return deptMatch && typeMatch;
	});

	const galleryImages = [
		"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
		"https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
		"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400",
		"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
		"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
		"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
	];

	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Team collaboration"
						fill
						sizes="100vw"
						className="object-cover grayscale-[0.3] brightness-105"
						priority
						overlay={false}
					/>
				</div>
				{/* Semi-transparent Overlay - Similar to hero section */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
				<Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
					<div className="w-full text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="mb-6 text-fluid-5xl font-bold text-white drop-shadow-2xl"
						>
							Join Our Mission
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							Build meaningful products with a team that values quality, clarity, and impact.
						</motion.p>
					</div>
				</Container>
			</section>

			{/* Why Work With Us */}
			<section className="py-20">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-fluid-4xl font-bold text-neutral-900 dark:text-white">
							Why Work With Us
						</h2>
						<p className="text-fluid-xl text-neutral-900 dark:text-neutral-200">
							More than just a job — it's a career with purpose
						</p>
					</motion.div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{ title: "Impactful Work", desc: "Work on projects that matter and see your contributions make a real difference.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" },
							{ title: "Autonomy & Ownership", desc: "Take ownership of your work with the freedom to make decisions and innovate.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80" },
							{ title: "Learning Culture", desc: "Continuous learning opportunities and exposure to cutting-edge technologies.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80" },
							{ title: "Collaborative Team", desc: "Work with experienced, supportive colleagues who value quality and clarity.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80" },
							{ title: "Work-Life Balance", desc: "Flexible hours, remote work, and respect for your time and boundaries.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
							{ title: "Growth Opportunities", desc: "Clear career paths and opportunities to grow both professionally and personally.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80" },
						].map((perk, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3, margin: "-50px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
							>
								<div className="relative h-48 overflow-hidden">
									<ImageReveal
										src={perk.image}
										alt={perk.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
								</div>
								<div className="p-6">
									<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">{perk.title}</h3>
									<p className="text-sm text-neutral-900 dark:text-neutral-200">{perk.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Benefits */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Benefits & Perks
						</h2>
					</motion.div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, amount: 0.3, margin: "-50px" }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								className="flex items-center gap-2 rounded-lg border-2 border-neutral-200 bg-white p-4 text-sm dark:border-neutral-800 dark:bg-neutral-950"
							>
								<CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
								<span className="text-neutral-900 dark:text-white">{benefit}</span>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Team Life Gallery */}
			<section className="py-20">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-fluid-4xl font-bold text-neutral-900 dark:text-white">
							Team Life
						</h2>
						<p className="text-fluid-xl text-neutral-900 dark:text-neutral-200">
							A glimpse into our culture and team events
						</p>
					</motion.div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						{galleryImages.map((src, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, amount: 0.3, margin: "-50px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="relative h-48 overflow-hidden rounded-xl"
							>
								<ImageReveal
									src={src}
									alt={`Team event ${index + 1}`}
									fill
									sizes="(max-width: 768px) 50vw, 33vw"
									className="object-cover"
								/>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Open Positions */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-8 text-center"
					>
						<h2 className="mb-4 text-fluid-4xl font-bold text-neutral-900 dark:text-white">
							Open Positions
						</h2>
					</motion.div>

					{/* Filters */}
					<div className="mb-8 flex flex-wrap items-center justify-center gap-4">
						<div className="flex items-center gap-2">
							<Filter className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
							<span className="text-sm font-medium text-neutral-900 dark:text-neutral-200">Department:</span>
							<div className="flex gap-2">
								{departments.map((dept) => (
									<button
										key={dept}
										onClick={() => setSelectedDepartment(dept)}
										className={`rounded-full px-4 py-1 text-sm transition-all ${
											selectedDepartment === dept
												? "bg-gradient-to-r from-primary to-accent text-black dark:text-white"
												: "border border-neutral-300 bg-white text-neutral-900 hover:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
										}`}
									>
										{dept}
									</button>
								))}
							</div>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-sm font-medium text-neutral-900 dark:text-neutral-200">Type:</span>
							<div className="flex gap-2">
								{types.map((type) => (
									<button
										key={type}
										onClick={() => setSelectedType(type)}
										className={`rounded-full px-4 py-1 text-sm transition-all ${
											selectedType === type
												? "bg-gradient-to-r from-primary to-accent text-black dark:text-white"
												: "border border-neutral-300 bg-white text-neutral-900 hover:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
										}`}
									>
										{type}
									</button>
								))}
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<AnimatePresence mode="wait">
							{filteredPositions.length > 0 ? (
								filteredPositions.map((position, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										className="rounded-xl border-2 border-neutral-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
									>
										<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
											<div className="flex-1">
												<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">{position.title}</h3>
												<p className="mb-3 text-sm text-neutral-900 dark:text-neutral-200">{position.description}</p>
												<div className="flex flex-wrap items-center gap-4 text-sm text-neutral-800 dark:text-neutral-300">
													<div className="flex items-center gap-1">
														<Briefcase className="h-4 w-4" />
														<span>{position.department}</span>
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="h-4 w-4" />
														<span>{position.location}</span>
													</div>
													<div className="flex items-center gap-1">
														<Clock className="h-4 w-4" />
														<span>{position.type}</span>
													</div>
												</div>
											</div>
											<Button
												variant="primary"
												size="lg"
												onClick={() => {
													setSelectedJob(position.title);
													setIsModalOpen(true);
												}}
											>
												Apply Now
											</Button>
										</div>
									</motion.div>
								))
							) : (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="rounded-xl border-2 border-neutral-200 bg-white p-12 text-center dark:border-neutral-800 dark:bg-neutral-950"
								>
									<p className="text-neutral-900 dark:text-neutral-200">No positions found matching your filters.</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</Container>
			</section>

			{/* CTA */}
			<CTASection
				title="Submit Your Resume"
				subtitle="Don't see a role that fits? We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities."
				primaryButtonText="Get in Touch"
				primaryButtonHref="/contact"
				secondaryButtonText="View All Services"
				secondaryButtonHref="/services"
			/>

			{/* Job Application Modal */}
			<JobApplicationModal
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
					setSelectedJob(null);
				}}
				jobTitle={selectedJob || undefined}
			/>
		</main>
	);
}
