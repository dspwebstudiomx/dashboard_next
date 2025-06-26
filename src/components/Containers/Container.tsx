import React from "react";

type Props = {
	children?: React.ReactNode;
};

const Container = (props: Props) => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center dark:text-gray-100 gap-20  py-40">
			{props.children}
		</div>
	);
};

export default Container;
