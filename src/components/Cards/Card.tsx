interface CardProps {
	children: React.ReactNode;
	title: string;
	titleSize?: "xs" | "sm" | "lg" | "md" | "xl" | "2xl" | "3xl";
}

const Card = ({ children, title, titleSize }: CardProps) => {
	return (
		<article className="p-8 md:p-12 bg-gray-0 shadow-xl rounded-3xl flex flex-col gap-8 dark:border-gray-500 dark:border-2 dark:bg-gray-800">
			<h3 className={`text-${titleSize} font-semibold`}>{title}</h3>
			{children}
		</article>
	);
};

export default Card;
