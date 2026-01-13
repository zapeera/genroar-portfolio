import React from "react";

type ParagraphProps = {
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "light" | "dark" | "muted";
};

export function Paragraph({ children, className = "", variant = "default" }: ParagraphProps) {
	const colorClasses = {
		default: "text-gray-700 dark:text-gray-300",
		light: "text-white",
		dark: "text-gray-900",
		muted: "text-gray-600 dark:text-gray-400",
	};

	return (
		<p className={`text-base leading-7 ${colorClasses[variant]} ${className}`.trim()}>
			{children}
		</p>
	);
}

export default Paragraph;
