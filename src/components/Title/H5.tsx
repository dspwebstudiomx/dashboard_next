import React from "react";

interface Props {
	children: React.ReactNode;
	h5?: string;
	align?: "left" | "center" | "right";
}

// Componente funcional con desestructuración correcta
export default function H5({ children, align }: Props) {
	return <h5 className={`text-${align} text-xl`}>{children}</h5>;
}
