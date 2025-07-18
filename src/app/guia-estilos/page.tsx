// Importaciones necesarias
import BadgesDemo from "@/components/BadgesDemo";
import ButtonDemo from "@/components/ButtonDemo";
import CardsDemo from "@/components/CardsDemo";
import ColorDemo from "@/components/ColorDemo";
import Container from "@/components/Containers/Container";
import ImageDemo from "@/components/ImageDemo";
import Alert from "@/components/Messages/Alert";
import MessagesDemo from "@/components/MessagesDemo";
import ParagraphDemo from "@/components/ParagraphDemo";
import TitlesDemo from "@/components/TitlesDemo";

// Componente principal de la aplicación
export default function App() {
	return (
		<Container>
			<div className="grid md:grid-cols-2 gap-12 md:gap-40 justify-between items-start">
				<ColorDemo />
				<TitlesDemo />
			</div>
			<ParagraphDemo />
			<ImageDemo />
			<ButtonDemo />
			<CardsDemo />
			<BadgesDemo />
			<MessagesDemo />
			<Alert />
		</Container>
	);
}
