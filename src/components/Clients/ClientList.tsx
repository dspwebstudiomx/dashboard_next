import { useEffect } from "react";
import { useClients } from "../../hooks/useClients";
import Card from "../Cards/Card";
import H2 from "../Title/H2";

interface Client {
	id: string;
	name: string;
	lastName: string;
	lastName2?: string;
	company: string;
	email: string;
}

const ClientList = () => {
	const { clients, getClients } = useClients();

	useEffect(() => {
		getClients();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="mt-8">
			<H2 align="center">Lista de Clientes</H2>
			<div className="grid grid-cols-4 gap-8 mt-20">
				{clients && clients.length > 0 ? (
					(clients as Client[]).map((client) => (
						<Card
							key={client.id}
							title={
								<div className="font-bold text-lg">
									{client.name} {client.lastName} {client.lastName2}
								</div>
							}>
							<div className="flex flex-col gap-2 text-sm">
								<div className="text-gray-600 dark:text-gray-200">
									Empresa: {client.company}
								</div>
								<div className="text-gray-600 dark:text-gray-200">
									Email: {client.email}
								</div>
							</div>
						</Card>
					))
				) : (
					<div className="text-gray-500">No hay clientes guardados.</div>
				)}
			</div>
		</div>
	);
};

export default ClientList;
