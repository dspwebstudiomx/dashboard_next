import Container from "./Containers/Container";
import CustomImage from "./Images/CustomImage";
import H2 from "./Title/H2";

const ImageDemo = () => {
	return (
		<Container>
			<H2 align="center">Imágenes</H2>
			<section className="grid grid-cols-12">
				<div className="mx-auto">
					<CustomImage
						src="/avatar_placeholder.png"
						alt="Placeholder Image"
						size="md"
					/>
				</div>
			</section>
		</Container>
	);
};

export default ImageDemo;
