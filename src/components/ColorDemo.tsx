import H2 from "./Title/H2";

/**
 * Un componente de ejemplo que utiliza los colores personalizados definidos en tailwind.config.ts
 */

const colorItems = [
	{ name: "primary", label: "P", className: "bg-primary text-white" },
	{
		name: "primary-light",
		label: "PL",
		className: "bg-primary-light text-primary-dark",
	},
	{
		name: "primary-dark",
		label: "PD",
		className: "bg-primary-dark text-white",
	},
	{ name: "secondary", label: "S", className: "bg-secondary text-white" },
	{
		name: "secondary-light",
		label: "SL",
		className: "bg-secondary-light text-secondary-dark",
	},
	{
		name: "secondary-dark",
		label: "SD",
		className: "bg-secondary-dark text-white",
	},
	{ name: "accent", label: "A", className: "bg-accent text-white" },
	{
		name: "warning",
		label: "W",
		className: "bg-warning text-white border border-warning-dark",
	},
	{ name: "danger", label: "D", className: "bg-danger text-white" },
	{
		name: "success",
		label: "S",
		className: "bg-success text-success-dark border border-success-dark",
	},
	{
		name: "dark",
		label: "DK",
		className: "bg-dark text-white border border-gray-300",
	},
	{
		name: "neutral",
		label: "N",
		className: "bg-neutral text-primary border border-gray-300",
	},
];

export default function ColorDemo() {
	return (
		<div className="flex flex-col gap-6 p-8 bg-neutral">
			<H2 align="center">Colores Tema</H2>
			<ul className="flex gap-4 flex-wrap mt-20 uppercase">
				{colorItems.map((item, idx) => (
					<li
						id={`color-${item.name}`}
						key={idx}
						className={`w-20 h-20 rounded-full flex items-center justify-center shadow text-2xl ${item.className}`}>
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
}
