import React from "react";

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	className?: string;
	gradient?: boolean;
	variant?: "default" | "light" | "dark";
};

const levelToClasses: Record<number, string> = {
	1: "text-4xl sm:text-5xl font-bold tracking-tight",
	2: "text-3xl sm:text-4xl font-semibold tracking-tight",
	3: "text-2xl sm:text-3xl font-semibold",
	4: "text-xl sm:text-2xl font-semibold",
	5: "text-lg font-semibold",
	6: "text-base font-semibold",
};

export function Heading({ level = 2, children, className = "", gradient, variant = "default" }: HeadingProps) {
	const Tag = (`h${level}` as string) as React.ElementType;

	// Text color classes based on variant
	const colorClasses = {
		default: "text-gray-900 dark:text-white",
		light: "text-white",
		dark: "text-gray-900",
	};

	const gradientClass = gradient || level === 1 ? "bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400" : "";
	const textColor = gradient ? "" : colorClasses[variant];

	return <Tag className={`${levelToClasses[level]} ${gradientClass} ${textColor} ${className}`.trim()}>{children}</Tag>;
}

export default Heading;
