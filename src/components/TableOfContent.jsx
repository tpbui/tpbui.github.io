import Card from "./ui/Card";

export default function TableOfContent({
	headings,
	title = "Table of Contents",
}) {
	if (!headings?.length) return null;

	return (
		<Card className="p-4">
			<h2 className="text-sm font-semibold text-foreground mb-2">{title}</h2>
			<nav aria-label="Table of contents" className="text-sm">
				<ul className="space-y-1">
					{headings.map(({ id, text, level }) => (
						<li
							key={id}
							className={level > 2 ? "ml-6" : level > 1 ? "ml-3" : ""}
						>
							<a
								href={`#${id}`}
								className="text-muted-foreground hover:text-foreground hover:underline"
							>
								{text}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</Card>
	);
}
