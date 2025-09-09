import CONFIG from "../config/site";
import Pill from "./ui/Pill";
import { FileText } from "lucide-react";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b border-rose-100">
			<div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
				<a href="#home" className="font-semibold tracking-tight text-rose-700">
					{CONFIG.name}
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
	);
}
