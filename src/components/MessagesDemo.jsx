"use client";
import Button from "@/components/Button/Button";
import Confirmation from "@/components/Messages/Confirmation";
import { useState } from "react";

const MessagesDemo = () => {
	const [showConfirmation, setShowConfirmation] = useState(false); // El modal inicia oculto

	const handleOpen = () => setShowConfirmation(true);

	const handleConfirm = () => {
		alert("¡Acción confirmada!");
		setShowConfirmation(false);
	};

	const handleCancel = () => {
		setShowConfirmation(false);
	};

	return (
		<div className="flex flex-col items-center gap-4 mt-8">
			<Button
				text="Abrir Confirmación"
				onClick={handleOpen}
				variant="primary"
			/>
			<Confirmation
				isOpen={showConfirmation}
				modalTitle=""
				message="Esta acción es irreversible. ¿Deseas continuar?"
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>
		</div>
	);
};

export default MessagesDemo;
