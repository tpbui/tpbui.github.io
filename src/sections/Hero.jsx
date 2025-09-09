import CONFIG from "../content/site";
import Card from "../components/ui/Card";
import Pill from "../components/ui/Pill";
import ButtonLink from "../components/ui/ButtonLink";
import { FileText, Mail } from "lucide-react";
import IconGithub from "../icons/IconGithub";

export default function Hero() {
	return (
		<section id="home" className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
			<div className="grid sm:grid-cols-5 gap-6 items-center">
				<div className="sm:col-span-3">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-rose-800">
						{CONFIG.name}
					</h1>
					<p className="mt-2 text-rose-600">
						{CONFIG.role} • {CONFIG.location}
					</p>
					<p className="mt-4 text-rose-900/90 leading-relaxed">
						{CONFIG.intro}
					</p>
					<div className="mt-6 flex flex-wrap items-center gap-3">
						<ButtonLink href={CONFIG.githubUrl} icon={IconGithub}>
							GitHub
						</ButtonLink>
						<ButtonLink href={CONFIG.resumeUrl} icon={FileText}>
							Resume
						</ButtonLink>
					</div>
				</div>
				<Card className="sm:col-span-2 p-5">
					<h3 className="font-medium text-rose-700 mb-3">Tech I’m using</h3>
					<div className="flex flex-wrap gap-2">
						{CONFIG.tech.map((t) => (
							<Pill key={t}>{t}</Pill>
						))}
					</div>
				</Card>
			</div>
		</section>
	);
}
