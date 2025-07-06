interface CardProps {
	children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<article className=" p-8 bg-gray-0 shadow-xl rounded-3xl flex flex-col gap-8 max-w-screen-lg dark:border-gray-700 dark:border-2">
			{children}
		</article>
	);
};

export default Card;
