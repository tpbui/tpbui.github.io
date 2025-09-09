import IconGithub from "../icons/IconGithub.jsx";
import { ExternalLink, Mail } from "lucide-react";

// ----------------------------------
// Site configuration & content
// ----------------------------------
const CONFIG = {
	name: "Tra Bui",
	role: "Software Engineer",
	intro:
		"Hello! I'm a recent graduate from Carnegie Mellon University with a degree in Computer Science. I'm passionate about software engineer, computer networks, and backend development. If you'd like to see how I build, stick around and explore my projects!",
	location: "Doha, Qatar",
	email: "trabui.0517@gmail.com",
	resumeUrl:
		"https://drive.google.com/file/d/1QBqLus7yFWJu-NmG4EaTaNBBNSwDbTgy/view?usp=drive_link",
	githubUrl: "https://github.com/tpbui",
	links: [
		{
			label: "GitHub",
			href: "https://github.com/tpbui",
			icon: IconGithub,
		},
		{ label: "Email", href: `mailto:{email}`, icon: Mail },
	],
	tech: [
		"Python",
		"C",
		"React",
		"Javascript",
		"PostgreSQL",
		"MongoDB",
		"Docker",
		"Kubernetes",
		"AWS",
		"Azure",
	],
	experienceSummary:
		"I've worked across internships and roles where I owned features end-to-end: from ideation and design to implementation, testing, and docs. I'm comfortable collaborating with cross-functional teams and delivering incrementally.",
	internships: [
		{
			title: "Frontend Intern",
			company: "Acme Labs",
			start: "2024-06-01",
			end: "2024-09-01",
			points: [
				"Implemented a reusable component library",
				"Migrated legacy UI to React",
			],
		},
	],
	work: [
		{
			title: "Junior Software Engineer",
			company: "Beta Systems",
			start: "2025-01-15",
			end: null,
			points: [
				"Owned dashboard features end-to-end",
				"Improved performance by ~30%",
				"Refined design system tokens",
			],
		},
	],
	projects: [
		{
			id: "p1",
			title: "Focus Timer",
			slug: "focus-timer",
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
			slug: "task-notes",
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
