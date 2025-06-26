// File: src/app/page.tsx
import React from "react";
import ColorDemo from "@/components/ColorDemo";
import ParagraphDemo from "@/components/ParagraphDemo";
import TitlesDemo from "@/components/TitlesDemo";
import Container from "@/components/Containers/Container";

export interface IAppProps {
	children?: React.ReactNode;
}

export default function App(): React.JSX.Element {
	return (
		<Container>
			<ColorDemo />
			<TitlesDemo />
			<ParagraphDemo />
		</Container>
	);
}
