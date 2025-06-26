import React from "react";

interface Props {
	children: React.ReactNode;
	h3?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H3({ children, align }: Props) {
	return <h3 className={`text-${align} text-3xl`}>{children}</h3>;
}
