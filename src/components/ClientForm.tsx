"use client";
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
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
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

	// Ejemplo de campos principales y anidados
	return (
		<Card title="Formulario de Cliente" titleSize="3xl" alignTitle="center">
			<div className="h-2"></div>
			<form ref={formRef} className="p-8" onSubmit={handleSubmit}>
				{/* DATOS PERSONALES */}
				<div className="mb-24">
					<H4 align="center">Datos personales</H4>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-primary-dark text-2xl" />
								<label className="text-base">Nombre</label>
							</div>
							<input
								required
								name="name"
								value={form.name}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.name
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-primary-dark text-2xl" />
								<label className="text-base">Apellido Paterno</label>
							</div>
							<input
								required
								name="lastName"
								value={form.lastName}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.lastName
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-primary-dark text-2xl" />
								<label className="text-base">Apellido Materno</label>
							</div>
							<input
								required
								name="lastName2"
								value={form.lastName2}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.lastName2
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaPhone className="text-primary-dark text-2xl" />
								<label className="text-base">Teléfono</label>
							</div>
							<input
								required
								name="phone"
								value={form.phone}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.phone
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-primary-dark text-2xl" />
								<label className="text-base">Correo Electrónico</label>
							</div>
							<input
								required
								name="email"
								value={form.email}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.email
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
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
								<FaFacebook className="text-primary-dark text-2xl" />
								<label className="text-base">Facebook</label>
							</div>
							<input
								name="facebook"
								value={form.socialMedia.facebook}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.facebook
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaInstagram className="text-primary-dark text-2xl" />
								<label className="text-base">Instagram</label>
							</div>
							<input
								name="instagram"
								value={form.socialMedia.instagram}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.instagram
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaLinkedin className="text-primary-dark text-2xl" />
								<label className="text-base">LinkedIn</label>
							</div>
							<input
								name="linkedin"
								value={form.socialMedia.linkedin}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.linkedin
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-primary-dark text-2xl" />
								<label className="text-base">X (Twitter)</label>
							</div>
							<input
								name="x"
								value={form.socialMedia.x}
								onChange={(e) => handleNestedChange(e, "socialMedia")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.socialMedia.x
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
					</div>
				</div>

				{/* EMPRESA */}
				<div className="mb-24">
					<H4 align="center">Empresa</H4>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaBuilding className="text-primary-dark text-2xl" />
								<label className="text-base">Empresa</label>
							</div>
							<input
								required
								name="company"
								value={form.company}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.company
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaGlobe className="text-primary-dark text-2xl" />
								<label className="text-base">Sitio Web</label>
							</div>
							<input
								required
								name="website"
								value={form.website}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.website
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-primary-dark text-2xl" />
								<label className="text-base">Email</label>
							</div>
							<input
								required
								name="email"
								value={form.email}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.email
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaIndustry className="text-primary-dark text-2xl" />
								<label className="text-base">Industria</label>
							</div>
							<select
								name="industry"
								value={form.industry}
								onChange={handleSelectChange}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:bg-gray-700 dark:text-gray-300">
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
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaFileSignature className="text-primary-dark text-2xl" />
								<label className="text-base">Condiciones de pago</label>
							</div>
							<select
								required
								name="paymentTerms"
								value={form.paymentTerms}
								onChange={handleSelectChange}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:bg-gray-700 dark:text-gray-300">
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
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-primary-dark text-2xl" />
								<label className="text-base">Dirección</label>
							</div>
							<input
								required
								name="address"
								value={form.address}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.address
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-primary-dark text-2xl" />
								<label className="text-base">Ciudad</label>
							</div>
							<input
								required
								name="city"
								value={form.city}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.city
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-primary-dark text-2xl" />
								<label className="text-base">Estado</label>
							</div>
							<select
								name="state"
								value={form.state}
								onChange={handleSelectChange}
								className="pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 dark:bg-gray-700 dark:text-gray-300">
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
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaMapMarkerAlt className="text-primary-dark text-2xl" />
								<label className="text-base">Código Postal</label>
							</div>
							<input
								required
								name="zipCode"
								value={form.zipCode}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.zipCode
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
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
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaFileSignature className="text-primary-dark text-2xl" />
								<label className="text-base">Logo URL</label>
							</div>
							<input
								name="logoUrl"
								value={form.logoUrl}
								onChange={handleChange}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.logoUrl
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>

						<div className="flex flex-col items-center gap-4 md:col-span-2">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaFileSignature className="text-primary-dark text-2xl" />
								<label className="text-base">Notas</label>
							</div>
							<textarea
								name="notes"
								value={form.notes}
								onChange={(e) => setForm({ ...form, notes: e.target.value })}
								rows={8}
								className={`p-6 input w-full rounded-2xl border-2 border-blue-800 ${
									form.notes
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
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
								<FaUser className="text-primary-dark text-2xl" />
								<label className="text-base">Nombre</label>
							</div>
							<input
								required
								name="name"
								value={form.contactPerson.name}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.name
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaUser className="text-primary-dark text-2xl" />
								<label className="text-base">Cargo</label>
							</div>
							<input
								required
								name="role"
								value={form.contactPerson.role}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.role
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaEnvelope className="text-primary-dark text-2xl" />
								<label className="text-base">Email</label>
							</div>
							<input
								required
								name="email"
								value={form.contactPerson.email}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.email
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
										: ""
								}`}
							/>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-2 justify-start w-full">
								<FaPhone className="text-primary-dark text-2xl" />
								<label className="text-base">Teléfono</label>
							</div>
							<input
								required
								name="phone"
								value={form.contactPerson.phone}
								onChange={(e) => handleNestedChange(e, "contactPerson")}
								className={`pl-4 input w-full rounded-2xl border-2 border-blue-800 py-2 ${
									form.contactPerson?.phone
										? "bg-blue-50 text-primary-dark dark:bg-gray-700 dark:text-gray-300"
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
									website: "",
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
