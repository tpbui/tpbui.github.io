import CONFIG from "../config/site";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

export default function About() {
	return (
		<Section id="about" title="About Me">
			<Card className="p-5">
				<p className="text-rose-900/90 leading-relaxed">{CONFIG.intro}</p>
			</Card>
		</Section>
	);
}
