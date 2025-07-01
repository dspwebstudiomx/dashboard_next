import React from "react";
import ColorDemo from "@/components/ColorDemo";
import ParagraphDemo from "@/components/ParagraphDemo";
import TitlesDemo from "@/components/TitlesDemo";
import Container from "@/components/Containers/Container";
import ButtonDemo from "@/components/ButtonDemo";

export default function App() {
	return (
		<Container>
			<ColorDemo />
			<TitlesDemo />
			<ParagraphDemo />
			<ButtonDemo />
		</Container>
	);
}
