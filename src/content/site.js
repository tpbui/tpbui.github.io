import IconGithub from "../icons/IconGithub.jsx";
import IconLinkedin from "../icons/IconLinkedin.jsx";
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
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/trabui-cmu/",
			icon: IconLinkedin,
		},
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
			title: "Space Typing",
			date: "2021-11",
			design: "Object-Oriented Programming (OOP), Python, Pygame, Socket Programming",
			summary:
				"An adaptive space-themed speed typing game.",
			image: `/space-typing.png`,
			links: [
				{
					label: "Demo",
					href: "https://www.youtube.com/watch?v=J0Ebp09IKm8",
					icon: ExternalLink,
				},
				{
					label: "Code",
					href: "https://github.com/tpbui/space-typing",
					icon: IconGithub,
				},
			],
			details:
				"Space Typing Game is a speed typing game in the form of a space video game that can give the user a fun time to practice their typing skills. The player will be given a limited amount of health to start with, and their mission is to use their typing skills to avoid asteroids from hitting them and survive through all the game levels. This game is developed using Pygame as the main module, and utilize Socket to incorporate networking features.",
		},
	],
};

export default CONFIG;
