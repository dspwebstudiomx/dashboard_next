import Image from "next/image";
import Container from "./Containers/Container";
import H2 from "./Title/H2";

const ImageDemo = () => {
	return (
		<Container>
			<H2 align="center">Imágenes</H2>
			<section className="grid grid-cols-12">
				<div className="relative w-18 h-18 md:w-32 md:h-32 mx-auto">
					<Image
						src="/avatar_placeholder.png"
						alt="Placeholder Image"
						fill
						sizes="(max-width: 768px) 8rem, (max-width: 1024px) 8rem, 12rem"
						className="rounded-full shadow-lg object-cover"
					/>
				</div>
			</section>
		</Container>
	);
};

export default ImageDemo;
