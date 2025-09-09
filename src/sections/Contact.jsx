import CONFIG from "../config/site";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import ButtonLink from "../components/ui/ButtonLink";
import IconGithub from "../icons/IconGithub";
import { FileText } from "lucide-react";

export default function Contact() {
	return (
		<Section id="contact" title="Connect">
			<div className="grid sm:grid-cols-2 gap-6">
				<Card className="p-5">
					<h3 className="font-medium text-rose-900 mb-2">Get in touch</h3>
					<div className="flex flex-wrap items-center gap-3">
						{CONFIG.links.map((l) => (
							<ButtonLink key={l.href} href={l.href} icon={l.icon}>
								{l.label}
							</ButtonLink>
						))}
					</div>
				</Card>
				<Card className="p-5">
					<h3 className="font-medium text-rose-900 mb-2">Quick links</h3>
					<div className="flex flex-wrap gap-3">
						<ButtonLink href={CONFIG.resumeUrl} icon={FileText}>
							Resume
						</ButtonLink>
						<ButtonLink href={CONFIG.githubUrl} icon={IconGithub}>
							GitHub
						</ButtonLink>
					</div>
				</Card>
			</div>
		</Section>
	);
}
