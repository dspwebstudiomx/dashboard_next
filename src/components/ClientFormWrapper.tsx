"use client";
import { useClients } from "@/hooks/useClients";
import { useRef, useState } from "react";
import type { Client } from "./ClientForm";
import ClientForm from "./ClientForm";

export default function ClientFormWrapper() {
	const { handleCreateClient, getClients } = useClients();
	const [success, setSuccess] = useState(false);
	const formRef = useRef<{ resetForm: () => void }>(null);

	const handleSave = async (data: Client) => {
		await handleCreateClient(data);
		setSuccess(true);
		getClients();
		if (formRef.current) {
			formRef.current.resetForm();
		}
		setTimeout(() => setSuccess(false), 3000);
	};

	return (
		<div>
			<ClientForm onSave={handleSave} ref={formRef} />
			{success && (
				<div className="bg-green-100 text-green-800 p-2 mt-2 rounded">
					Cliente guardado correctamente
				</div>
			)}
		</div>
	);
}
