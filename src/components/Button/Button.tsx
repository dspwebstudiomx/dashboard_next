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

const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-color";

const variants = {
	active: "bg-blue-700 text-white shadow-inner",
	block:
		"w-full text-center bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
	danger:
		"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border-2 border-red-400 dark:border-red-300",
	disabled:
		"bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 pointer-events-none",
	flat: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
	ghost: "text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
	icon: "flex items-center justify-center p-2 text-blue-600",
	large: "px-6 py-3 text-lg",
	link: "text-blue-600 hover:text-blue-700 focus:ring-blue-500 underline underline-offset-5 underline-blue-600",
	loading: "bg-gray-400 text-white cursor-wait opacity-75 pointer-events-none",
	normal:
		"text-blue-500 hover:bg-blue-700 focus:ring-blue-500 border-1 border-primary-dark dark:border-primary-light",
	outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-100",
	pill: "rounded-full px-6 py-2",
	primary:
		"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-2 border-blue-300",
	rounded: "rounded-full",
	secondary:
		"bg-primary/70 text-gray-100 border-2 border-primary/90 hover:bg-primary/80 focus:ring-primary/80",
	shadow: "shadow-md hover:shadow-lg focus:shadow-lg",
	small: "px-2 py-1 text-sm",
	square: "rounded-none",
	text: "text-gray-800 hover:text-gray-900 focus:ring-gray-400",
	warning:
		"flex items-center justify-center p-2 text-white border-2 border-amber-400 bg-amber-300 hover:bg-amber-500 focus:ring-red-500",
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
