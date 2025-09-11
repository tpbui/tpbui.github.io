import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import ButtonLink from "../components/ui/ButtonLink";
import CONFIG from "../content/site";

export default function Contact() {
	return (
		<Section id="contact" title="Connect">
			<div className="grid sm:grid-cols-2 gap-6">
				<Card className="p-5">
					<h3 className="font-medium text-foreground mb-2">Get in touch</h3>
					<div className="flex flex-wrap items-center gap-3">
						{CONFIG.links.map((l, i) => (
							<div
								key={l.href}
								className="will-change-[transform,opacity] animate-in fade-in slide-in-from-bottom-2 duration-400"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								<ButtonLink
									href={l.href}
									icon={l.icon}
									className="btn btn-secondary"
								>
									{l.label}
								</ButtonLink>
							</div>
						))}
					</div>
				</Card>
			</div>
		</Section>
	);
}
