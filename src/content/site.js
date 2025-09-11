import { ExternalLink, Mail } from "lucide-react";
import IconGithub from "../icons/IconGithub.jsx";
import IconLinkedin from "../icons/IconLinkedin.jsx";

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
	internships: [
		{
			title: "Software Engineer Intern",
			company: "Snoonu",
			start: "2025-04",
			end: null,
			points: [
				"Led end-to-end implementation of an AI driver-facing chatbot for a food delivery mobile app, automating order issue reporting",
				"Automated 80% of driver support conversations and reduced the live agent contact rate by 30% in staging environment",
				"Built a scalable, highly concurrent backend architecture and integrated with Salesforce and Slack to handle 15+ production scenarios",
			],
		},
		{
			title: "Software Engineer Intern",
			company: "Pandata Tech",
			start: "2025-05",
			end: "2025-08",
			points: [
				"Refactored a FastAPI microservice to support relational and NoSQL database migrations for disaster recovery",
				"Built a type-safe and generic database query interface through REST APIs and asynchronous framework for third-party SDKs",
				"Saved 4-6 hours per week by automating unit test and integration test and building a CLI tool to streamline manual test workflows",
				"Designed, wrote documentation, tested, debugged, and deployed new feature with extensive code review and source control",
			],
		},
		{
			title: "Open Source Developer",
			company: "OpenStack",
			start: "2024-05",
			end: "2024-08",
			points: [
				"Contributed new features to OpenStack Swift distributed systems, which were deployed to production for upcoming releases",
				"Provided object-count quota per user account in middleware layer, extending legacy code to support backward compatibility",
				"Integrated CLI tools to monitor the progress of reaping deleted accounts using multi-threading and wrote unit tests",
			],
		},
		{
			title: "Software Engineer Intern",
			company: "Qatar Computing Research Institute",
			start: "2023-05",
			end: "2023-10",
			points: [
				"Optimized debugging tools for parallel traffic simulator (QarSumo) of Qatar national network in a complex industry codebase, leveraging OOP principles to shorten runtime cycle by 10x and boost daily team productivity by 20%",
				"Led a team in executing a new idea to develop shared data structures across distributed nodes, leveraging simulation accuracy to 94%",
				"Awarded first prize for poster presentation out of 28 team projects at final showcase conference",
			],
		},
	],
	academic: [
		{
			title: "Teaching Assistant (Cloud Computing 15319/15619)",
			company: "Carnegie Mellon University",
			start: "2024-11",
			end: "2025-05",
			points: [
				"Supported ~200 students via Piazza and weekly office hours",
				"Provided guidance on programming, conceptual questions, and VM-based troubleshooting for all cloud programming projects",
				"Performed quality assurance on auto-grading infrastructure for iterative big data processing project with Spark",
				"Authored a new conceptual module on Delta Lake for cloud storage and data analytics, to be delivered to ~200 students",
			],
		},
		{
			title: "Undergraduate Researcher",
			company: "Carnegie Mellon University",
			start: "2024-08",
			end: "2025-02",
			points: [
				"Conducted evaluations of leading Automatic Speech Recognition (ASR) systems in transcribing children disordered speech",
				"Explored literature in speech enhancement, reinforcement learning, and deep learning techniques to improve these systems",
			],
		},
		{
			title: "Course Assistant",
			company: "Carnegie Mellon University",
			start: "2022-1",
			end: "2025-05-1",
			points: [
				"01/2022 - 05/2022: Intro to Programming (15-112)",
				"01/2023 - 05/2023: Calculus II (21-122)",
				"08/2024 - 12/2024: Evolution (03-125)",
				"01/2025 - 05/2025: Great Theoretical Ideas in Computer Science (15-251)",
				"01/2025 - 05/2025: Cloud Computing (15-319/15-619)",
				"01/2025 - 05/2025: Principles of Imperative Programming (15-122)",
			],
		},
	],
	projects: [
		{
			id: "p5",
			title: "Video CDN",
			slug: "video-cdn",
			date: "2025-04",
			tags: "C, Perl, DNS, Network Programming",
			summary:
				"A content delivery network optimized for adaptive bitrate video streaming.",
			image: "/video-cdn.svg",
			links: [],
			details: "",
		},
		{
			id: "p4",
			title: "BitTorrent",
			slug: "bit-torrent",
			date: "2025-03",
			tags: "C, Perl, TCP, UPD, Network Programming",
			summary:
				"A customized peer-to-peer BitTorrent-like file transfer system.",
			image: "/bit-torrent.svg",
			links: [],
			details: "",
		},
		{
			id: "p3",
			title: "HTTP/HTTPS Server",
			slug: "http-server",
			date: "2025-02",
			tags: "C, HTTP/HTTPS, Network Programming",
			summary: "An Apache HTTP/HTTPS server built from scratch.",
			image: "/http-server.svg",
			links: [],
			details: "",
		},
		{
			id: "p2",
			title: "Room Roamer",
			slug: "room-roamer",
			date: "2023-04",
			tags: "Django, Svelte, Javascript, AWS, Google Calendar API, OAuth, Full-Stack Programming",
			summary:
				"A web app for booking rooms and discovering campus events with an interactive map.",
			image: "/room-roamer-dark.png",
			links: [],
			details:
				"I collaborated in a team of 3 to build a full stack web application for on-campus room searching and event booking interface using Agile software engineering methodology, reducing digital map query time by 15% with user-friendly interactive map interface. We utilized RESTful APIs for backend to integrate OAuth and automate retrieving events into database systems",
		},
		{
			id: "p1",
			title: "Space Typing",
			date: "2021-11",
			tags: "Object-Oriented Programming (OOP), Python, Pygame, Socket Programming",
			summary: "An adaptive space-themed speed typing game.",
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
