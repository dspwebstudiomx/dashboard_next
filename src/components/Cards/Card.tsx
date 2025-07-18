import H4 from "../Title/H4";

interface CardProps {
	children: React.ReactNode;
	title: string;
}

const Card = ({ children, title }: CardProps) => {
	return (
		<article className=" p-8 bg-gray-0 shadow-xl rounded-3xl flex flex-col gap-8 dark:border-gray-500 dark:border-2 dark:bg-gray-800">
			<H4>{title}</H4>
			{children}
		</article>
	);
};

export default Card;
