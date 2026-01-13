import React from "react";

type CardProps = {
	title?: string;
	description?: string;
	children?: React.ReactNode;
	className?: string;
};

export function Card({ title, description, children, className = "" }: CardProps) {
	return (
		<div className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 ${className}`.trim()}>
			{title ? (
				<h3 className="text-lg font-semibold tracking-tight">{title}</h3>
			) : null}
			{description ? (
				<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
			) : null}
			{children ? <div className={title || description ? "mt-4" : ""}>{children}</div> : null}
		</div>
	);
}

export default Card;
