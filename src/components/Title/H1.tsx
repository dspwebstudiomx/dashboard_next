import React from "react";

interface Props {
	children: React.ReactNode;
	h1?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H1({ children, align }: Props) {
	return <h1 className={`text-${align} text-5xl`}>{children}</h1>;
}
