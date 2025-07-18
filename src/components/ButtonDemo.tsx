import Button from "@/components/Button/Button";
import H2 from "./Title/H2";

export default function ButtonDemo() {
	return (
		<div className="flex flex-col  gap-20 w-full max-w-screen-xl my-32 bg-accent">
			<H2 align="center">Botones</H2>
			<div className="grid md:grid-cols-4 gap-y-12 gap-4 items-center justify-between">
				<Button text="Primary" variant="primary" type="button" size="xs" />
				<Button text="Secondary" variant="secondary" type="button" size="sm" />
				<Button text="Danger" variant="danger" type="button" size="md" />
				<Button text="Warning" variant="warning" type="button" size="lg" />
				<Button text="Outline" variant="outline" type="button" size="xl" />
				<Button text="Ghost" variant="ghost" type="button" size="lg" />
				<Button text="Link" variant="link" type="button" size="md" />
			</div>
		</div>
	);
}
