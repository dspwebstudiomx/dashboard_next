"use client";
import Image from "next/image";
import React, { useImperativeHandle, useState } from "react";
import {
	FaBuilding,
	FaEnvelope,
	// FaFacebookF,
	FaFileSignature,
	FaGlobe,
	FaIndustry,
	FaMapMarkerAlt,
	FaPhone,
	FaUser,
} from "react-icons/fa";
import {
	FaFacebook,
	FaIdBadge,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa6";
import { IoPersonRemove } from "react-icons/io5";
import { useClients } from "../hooks/useClients";
import Button from "./Button/Button";
import Card from "./Cards/Card";
import H4 from "./Title/H4";

// Plantilla de cliente vacía
interface TeamMember {
	id: string;
	name: string;
	role: string;
	email: string;
}

interface SocialMedia {
	facebook: string;
	instagram: string;
	linkedin: string;
	twitter: string;
	x: string;
}

//! Estructurar del cliente conforme al formulario
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
	RFC: string;
	CURP: string;
	socialMedia: SocialMedia;
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
	projects: Project[];
}

//* OK
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
	socialMedia: SocialMedia;
	website: string;
	RFC: string;
	CURP: string;
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
	RFC: "",
	CURP: "",
	socialMedia: {
		facebook: "",
		instagram: "",
		linkedin: "",
		twitter: "",
		x: "",
	},
	contactPerson: {
		name: "",
		role: "",
		email: "",
		phone: "",
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
			hosting: {
				provider: "",
				access: "",
				renewalDate: "",
			},
			socialMedia: {
				facebook: "",
				instagram: "",
				linkedin: "",
				twitter: "",
				x: "",
			},
			website: "",
			RFC: "",
			CURP: "",
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
}

