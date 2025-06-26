import React from "react";

interface Props {
	children: string;
	p?: string;
}

const ParagraphCenter = (props: Props) => {
	return (
		<p className="text-xl max-w-screen-xl text-center text-pretty first-letter:uppercase">
			{props.children}
		</p>
	);
};

export default ParagraphCenter;
