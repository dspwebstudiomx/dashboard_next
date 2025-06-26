import React from "react";

interface Props {
	children: string;
	p?: string;
}

const ParagraphRight = (props: Props) => {
	return (
		<p className="text-xl max-w-screen-xl text-right text-pretty first-letter:uppercase">
			{props.children}
		</p>
	);
};

export default ParagraphRight;
