"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const FloatingThemeButton = () => {
	const [darkMode, setDarkMode] = useState<boolean | null>(null);

	// Sincroniza con el sistema y localStorage al cargar
	useEffect(() => {
		const systemPref = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const stored = localStorage.getItem("theme");
		if (stored === "dark") {
			setDarkMode(true);
		} else if (stored === "light") {
			setDarkMode(false);
		} else {
			setDarkMode(systemPref);
		}
	}, []);

	// Escucha cambios del sistema
	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (e: MediaQueryListEvent) => {
			const stored = localStorage.getItem("theme");
			if (!stored) {
				setDarkMode(e.matches);
			}
		};
		media.addEventListener("change", handler);
		return () => media.removeEventListener("change", handler);
	}, []);

	// Aplica el tema y guarda preferencia
	useEffect(() => {
		if (darkMode === null) return;
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleTheme = () => {
		// El botón SIEMPRE fuerza la preferencia del usuario
		setDarkMode((prev) => {
			const next = prev === null ? false : !prev;
			localStorage.setItem("theme", next ? "dark" : "light");

			return next;
		});
	};

	return (
		<div>
			<button
				onClick={toggleTheme}
				className="fixed bottom-20 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors dark:bg-gray-800 dark:text-yellow-400"
				aria-label="Cambiar tema">
				{darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
			</button>
		</div>
	);
};

export default FloatingThemeButton;
