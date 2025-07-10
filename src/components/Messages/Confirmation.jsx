"use client";
// Importaciones de React
import Button from "@/components/Button/Button"; // Componente de botón
import Modal from "@/components/Modal/Modal"; // Componente de modal
import useModal from "@/hooks/useModal"; // Hook personalizado para manejar el estado del modal
import { FaCheckCircle } from "react-icons/fa"; // Icono de confirmación
import { MdOutlineCancel } from "react-icons/md"; // Icono de cancelación

// Componente Confirmation
const Confirmation = ({
	children,
	// modalTitle,
	message = "¿Estás seguro de continuar?",
	isOpen,
	onCancel = () => {},
	actions = [], // Nuevo prop: array de acciones
}) => {
	const { close, closeButtonRef } = useModal();

	// Maneja la acción al hacer clic en un botón de acción
	const handleAction = (action) => {
		action.onClick();
		close();
	};

	// Maneja la acción de cancelar
	const handleCancel = () => {
		onCancel();
		close();
	};

	if (!isOpen) return null; // Solo renderiza el modal si isOpen es true

	return (
		<Modal
			onClose={close || onClose}
			closeButtonRef={closeButtonRef}
			modalTitle={""} // Nota: no se usa para este caso
			aria-label="Confirmación">
			<div className="flex flex-col items-center gap-8">
				<div className="text-center flex gap-4">
					<FaCheckCircle className="text-primary-dark text-4xl mb-2 animate-pulse dark:text-primary" />
					<p className="text-center text-lg font-semibold mb-4">{message}</p>
				</div>
				<div className="flex gap-6">
					{actions.map((action, idx) => (
						<Button
							key={idx}
							text={action.text}
							variant={action.variant || "primary"}
							onClick={() => handleAction(action)}
							icon={action.icon}
						/>
					))}
					<Button
						onClick={handleCancel}
						ref={closeButtonRef}
						text="Cancelar"
						variant="outline"
						icon={<MdOutlineCancel className="text-2xl" />}
					/>
				</div>
				{children}
			</div>
		</Modal>
	);
};

export default Confirmation;
