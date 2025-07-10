/*
  useModal.js - Hook personalizado para manejar la lógica de apertura/cierre de un modal y el foco del botón de cierre.
  Este hook permite abrir y cerrar un modal, y gestionar el foco en el botón de cierre cuando el modal se abre.
  Utiliza el estado de React para controlar si el modal está abierto o cerrado, y usa useRef para mantener una referencia al botón de cierre.
  También maneja el evento de teclado para cerrar el modal con la tecla Escape.
  Este hook es útil para componentes que necesitan mostrar un modal y desean manejar su estado de manera eficiente.
  Autor: Daniel Pérez
 */
"use client";

// Importaciones de React
import { useCallback, useEffect, useRef, useState } from "react";

// Hook personalizado para manejar el estado de un modal
function useModal() {
  const [isOpen, setIsOpen] = useState(false); // Estado que indica si el modal está abierto o cerrado
  const closeButtonRef = useRef(null); // Referencia para el botón de cierre del modal
  const open = useCallback(() => setIsOpen(true), []); // Función para abrir el modal
  const close = useCallback(() => setIsOpen(false), []); // Función para cerrar el modal

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown); // Escucha el evento de teclado para cerrar el modal con la tecla Escape
    if (closeButtonRef.current) closeButtonRef.current.focus(); // Focaliza el botón de cierre cuando el modal se abre
    return () => document.removeEventListener("keydown", handleKeyDown); // Limpia el evento de teclado al cerrar el modal
  }, [isOpen, close]);

  return { isOpen, open, close, closeButtonRef }; // Retorna el estado del modal, funciones para abrir y cerrar, y la referencia al botón de cierre
}

export default useModal;
