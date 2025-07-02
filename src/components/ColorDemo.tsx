import H2 from "./Title/H2";

/**
 * Un componente de ejemplo que utiliza los colores personalizados definidos en tailwind.config.ts
 */
export default function ColorDemo() {
	return (
		<div className="flex flex-col gap-6 p-8 bg-neutral">
			<H2 align="center">Colores Tema</H2>
			<div className="flex gap-4 flex-wrap mt-20">
				<div className="w-30 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow">
					primary
				</div>
				<div className="w-30 h-20 rounded-full bg-primary-light text-primary-dark flex items-center justify-center shadow">
					primary-light
				</div>
				<div className="w-30 h-20 rounded-full bg-primary-dark text-white flex items-center justify-center shadow">
					primary-dark
				</div>
				<div className="w-30 h-20 rounded-full bg-secondary text-white flex items-center justify-center shadow">
					secondary
				</div>
				<div className="w-30 h-20 rounded-full bg-secondary-light text-secondary-dark flex items-center justify-center shadow">
					secondary-light
				</div>
				<div className="w-30 h-20 rounded-full bg-secondary-dark text-white flex items-center justify-center shadow">
					secondary-dark
				</div>
				<div className="w-30 h-20 rounded-full bg-accent text-white flex items-center justify-center shadow">
					accent
				</div>
				<div className="w-30 h-20 rounded-full bg-neutral text-primary flex items-center justify-center shadow border border-gray-300">
					neutral
				</div>
			</div>
		</div>
	);
}
