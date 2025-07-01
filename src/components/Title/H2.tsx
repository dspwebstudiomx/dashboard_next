import React from "react";

interface Props {
	children: React.ReactNode;
	id?: string;
	h2?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H2({ children, align, id }: Props) {
	return (
		<h2 id={id} className={`text-${align} text-4xl`}>
			{children}
		</h2>
	);
}
