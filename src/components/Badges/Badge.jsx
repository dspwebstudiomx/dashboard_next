import {
	FaCheckCircle,
	FaExclamationCircle,
	FaInfoCircle,
	FaTimesCircle,
} from "react-icons/fa";

const badgeVariants = {
	success: "bg-green-100 text-green-800 border border-green-300",
	warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
	error: "bg-red-100 text-red-800 border border-red-300",
	info: "bg-blue-100 text-blue-800 border border-blue-300",
	neutral: "bg-gray-100 text-gray-800 border border-gray-300",
	error: "bg-red-100 text-red-800 border border-red-300",
	primary: "bg-blue-600 text-white border border-blue-700",
	secondary: "bg-gray-600 text-white border border-gray-700",
	light: "bg-gray-200 text-gray-800 border border-gray-300",
	dark: "bg-gray-800 text-white border border-gray-900",
	danger: "bg-danger text-white border border-red-700",
};

const icons = {
	success: <FaCheckCircle className="mr-1" />,
	warning: <FaExclamationCircle className="mr-1" />,
	error: <FaTimesCircle className="mr-1" />,
	info: <FaInfoCircle className="mr-1" />,
	danger: <FaExclamationCircle className="mr-1" />,
	primary: <FaCheckCircle className="mr-1" />,
	neutral: null,
};

const Badge = ({ children, variant = "neutral", icon = true }) => {
	return (
		<span
			className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium gap-1 ${badgeVariants[variant]}`}>
			{icon && icons[variant]}
			{children}
		</span>
	);
};

export default Badge;
