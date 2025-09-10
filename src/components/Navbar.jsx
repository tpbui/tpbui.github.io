import CONFIG from "../content/site";

export default function Navbar() {
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
				</nav>
			</div>
		</header>
	);
}
