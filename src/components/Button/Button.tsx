import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
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
		| "warning"
		| "normal"
		| "flat";
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: React.ReactNode; // Nuevo prop opcional para ícono
}

const baseStyles = "px-4 py-3 rounded-xl font-semibold transition-color";

const variants = {
	primary:
		"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-1 border-primary-dark dark:border-primary-light",
	normal:
		"text-blue-500 hover:bg-blue-700 focus:ring-blue-500 border-1 border-primary-dark dark:border-primary-light",
	secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
	danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
	outline:
		"border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700",
	ghost: "text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
	link: "text-blue-600 hover:text-blue-700 focus:ring-blue-500 underline underline-offset-5 underline-blue-600",
	disabled:
		"bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 pointer-events-none",
	active: "bg-blue-700 text-white shadow-inner",
	loading: "bg-gray-400 text-white cursor-wait opacity-75 pointer-events-none",
	icon: "flex items-center justify-center p-2 text-blue-600",
	warning: "flex items-center justify-center p-2 text-red-600",
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
	text = " ", // Default text to avoid undefined
	onClick,
	variant = "primary",
	className = "",
	type = "button",
	ref,
	icon,
	...rest
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
	return (
		<button
			ref={ref}
			type={types[type] || "button"}
			className={`${baseStyles} ${variants[variant]} ${className}`}
			onClick={onClick}
			{...rest}>
			<span className="flex items-center justify-center">
				{icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
				{text}
			</span>
		</button>
	);
}
