import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src?: string;
	alt?: string;
	srcset?: string;
}

const Image = ({ src, alt, srcset, ...rest }: ImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			srcSet={srcset}
			className=" rounded rounded-full w-32 h-32"
			{...rest}
		/>
	);
};

export default Image;
