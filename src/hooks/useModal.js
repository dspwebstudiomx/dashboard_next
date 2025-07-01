"use client";
import { useState, useEffect, useCallback, useRef } from "react";


/**
 * Hook personalizado para manejar la lógica de apertura/cierre de un modal y el foco del botón de cierre.
 */
function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    if (closeButtonRef.current) closeButtonRef.current.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return { isOpen, open, close, closeButtonRef };
}

export default useModal;
