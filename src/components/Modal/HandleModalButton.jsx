"use client";
// Importaciones de React
import Button from "@/components/Button/Button"; // Componente de botón
import Modal from "@/components/Modal/Modal"; // Componente de modal
import useModal from "@/hooks/useModal"; // Hook personalizado para manejar el estado del modal

// Componente HandleModalButton
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
  Componente para manejar la apertura y cierre de un modal.
  Utiliza el hook useModal para controlar el estado del modal.

  Recibe como props:
  - children: Contenido del modal.
  - title: Título del botón que abre el modal.
  - modalTitle: Título del modal.
  - closeButtonRef: Referencia al botón de cierre del modal.

  Ejemplo de uso:s
    <HandleModalButton title="Abrir Modal" modalTitle="Título del Modal">
      <p>Contenido del modal</p>
    </HandleModalButton>

  Requisitos:
    - El componente debe estar envuelto en un proveedor de contexto si se utiliza el hook useModal.
    - El componente Button debe aceptar una prop onClick para manejar la apertura del modal.
    - El componente Modal debe aceptar props como onClose, closeButtonRef y modalTitle.
    - El hook useModal debe proporcionar los métodos isOpen, open, close y closeButtonRef.

  Dependencias:
    - Button: Componente de botón.
    - useModal: Hook personalizado para manejar el estado del modal.
    - Modal: Componente de modal.
    - React: Biblioteca de React para crear componentes.
    - PropTypes: Para validar las props del componente (opcional).

  Animaciones:
    - animate-fadeIn: para el fondo del modal
    - animate-modalIn: para el contenido del modal
*/
