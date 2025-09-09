import IconGithub from "../icons/IconGithub.jsx";
import { ExternalLink, Mail } from "lucide-react";

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

export default CONFIG;
