import { useEffect, useMemo, useState } from "react";
import CONFIG from "../content/site";

export default function Hero() {
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const [taglineIndex, setTaglineIndex] = useState(0);
	const [showTagline, setShowTagline] = useState(false);

	const typingPhrases = useMemo(() => {
		const configured = Array.isArray(CONFIG.hero?.typing)
			? CONFIG.hero.typing.filter(Boolean)
			: [];
		if (configured.length > 0) return configured;
		return ["Hello World!", `Hi, I'm ${CONFIG.name} :D`];
	}, []);

	const tagline = CONFIG.hero?.tagline ?? "Software Engineer | Computer Scientist | Lifelong learner";

	const socialLinks = (CONFIG.links ?? [])
		.filter((link) => link && link.href && link.icon)
		.map((link) => ({
			...link,
			href:
				typeof link.href === "string"
					? link.href.replace("{email}", CONFIG.email ?? "")
					: link.href,
		}));

	useEffect(() => {
		const currentPhrase = typingPhrases[phraseIndex];
		if (!currentPhrase) return;

		if (!isDeleting && subIndex === currentPhrase.length) {
			if (phraseIndex === typingPhrases.length - 1) {
				setIsComplete(true);
				return;
			}

			const hold = setTimeout(() => setIsDeleting(true), 1100);
			return () => clearTimeout(hold);
		}

		if (isDeleting && subIndex === 0) {
			const shift = setTimeout(() => {
				setIsDeleting(false);
				setPhraseIndex((prev) => Math.min(prev + 1, typingPhrases.length - 1));
			}, 180);
			return () => clearTimeout(shift);
		}

		if (isComplete) return;

		const timeout = setTimeout(
			() => setSubIndex((prev) => prev + (isDeleting ? -1 : 1)),
			isDeleting ? 45 : 110 + Math.random() * 70
		);

		return () => clearTimeout(timeout);
	}, [phraseIndex, subIndex, isDeleting, isComplete, typingPhrases]);

	useEffect(() => {
		setTaglineIndex(0);
		setShowTagline(false);
	}, [tagline]);

	useEffect(() => {
		if (!tagline) return;
		if (taglineIndex >= tagline.length) return;

		if (!showTagline) return;

		const timeout = setTimeout(() => setTaglineIndex((prev) => prev + 1), 75);
		return () => clearTimeout(timeout);
	}, [taglineIndex, tagline, showTagline]);

	useEffect(() => {
		if (isComplete && !showTagline) {
			setShowTagline(true);
		}
	}, [isComplete, showTagline]);

	const typedText = typingPhrases[phraseIndex]?.slice(0, subIndex) ?? "";
	const typedTagline = tagline.slice(0, taglineIndex);

	return (
		<section
			id="home"
			className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-12"
		>
			<div className="hero-splash" aria-hidden="true" />
			<div className="hero-blob hero-blob-1" aria-hidden="true" />
			<div className="hero-blob hero-blob-2" aria-hidden="true" />

			<div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
				<h1 className="hero-heading text-balance text-6xl font-black tracking-tight text-foreground sm:text-7xl md:text-8xl">
					<span className="typewriter">{typedText}</span>
				</h1>

				{showTagline ? (
					<p className="hero-subtitle max-w-3xl text-pretty text-xl text-foreground md:text-2xl">
						<span className="tagline-typewriter">{typedTagline}</span>
					</p>
				) : null}

				{socialLinks.length > 0 ? (
					<div className="flex flex-col items-center gap-3">
						<span className="hero-social-label text-xs font-semibold uppercase text-muted-foreground/80">
							Find me on
						</span>
						<div className="flex items-center gap-3">
							{socialLinks.map(({ href, icon: LinkIcon, label }) => (
								<a
									key={href}
									href={href}
									className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
									aria-label={label}
									title={label}
									target={/^https?:/i.test(href) ? "_blank" : undefined}
									rel={/^https?:/i.test(href) ? "noreferrer noopener" : undefined}
								>
									<LinkIcon className="h-6 w-6 text-foreground transition group-hover:text-primary" />
								</a>
							))}
						</div>
					</div>
				) : null}
			</div>
		</section>
	);
}
