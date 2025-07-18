import React from "react";

interface ParagraphProps {
	children?: React.ReactNode;
	className?: string;
	align?:
		| "left"
		| "center"
		| "right"
		| "justify"
		| "pretty"
		| "inherit"
		| "initial";
}

const Paragraph: React.FC<ParagraphProps> = ({ children, align }) => {
	return (
		<p
			className={`text-${align} text-text-secondary text-base max-w-screen-xl text-pretty first-letter:uppercase dark:text-white`}>
			{children}
		</p>
	);
};

export default Paragraph;
