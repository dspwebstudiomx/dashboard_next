import React from "react";

interface Props {
	children: React.ReactNode;
	h6?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H6({ children, align }: Props) {
	return <h6 className={`text-${align} text-lg`}>{children}</h6>;
}
