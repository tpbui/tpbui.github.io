import { useState } from "react";
import Section from "../components/ui/Section";
import CONFIG from "../content/site";

export default function About() {
	const [photoErrored, setPhotoErrored] = useState(false);
	const paragraphs = Array.isArray(CONFIG.about?.paragraphs)
		? CONFIG.about.paragraphs.filter(Boolean)
		: [];
	const technologies = Array.isArray(CONFIG.tech) ? CONFIG.tech.filter(Boolean) : [];
	const education = CONFIG.education;
	const aboutPhoto = CONFIG.about?.photo;
	const showPhoto = Boolean(aboutPhoto && !photoErrored);
	const email = CONFIG.email;

	return (
		<Section id="about" title={null}>
			<div className="space-y-8">
				<div className="flex justify-center">
					<div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-border/60 overflow-hidden flex items-center justify-center bg-muted shadow-lg">
						{showPhoto ? (
							<img
								src={aboutPhoto}
								alt={`${CONFIG.name} portrait`}
								className="w-full h-full object-cover"
								onError={() => setPhotoErrored(true)}
							/>
						) : (
							<span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-muted-foreground text-center px-4">
								Image holder
							</span>
						)}
					</div>
				</div>

				<div className="space-y-5 text-center">
					<p className="text-lg sm:text-xl uppercase tracking-[0.3em] text-muted-foreground">Get to know me</p>
					{paragraphs.map((text, idx) => {
						const emailIndex = email ? text.indexOf(email) : -1;
						if (emailIndex === -1) {
							return (
								<p key={idx} className="text-lg leading-relaxed text-foreground/90 max-w-3xl mx-auto">
									{text}
								</p>
							);
						}
						const before = text.slice(0, emailIndex);
						const after = text.slice(emailIndex + email.length);
						return (
							<p key={idx} className="text-lg leading-relaxed text-foreground/90 max-w-3xl mx-auto">
								{before}
								<a
									href={`mailto:${email}`}
									className="text-primary underline underline-offset-2 hover:text-primary/80"
								>
									{email}
								</a>
								{after}
							</p>
						);
					})}
				</div>

				<div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
					<div className="space-y-2">
						<p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Education</p>
						<p className="text-base text-foreground/80">{education.school}</p>
						<p className="text-base text-foreground/80">{education.graduation}</p>
						<p className="text-base text-foreground/80">{education.major}</p>
						<p className="text-base text-foreground/80">{education.minor}</p>
					</div>
					<div className="space-y-2">
						<p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
							Technologies I'm using
						</p>
						<p className="text-base text-foreground/90">
							{technologies.length ? technologies.join(" | ") : "—"}
						</p>
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-4 sm:gap-5">
					<a
						href={CONFIG.resumeUrl}
						target="_blank"
						rel="noreferrer noopener"
						className="btn btn-primary min-w-[190px] px-8"
					>
						View Resume
					</a>
					<a href="#contact" className="btn btn-primary min-w-[190px] px-8">
						Find me
					</a>
				</div>
			</div>
		</Section>
	);
}