const ClientForm = React.forwardRef(function ClientForm(
	{ client = emptyClient }: ClientFormProps,
	ref
) {
	const [form, setForm] = useState<Client>(client);
	const [message, setMessage] = useState<string>("");
	const [error, setError] = useState<string>("");
	const { handleCreateClient } = useClients();
	const formRef = React.useRef<HTMLFormElement>(null);
	const contactSectionRef = React.useRef<HTMLDivElement>(null);

	// Función para hacer scroll al inicio del formulario
	const scrollToTop = () => {
		if (formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Función para hacer scroll a la sección de datos de contacto
	const scrollToContact = () => {
		if (contactSectionRef.current) {
			contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useImperativeHandle(ref, () => ({
		resetForm: () => setForm(emptyClient),
	}));

	// Maneja cambios en campos simples
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

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

	// Ahora el submit maneja la creación del cliente directamente
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMessage("");
		setError("");
		try {
			// Genera un id único usando timestamp y nombre
			const newClient = {
				...form,
				id: (Date.now() + Math.floor(Math.random() * 1000)).toString(),
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			};
			handleCreateClient(newClient);
			setMessage("Cliente guardado correctamente.");
		} catch {
			setError("* Error al guardar el cliente.");
		}
	};

	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const formData = new FormData();
		formData.append("file", file);
		try {
			const res = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});
			const data = await res.json();
			if (data.url) {
				setForm((prev) => ({ ...prev, logoUrl: data.url }));
			}
		} catch {
			setError("Error al subir la imagen");
		}
	};

	// Ejemplo de campos principales y anidados
	return (
		<Card title="Formulario de Cliente" titleSize="3xl" alignTitle="center">
			<div className="h-2"></div>
			<form ref={formRef} className="p-8" onSubmit={handleSubmit}>
				{/* DATOS PERSONALES */}
				<div className="mb-24">
					<H4 align="center">Datos personales</H4>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-dark text-2xl" />
								<label className="text-base font-semibold">Nombre</label>
							</div>
							<input
								required
								name="name"
								value={form.name}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.name
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-dark text-2xl" />
								<label className="text-base font-semibold">
									Apellido Paterno
								</label>
							</div>
							<input
								required
								name="lastName"
								value={form.lastName}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.lastName
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-dark text-2xl" />
								<label className="text-base font-semibold">
									Apellido Materno
								</label>
							</div>
							<input
								required
								name="lastName2"
								value={form.lastName2}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.lastName2
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaPhone className="text-dark text-2xl" />
								<label className="text-base font-semibold">Teléfono</label>
							</div>
							<input
								required
								name="phone"
								value={form.phone}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.phone
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-dark text-2xl" />
								<label className="text-base font-semibold">
									Correo Electrónico
								</label>
							</div>
							<input
								required
								name="email"
								value={form.email}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.email
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaIdBadge className="text-dark text-2xl" />
								<label className="text-base font-semibold">CURP</label>
							</div>
							<input
								required
								name="CURP"
								value={form.CURP}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.CURP
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
				</div>

				{/* REDES SOCIALES */}
				<div className="mb-24">
					<H4 align="center">Redes sociales</H4>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaFacebook className="text-dark text-2xl" />
								<label className="text-base font-semibold">Facebook</label>
							</div>
							<input
								name="facebook"
								value={form.socialMedia.facebook}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.facebook
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaInstagram className="text-dark text-2xl" />
								<label className="text-base font-semibold">Instagram</label>
							</div>
							<input
								name="instagram"
								value={form.socialMedia.instagram}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.instagram
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaLinkedin className="text-dark text-2xl" />
								<label className="text-base font-semibold">LinkedIn</label>
							</div>
							<input
								name="linkedin"
								value={form.socialMedia.linkedin}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.linkedin
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-dark text-2xl" />
								<label className="text-base font-semibold">X (Twitter)</label>
							</div>
							<input
								name="x"
								value={form.socialMedia.x}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.x
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
				</div>

				{/* EMPRESA */}
				<div className="mb-24">
					<H4 align="center">Empresa</H4>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
						{/* Nombre Empresa */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaBuilding className="text-dark text-2xl" />
								<label className="text-base font-semibold">
									Nombre de la Empresa
								</label>
							</div>
							<input
								required
								name="company"
								value={form.company}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.company
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>

						{/* Industria */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaIndustry className="text-dark text-2xl" />
								<label className="text-base font-semibold">Industria</label>
							</div>
							<select
								name="industry"
								value={form.industry}
								onChange={handleSelectChange}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:bg-gray-700 dark:text-gray-300 text-sm">
								<option value="">Selecciona una industria</option>
								<option value="Tecnología">Tecnología</option>
								<option value="Salud">Salud</option>
								<option value="Educación">Educación</option>
								<option value="Finanzas">Finanzas</option>
								<option value="Comercio">Comercio</option>
								<option value="Manufactura">Manufactura</option>
								<option value="Construcción">Construcción</option>
								<option value="Alimentos y Bebidas">Alimentos y Bebidas</option>
								<option value="Transporte y Logística">
									Transporte y Logística
								</option>
								<option value="Turismo">Turismo</option>
								<option value="Servicios">Servicios</option>
								<option value="Otra">Otra</option>
							</select>
						</div>
						{/* Condiciones de pago */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaFileSignature className="text-dark text-2xl" />
								<label className="text-base font-semibold">
									Condiciones de pago
								</label>
							</div>
							<select
								required
								name="paymentTerms"
								value={form.paymentTerms}
								onChange={handleSelectChange}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:bg-gray-700 dark:text-gray-300 text-sm">
								<option value="">Selecciona una opción</option>
								<option value="Contado">Contado</option>
								<option value="7 días">7 días</option>
								<option value="15 días">15 días</option>
								<option value="30 días">30 días</option>
								<option value="60 días">60 días</option>
								<option value="90 días">90 días</option>
								<option value="Anticipo 50% y 50% a la entrega">
									Anticipo 50% y 50% a la entrega
								</option>
								<option value="Otra">Otra</option>
							</select>
						</div>
						{/* RFC */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-dark text-2xl" />
								<label className="text-base font-semibold">RFC</label>
							</div>
							<input
								required
								name="RFC"
								value={form.RFC}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.RFC
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						{/* Sitio Web */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaGlobe className="text-dark text-2xl" />
								<label className="text-base font-semibold">Sitio Web</label>
							</div>
							<input
								required
								name="website"
								value={form.website}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.website
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						{/* Email */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-dark text-2xl" />
								<label className="text-base font-semibold">Email</label>
							</div>
							<input
								required
								name="email"
								value={form.email}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.email
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
					{/* Segunda Sección */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
						{/* Dirección */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-dark text-2xl" />
								<label className="text-base font-semibold">Calle</label>
							</div>
							<input
								required
								name="address"
								value={form.address}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.address
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						{/* Ciudad */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-dark text-2xl" />
								<label className="text-base font-semibold">Ciudad</label>
							</div>
							<input
								required
								name="city"
								value={form.city}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.city
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						{/* Estado */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-dark text-2xl" />
								<label className="text-base font-semibold">Estado</label>
							</div>
							<select
								name="state"
								value={form.state}
								onChange={handleSelectChange}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:bg-gray-700 dark:text-gray-300 text-sm">
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
						{/* Código Postal */}
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-dark text-2xl" />
								<label className="text-base font-semibold">Código Postal</label>
							</div>
							<input
								required
								name="zipCode"
								value={form.zipCode}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.zipCode
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
				</div>

				{/* OTROS CAMPOS */}
				<div className="mb-24">
					<H4 align="center">Otros</H4>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-12">
						{/* guardar imagen en clients.json del cliente */}
						<div className="flex flex-col items-center gap-4">
							<div
								id="adjuntar imagen"
								className="flex items-center gap-2 justify-start w-full"></div>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 bg-white dark:bg-gray-700 dark:text-gray-300"
							/>
							{form.logoUrl && (
								<div className="mt-2">
									<Image
										src={form.logoUrl}
										alt="Logo"
										width={120}
										height={96}
										className="rounded-xl border object-contain"
									/>
								</div>
							)}
						</div>
						<div className="flex flex-col items-center gap-4 md:col-span-2">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaFileSignature className="text-dark text-2xl" />
								<label className="text-base font-semibold">Notas</label>
							</div>
							<textarea
								name="notes"
								value={form.notes}
								onChange={(e) => setForm({ ...form, notes: e.target.value })}
								rows={8}
								className={`p-6 input w-full rounded-2xl border-2 border-blue-800 ${
									form.notes
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
				</div>

				{/* DATOS DE CONTACTO */}

				<div
					ref={contactSectionRef}
					className="my-20 flex flex-col gap-8 mt-20">
					<H4 align="center">Datos de Contacto</H4>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-dark text-2xl" />
								<label className="text-base font-semibold">Nombre</label>
							</div>
							<input
								required
								name="name"
								value={form.contactPerson.name}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.name
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-dark text-2xl" />
								<label className="text-base font-semibold">Cargo</label>
							</div>
							<input
								required
								name="role"
								value={form.contactPerson.role}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.role
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-dark text-2xl" />
								<label className="text-base font-semibold">Email</label>
							</div>
							<input
								required
								name="email"
								value={form.contactPerson.email}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.email
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaPhone className="text-dark text-2xl" />
								<label className="text-base font-semibold">Teléfono</label>
							</div>
							<input
								required
								name="phone"
								value={form.contactPerson.phone}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.phone
										? "bg-blue-200 text-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
				</div>

				{/* Botones de acción al final del formulario */}
				<div className="flex flex-col md:flex-row justify-end gap-8 w-full mt-8">
					<Button
						variant="outline"
						onClick={() => {
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
								socialMedia: {
									facebook: "",
									instagram: "",
									linkedin: "",
									twitter: "",
									x: "",
								},
							});
							scrollToTop();
						}}
						text="Limpiar Cliente"
						size="lg"
						icon={<IoPersonRemove />}
					/>
					<Button
						variant="secondary"
						onClick={() => {
							setForm({
								...form,
								contactPerson: { name: "", role: "", email: "", phone: "" },
							});
							scrollToContact();
						}}
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
