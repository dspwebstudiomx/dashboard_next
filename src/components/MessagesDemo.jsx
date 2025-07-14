"use client";
import Button from "@/components/Button/Button";
import Confirmation from "@/components/Messages/Confirmation";
import { useClients } from "@/hooks/useClients";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const MessagesDemo = () => {
	const {
		clients,
		getClients,
		handleCreateClient,
		handleEditClient,
		handleDeleteClient,
	} = useClients();
	const [showConfirmation, setShowConfirmation] = useState(false); // Para controlar la visibilidad del modal de confirmación
	const [modalType, setModalType] = useState(""); // Para saber qué acción mostrar
	const [selectedClientId, setSelectedClientId] = useState(null); // Nuevo estado para el id del cliente seleccionado

	// Función para abrir el modal de confirmación con el tipo de acción y opcionalmente el id
	const handleOpen = (type, id = null) => {
		setModalType(type);
		setShowConfirmation(true);
		if (type === "eliminar_cliente" || type === "editar_cliente") {
			setSelectedClientId(id);
		} else {
			setSelectedClientId(null);
		}
	};

	// Función para cerrar el modal de confirmación
	const handleCancel = () => {
		setShowConfirmation(false);
		setSelectedClientId(null);
	};

	// Funciones para Cliente usando el hook
	const onDeleteClient = () => {
		if (selectedClientId) {
			handleDeleteClient(selectedClientId);
			setSelectedClientId(null);
			setShowConfirmation(false);
		} else {
			alert("No hay cliente seleccionado para eliminar.");
		}
	};

	const onEditClient = () => {
		if (selectedClientId) {
			const client = clients.find((c) => c.id === selectedClientId);
			if (client) {
				const updatedClient = { ...client, name: "Nombre Editado" };
				handleEditClient(selectedClientId, updatedClient);
				setShowConfirmation(false);
				setSelectedClientId(null);
			}
		} else {
			alert("No hay cliente seleccionado para editar.");
		}
	};

	const onCreateClient = () => {
		const newClient = {
			id: Date.now(),
			name: "Nuevo",
			lastName: "Cliente",
			company: "Empresa Demo",
			email: "nuevo@demo.com",
			// Agrega más campos si es necesario
		};
		handleCreateClient(newClient);
		setShowConfirmation(false);
	};

	// Funciones para Tarea
	// Funciones para Tarea (demo)
	const handleDeleteTask = () => alert("Eliminando tarea...");
	const handleEditTask = () => alert("Editando tarea...");
	const handleCreateTask = () => alert("Creando tarea...");

	// Funciones para Proyecto
	// Funciones para Proyecto (demo)
	const handleDeleteProject = () => alert("Eliminando proyecto...");
	const handleEditProject = () => alert("Editando proyecto...");
	const handleCreateProject = () => alert("Creando proyecto...");

	// Acciones genéricas para demo
	const actionsMap = {
		// Cliente
		eliminar_cliente: [
			{
				text: "Eliminar cliente",
				onClick: () => onDeleteClient(),
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_cliente: [
			{
				text: "Editar cliente",
				onClick: () => onEditClient(),
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_cliente: [
			{
				text: "Crear cliente",
				onClick: () => onCreateClient(),
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
						{clients.map((client) => (
							<li key={client.id} className="flex items-center gap-2">
								<span>{JSON.stringify(client)}</span>
								<Button
									text="Eliminar"
									variant="outline"
									icon={<FaTrash />}
									onClick={() => handleOpen("eliminar_cliente", client.id)}
									size="sm"
								/>
								<Button
									text="Editar"
									variant="secondary"
									icon={<FaEdit />}
									onClick={() => handleOpen("editar_cliente", client.id)}
									size="sm"
								/>
							</li>
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
