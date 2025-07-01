"use client";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";
import H4 from "../Title/H4";

// Extiende el tipo Window para incluir __openModals
declare global {
	interface Window {
		__openModals?: number;
	}
}

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
	closeButtonRef?: React.RefObject<HTMLButtonElement>;
	modalTitle?: string;
}

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
					<Button variant="icon" ref={closeButtonRef} onClick={onClose}>
						<span role="img" aria-label="icon">
							<IoMdClose className="text-3xl font-bold" />
						</span>
					</Button>
				</div>
				<div className=" flex flex-col gap-8 p-8">
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
