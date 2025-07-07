import Badge from "./Badges/Badge";
import H2 from "./Title/H2";

const BadgesDemo = () => {
	return (
		<>
			<H2 align="center">Badges</H2>
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
		</>
	);
};

export default BadgesDemo;
