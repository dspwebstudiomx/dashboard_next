import { IoEnterOutline } from "react-icons/io5";
import Card from "./Cards/Card";
import HandleModalComponent from "./Modal/HandleModalComponent";
import Paragraph from "./Paragraph/Paragraph";
import H2 from "./Title/H2";

const CardsDemo = () => {
	return (
		<section className="flex flex-col gap-12">
			<H2 align="center">Tarjetas</H2>
			<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
				<Card title="Tarjeta Modal Ejemplo">
					<Paragraph align="inherit">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Paragraph>
					<div className="flex flex-col gap-4 mt-4 items-center">
						<HandleModalComponent
							icon={<IoEnterOutline className="text-2xl" />}
							// icon={""}
							type={"button"}
							text={"Abrir Modal"}
							modalTitle={"Modal Principal"}
							variant={"primary"}
							size="lg">
							<Paragraph align="justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
								nulla reiciendis, commodi adipisci, facilis consequatur aliquid
								aperiam velit maxime sequi ad eveniet. Magnam itaque fugit
								atque, non excepturi quas laborios am, qui quod corrupti
								suscipit architecto. Voluptates odit corporis excepturi,
								doloribus ratione aperiam veniam nulla nam, natus, itaque saepe
								at? Libero quibusdam iste, pariatur voluptate atque, magnam
								inventore quae accusantium assumenda voluptas velit eos
								veritatis cumque incidunt necessitatibus minus. Ad dignissimos
								animi voluptate, distinctio ullam quae magni, mollitia officiis
								perferendis laudantium quasi aliquid totam exercitationem culpa!
								Illum doloribus ea dignissimos explicabo, consequatur quaerat
								vitae neque sunt incidunt possimus fugiat rerum veritatis!
							</Paragraph>
							<div className="flex flex-col gap-4 mt-4 items-end">
								<HandleModalComponent
									icon={<IoEnterOutline className="text-2xl" />}
									type={"button"}
									text={"Abrir Modal Anidado"}
									modalTitle={"Modal Anidado"}
									variant="primary"
									size="lg">
									<div>
										Este es un modal anidado dentro del modal principal. Puedes
										agregar más contenido aquí.
									</div>
								</HandleModalComponent>
							</div>
						</HandleModalComponent>
					</div>
				</Card>

				<Card title="Tarjeta Modal Ejemplo">
					<Paragraph align="inherit">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Paragraph>
					<div className="flex flex-col gap-4 mt-4 items-center">
						<HandleModalComponent
							icon={<IoEnterOutline className="text-2xl" />}
							// icon={""}
							type={"button"}
							text={"Abrir Modal Principal"}
							modalTitle={"Modal Principal"}
							variant={"primary"}
							size="xl">
							<Paragraph align="justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
								nulla reiciendis, commodi adipisci, facilis consequatur aliquid
								aperiam velit maxime sequi ad eveniet. Magnam itaque fugit
								atque, non excepturi quas laborios am, qui quod corrupti
								suscipit architecto. Voluptates odit corporis excepturi,
								doloribus ratione aperiam veniam nulla nam, natus, itaque saepe
								at? Libero quibusdam iste, pariatur voluptate atque, magnam
								inventore quae accusantium assumenda voluptas velit eos
								veritatis cumque incidunt necessitatibus minus. Ad dignissimos
								animi voluptate, distinctio ullam quae magni, mollitia officiis
								perferendis laudantium quasi aliquid totam exercitationem culpa!
								Illum doloribus ea dignissimos explicabo, consequatur quaerat
								vitae neque sunt incidunt possimus fugiat rerum veritatis!
							</Paragraph>
							<div className="flex flex-col gap-4 mt-4 items-end">
								<HandleModalComponent
									icon={<IoEnterOutline className="text-2xl" />}
									type={"button"}
									text={"Abrir Modal Anidado"}
									modalTitle={"Modal Anidado"}
									variant="primary"
									size="sm">
									<div>
										Este es un modal anidado dentro del modal principal. Puedes
										agregar más contenido aquí.
									</div>
								</HandleModalComponent>
							</div>
						</HandleModalComponent>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default CardsDemo;
