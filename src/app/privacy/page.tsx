"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, FileCheck, Globe, Mail } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const sections = [
	{
		icon: Shield,
		title: "1. Information We Collect",
		content: `We collect information that you provide directly to us, including:
		• Personal information (name, email address, phone number)
		• Business information (company name, project details)
		• Payment information (processed securely through third-party providers)
		• Communication data (messages, feedback, support requests)
		
		We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and usage patterns.`,
	},
	{
		icon: Lock,
		title: "2. How We Use Your Information",
		content: `We use the information we collect to:
		• Provide, maintain, and improve our services
		• Process transactions and send related information
		• Send technical notices, updates, and support messages
		• Respond to your comments, questions, and requests
		• Monitor and analyze trends, usage, and activities
		• Personalize and improve your experience
		• Detect, prevent, and address technical issues
		• Comply with legal obligations`,
	},
	{
		icon: Eye,
		title: "3. Information Sharing and Disclosure",
		content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
		• With your consent
		• To comply with legal obligations
		• To protect our rights and safety
		• With service providers who assist us in operating our business (under strict confidentiality agreements)
		• In connection with a business transfer or merger`,
	},
	{
		icon: Database,
		title: "4. Data Security",
		content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
	},
	{
		icon: UserCheck,
		title: "5. Your Rights and Choices",
		content: `You have the right to:
		• Access and receive a copy of your personal data
		• Rectify inaccurate or incomplete data
		• Request deletion of your personal data
		• Object to processing of your personal data
		• Request restriction of processing
		• Data portability
		• Withdraw consent at any time
		
		To exercise these rights, please contact us using the information provided below.`,
	},
	{
		icon: FileCheck,
		title: "6. Cookies and Tracking Technologies",
		content: `We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`,
	},
	{
		icon: Globe,
		title: "7. International Data Transfers",
		content: `Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.`,
	},
	{
		icon: Mail,
		title: "8. Contact Us",
		content: `If you have any questions about this Privacy Policy, please contact us:
		• Email: privacy@genroar.com
		• Phone: +1 (234) 567-890
		• Address: Remote Worldwide
		
		We will respond to your inquiry within 30 days.`,
	},
];

export default function PrivacyPage() {
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
							<Shield className="h-10 w-10 text-white" />
						</div>
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						Privacy Policy
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Your privacy is important to us. Learn how we protect and handle your data.
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

			{/* Privacy Content */}
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
							Your Privacy Matters
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-lg text-gray-600 dark:text-gray-300"
						>
							We are committed to protecting your personal information and being transparent about our practices
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

					{/* Data Protection Notice */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mt-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 dark:border-primary/30"
					>
						<div className="mb-6 flex items-center justify-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
								<Lock className="h-8 w-8 text-white" />
							</div>
						</div>
						<h3 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
							Your Data is Protected
						</h3>
						<p className="mb-6 text-center text-gray-600 dark:text-gray-300">
							We use industry-standard security measures to protect your information. If you have any concerns or questions about your privacy, please don't hesitate to reach out.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a
								href="/contact"
								className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 text-white font-semibold transition-all hover:shadow-lg hover:scale-105"
							>
								Contact Us
							</a>
							<a
								href="mailto:privacy@genroar.com"
								className="inline-block rounded-full border-2 border-primary px-8 py-3 text-primary font-semibold transition-all hover:bg-primary hover:text-white"
							>
								Email Privacy Team
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection
				title="Have Questions About Privacy?"
				subtitle="We're here to help. Reach out to our privacy team for any concerns or questions."
				primaryButtonText="Contact Us"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}

