import Image, { ImageProps } from "next/image";

// Tamaños disponibles para la imagen
type CustomImageSize = "xs" | "sm" | "md" | "lg" | "xl";

// Valores de tamaño para cada opción
const sizes = {
	xs: { width: 32, height: 32 },
	sm: { width: 64, height: 64 },
	md: { width: 128, height: 128 },
	lg: { width: 192, height: 192 },
	xl: { width: 320, height: 320 },
};

interface CustomImageProps
	extends Omit<ImageProps, "width" | "height" | "sizes" | "className"> {
	size?: CustomImageSize;
	className?: string;
	alt: string;
}

const CustomImage = ({
	size = "md",
	className = "",
	alt,
	...props
}: CustomImageProps) => {
	const s = sizes[size] || sizes.md;
	return (
		<div
			className={`overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-500 shadow-lg ${className}`.trim()}
			style={{ width: s.width, height: s.height }}>
			<Image
				width={s.width}
				height={s.height}
				className="object-cover w-full h-full"
				alt={alt}
				{...props}
			/>
		</div>
	);
};

export default CustomImage;
