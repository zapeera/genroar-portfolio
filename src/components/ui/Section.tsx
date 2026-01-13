import React from "react";
import { Container } from "@/components/layout/Container";

type SectionProps = {
	title?: string;
	subtitle?: string;
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "muted" | "contrast";
};

export function Section({ title, subtitle, children, className = "", variant = "default" }: SectionProps) {
	const variantClass =
		variant === "muted"
			? "bg-white dark:bg-[#0B0C10]"
			: variant === "contrast"
			? "bg-white dark:bg-[#0B0C10]"
			: "";
	return (
		<section className={`py-16 sm:py-24 ${variantClass} ${className}`.trim()}>
			<Container>
				{title ? (
					<div className="mb-10">
						<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
						{subtitle ? (
							<p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">{subtitle}</p>
						) : null}
					</div>
				) : null}
				{children}
			</Container>
		</section>
	);
}

export default Section;
