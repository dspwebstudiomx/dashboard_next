import H2 from "./Title/H2";

/**
 * Un componente de ejemplo que utiliza los colores personalizados definidos en tailwind.config.ts
 */
export default function ColorDemo() {
	return (
		<div className="flex flex-col gap-6 p-8 bg-neutral">
			<H2 align="center">Colores Tema</H2>
			<ul className="flex gap-4 flex-wrap mt-20 uppercase">
				<li className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow text-2xl">
					P
				</li>
				<li className="w-20 h-20 rounded-full bg-primary-light text-primary-dark flex items-center justify-center shadow text-2xl">
					PL
				</li>
				<li className="w-20 h-20 rounded-full bg-primary-dark text-white flex items-center justify-center shadow text-2xl">
					PD
				</li>
				<li className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center shadow text-2xl">
					S
				</li>
				<li className="w-20 h-20 rounded-full bg-secondary-light text-secondary-dark flex items-center justify-center shadow text-2xl">
					SL
				</li>
				<li className="w-20 h-20 rounded-full bg-secondary-dark text-white flex items-center justify-center shadow text-2xl">
					SD
				</li>
				<li className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center shadow text-2xl">
					A
				</li>
				<li className="w-20 h-20 rounded-full bg-warning text-white flex items-center justify-center shadow text-2xl">
					W
				</li>
				<li className="w-20 h-20 rounded-full bg-danger text-white flex items-center justify-center shadow text-2xl">
					D
				</li>
				<li className="w-20 h-20 rounded-full bg-success text-success-dark flex items-center justify-center shadow text-2xl border border-success-dark">
					S
				</li>
				<li className="w-20 h-20 rounded-full bg-dark text-white flex items-center justify-center shadow text-2xl border border-gray-300">
					DK
				</li>
				<li className="w-20 h-20 rounded-full bg-neutral text-primary flex items-center justify-center shadow border border-gray-300 text-2xl">
					N
				</li>
			</ul>
		</div>
	);
}
