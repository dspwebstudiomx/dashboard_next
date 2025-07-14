import React from "react";

type Props = {
	children?: React.ReactNode;
};

const Container = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center dark:text-gray-100 gap-20  py-60 max-w-screen-xl mx-auto">
			{props.children}
		</div>
	);
};

export default Container;
