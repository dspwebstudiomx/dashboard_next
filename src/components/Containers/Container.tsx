import React from "react";

type Props = {
	children?: React.ReactNode;
};

const Container = (props: Props) => {
	return (
		<div className="flex flex-col justify-center dark:text-gray-100 gap-40  py-60 max-w-screen-xl mx-auto px-8 md:px-16">
			{props.children}
		</div>
	);
};

export default Container;
