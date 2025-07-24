"use client";
import React, { useImperativeHandle, useState } from "react";
import {
	FaBuilding,
	FaEnvelope,
	FaFacebookF,
	FaFileSignature,
	FaGlobe,
	FaIndustry,
	FaMapMarkerAlt,
	FaPhone,
	FaUser,
} from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import Button from "./Button/Button";
import Card from "./Cards/Card";
import H4 from "./Title/H4";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

// Plantilla de cliente vacía
interface TeamMember {
	id: string;
	name: string;
	role: string;
	email: string;
}

interface Project {
	id: string;
	name: string;
	description: string;
	type: string;
	technologies: string[];
	deliverables: string[];
	milestones: { name: string; date: string }[];
	clientFeedback: string;
	repositoryUrl: string;
	hosting: {
		provider: string;
		access: string;
		renewalDate: string;
	};
	socialMedia: {
		facebook: string;
		instagram: string;
		linkedin: string;
		twitter: string;
		x: string;
		website: string;
	};
	supportPeriod: string;
	maintenancePlan: string;
	attachments: { name: string; url: string }[];
	startDate: string;
	endDate: string;
	status: string;
	priority: string;
	budget: number;
	taxes: {
		IVA: number;
		ISR: number;
		retenciones: {
			IVA: number;
			ISR: number;
		};
	};
	cost: { type: string; amount: number; currency: string }[];
	teamMembers: TeamMember[];
}

export interface Client {
	id: string;
	name: string;
	lastName: string;
	lastName2: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	company: string;
	email: string;
	phone: string;
	website: string;
	industry: string;
	socialMedia: {
		facebook: string;
		instagram: string;
		linkedin: string;
		twitter: string;
		x: string;
		website: string;
	};
	contactPerson: {
		name: string;
		role: string;
		email: string;
		phone: string;
	};
	logoUrl: string;
	paymentTerms: string;
	billingInfo: {
		razonSocial: string;
		direccionFiscal: string;
		RFC: string;
		emailFacturacion: string;
	};
	activeProjectsCount: number;
	lastInvoiceDate: string;
	createdAt: string;
	updatedAt: string;
	status: string;
	notes: string;
	RFC: string;
	CURP: string;
	projects: Project[];
}

const emptyClient: Client = {
	id: "",
	name: "",
	lastName: "",
	lastName2: "",
	address: "",
	city: "",
	state: "",
	zipCode: "",
	country: "",
	company: "",
	email: "",
	phone: "",
	website: "",
	industry: "",
	contactPerson: {
		name: "",
		role: "",
		email: "",
		phone: "",
	},
	socialMedia: {
		facebook: "",
		instagram: "",
		linkedin: "",
		twitter: "",
		x: "",
		website: "",
	},
	logoUrl: "",
	paymentTerms: "",
	billingInfo: {
		razonSocial: "",
		direccionFiscal: "",
		RFC: "",
		emailFacturacion: "",
	},
	activeProjectsCount: 0,
	lastInvoiceDate: "",
	createdAt: "",
	updatedAt: "",
	status: "",
	notes: "",
	RFC: "",
	CURP: "",
	projects: [
		{
			id: "",
			name: "",
			description: "",
			type: "",
			technologies: [""],
			deliverables: [""],
			milestones: [{ name: "", date: "" }],
			clientFeedback: "",
			repositoryUrl: "",
			socialMedia: {
				facebook: "",
				instagram: "",
				linkedin: "",
				twitter: "",
				x: "",
				website: "",
			},
			hosting: {
				provider: "",
				access: "",
				renewalDate: "",
			},
			supportPeriod: "",
			maintenancePlan: "",
			attachments: [{ name: "", url: "" }],
			startDate: "",
			endDate: "",
			status: "",
			priority: "",
			budget: 0,
			taxes: {
				IVA: 0,
				ISR: 0,
				retenciones: {
					IVA: 0,
					ISR: 0,
				},
			},
			cost: [
				{
					type: "",
					amount: 0,
					currency: "",
				},
			],
			teamMembers: [
				{
					id: "",
					name: "",
					role: "",
					email: "",
				},
			],
		},
	],
};

interface ClientFormProps {
	client?: Client;
	onSave: (data: Client) => void;
}

