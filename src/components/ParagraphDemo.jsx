import Card from "./Cards/Card";
import Paragraph from "./Paragraph/Paragraph";
import H4 from "./Title/H4";

// This component demonstrates the usage of Paragraph component with different alignments
const ParagraphDemo = () => {
	return (
		<Card title="Demostración de Párrafos" titleSize="3xl">
			<div className="grid grid-cols-5 gap-8  md:gap-20 items-center justify-start">
				<div className="col-span-5 md:col-span-2">
					<H4>Párrafo texto a la izquierda</H4>
				</div>
				<div className="col-span-5 md:col-span-3">
					<Paragraph align="left">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
						facere adipisci odio, fugiat laboriosam quae eligendi tenetur ut
						assumenda at molestiae reprehenderit neque cupiditate dolorem
						obcaecati nulla corporis in. Officiis quidem reprehenderit, aliquam
						labore odit dolorum, nam suscipit qui eligendi mollitia asperiores
						nisi sequi neque. Iste molestias ullam deserunt nesciunt. Culpa
						perferendis ut, suscipit natus dolores nemo illo. Ratione sequi
						dolorem ab repellat laboriosam illum numquam deleniti, laborum
						asperiores beatae quam consectetur quidem, delectus culpa blanditiis
						obcaecati recusandae nam ipsa eos qui voluptatem amet molestias
						dicta. Tenetur maxime accusantium voluptatum ipsum eaque dolor cum
						quia eum voluptatem explicabo. Modi, molestias.
					</Paragraph>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-8  md:gap-20 items-center justify-start">
				<div className="col-span-5 md:col-span-2">
					<H4>Párrafo texto a la derecha</H4>
				</div>
				<div className="col-span-5 md:col-span-3">
					<Paragraph align="right">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
						facere adipisci odio, fugiat laboriosam quae eligendi tenetur ut
						assumenda at molestiae reprehenderit neque cupiditate dolorem
						obcaecati nulla corporis in. Officiis quidem reprehenderit, aliquam
						labore odit dolorum, nam suscipit qui eligendi mollitia asperiores
						nisi sequi neque. Iste molestias ullam deserunt nesciunt. Culpa
						perferendis ut, suscipit natus dolores nemo illo. Ratione sequi
						dolorem ab repellat laboriosam illum numquam deleniti, laborum
						asperiores beatae quam consectetur quidem, delectus culpa blanditiis
						obcaecati recusandae nam ipsa eos qui voluptatem amet molestias
						dicta. Tenetur maxime accusantium voluptatum ipsum eaque dolor cum
						quia eum voluptatem explicabo. Modi, molestias.
					</Paragraph>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-8  md:gap-20 items-center justify-start">
				<div className="col-span-5 md:col-span-2">
					<H4>Párrafo texto al centro</H4>
				</div>
				<div className="col-span-5 md:col-span-3">
					<Paragraph align="center">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
						facere adipisci odio, fugiat laboriosam quae eligendi tenetur ut
						assumenda at molestiae reprehenderit neque cupiditate dolorem
						obcaecati nulla corporis in. Officiis quidem reprehenderit, aliquam
						labore odit dolorum, nam suscipit qui eligendi mollitia asperiores
						nisi sequi neque. Iste molestias ullam deserunt nesciunt. Culpa
						perferendis ut, suscipit natus dolores nemo illo. Ratione sequi
						dolorem ab repellat laboriosam illum numquam deleniti, laborum
						asperiores beatae quam consectetur quidem, delectus culpa blanditiis
						obcaecati recusandae nam ipsa eos qui voluptatem amet molestias
						dicta. Tenetur maxime accusantium voluptatum ipsum eaque dolor cum
						quia eum voluptatem explicabo. Modi, molestias.
					</Paragraph>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-8  md:gap-20 items-center justify-start">
				<div className="col-span-5 md:col-span-2">
					<H4>Párrafo con texto justificado</H4>
				</div>
				<div className="col-span-5 md:col-span-3">
					<Paragraph align="justify">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
						facere adipisci odio, fugiat laboriosam quae eligendi tenetur ut
						assumenda at molestiae reprehenderit neque cupiditate dolorem
						obcaecati nulla corporis in. Officiis quidem reprehenderit, aliquam
						labore odit dolorum, nam suscipit qui eligendi mollitia asperiores
						nisi sequi neque. Iste molestias ullam deserunt nesciunt. Culpa
						perferendis ut, suscipit natus dolores nemo illo. Ratione sequi
						dolorem ab repellat laboriosam illum numquam deleniti, laborum
						asperiores beatae quam consectetur quidem, delectus culpa blanditiis
						obcaecati recusandae nam ipsa eos qui voluptatem amet molestias
						dicta. Tenetur maxime accusantium voluptatum ipsum eaque dolor cum
						quia eum voluptatem explicabo. Modi, molestias.
					</Paragraph>
				</div>
			</div>
		</Card>
	);
};

export default ParagraphDemo;
