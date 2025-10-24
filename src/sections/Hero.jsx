import { FileText } from "lucide-react";
import Card from "../components/ui/Card";
import Pill from "../components/ui/Pill";
import ButtonLink from "../components/ui/ButtonLink";
import Section from "../components/ui/Section";
import IconGithub from "../icons/IconGithub";
import CONFIG from "../content/site";

export default function Hero() {
	return (
		<Section id="home" className="max-w-5xl mx-auto px-4 py-24">
			<div className="grid sm:grid-cols-5 gap-8 items-center">
				<div className="sm:col-span-3">
					<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
						{CONFIG.name}
					</h1>
					<p className="mt-2 text-muted-foreground">
						{CONFIG.role} • {CONFIG.location}
					</p>
					<p className="mt-4 text-lg text-muted-foreground leading-relaxed">
						{CONFIG.intro}
					</p>
					<div className="mt-6 flex flex-wrap items-center gap-3">
						<ButtonLink
							href={CONFIG.githubUrl}
							icon={IconGithub}
							className="btn btn-secondary"
						>
							GitHub
						</ButtonLink>
						<ButtonLink
							href={CONFIG.resumeUrl}
							icon={FileText}
							className="btn btn-secondary"
						>
							Resume
						</ButtonLink>
					</div>
				</div>
				<Card className="sm:col-span-2 card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
					<h3 className="font-medium text-primary mb-3">Tech I'm using</h3>
					<div className="flex flex-wrap gap-2">
						{CONFIG.tech.map((t) => (
							<Pill key={t}>{t}</Pill>
						))}
					</div>
				</Card>
			</div>
		</Section>
	);
}
