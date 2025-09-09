import { useMemo, useState } from "react";
import {
	Mail,
	Link as LinkIcon,
	ExternalLink,
	Calendar,
	Briefcase,
	FileText,
	ChevronRight,
	X,
} from "lucide-react";

// ----------------------------------
// Site configuration & content
// ----------------------------------
const CONFIG = {
	name: "Name",
	role: "Software Engineer",
	intro:
		"I build simple, human-friendly apps with a focus on excellent UX. I enjoy rapid prototyping, thoughtful design, and shipping.",
	location: "Location",
	email: "you@example.com",
	resumeUrl: "https://example.com/your-resume.pdf",
	githubUrl: "https://github.com/your-handle",
	links: [
		{
			label: "GitHub",
			href: "https://github.com/your-handle",
			icon: IconGithub,
		},
		{ label: "Email", href: "mailto:you@example.com", icon: Mail },
	],
	tech: ["Python", "C", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
	experienceSummary:
		"I've worked across internships and roles where I owned features end-to-end: from ideation and design to implementation, testing, and docs. I'm comfortable collaborating with cross-functional teams and delivering incrementally.",
	internships: [
		{
			title: "Frontend Intern",
			company: "Acme Labs",
			start: "2024-06-01",
			end: "2024-09-01",
			summary:
				"Implemented a component library and helped migrate a legacy UI to React.",
		},
	],
	work: [
		{
			title: "Junior Software Engineer",
			company: "Beta Systems",
			start: "2025-01-15",
			end: null,
			summary:
				"Own dashboard features, improve performance ~30%, and refine design system tokens.",
		},
	],
	projects: [
		{
			id: "p1",
			title: "Focus Timer",
			date: "2025-03-21",
			design: "Minimal, distraction-free",
			summary:
				"A Pomodoro-style timer with keyboard shortcuts and offline support.",
			image: "/image.png", // file in /public
			links: [
				{
					label: "Live",
					href: "https://your-handle.github.io/focus-timer",
					icon: ExternalLink,
				},
				{
					label: "Code",
					href: "https://github.com/your-handle/focus-timer",
					icon: IconGithub,
				},
			],
			details:
				"Built with React + Vite. Uses localStorage for persistence, accessible controls, and sensible defaults.",
		},
		{
			id: "p2",
			title: "Task Notes",
			date: "2024-11-10",
			design: "Card-based, clean",
			summary: "A lightweight notes / todos hybrid with tag filtering.",
			image: "/image.png",
			links: [
				{
					label: "Live",
					href: "https://your-handle.github.io/task-notes",
					icon: ExternalLink,
				},
				{
					label: "Code",
					href: "https://github.com/your-handle/task-notes",
					icon: IconGithub,
				},
			],
			details: "Fast search, keyboard nav, and export to JSON.",
		},
	],
};

// ----------------------------------
// Utilities
// ----------------------------------
function cx(...classes) {
	return classes.filter(Boolean).join(" ");
}

function formatDate(iso) {
	try {
		return new Date(iso).toLocaleDateString(undefined, {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	} catch {
		return iso;
	}
}

function dateRange(start, end) {
	const s = start ? formatDate(start) : "";
	const e = end ? formatDate(end) : "Present";
	return `${s} — ${e}`;
}

function IconGithub({ size = 18, ...props }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			aria-hidden="true"
			fill="currentColor"
			{...props}
		>
			<path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.65 3 8.58 7.17 9.97.52.1.71-.22.71-.5 0-.25-.01-.91-.01-1.79-2.92.64-3.53-1.26-3.53-1.26-.47-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.33-.26-4.78-1.17-4.78-5.21 0-1.15.41-2.1 1.08-2.84-.11-.27-.47-1.36.1-2.83 0 0 .9-.29 2.95 1.08a10.2 10.2 0 0 1 5.38 0c2.05-1.37 2.95-1.08 2.95-1.08.57 1.47.21 2.56.1 2.83.67.74 1.08 1.7 1.08 2.84 0 4.05-2.46 4.95-4.8 5.2.38.33.72.97.72 1.96 0 1.42-.01 2.56-.01 2.91 0 .29.19.61.72.5A10.52 10.52 0 0 0 22.5 12c0-5.8-4.7-10.5-10.5-10.5Z" />
		</svg>
	);
}

// ----------------------------------
// Reusable UI bits
// ----------------------------------
function Section({ id, title, children }) {
	return (
		<section id={id} className="scroll-mt-24">
			<div className="max-w-5xl mx-auto px-4 py-10">
				<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-rose-700">
					{title}
				</h2>
				<div className="space-y-6">{children}</div>
			</div>
		</section>
	);
}

function Card({ children, className }) {
	return (
		<div
			className={cx(
				"rounded-2xl bg-white shadow-sm ring-1 ring-rose-100",
				className
			)}
		>
			{children}
		</div>
	);
}

function Pill({ children }) {
	return (
		<span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-700">
			{children}
		</span>
	);
}

function ButtonLink({ href, children, icon: Icon }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-600 px-3 py-2 text-white hover:text-[#535bf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600"
		>
			{Icon ? <Icon size={18} /> : null}
			<span className="text-sm font-medium">{children}</span>
		</a>
	);
}

// ----------------------------------
// Page
// ----------------------------------
export default function PortfolioApp() {
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState(null);

	const filtered = useMemo(() => {
		if (!query.trim()) return CONFIG.projects;
		const q = query.toLowerCase();
		return CONFIG.projects.filter((p) =>
			[p.title, p.summary, p.design, p.details].some((x) =>
				String(x).toLowerCase().includes(q)
			)
		);
	}, [query]);

	return (
		<div className="min-h-screen overflow-x-hidden bg-white text-rose-950">
			{/* Header */}
			<header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b border-rose-100">
				<div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
					<a
						href="#home"
						className="font-semibold tracking-tight text-rose-700"
					>
						My Portfolio
					</a>
					<nav className="hidden sm:flex items-center gap-3">
						{[
							["Projects", "#projects"],
							["Experience", "#experience"],
							["Tech", "#tech"],
							["About", "#about"],
							["Contact", "#contact"],
						].map(([label, href]) => (
							<a
								key={label}
								href={href}
								className="text-sm text-rose-700/80 hover:text-rose-700 px-2 py-1 rounded-lg hover:bg-rose-100"
							>
								{label}
							</a>
						))}
						<a
							href={CONFIG.resumeUrl}
							target="_blank"
							rel="noreferrer noopener"
							className="ml-1"
						>
							<Pill>
								<FileText size={16} className="mr-1" /> Resume
							</Pill>
						</a>
					</nav>
				</div>
			</header>

			{/* Hero */}
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
							<ButtonLink href={`mailto:${CONFIG.email}`} icon={Mail}>
								Email
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

			{/* Projects */}
			<Section id="projects" title="Projects">
				<div className="flex flex-col sm:flex-row sm:items-center gap-3">
					<input
						placeholder="Search projects by title, summary, or design…"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="w-full sm:max-w-md rounded-xl border border-rose-100 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600"
					/>
					<span className="text-sm text-rose-900/70">
						{filtered.length} shown
					</span>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filtered.map((p) => (
						<Card key={p.id} className="overflow-hidden group">
							<button
								onClick={() => setSelected(p)}
								className="text-left w-full"
							>
								{p.image ? (
									<img
										src={p.image}
										alt={p.title}
										className="w-full aspect-video object-cover"
									/>
								) : null}
								<div className="p-4">
									<div className="flex items-center justify-between">
										<h3 className="font-semibold text-rose-900 group-hover:underline flex items-center gap-2">
											{p.title}
											<ChevronRight size={16} />
										</h3>
										<span className="text-xs text-rose-900/60 flex items-center gap-1">
											<Calendar size={14} /> {formatDate(p.date)}
										</span>
									</div>
									<p className="mt-2 text-sm text-rose-900/80">{p.summary}</p>
									<div className="mt-3">
										<Pill>Design: {p.design}</Pill>
									</div>
								</div>
							</button>
						</Card>
					))}
				</div>
			</Section>

			{/* Experience */}
			<Section id="experience" title="Experience">
				<Card className="p-5">
					<p className="text-rose-900/90">{CONFIG.experienceSummary}</p>
				</Card>
				<div className="grid sm:grid-cols-2 gap-6">
					<Card className="p-5">
						<div className="flex items-center gap-2 text-rose-900 mb-3">
							<Briefcase size={18} /> <h3 className="font-medium">Work</h3>
						</div>
						<ol className="space-y-3">
							{CONFIG.work.map((w, idx) => (
								<li key={idx} className="border-l-2 border-rose-200 pl-3">
									<div className="flex items-center justify-between">
										<span className="font-medium text-rose-900">
											{w.title} @ {w.company}
										</span>
										<span className="text-sm text-rose-900/70">
											{dateRange(w.start, w.end)}
										</span>
									</div>
									<p className="text-sm text-rose-900/80 mt-1">{w.summary}</p>
								</li>
							))}
						</ol>
					</Card>
					<Card className="p-5">
						<div className="flex items-center gap-2 text-rose-900 mb-3">
							<Briefcase size={18} />{" "}
							<h3 className="font-medium">Internships</h3>
						</div>
						<ol className="space-y-3">
							{CONFIG.internships.map((w, idx) => (
								<li key={idx} className="border-l-2 border-rose-200 pl-3">
									<div className="flex items-center justify-between">
										<span className="font-medium text-rose-900">
											{w.title} @ {w.company}
										</span>
										<span className="text-sm text-rose-900/70">
											{dateRange(w.start, w.end)}
										</span>
									</div>
									<p className="text-sm text-rose-900/80 mt-1">{w.summary}</p>
								</li>
							))}
						</ol>
					</Card>
				</div>
			</Section>

			{/* Tech */}
			<Section id="tech" title="Tech Stack">
				<Card className="p-5">
					<div className="flex flex-wrap gap-2">
						{CONFIG.tech.map((t) => (
							<Pill key={t}>{t}</Pill>
						))}
					</div>
				</Card>
			</Section>

			{/* About */}
			<Section id="about" title="About Me">
				<Card className="p-5">
					<p className="text-rose-900/90 leading-relaxed">{CONFIG.intro}</p>
				</Card>
			</Section>

			{/* Contact */}
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

			{/* Footer */}
			<footer className="border-t border-rose-100 py-8 mt-8">
				<div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-rose-900/70">
					<span>
						© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
					</span>
					<a href="#home" className="hover:underline">
						Back to top
					</a>
				</div>
			</footer>

			{/* Project Modal */}
			{selected ? (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					<button
						className="absolute inset-0 bg-black/50"
						aria-label="Close overlay"
						onClick={() => setSelected(null)}
					/>
					<Card className="relative w-full max-w-2xl p-4 sm:p-6">
						<button
							className="absolute right-3 top-3 rounded-full p-2 hover:bg-rose-100"
							aria-label="Close"
							onClick={() => setSelected(null)}
						>
							<X size={18} />
						</button>
						{selected.image ? (
							<img
								src={selected.image}
								alt={selected.title}
								className="w-full aspect-video object-cover rounded-xl"
							/>
						) : null}
						<div className="mt-4">
							<h3 className="text-xl font-semibold text-rose-900">
								{selected.title}
							</h3>
							<div className="mt-1 text-sm text-rose-900/70 flex items-center gap-2">
								<Calendar size={16} /> {formatDate(selected.date)} • Design:{" "}
								{selected.design}
							</div>
							<p className="mt-3 text-rose-900/90">{selected.summary}</p>
							<p className="mt-3 text-rose-900/90 whitespace-pre-line">
								{selected.details}
							</p>
							{selected.links?.length ? (
								<div className="mt-4 flex flex-wrap gap-3">
									{selected.links.map((l) => (
										<ButtonLink
											key={l.href}
											href={l.href}
											icon={l.icon || LinkIcon}
										>
											{l.label}
										</ButtonLink>
									))}
								</div>
							) : null}
						</div>
					</Card>
				</div>
			) : null}
		</div>
	);
}
