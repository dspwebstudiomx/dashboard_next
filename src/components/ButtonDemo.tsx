import React from "react";
import Button from "@/components/Button/Button";
import HandleModalButton from "@/components/Modal/HandleModalButton";

export default function ButtonDemo() {
	return (
		<div className="flex flex-col  gap-12 w-full max-w-screen-xl">
			<div className="flex gap-4 flex-wrap">
				<HandleModalButton
					title={"Abrir Modal Principal"}
					modalTitle={"Modal Principal"}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla
					reiciendis, commodi adipisci, facilis consequatur aliquid aperiam
					velit maxime sequi ad eveniet. Magnam itaque fugit atque, non
					excepturi quas laboriosam, qui quod corrupti suscipit architecto.
					Voluptates odit corporis excepturi, doloribus ratione aperiam veniam
					nulla nam, natus, itaque saepe at? Libero quibusdam iste, pariatur
					voluptate atque, magnam inventore quae accusantium assumenda voluptas
					velit eos veritatis cumque incidunt necessitatibus minus. Ad
					dignissimos animi voluptate, distinctio ullam quae magni, mollitia
					officiis perferendis laudantium quasi aliquid totam exercitationem
					culpa! Illum doloribus ea dignissimos explicabo, consequatur quaerat
					vitae neque sunt incidunt possimus fugiat rerum veritatis!
					<div className="">
						<HandleModalButton
							title={"Abrir Modal Anidado"}
							modalTitle={"Modal Anidado"}>
							<div>
								Este es un modal anidado dentro del modal principal. Puedes
								agregar más contenido aquí.
							</div>
						</HandleModalButton>
					</div>
				</HandleModalButton>
				<Button variant="primary" type="button">
					Primario
				</Button>
				<Button variant="secondary">Secundario</Button>
				<Button variant="danger">Peligro</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
				{/* <Button variant="disabled" className="pointer-events-none">
					Deshabilitado
				</Button> */}
				<Button variant="active">Activo</Button>
				{/* <Button variant="loading">Cargando</Button> */}
				<Button variant="icon">
					<span role="img" aria-label="icon">
						⭐
					</span>
				</Button>
				<Button variant="text">Texto</Button>
				<Button variant="block">Bloque</Button>
			</div>
		</div>
	);
}
