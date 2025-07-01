"use client";
import React from "react";
import Button from "@/components/Button/Button";
import useModal from "@/hooks/useModal";
import Modal from "@/components/Modal/Modal"; // Asegúrate de que la ruta sea correcta

const HandleModalButton = ({ children, title, modalTitle }) => {
	const { isOpen, open, close, closeButtonRef } = useModal();

	return (
		<>
			<Button onClick={open}>{title}</Button>
			{isOpen && (
				<Modal
					onClose={close}
					closeButtonRef={closeButtonRef}
					modalTitle={modalTitle}>
					{children}
				</Modal>
			)}
		</>
	);
};

export default HandleModalButton;

/*
Animaciones:
- animate-fadeIn: para el fondo del modal
- animate-modalIn: para el contenido del modal
*/
