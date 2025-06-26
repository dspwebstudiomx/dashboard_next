import React from "react";

interface Props {
	children: React.ReactNode;
	h4?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H4({ children, align }: Props) {
	return <h4 className={`text-${align} text-2xl`}>{children}</h4>;
}
