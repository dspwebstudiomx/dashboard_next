interface CardProps {
	children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<article className=" p-8 bg-gray-0 shadow-xl rounded-3xl flex flex-col gap-4 max-w-screen-lg">
			{children}
		</article>
	);
};

export default Card;
