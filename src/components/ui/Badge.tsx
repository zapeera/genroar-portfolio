import React from "react";

type BadgeProps = {
	children: React.ReactNode;
	className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
	return (
		<span className={`inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 ${className}`.trim()}>
			{children}
		</span>
	);
}

export default Badge;


