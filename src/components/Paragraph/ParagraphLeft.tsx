import React from "react";

interface Props {
	children: string;
	p?: string;
}

const ParagraphLeft = (props: Props) => {
	return (
		<p className="text-xl max-w-screen-xl text-left text-pretty first-letter:uppercase">
			{props.children}
		</p>
	);
};

export default ParagraphLeft;
