"use client";
import Button from "@/components/Button/Button";
import Confirmation from "@/components/Messages/Confirmation";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const MessagesDemo = () => {
	const [showConfirmation, setShowConfirmation] = useState(false); // Para controlar la visibilidad del modal de confirmación
	const [modalType, setModalType] = useState(""); // Para saber qué acción mostrar

	// Función para abrir el modal de confirmación con el tipo de acción
	const handleOpen = (type) => {
		setModalType(type);
		setShowConfirmation(true);
	};

	// Función para cerrar el modal de confirmación
	const handleCancel = () => {
		setShowConfirmation(false);
	};

	// Acciones genéricas para demo
	const actionsMap = {
		eliminar: [
			{
				text: "Eliminar", // Texto del botón de eliminar
				onClick: () => alert("¡Acción de eliminar confirmada!"), // Acción al hacer clic
				variant: "primary",
				icon: <FaTrash />, // Icono de eliminar
			},
		],
		editar: [
			{
				text: "Actualizar",
				onClick: () => alert("¡Acción de actualizar confirmada!"),
				variant: "primary",
				icon: <FaEdit />, // Icono de editar
			},
		],
		crear: [
			{
				text: "Crear",
				onClick: () => alert("¡Acción de crear confirmada!"),
				variant: "primary",
				icon: <FaPlus />, // Icono de crear
			},
		],
	};

	return (
		<div className="flex flex-col items-center gap-4 mt-8">
			<div className="flex gap-2">
				<Button text="Eliminar tarea" onClick={() => handleOpen("eliminar")} />
				<Button text="Editar cliente" onClick={() => handleOpen("editar")} />
				<Button text="Crear tarea" onClick={() => handleOpen("crear")} />
			</div>
			<Confirmation
				isOpen={showConfirmation}
				modalTitle={
					modalType === "eliminar"
						? "Confirmar eliminación"
						: modalType === "editar"
						? "Confirmar edición"
						: "Confirmar creación"
				}
				message={
					modalType === "eliminar"
						? "¿Seguro que deseas eliminar este elemento?"
						: modalType === "editar"
						? "¿Deseas guardar los cambios?"
						: "¿Deseas crear este elemento?"
				}
				onCancel={handleCancel}
				actions={actionsMap[modalType] || []}
			/>
		</div>
	);
};

export default MessagesDemo;