const ClientForm = React.forwardRef(function ClientForm(
	{ client = emptyClient, onSave }: ClientFormProps,
	ref
) {
	const [form, setForm] = useState<Client>(client);
	const [message, setMessage] = useState<string>("");
	const [error, setError] = useState<string>("");

	useImperativeHandle(ref, () => ({
		resetForm: () => setForm(emptyClient),
	}));

	// Maneja cambios en campos simples
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	// Maneja cambios en campos anidados (ejemplo: contactPerson)

	// Maneja cambios en el select de estado
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	type NestedParent = "contactPerson" | "socialMedia" | "billingInfo";
	const handleNestedChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		parent: NestedParent
	) => {
		if (parent === "contactPerson") {
			setForm({
				...form,
				contactPerson: {
					...form.contactPerson,
					[e.target.name]: e.target.value,
				},
			});
		} else if (parent === "socialMedia") {
			setForm({
				...form,
				socialMedia: {
					...form.socialMedia,
					[e.target.name]: e.target.value,
				},
			});
		} else if (parent === "billingInfo") {
			setForm({
				...form,
				billingInfo: {
					...form.billingInfo,
					[e.target.name]: e.target.value,
				},
			});
		}
	};

	// Maneja el submit y muestra mensajes visuales
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMessage("");
		setError("");
		try {
			// Genera un id único usando timestamp y nombre
			const newClient = {
				...form,
				id: (Date.now() + Math.floor(Math.random() * 1000)).toString(), // id como string único
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			};
			await onSave(newClient);
			setMessage("Cliente guardado correctamente.");
		} catch {
			setError("* Error al guardar el cliente.");
		}
	};

	// Ejemplo de campos principales y anidados
	return (
		<Card title="Formulario de Cliente" titleSize="3xl" alignTitle="center">
			<div className="h-2"></div>
			<H4 align="center">Datos del Cliente</H4>
			<div className="h-2"></div>
			<form className="" onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-4  gap-12">
					<div className="flex items-center gap-4">
						<FaUser className="text-primary-dark text-2xl" />
						<input
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Nombre"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.name ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaUser className="text-primary-dark text-2xl" />
						<input
							name="lastName"
							value={form.lastName}
							onChange={handleChange}
							placeholder="Apellido Paterno"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.lastName ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaUser className="text-primary-dark text-2xl" />
						<input
							name="lastName2"
							value={form.lastName2}
							onChange={handleChange}
							placeholder="Apellido Materno"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.lastName2 ? "bg-blue-200" : ""
							}`}
						/>
					</div>

					<div className="flex items-center gap-4">
						<FaPhone className="text-primary-dark text-2xl" />
						<input
							name="phone"
							value={form.phone}
							onChange={handleChange}
							placeholder="Teléfono"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.phone ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaBuilding className="text-primary-dark text-2xl" />
						<input
							name="company"
							value={form.company}
							onChange={handleChange}
							placeholder="Empresa"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.company ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaGlobe className="text-primary-dark text-2xl" />
						<input
							name="website"
							value={form.website}
							onChange={handleChange}
							placeholder="Sitio Web"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.website ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaFacebookF className="text-primary-dark text-2xl" />
						<input
							name="website"
							value={form.socialMedia.facebook}
							onChange={handleChange}
							placeholder="Facebook"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.socialMedia.facebook ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaInstagram className="text-primary-dark text-2xl" />
						<input
							name="website"
							value={form.socialMedia.instagram}
							onChange={handleChange}
							placeholder="Instagram"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.socialMedia.instagram ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaLinkedin className="text-primary-dark text-2xl" />
						<input
							name="website"
							value={form.socialMedia.linkedin}
							onChange={handleChange}
							placeholder="LinkedIn"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.socialMedia.linkedin ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaIndustry className="text-primary-dark text-2xl" />
						<input
							name="industry"
							value={form.industry}
							onChange={handleChange}
							placeholder="Industria"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.industry ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaMapMarkerAlt className="text-primary-dark text-2xl" />
						<input
							name="address"
							value={form.address}
							onChange={handleChange}
							placeholder="Dirección"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.address ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaMapMarkerAlt className="text-primary-dark text-2xl" />
						<input
							name="city"
							value={form.city}
							onChange={handleChange}
							placeholder="Ciudad"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.city ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaMapMarkerAlt className="text-primary-dark text-2xl" />
						<select
							name="state"
							value={form.state}
							onChange={handleSelectChange}
							className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100">
							<option value="">Selecciona un estado</option>
							<option value="Aguascalientes">Aguascalientes</option>
							<option value="Baja California">Baja California</option>
							<option value="Baja California Sur">Baja California Sur</option>
							<option value="Campeche">Campeche</option>
							<option value="Chiapas">Chiapas</option>
							<option value="Chihuahua">Chihuahua</option>
							<option value="Ciudad de México">Ciudad de México</option>
							<option value="Coahuila">Coahuila</option>
							<option value="Colima">Colima</option>
							<option value="Durango">Durango</option>
							<option value="Estado de México">Estado de México</option>
							<option value="Guanajuato">Guanajuato</option>
							<option value="Guerrero">Guerrero</option>
							<option value="Hidalgo">Hidalgo</option>
							<option value="Jalisco">Jalisco</option>
							<option value="Michoacán">Michoacán</option>
							<option value="Morelos">Morelos</option>
							<option value="Nayarit">Nayarit</option>
							<option value="Nuevo León">Nuevo León</option>
							<option value="Oaxaca">Oaxaca</option>
							<option value="Puebla">Puebla</option>
							<option value="Querétaro">Querétaro</option>
							<option value="Quintana Roo">Quintana Roo</option>
							<option value="San Luis Potosí">San Luis Potosí</option>
							<option value="Sinaloa">Sinaloa</option>
							<option value="Sonora">Sonora</option>
							<option value="Tabasco">Tabasco</option>
							<option value="Tamaulipas">Tamaulipas</option>
							<option value="Tlaxcala">Tlaxcala</option>
							<option value="Veracruz">Veracruz</option>
							<option value="Yucatán">Yucatán</option>
							<option value="Zacatecas">Zacatecas</option>
						</select>
					</div>
					<div className="flex items-center gap-4">
						<FaMapMarkerAlt className="text-primary-dark text-2xl" />
						<input
							name="zipCode"
							value={form.zipCode}
							onChange={handleChange}
							placeholder="Código Postal"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.zipCode ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaFileSignature className="text-primary-dark text-2xl" />
						<input
							name="logoUrl"
							value={form.logoUrl}
							onChange={handleChange}
							placeholder="Logo URL"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.logoUrl ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4">
						<FaFileSignature className="text-primary-dark text-2xl" />
						<input
							name="paymentTerms"
							value={form.paymentTerms}
							onChange={handleChange}
							placeholder="Condiciones de pago"
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.paymentTerms ? "bg-blue-200" : ""
							}`}
						/>
					</div>
					<div className="flex items-center gap-4 md:col-span-2">
						<FaFileSignature className="text-primary-dark text-2xl" />
						<textarea
							name="notes"
							value={form.notes}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								setForm({ ...form, notes: e.target.value })
							}
							placeholder="Notas"
							rows={8}
							className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
								form.notes ? "bg-blue-200" : ""
							}`}
						/>
					</div>
				</div>
				<div className="my-20 flex flex-col gap-8">
					<H4>Datos de Contacto</H4>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="relative">
							<FaUser className="absolute left-3 top-3 text-gray-400" />
							<div className="flex items-center gap-4">
								<FaUser className="text-primary-dark text-2xl" />
								<input
									name="name"
									value={form.contactPerson.name}
									onChange={(e) => handleNestedChange(e, "contactPerson")}
									placeholder="Nombre"
									className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
										form.contactPerson?.name ? "bg-blue-200" : ""
									}`}
								/>
							</div>
						</div>
						<div className="relative">
							<FaUser className="absolute left-3 top-3 text-gray-400" />
							<div className="flex items-center gap-4">
								<FaUser className="text-primary-dark text-2xl" />
								<input
									name="role"
									value={form.contactPerson.role}
									onChange={(e) => handleNestedChange(e, "contactPerson")}
									placeholder="Cargo"
									className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
										form.contactPerson?.role ? "bg-blue-200" : ""
									}`}
								/>
							</div>
						</div>
						<div className="relative">
							<FaEnvelope className="absolute left-3 top-3 text-gray-400" />
							<div className="flex items-center gap-4">
								<FaEnvelope className="text-primary-dark text-2xl" />
								<input
									name="email"
									value={form.contactPerson.email}
									onChange={(e) => handleNestedChange(e, "contactPerson")}
									placeholder="Email"
									className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
										form.contactPerson?.email ? "bg-blue-200" : ""
									}`}
								/>
							</div>
						</div>
						<div className="relative">
							<FaPhone className="absolute left-3 top-3 text-gray-400" />
							<div className="flex items-center gap-4">
								<FaPhone className="text-primary-dark text-2xl" />
								<input
									name="phone"
									value={form.contactPerson.phone}
									onChange={(e) => handleNestedChange(e, "contactPerson")}
									placeholder="Teléfono"
									className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:text-gray-100 ${
										form.contactPerson?.phone ? "bg-blue-200" : ""
									}`}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Botones de acción al final del formulario */}
				<div className="flex flex-col md:flex-row justify-end gap-8 w-full mt-8">
					<Button
						variant="outline"
						onClick={() =>
							setForm({
								...form,
								name: "",
								lastName: "",
								lastName2: "",
								address: "",
								city: "",
								state: "",
								zipCode: "",
								country: "",
								company: "",
								email: "",
								phone: "",
								website: "",
								industry: "",
								logoUrl: "",
								paymentTerms: "",
								notes: "",
							})
						}
						text="Limpiar Cliente"
						size="lg"
						icon={<IoPersonRemove />}
					/>
					<Button
						variant="secondary"
						onClick={() =>
							setForm({
								...form,
								contactPerson: { name: "", role: "", email: "", phone: "" },
							})
						}
						text="Limpiar Contacto"
						size="lg"
						icon={<IoPersonRemove />}
					/>
					<Button
						type="submit"
						variant="primary"
						icon={<FaFileSignature />}
						text="Guardar Cliente"
						size="lg"
					/>
				</div>
				{/* Mensajes visuales de éxito o error */}
				<div className="mt-20 flex flex-col items-end">
					{message && (
						<div className="text-green-600 font-bold mb-4 animate-pulse">
							{message}
						</div>
					)}
					{error && (
						<div className="text-red-600 font-bold mb-4 animate-pulse">
							{error}
						</div>
					)}
				</div>
			</form>
		</Card>
	);
});

export default ClientForm;
