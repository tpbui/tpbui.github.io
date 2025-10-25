import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { getTheme, toggleTheme } from "../utils/theme";
import CONFIG from "../content/site";

export default function Navbar() {
	const [mode, setMode] = useState("dark");
	useEffect(() => setMode(getTheme()), []);

	const navSections = CONFIG.sections;

	return (
			<header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-background/90 text-foreground border-b border-border/70">
				<div className="max-w-5xl mx-auto px-4 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
					<a
						href="/#home"
						className="font-semibold whitespace-nowrap hover:text-primary transition-colors justify-self-start"
					>
						{CONFIG.name} - Portfolio
					</a>

					<nav className="flex items-center justify-center gap-1 justify-self-center">
					{navSections.map(({ id, label }) => (
						<a
							key={id}
							href={`/#${id}`}
							className="relative text-sm text-muted-foreground hover:text-foreground transition-colors
              px-3 py-2 rounded focus:outline-none focus-visible:ring-2 ring-ring
              ring-offset-2 ring-offset-background
              after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
              after:bg-primary hover:after:w-full after:transition-all"
						>
							{label}
						</a>
					))}
				</nav>

				<button
					type="button"
					aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
					onClick={() => setMode(toggleTheme())}
					className="justify-self-end rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted
                      transition-colors focus:outline-none focus-visible:ring-2 ring-ring
                      ring-offset-2 ring-offset-background"
					title={mode === "dark" ? "Light mode" : "Dark mode"}
				>
					{mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
				</button>
			</div>
		</header>
	);
}
