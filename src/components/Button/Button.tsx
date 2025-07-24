/*
  -- Component - Button.tsx --
  - This file defines a customizable button component with various styles and sizes.
  - It supports different variants, sizes, and an optional icon.
  */

// Import necessary React and TypeScript types
import React from "react";

// Button component with various styles and sizes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
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
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: React.ReactNode; // Nuevo prop opcional para ícono
}

// Define styles for different sizes
const sizeStyles: Record<string, string> = {
	xs: "px-3 py-4 w-16 text-xs",
	sm: "px-3 py-4 w-24 text-sm",
	md: "px-3 py-4 w-32 text-sm",
	lg: "px-2 py-4 w-48 text-base",
	xl: "px-2 py-4 w-64 text-lg",
};

// Base styles for the button
const baseStyles =
	"rounded-xl font-semibold transition-color hover:scale-105 focus:scale-105";

// Define styles for different variants
const variants = {
	active: "bg-blue-700 text-white shadow-inner",
	block:
		"w-full text-center bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
	danger:
		"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border-2 border-red-400 dark:border-red-300",
	disabled:
		"bg-gray-300 text-gray-500 cursor-not-allowed opacity-50 pointer-events-none",
	flat: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
	ghost:
		"text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-gray-400",
	icon: "flex items-center justify-center text-blue-600",
	large: "text-lg",
	link: "text-blue-600 dark:text-blue-400 hover:text-blue-700 focus:ring-blue-500 underline underline-offset-5 underline-blue-600",
	loading: "bg-gray-400 text-white cursor-wait opacity-75 pointer-events-none",
	normal:
		"text-blue-500 hover:bg-blue-700 focus:ring-blue-500 border-1 border-primary-dark dark:border-primary-light",
	outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-100",
	pill: "rounded-full",
	primary:
		"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-2 border-blue-300",
	rounded: "rounded-full",
	secondary:
		"bg-secondary text-gray-100 border-2 border-primary/90 hover:bg-primary/80 focus:ring-primary/80",
	shadow: "shadow-md hover:shadow-lg focus:shadow-lg",
	small: "text-sm",
	square: "rounded-none",
	text: "text-gray-800 hover:text-gray-900 focus:ring-gray-400",
	warning:
		"flex items-center justify-center text-white border-2 border-amber-400 dark:border-amber-100 bg-amber-300 dark:hover:bg-amber-400 hover:bg-amber-400 focus:ring-red-500",
};

// Define types for button types
const types: Record<string, "button" | "submit" | "reset"> = {
	button: "button",
	submit: "submit",
	reset: "reset",
};

// Create the Button component using React.forwardRef for better accessibility and testing
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			text = " ", // Default text to avoid undefined
			variant = "primary", // Default variant
			size = "md", // Default size
			className = "", // Default className
			type = "button", // Default type
			icon, // Optional icon prop
			onClick,
			...props // rest of the props
		},
		ref // Forward ref for better accessibility and testing
	) => {
		return (
			<button
				onClick={onClick} // Handle click event
				ref={ref} // Forward ref for better accessibility and testing
				type={types[type] || "button"} // Use the type from the types object or default to "button"
				className={`
          ${baseStyles} {/* Base styles */}
          ${sizeStyles[size || "md"]} {/* Size styles */}
          ${variants[variant]} {/* Variant styles */}
          ${className} {/* Additional custom styles */}
			  `
					.replace(/\s+/g, " ") // Normalize whitespace
					.trim()} // Clean up extra spaces
				{...props}>
				<span className="flex items-center justify-center">
					{icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
					{text}
				</span>
			</button>
		);
	}
);
Button.displayName = "Button"; // Set display name for debugging

export default Button;
