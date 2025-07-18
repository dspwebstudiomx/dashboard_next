import Button from "@/components/Button/Button";
import Card from "./Cards/Card";

export default function ButtonDemo() {
	return (
		<Card title="Botones" titleSize="3xl">
			<ul className="flex flex-col md:flex-row gap-4 items-center justify-between">
				<li>
					<Button text="Primary" variant="primary" type="button" size="xs" />
				</li>
				<li>
					<Button
						text="Secondary"
						variant="secondary"
						type="button"
						size="sm"
					/>
				</li>
				<li>
					<Button text="Danger" variant="danger" type="button" size="md" />
				</li>
				<li>
					<Button text="Warning" variant="warning" type="button" size="lg" />
				</li>
				<li>
					<Button text="Outline" variant="outline" type="button" size="xl" />
				</li>
				<li>
					<Button text="Ghost" variant="ghost" type="button" size="lg" />
				</li>
				<li>
					<Button text="Link" variant="link" type="button" size="md" />
				</li>
			</ul>
		</Card>
	);
}
