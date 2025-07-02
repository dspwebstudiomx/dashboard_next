import ButtonDemo from "@/components/ButtonDemo";
import CardsDemo from "@/components/CardsDemo";
import ColorDemo from "@/components/ColorDemo";
import Container from "@/components/Containers/Container";
import ParagraphDemo from "@/components/ParagraphDemo";
import TitlesDemo from "@/components/TitlesDemo";

export default function App() {
	return (
		<Container>
			<div className="grid md:grid-cols-2 gap-20 p-8">
				<ColorDemo />
				<TitlesDemo />
			</div>
			<ParagraphDemo />
			<ButtonDemo />
			<CardsDemo />
		</Container>
	);
}
