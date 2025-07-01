import React from "react";

interface Props {
	children: React.ReactNode;
	h4?: string;
	align?: "left" | "center" | "right";
	id?: string;
}

// Componente funcional con desestructuración correcta
export default function H4({ children, align, id }: Props) {
	return (
		<h4 id={id} className={`text-${align} text-2xl`}>
			{children}
		</h4>
	);
}
