import Card from "./Cards/Card";
import CustomImage from "./Images/CustomImage";

const ImageDemo = () => {
	return (
		<Card title="Imágenes" titleSize="3xl">
			<section className="flex gap-20 place-items-center">
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
		</Card>
	);
};

export default ImageDemo;
