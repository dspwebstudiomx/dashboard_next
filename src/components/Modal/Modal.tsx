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

"use client";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";
import H3 from "../Title/H3";

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
	children,
	onClose,
	closeButtonRef,
	modalTitle,
}: ModalProps) => {
	useEffect(() => {
		window.__openModals = (window.__openModals || 0) + 1;
		document.body.style.overflow = "hidden";
		return () => {
			window.__openModals = (window.__openModals || 1) - 1;
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
			<div className="bg-gray-100 p-8 rounded-2xl border-2 border-gray-300 shadow-lg transform transition-all duration-300 animate-modalIn z-40 2xl:min-w-screen-xl 2xl:max-w-screen-xl mx-auto">
				<div className="flex justify-end">
					<Button
						icon={<IoMdClose className="text-4xl font-bold" />} // Icono de cerrar
						variant="icon" // Variante del botón para icono
						ref={closeButtonRef} // Referencia para el botón de cerrar
						onClick={onClose} // Función para cerrar el modal
					/>
				</div>
				<div className=" flex flex-col gap-8 p-8">
					<H3 id="modal-title" align="left">
						{modalTitle}
					</H3>
					<div className="mb-4 flex flex-col gap-8">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
