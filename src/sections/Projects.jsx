import { useMemo, useState } from "react";
import CONFIG from "../content/site";
import Section from "../components/ui/Section";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
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
		<Section id="projects" title="Projects">
			<div className="flex flex-col sm:flex-row sm:items-center gap-3">
				<input
					placeholder="Search projects by title, summary, or design…"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="w-full sm:max-w-md rounded-xl border border-border bg-background text-foreground px-4 py-2 focus:outline-none focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background"
				/>
				<span className="text-sm text-muted-foreground">
					{filtered.length} shown
				</span>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{filtered.map((p) => (
					<ProjectCard key={p.id} project={p} onOpen={setSelected} />
				))}
			</div>
			<ProjectModal project={selected} onClose={() => setSelected(null)} />
		</Section>
	);
}
