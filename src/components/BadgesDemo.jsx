import Badge from "./Badges/Badge";
import Card from "./Cards/Card";

const BadgesDemo = () => {
	return (
		<Card title="Badges" titleSize="3xl">
			<div className="flex flex-wrap gap-4">
				<Badge variant="primary">Primary</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge variant="success">Success</Badge>
				<Badge variant="danger">Danger</Badge>
				<Badge variant="warning">Warning</Badge>
				<Badge variant="info">Info</Badge>
				<Badge variant="light">Light</Badge>
				<Badge variant="dark">Dark</Badge>
			</div>
		</Card>
	);
};

export default BadgesDemo;
