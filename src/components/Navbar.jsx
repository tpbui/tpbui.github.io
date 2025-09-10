import CONFIG from "../content/site";
import { Sun, Moon } from "lucide-react";
import { getTheme, toggleTheme } from "../utils/theme";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [mode, setMode] = useState("dark");
	useEffect(() => setMode(getTheme()), []);

	return (
		<header className="sticky top-0 z-40 backdrop-blur bg-background/80 text-foreground border-b border-border">
			<div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
				<a
					href="/#home"
					className="font-semibold hover:text-primary transition-colors"
				>
					{CONFIG.name} - Portfolio
				</a>
				<nav className="flex items-center gap-1">
					{/* links */}
					{[
						["Projects", "/#projects"],
						["Experience", "/#experience"],
						["Contact", "/#contact"],
					].map(([label, href]) => (
						<a
							key={label}
							href={href}
							className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors"
						>
							{label}
						</a>
					))}

					{/* theme toggle */}
					<button
						type="button"
						aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
						onClick={() => setMode(toggleTheme())}
						className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted
                      transition-colors focus:outline-none focus-visible:ring-2 ring-ring
                      ring-offset-2 ring-offset-background"
						title={mode === "dark" ? "Light mode" : "Dark mode"}
					>
						{mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
					</button>
				</nav>
			</div>
		</header>
	);
}
