"use client";
import Button from "@/components/Button/Button";
import Confirmation from "@/components/Messages/Confirmation";
import { useClients } from "@/hooks/useClients";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const MessagesDemo = () => {
	const { clients, getClients } = useClients();
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

	// Funciones genéricas para cada acción y entidad
	const handleDelete = (entity) => {
		alert(`Eliminando ${entity}...`);
		// Lógica eliminar cliente
	};
	const handleEdit = (entity) => {
		alert(`Editando ${entity}...`);
		// Aquí puedes agregar la lógica real de edición
	};
	const handleCreate = (entity) => {
		alert(`Creando ${entity}...`);
		// Aquí puedes agregar la lógica real de creación
	};

	// Funciones para Cliente
	const handleDeleteClient = () => handleDelete("cliente");
	const handleEditClient = () => handleEdit("cliente");
	const handleCreateClient = () => handleCreate("cliente");

	// Funciones para Tarea
	const handleDeleteTask = () => handleDelete("tarea");
	const handleEditTask = () => handleEdit("tarea");
	const handleCreateTask = () => handleCreate("tarea");

	// Funciones para Proyecto
	const handleDeleteProject = () => handleDelete("proyecto");
	const handleEditProject = () => handleEdit("proyecto");
	const handleCreateProject = () => handleCreate("proyecto");

	// Acciones genéricas para demo
	const actionsMap = {
		// Cliente
		eliminar_cliente: [
			{
				text: "Eliminar cliente",
				onClick: () => handleDeleteClient(),
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_cliente: [
			{
				text: "Editar cliente",
				onClick: () => handleEditClient(),
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_cliente: [
			{
				text: "Crear cliente",
				onClick: () => handleCreateClient(),
				variant: "primary",
				icon: <FaPlus />,
			},
		],

		// Tarea
		eliminar_tarea: [
			{
				text: "Eliminar tarea",
				onClick: () => handleDeleteTask(),
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_tarea: [
			{
				text: "Editar tarea",
				onClick: () => handleEditTask(),
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_tarea: [
			{
				text: "Crear tarea",
				onClick: () => handleCreateTask(),
				variant: "primary",
				icon: <FaPlus />,
			},
		],

		// Proyecto
		eliminar_proyecto: [
			{
				text: "Eliminar proyecto",
				onClick: () => handleDeleteProject(),
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_proyecto: [
			{
				text: "Editar proyecto",
				onClick: () => handleEditProject(),
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_proyecto: [
			{
				text: "Crear proyecto",
				onClick: () => handleCreateProject(),
				variant: "primary",
				icon: <FaPlus />,
			},
		],
	};

	return (
		<div className="flex flex-col items-center gap-4 mt-8">
			<div className="grid md:grid-cols-3 gap-8">
				<Button
					text="Eliminar tarea"
					onClick={() => handleOpen("eliminar_tarea")}
					icon={<FaTrash className="text-lg" />}
					variant="outline"
				/>
				<Button
					text="Eliminar cliente"
					onClick={() => handleOpen("eliminar_cliente")}
					icon={<FaTrash className="text-lg" />}
					variant="outline"
				/>
				<Button
					text="Eliminar proyecto"
					onClick={() => handleOpen("eliminar_proyecto")}
					icon={<FaTrash className="text-lg" />}
					variant="outline"
				/>
				<Button
					text="Editar tarea"
					onClick={() => handleOpen("editar_tarea")}
					icon={<FaEdit className="text-lg" />}
					variant="secondary"
				/>
				<Button
					text="Editar cliente"
					onClick={() => handleOpen("editar_cliente")}
					icon={<FaEdit className="text-lg" />}
					variant="secondary"
				/>
				<Button
					text="Editar proyecto"
					onClick={() => handleOpen("editar_proyecto")}
					icon={<FaEdit className="text-lg" />}
					variant="secondary"
				/>
				<Button
					text="Crear tarea"
					onClick={() => handleOpen("crear_tarea")}
					icon={<FaPlus className="text-lg" />}
				/>
				<Button
					text="Crear cliente"
					onClick={() => handleOpen("crear_cliente")}
					icon={<FaPlus className="text-lg" />}
				/>
				<Button
					text="Crear proyecto"
					onClick={() => handleOpen("crear_proyecto")}
					icon={<FaPlus className="text-lg" />}
				/>
			</div>
			{/* Botón para obtener clientes */}
			<Button text="Obtener clientes" onClick={getClients} variant="primary" />
			{/* Mostrar clientes si existen */}
			{clients.length > 0 && (
				<div className="w-full max-w-xl mt-4 bg-gray-100 dark:bg-gray-800 rounded p-4">
					<h3 className="font-bold mb-2">Clientes obtenidos:</h3>
					<ul className="list-disc pl-5">
						{clients.map((client, idx) => (
							<li key={idx}>{JSON.stringify(client)}</li>
						))}
					</ul>
				</div>
			)}
			<Confirmation
				isOpen={showConfirmation}
				modalTitle={
					modalType.startsWith("eliminar")
						? `Confirmar eliminación`
						: modalType.startsWith("editar")
						? `Confirmar edición`
						: `Confirmar creación`
				}
				message={
					modalType.startsWith("eliminar")
						? `¿Seguro que deseas eliminar este ${modalType.split("_")[1]}?`
						: modalType.startsWith("editar")
						? `¿Deseas guardar los cambios en este ${modalType.split("_")[1]}?`
						: `¿Deseas crear este ${modalType.split("_")[1]}?`
				}
				onCancel={handleCancel}
				actions={actionsMap[modalType] || []}
			/>
		</div>
	);
};

export default MessagesDemo;
