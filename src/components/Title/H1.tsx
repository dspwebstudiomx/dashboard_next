import React from "react";

interface Props {
	children: React.ReactNode;
	h1?: string;
	align?: "left" | "center" | "right";
	id?: string;
}

// Componente funcional con desestructuración correcta
export default function H1({ children, align, id }: Props) {
	return (
		<h1 id={id} className={`text-${align} text-5xl`}>
			{children}
		</h1>
	);
}
