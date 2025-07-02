"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const FloatingThemeButton = () => {
	const [darkMode, setDarkMode] = useState(false);

	// Sincroniza con el sistema y localStorage al cargar
	useEffect(() => {
		const systemPref = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const stored = localStorage.getItem("theme");
		if (stored === "dark" || (!stored && systemPref)) {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	// Escucha cambios del sistema
	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem("theme")) {
				setDarkMode(e.matches);
			}
		};
		media.addEventListener("change", handler);
		return () => media.removeEventListener("change", handler);
	}, []);

	// Aplica el tema y guarda preferencia
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	const toggleTheme = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<button
			onClick={toggleTheme}
			className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors dark:bg-gray-800 dark:text-yellow-400"
			aria-label="Cambiar tema">
			{darkMode ? <FaSun size={28} /> : <FaMoon size={28} />}
		</button>
	);
};

export default FloatingThemeButton;
