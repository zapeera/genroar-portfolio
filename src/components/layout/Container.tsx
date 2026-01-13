import React from "react";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
	fullWidth?: boolean;
};

/**
 * Container component that:
 * - Uses 95% width from 320px to maximum screen size
 * - Always centered with margin: 0 auto
 * - Automatically manages inner spacing/padding based on screen size
 */
export function Container({ children, className = "", fullWidth = false }: ContainerProps) {
	if (fullWidth) {
		return (
			<div className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 ${className}`.trim()}>
				{children}
			</div>
		);
	}

	// 95% width from 320px to maximum, centered, with auto-responsive padding
	return (
		<div
			className={`mx-auto w-[95%] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 ${className}`.trim()}
		>
			{children}
		</div>
	);
}

export default Container;
