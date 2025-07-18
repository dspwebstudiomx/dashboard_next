import Image, { ImageProps } from "next/image";

// Tamaños disponibles para la imagen
type CustomImageSize = "xs" | "sm" | "md" | "lg" | "xl";

// Valores de tamaño para cada opción
const sizes = {
	xs: { w: 32, h: 32, tw: "w-8 h-8" },
	sm: { w: 64, h: 64, tw: "w-16 h-16" },
	md: { w: 128, h: 128, tw: "w-32 h-32" },
	lg: { w: 192, h: 192, tw: "w-48 h-48" },
	xl: { w: 256, h: 256, tw: "w-64 h-64" },
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
			className={`overflow-hidden rounded-full ${s.tw}`.trim()}
			style={{ width: s.w, height: s.h }}>
			<Image
				width={s.w}
				height={s.h}
				className={`object-cover w-full h-full ${className}`.trim()}
				alt={alt}
				{...props}
			/>
		</div>
	);
};

export default CustomImage;
