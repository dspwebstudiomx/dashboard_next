import React from "react";

interface Props {
	children: React.ReactNode;
	h2?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H2({ children, align }: Props) {
	return <h2 className={`text-${align} text-4xl`}>{children}</h2>;
}
