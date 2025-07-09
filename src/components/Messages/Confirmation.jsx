"use client";
// Importaciones de React
import Button from "@/components/Button/Button"; // Componente de botón
import Modal from "@/components/Modal/Modal"; // Componente de modal
import useModal from "@/hooks/useModal"; // Hook personalizado para manejar el estado del modal
import { FaCheckCircle } from "react-icons/fa"; // Icono de confirmación

// Componente Confirmation
const Confirmation = ({
	children,
	modalTitle,
	message = "¿Estás seguro de continuar?",
	onConfirm = () => {},
	onCancel = () => {},
	isOpen, // Nuevo prop para controlar la visibilidad desde fuera
}) => {
	const { close, closeButtonRef } = useModal(); // Ya no necesitamos open ni isOpen internos

	// Manejar confirmación
	const handleConfirm = () => {
		onConfirm();
		close();
	};

	// Manejar cancelación
	const handleCancel = () => {
		onCancel();
		close();
	};

	if (!isOpen) return null; // Solo renderiza el modal si isOpen es true

	return (
		<Modal
			onClose={close}
			closeButtonRef={closeButtonRef}
			modalTitle={modalTitle}>
			<div className="flex flex-col items-center">
				<div className="text-center flex gap-2">
					<FaCheckCircle className="text-primary-dark text-4xl mb-2 animate-bounce" />
					<p className="text-center text-lg font-semibold mb-4">{message}</p>
				</div>
				<div className="flex gap-4">
					<Button onClick={handleConfirm} text="Confirmar" variant="primary" />
					<button
						className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
						onClick={handleCancel}
						ref={closeButtonRef}>
						Cancelar
					</button>
				</div>
				{children}
			</div>
		</Modal>
	);
};

export default Confirmation;
