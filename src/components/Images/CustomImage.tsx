import Image, { ImageProps } from "next/image";

type CustomImageSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<
	CustomImageSize,
	{ width: number; height: number; className: string; sizes: string }
> = {
	xs: {
		width: 32,
		height: 32,
		className: "w-8 h-8 aspect-square",
		sizes: "2rem",
	},
	sm: {
		width: 64,
		height: 64,
		className: "w-16 h-16 aspect-square",
		sizes: "4rem",
	},
	md: {
		width: 128,
		height: 128,
		className: "w-32 h-32 aspect-square",
		sizes: "8rem",
	},
	lg: {
		width: 192,
		height: 192,
		className: "w-48 h-48 aspect-square",
		sizes: "12rem",
	},
	xl: {
		width: 256,
		height: 256,
		className: "w-64 h-64 aspect-square",
		sizes: "16rem",
	},
};

interface CustomImageProps
	extends Omit<ImageProps, "width" | "height" | "sizes" | "className"> {
	size?: CustomImageSize;
	className?: string;
}

const CustomImage = ({
	size = "md",
	className = "",
	alt,
	...props
}: CustomImageProps & { alt: string }) => {
	if (typeof alt !== "string") {
		throw new Error(
			"El prop 'alt' es obligatorio para CustomImage por accesibilidad."
		);
	}
	const { width, height, className: sizeClass, sizes } = sizeMap[size];
	return (
		<div
			className={`overflow-hidden rounded-full ${sizeClass}`.trim()}
			style={{ width, height }}>
			<Image
				width={width}
				height={height}
				sizes={sizes}
				className={`object-cover w-full h-full ${className}`.trim()}
				alt={alt}
				{...props}
			/>
		</div>
	);
};

export default CustomImage;
