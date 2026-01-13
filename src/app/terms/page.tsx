"use client";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertCircle, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const sections = [
	{
		icon: FileText,
		title: "1. Acceptance of Terms",
		content: `By accessing and using genroar's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
	},
	{
		icon: Scale,
		title: "2. Use License",
		content: `Permission is granted to temporarily access the materials on genroar's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
		• Modify or copy the materials
		• Use the materials for any commercial purpose or for any public display
		• Attempt to reverse engineer any software contained on genroar's website
		• Remove any copyright or other proprietary notations from the materials`,
	},
	{
		icon: Shield,
		title: "3. Service Terms",
		content: `Our services are provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We do not guarantee that our services will be uninterrupted, secure, or error-free.`,
	},
	{
		icon: AlertCircle,
		title: "4. Intellectual Property",
		content: `All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of genroar and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.`,
	},
	{
		icon: CheckCircle,
		title: "5. User Responsibilities",
		content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.`,
	},
	{
		icon: FileText,
		title: "6. Limitation of Liability",
		content: `In no event shall genroar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on genroar's website, even if genroar or a genroar authorized representative has been notified orally or in writing of the possibility of such damage.`,
	},
	{
		icon: Scale,
		title: "7. Revisions and Errata",
		content: `The materials appearing on genroar's website could include technical, typographical, or photographic errors. genroar does not warrant that any of the materials on its website are accurate, complete, or current. genroar may make changes to the materials contained on its website at any time without notice.`,
	},
	{
		icon: Shield,
		title: "8. Governing Law",
		content: `These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where genroar operates.`,
	},
];

export default function TermsPage() {
	return (
		<main>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-6 flex justify-center"
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
							<FileText className="h-10 w-10 text-white" />
						</div>
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						Terms of Service
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Please read these terms carefully before using our services
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mt-4 text-sm text-white/80"
					>
						Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
					</motion.p>
				</div>
			</section>

			{/* Terms Content */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-4xl px-6">
					<div className="mb-12 text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
						>
							Our Terms
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-lg text-gray-600 dark:text-gray-300"
						>
							Understanding your rights and responsibilities when using our services
						</motion.p>
					</div>

					<div className="space-y-6">
						{sections.map((section, index) => {
							const Icon = section.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-md transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
								>
									<div className="mb-4 flex items-center gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
											<Icon className="h-6 w-6" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
											{section.title}
										</h3>
									</div>
									<div className="ml-16">
										<p className="whitespace-pre-line text-base leading-relaxed text-gray-700 dark:text-gray-300">
											{section.content}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>

					{/* Contact Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mt-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center dark:border-primary/30"
					>
						<h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
							Questions About Our Terms?
						</h3>
						<p className="mb-6 text-gray-600 dark:text-gray-300">
							If you have any questions about these Terms of Service, please contact us.
						</p>
						<a
							href="/contact"
							className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 text-white font-semibold transition-all hover:shadow-lg hover:scale-105"
						>
							Contact Us
						</a>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection
				title="Ready to Get Started?"
				subtitle="Let's work together to bring your ideas to life"
				primaryButtonText="Contact Us"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}

