import Button from "@/components/Button/Button";
import HandleModalComponent from "@/components/Modal/HandleModalComponent";
import { FaFaceAngry } from "react-icons/fa6";
import Paragraph from "./Paragraph/Paragraph";

export default function ButtonDemo() {
	return (
		<div className="flex flex-col  gap-12 w-full max-w-screen-xl">
			<div className="flex gap-4 flex-wrap">
				<HandleModalComponent
					title={"Abrir Modal Principal"}
					modalTitle={"Modal Principal"}>
					<Paragraph align="justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						nulla reiciendis, commodi adipisci, facilis consequatur aliquid
						aperiam velit maxime sequi ad eveniet. Magnam itaque fugit atque,
						non excepturi quas laborios am, qui quod corrupti suscipit
						architecto. Voluptates odit corporis excepturi, doloribus ratione
						aperiam veniam nulla nam, natus, itaque saepe at? Libero quibusdam
						iste, pariatur voluptate atque, magnam inventore quae accusantium
						assumenda voluptas velit eos veritatis cumque incidunt
						necessitatibus minus. Ad dignissimos animi voluptate, distinctio
						ullam quae magni, mollitia officiis perferendis laudantium quasi
						aliquid totam exercitationem culpa! Illum doloribus ea dignissimos
						explicabo, consequatur quaerat vitae neque sunt incidunt possimus
						fugiat rerum veritatis!
					</Paragraph>
					<div className="flex flex-col gap-4 mt-4 items-end">
						<HandleModalComponent
							title={"Abrir Modal Anidado"}
							modalTitle={"Modal Anidado"}>
							<div>
								Este es un modal anidado dentro del modal principal. Puedes
								agregar más contenido aquí.
							</div>
						</HandleModalComponent>
					</div>
				</HandleModalComponent>
				<Button
					text="Primary"
					variant="primary"
					type="button"
					icon={<FaFaceAngry />}
				/>

				<Button text="Secondary" variant="secondary" type="button" />
				<Button text="Danger" variant="danger" type="button" />
				<Button text="Optional" variant="outline" type="button" />
				<Button text="Ghost" variant="ghost" type="button" />
				<Button text="Link" variant="link" type="button" />
			</div>
		</div>
	);
}
