import Image from "next/image";
import Container from "./Containers/Container";

const ImageDemo = () => {
	return (
		<Container>
			<section className="grid grid-cols-12">
				<Image
					src="https://placehold.co/600x400"
					alt="Placeholder Image"
					width={600}
					height={400}
				/>
			</section>
		</Container>
	);
};

export default ImageDemo;
