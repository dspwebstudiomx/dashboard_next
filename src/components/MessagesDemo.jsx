"use client";
// Importación de componentes y hooks necesarios
import Button from "@/components/Button/Button";
import CloseButon from "@/components/Button/CloseButton";
import Confirmation from "@/components/Messages/Confirmation";
import { useClients } from "@/hooks/useClients";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import Card from "./Cards/Card";

// Componente principal de demostración de mensajes y acciones
const MessagesDemo = () => {
	// Hook personalizado para manejar clientes
	const {
		clients, // Lista de clientes
		getClients, // Función para obtener clientes
		handleCreateClient, // Función para crear cliente
		handleEditClient, // Función para editar cliente
		handleDeleteClient, // Función para eliminar cliente
	} = useClients();

	// Estado para controlar la visibilidad del modal de confirmación
	const [showConfirmation, setShowConfirmation] = useState(false);
	// Estado para saber qué tipo de acción se está realizando
	const [modalType, setModalType] = useState("");
	// Estado para guardar el id del cliente seleccionado (si aplica)
	const [selectedClientId, setSelectedClientId] = useState(null);
	// Estado para saber si se presionó el botón de obtener clientes
	const [clientesConsultados, setClientesConsultados] = useState(false);

	// Abre el modal de confirmación y guarda el tipo de acción y el id del cliente si corresponde
	const handleOpen = (type, id = null) => {
		setModalType(type);
		setShowConfirmation(true);
		// Si la acción es sobre cliente, guarda el id
		if (type === "eliminar_cliente" || type === "editar_cliente") {
			setSelectedClientId(id);
		} else {
			setSelectedClientId(null);
		}
	};

	// Cierra el modal de confirmación y limpia el id seleccionado
	const handleCancel = () => {
		setShowConfirmation(false); // Cierra el modal
		setSelectedClientId(null); // Limpia el id del cliente seleccionado
	};

	// Elimina un cliente usando el id seleccionado
	const onDeleteClient = () => {
		if (selectedClientId) {
			handleDeleteClient(selectedClientId); // Llama a la función de eliminación con el id seleccionado
			setSelectedClientId(null); // Limpia el id del cliente seleccionado
			setShowConfirmation(false); // Cierra el modal
		} else {
			alert("No hay cliente seleccionado para eliminar."); // Muestra alerta si no hay cliente seleccionado
		}
	};

	// Edita un cliente cambiando su nombre (demo)
	const onEditClient = () => {
		if (selectedClientId) {
			const client = clients.find((c) => c.id === selectedClientId); // Busca el cliente por id

			// Si se encuentra el cliente, crea un nuevo objeto con el nombre editado
			if (client) {
				const updatedClient = { ...client, name: "Nombre Editado" }; // Crea un nuevo objeto cliente con el nombre editado
				handleEditClient(selectedClientId, updatedClient); // Llama a la función de edición con el cliente actualizado
				setShowConfirmation(false); // Cierra el modal
				setSelectedClientId(null); // Limpia el id del cliente seleccionado
			}
		} else {
			alert("No hay cliente seleccionado para editar."); // Muestra alerta si no hay cliente seleccionado
		}
	};

	// Crea un cliente de ejemplo
	const onCreateClient = () => {
		const newClient = {
			id: Date.now(), // Genera un id único basado en la fecha actual
			name: "Nuevo", // Nombre del nuevo cliente
			lastName: "Cliente", // Apellido del nuevo cliente
			company: "Empresa Demo", // Empresa del nuevo cliente
			email: "nuevo@demo.com", // Email del nuevo cliente
		};
		handleCreateClient(newClient); // Llama a la función para crear el cliente
		setShowConfirmation(false); // Cierra el modal
	};

	// Funciones demo para tareas y proyectos (solo muestran alertas)
	const handleDeleteTask = () => alert("Eliminando tarea..."); // Función demo para eliminar tarea
	const handleEditTask = () => alert("Editando tarea..."); // Función demo para editar tarea
	const handleCreateTask = () => alert("Creando tarea..."); // Función demo para crear tarea
	const handleDeleteProject = () => alert("Eliminando proyecto..."); // Función demo para eliminar proyecto
	const handleEditProject = () => alert("Editando proyecto..."); // Función demo para editar proyecto
	const handleCreateProject = () => alert("Creando proyecto..."); // Función demo para crear proyecto

	// Mapa de acciones para cada tipo de modal
	const actionsMap = {
		// Acciones para cliente
		eliminar_cliente: [
			{
				text: "Eliminar cliente",
				onClick: onDeleteClient,
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_cliente: [
			{
				text: "Editar cliente",
				onClick: onEditClient,
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_cliente: [
			{
				text: "Crear cliente",
				onClick: onCreateClient,
				variant: "primary",
				icon: <FaPlus />,
			},
		],
		// Acciones para tarea
		eliminar_tarea: [
			{
				text: "Eliminar tarea",
				onClick: handleDeleteTask,
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_tarea: [
			{
				text: "Editar tarea",
				onClick: handleEditTask,
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_tarea: [
			{
				text: "Crear tarea",
				onClick: handleCreateTask,
				variant: "primary",
				icon: <FaPlus />,
			},
		],
		// Acciones para proyecto
		eliminar_proyecto: [
			{
				text: "Eliminar proyecto",
				onClick: handleDeleteProject,
				variant: "outline",
				icon: <FaTrash />,
			},
		],
		editar_proyecto: [
			{
				text: "Editar proyecto",
				onClick: handleEditProject,
				variant: "primary",
				icon: <FaEdit />,
			},
		],
		crear_proyecto: [
			{
				text: "Crear proyecto",
				onClick: handleCreateProject,
				variant: "primary",
				icon: <FaPlus />,
			},
		],
	};

	// Renderizado del componente
	return (
		<Card title="Mensajes y Acciones" titleSize="3xl">
			{/* Botones de acciones principales */}
			<div className="grid md:grid-cols-3 gap-8 mt-12">
				{/* Botón eliminar tarea */}
				<Button
					text="Eliminar tarea"
					onClick={() => handleOpen("eliminar_tarea")}
					icon={<FaTrash className="text-lg" />}
					variant="outline"
					size="xl"
				/>
				{/* Botón eliminar cliente */}
				<Button
					text="Eliminar cliente"
					onClick={() => handleOpen("eliminar_cliente")}
					icon={<FaTrash className="text-lg" />}
					variant="outline"
					size="xl"
				/>
				{/* Botón eliminar proyecto */}
				<Button
					text="Eliminar proyecto"
					onClick={() => handleOpen("eliminar_proyecto")}
					icon={<FaTrash className="text-lg" />}
					variant="outline"
					size="xl"
				/>
				{/* Botón editar tarea */}
				<Button
					text="Editar tarea"
					onClick={() => handleOpen("editar_tarea")}
					icon={<FaEdit className="text-lg" />}
					variant="secondary"
					size="xl"
				/>
				{/* Botón editar cliente */}
				<Button
					text="Editar cliente"
					onClick={() => handleOpen("editar_cliente")}
					icon={<FaEdit className="text-lg" />}
					variant="secondary"
					size="xl"
				/>
				{/* Botón editar proyecto */}
				<Button
					text="Editar proyecto"
					onClick={() => handleOpen("editar_proyecto")}
					icon={<FaEdit className="text-lg" />}
					variant="secondary"
					size="xl"
				/>
				{/* Botón crear tarea */}
				<Button
					text="Crear tarea"
					onClick={() => handleOpen("crear_tarea")}
					icon={<FaPlus className="text-lg" />}
					variant="primary"
					size="xl"
				/>
				{/* Botón crear cliente */}
				<Button
					text="Crear cliente"
					onClick={() => handleOpen("crear_cliente")}
					icon={<FaPlus className="text-lg" />}
					variant="primary"
					size="xl"
				/>
				{/* Botón crear proyecto */}
				<Button
					text="Crear proyecto"
					onClick={() => handleOpen("crear_proyecto")}
					icon={<FaPlus className="text-lg" />}
					variant="primary"
					size="xl"
				/>
			</div>

			{/* Botón para obtener clientes */}
			<Button
				text="Obtener clientes"
				onClick={() => {
					getClients();
					setClientesConsultados(true);
				}}
				variant="primary"
				size="xl"
			/>

			{/* Mostrar lista de clientes solo si se presionó el botón */}
			{clientesConsultados &&
				(clients.length > 0 ? (
					<div className="w-full max-w-xl bg-gray-100 dark:bg-gray-800 rounded-xl border-2 dark:border-gray-500 p-12 mt-20">
						<h3 className="font-bold mb-2">Clientes obtenidos:</h3>
						<ul className="list-disc pl-0">
							{clients.map((client) => (
								<li
									key={client.id}
									className="flex flex-col md:items-start pl-3 gap-6 border-b border-gray-200 py-2">
									{/* Mostrar datos del cliente en formato de lista para evitar desbordamiento */}
									<ul className="flex-1 text-base text-gray-800 dark:text-gray-100 list-none">
										{Object.entries(client).map(([key, value]) => (
											<li key={key} className="mb-2">
												<b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b>{" "}
												{String(value)}
											</li>
										))}
									</ul>
									<div className="flex gap-6 my-12">
										<Button
											text="Eliminar"
											variant="outline"
											icon={<FaTrash />}
											onClick={() => handleOpen("eliminar_cliente", client.id)}
											size="md"
										/>
										{/* Botón editar cliente individual */}
										<Button
											text="Editar"
											variant="secondary"
											icon={<FaEdit />}
											onClick={() => handleOpen("editar_cliente", client.id)}
											size="md"
										/>
										{/* Botón cerrar la ventana generada */}
										<CloseButon
											text="Cerrar"
											onClick={handleCancel}
											size="md"
										/>
									</div>
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className="w-full max-w-xl bg-gray-100 dark:bg-gray-800 rounded-xl border-2 dark:border-gray-500 px-12 py-6 mt-20 text-center mx-auto flex items-center justify-center">
						<h3 className="font-bold mb-2">No hay clientes registrados.</h3>
					</div>
				))}

			{/* Modal de confirmación para todas las acciones */}
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
		</Card>
	);
};

export default MessagesDemo;
