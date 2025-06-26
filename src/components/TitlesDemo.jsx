import H1 from "@/components/Title/H1";
import H2 from "@/components/Title/H2";
import H3 from "@/components/Title/H3";
import H4 from "@/components/Title/H4";
import H5 from "@/components/Title/H5";
import H6 from "@/components/Title/H6";

const TitlesDemo = () => {
	return (
		<div id="titles" className="flex flex-col  gap-4 w-full max-w-screen-xl">
			<H2 align="center">Títulos</H2>
			<div className="flex gap-4 items-end justify-start">
				<H1 align="left">Hola Mundo</H1>
				<H6>H1</H6>
			</div>
			<div className="flex gap-4 items-end justify-start">
				<H2 align="left">Hola Mundo</H2>
				<H6>H2</H6>
			</div>
			<div className="flex gap-4 items-end justify-start">
				<H3 align="left">Hola Mundo</H3>
				<H6>H3</H6>
			</div>
			<div className="flex gap-4 items-end justify-start">
				<H4 align="left">Hola Mundo</H4>
				<H6>H4</H6>
			</div>
			<div className="flex gap-4 items-end justify-start">
				<H5 align="left">Hola Mundo</H5>
				<H6>H5</H6>
			</div>
			<div className="flex gap-4 items-end justify-start">
				<H6 align="left">Hola Mundo</H6>
				<H6>H6</H6>
			</div>
		</div>
	);
};

export default TitlesDemo;
