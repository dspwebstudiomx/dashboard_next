import Card from "./Cards/Card";
import Paragraph from "./Paragraph/Paragraph";
import H2 from "./Title/H2";
import H6 from "./Title/H6";

const CardsDemo = () => {
	return (
		<>
			<H2>Tarjetas</H2>
			<div className="grid grid-cols-3 gap-12">
				<Card>
					<H6>Tarjeta 1</H6>
					<Paragraph align="inherit">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Paragraph>
				</Card>
				<Card>
					<H6>Tarjeta 1</H6>
					<Paragraph align="inherit">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Paragraph>
				</Card>
				<Card>
					<H6>Tarjeta 1</H6>
					<Paragraph align="inherit">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Paragraph>
				</Card>
			</div>
		</>
	);
};

export default CardsDemo;
