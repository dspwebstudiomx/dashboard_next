"use client";
// Importaciones necesarias
import BadgesDemo from "@/components/BadgesDemo";
import ButtonDemo from "@/components/ButtonDemo";
import Card from "@/components/Cards/Card";
import CardsDemo from "@/components/CardsDemo";
import type { Client } from "@/components/ClientForm";
import ClientForm from "@/components/ClientForm";
import ColorDemo from "@/components/ColorDemo";
import Container from "@/components/Containers/Container";
import ImageDemo from "@/components/ImageDemo";
import Alert from "@/components/Messages/Alert";
import MessagesDemo from "@/components/MessagesDemo";
import ParagraphDemo from "@/components/ParagraphDemo";
import TitlesDemo from "@/components/TitlesDemo";
import React from "react";
import { useClients } from "../../hooks/useClients";

// Componente principal de la aplicación
export default function App() {
	const { clients, handleCreateClient, getClients } = useClients();

	// Al montar, obtener clientes
	React.useEffect(() => {
		getClients();
	}, [getClients]);

	// Función para guardar el cliente usando el hook
	const handleSaveClient = async (data: Client) => {
		await handleCreateClient(data);
		getClients(); // Actualiza la lista después de guardar
	};

	return (
		<Container>
			<h1 className="text-5xl font-bold mb-8">Guía de Estilos</h1>
			<div className="grid md:grid-cols-2 gap-12 md:gap-12">
				<ColorDemo />
				<TitlesDemo />
			</div>
			<ParagraphDemo />
			<ImageDemo />
			<ButtonDemo />
			<CardsDemo />
			<BadgesDemo />
			<MessagesDemo />
			<ClientForm onSave={handleSaveClient} />
			<Alert />
			{/* Lista de clientes guardados */}
			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Clientes guardados</h2>
				<div className="grid gap-4">
					{clients && clients.length > 0 ? (
						clients.map((client: Client) => (
							<Card
								key={client.id}
								title={
									<div className="font-bold text-lg">
										{client.name} {client.lastName} {client.lastName2}
									</div>
								}>
								<div className="text-gray-600">Empresa: {client.company}</div>
								<div className="text-gray-600">Email: {client.email}</div>
							</Card>
						))
					) : (
						<div className="text-gray-500">No hay clientes guardados.</div>
					)}
				</div>
			</div>
		</Container>
	);
}
