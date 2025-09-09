import CONFIG from "../config/site";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Pill from "../components/ui/Pill";

export default function Tech() {
	return (
		<Section id="tech" title="Tech Stack">
			<Card className="p-5">
				<div className="flex flex-wrap gap-2">
					{CONFIG.tech.map((t) => (
						<Pill key={t}>{t}</Pill>
					))}
				</div>
			</Card>
		</Section>
	);
}
