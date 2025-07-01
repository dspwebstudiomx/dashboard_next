import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?:
		| "primary"
		| "secondary"
		| "danger"
		| "outline"
		| "ghost"
		| "link"
		| "disabled"
		| "active"
		| "loading"
		| "icon"
		| "text"
		| "block"
		| "small"
		| "large"
		| "rounded"
		| "square"
		| "pill"
		| "shadow"
		| "flat";
	className?: string;
	type?: "button" | "submit" | "reset";
}

const baseStyles = "px-4 py-3 rounded-xl font-semibold transition-colors";

const variants = {
	primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
	secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
	danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
	outline:
		"border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
	ghost: "text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
	link: "text-blue-600 hover:text-blue-700 focus:ring-blue-500 underline",
	disabled:
		"bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 pointer-events-none",
	active: "bg-blue-700 text-white shadow-inner",
	loading: "bg-gray-400 text-white cursor-wait opacity-75 pointer-events-none",
	icon: "flex items-center justify-center p-2 text-blue-600",
	text: "text-gray-800 hover:text-gray-900 focus:ring-gray-400",
	block:
		"w-full text-center bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
	small: "px-2 py-1 text-sm",
	large: "px-6 py-3 text-lg",
	rounded: "rounded-full",
	square: "rounded-none",
	pill: "rounded-full px-6 py-2",
	shadow: "shadow-md hover:shadow-lg focus:shadow-lg",
	flat: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
};

const types: Record<string, "button" | "submit" | "reset"> = {
	button: "button",
	submit: "submit",
	reset: "reset",
};

export default function Button({
	children,
	onClick,
	variant = "primary",
	className = "",
	type = "button",
	ref,
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
	return (
		<button
			ref={ref}
			type={types[type] || "button"}
			className={`${baseStyles} ${variants[variant]} ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
}
