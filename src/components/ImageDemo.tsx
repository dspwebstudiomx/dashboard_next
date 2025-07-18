import Container from "./Containers/Container";
import CustomImage from "./Images/CustomImage";
import H2 from "./Title/H2";

const ImageDemo = () => {
	return (
		<Container>
			<H2 align="center">Imágenes</H2>
			<section className="grid grid-cols-5 gap-20 place-items-center">
				<CustomImage
					src="/avatar_placeholder.png"
					alt="Placeholder Image"
					size="xs"
				/>
				<CustomImage
					src="/avatar_placeholder.png"
					alt="Placeholder Image"
					size="sm"
				/>
				<CustomImage
					src="/avatar_placeholder.png"
					alt="Placeholder Image"
					size="md"
				/>
				<CustomImage
					src="/avatar_placeholder.png"
					alt="Placeholder Image"
					size="lg"
				/>
				<CustomImage
					src="/avatar_placeholder.png"
					alt="Placeholder Image"
					size="xl"
				/>
			</section>
		</Container>
	);
};

export default ImageDemo;
