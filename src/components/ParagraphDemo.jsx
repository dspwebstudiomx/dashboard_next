import Paragraph from "./Paragraph/Paragraph";
import H2 from "./Title/H2";
import H6 from "./Title/H6";

// This component demonstrates the usage of Paragraph component with different alignments
const ParagraphDemo = () => {
	return (
		<div
			id="parrafos"
			className="flex flex-col gap-12 w-full max-w-screen-xl items-center">
			<H2>Párrafos</H2>
			<div className="flex flex-col gap-20 w-full">
				<div className="flex gap-20 items-center justify-start">
					<H6>Párrafo texto a la izquierda</H6>
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
				<div className="flex gap-20 items-center justify-start">
					<H6>Párrafo texto a la derecha</H6>
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
				<div className="flex gap-20 items-center justify-start">
					<H6>Párrafo texto al centro</H6>
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
				<div className="flex gap-20 items-center justify-start text-justify">
					<H6>Párrafo con texto justificado</H6>
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
		</div>
	);
};

export default ParagraphDemo;
