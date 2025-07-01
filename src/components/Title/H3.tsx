import React from "react";

interface Props {
	children: React.ReactNode;
	h3?: string;
	align?: "left" | "center" | "right";
	id?: string;
}

// Componente funcional con desestructuración correcta
export default function H3({ children, align, id }: Props) {
	return (
		<h3 id={id} className={`text-${align} text-3xl`}>
			{children}
		</h3>
	);
}
