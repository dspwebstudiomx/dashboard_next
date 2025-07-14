"use client";
// Importa las dependencias necesarias
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";
import H4 from "../Title/H4";

// Extiende el tipo Window para incluir __openModals
declare global {
	interface Window {
		__openModals?: number;
	}
}

// Define las propiedades del modal
interface ModalProps {
	children: React.ReactNode; // Contenido del modal
	onClose: () => void; // Función para cerrar el modal
	closeButtonRef?: React.RefObject<HTMLButtonElement>; // Referencia para el botón de cerrar
	modalTitle?: string; // Título del modal
}

// Componente Modal
const Modal = ({
	children, // Contenido del modal
	onClose, // Función para cerrar el modal
	closeButtonRef, // Referencia para el botón de cerrar
	modalTitle, // Título del modal
}: ModalProps) => {
	useEffect(() => {
		window.__openModals = (window.__openModals || 0) + 1; // Incrementa el contador de modales abiertos
		document.body.style.overflow = "hidden"; // Evita el scroll del body cuando el modal está abierto
		return () => {
			window.__openModals = (window.__openModals || 1) - 1; // Decrementa el contador de modales abiertos

			// Restaura el estilo de overflow del body si no hay más modales abiertos
			if (window.__openModals <= 0) {
				document.body.style.overflow = "";
			}
		};
	}, []);

	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/70 transition-opacity duration-300 animate-fadeIn"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title">
			<div className="bg-gray-100 p-6 md:p-12 sm:rounded-2xl border-2 border-gray-300 shadow-lg transform transition-all duration-300 animate-modalIn z-40 sm:max-w-screen-sm  md:max-w-screen-md 2xl:min-w-screen-lg 2xl:max-w-screen-lg mx-auto dark:bg-gray-800 dark:border-gray-600 min-h-[50vh]">
				{/* Botón de cerrar modal */}
				<div className="flex justify-end w-full">
					<Button
						icon={<IoMdClose className="text-4xl font-bold" />} // Icono de cerrar
						variant="icon" // Variante del botón para icono
						ref={closeButtonRef} // Referencia para el botón de cerrar
						onClick={onClose} // Función para cerrar el modal
						type="button" // Tipo de botón
					/>
				</div>
				{/* Contenido del modal */}
				<div className="flex flex-col gap-8 max-h-screen overflow-y-auto">
					<H4 id="modal-title" align="left">
						{modalTitle}
					</H4>
					<div className="mb-4 flex flex-col gap-8">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

/*
  Component: Modal
  Description: A reusable modal component that can be used to display content in a dialog box.
  It handles opening and closing, and manages the body's overflow style to prevent scrolling when the modal is open.
  Usage: Wrap your content inside the Modal component and provide an onClose function to handle closing
  the modal. Optionally, you can pass a title for the modal and a reference for the close button.
  Example:
	<Modal onClose={handleClose} modalTitle="My Modal">
	  <p>This is the content of the modal.</p>
	</Modal>
  Note: This component uses the `useEffect` hook to manage the modal's open state
  and the body's overflow style. It also uses the `IoMdClose` icon for the close button.
  Make sure to import the necessary styles and icons in your project.
  Dependencies: React, IoMdClose from react-icons, Button component, H3 title component.
  Accessibility: The modal is accessible with ARIA attributes for dialog and modal roles.
  Animation: The modal has a fade-in animation when it opens.
  License: MIT
*/
