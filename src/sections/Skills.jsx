import { cx } from "../utils/cx";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import { skills as skillsContent } from "../content/site";

const defaultOrder = ["learning", "familiar", "proficient", "expert"];
const levelOrder = Object.fromEntries(defaultOrder.map((k, i) => [k, i]));

function Dot({ className = "bg-slate-400" }) {
	return (
		<span
			className={cx(
				"flex-none inline-block h-2.5 w-2.5 rounded-full ring-2 ring-black/5 dark:ring-white/10",
				className
			)}
			aria-hidden="true"
		/>
	);
}

function SectionHeader({ legend }) {
	const palette = legend?.levels || {
		learning: { label: "Learning", class: "bg-amber-500" },
		familiar: { label: "Familiar", class: "bg-sky-500" },
		proficient: { label: "Proficient", class: "bg-violet-500" },
		expert: { label: "Expert", class: "bg-emerald-500" },
	};
	return (
		<div className="inline-flex flex-wrap items-center justify-center gap-x-4 text-sm text-muted-foreground">
			{Object.entries(palette).map(([key, val]) => (
				<span key={key} className="inline-flex items-center gap-2">
					<Dot className={val.class} /> {val.label}
				</span>
			))}
		</div>
	);
}

function SkillCard({ title, blurb, items, columns = 2 }) {
	const palette = Object.fromEntries(
		(skillsContent.legend?.levels || []).map((l) => [
			l.key,
			{ label: l.label, className: l.class || l.className },
		])
	);

	const listClass = `grid grid-cols-${columns} sm:grid-cols-${columns} sm:w-full max-w-[32rem] mx-auto gap-y-1 justify-items-start`;

	const sorted = [...items].sort(
		(a, b) =>
			(levelOrder[b.proficiency || "familiar"] ?? 0) -
			(levelOrder[a.proficiency || "familiar"] ?? 0)
	);

	return (
		<Card className="card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			<div className="mb-5 text-center">
				<h3 className="text-xl md:text-2xl font-semibold tracking-tight">
					{title}
				</h3>
				{blurb && <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>}
			</div>

			<ul className={listClass}>
				{sorted.map(({ name, proficiency }, idx) => {
					const dotClass = palette[proficiency]?.className || "bg-slate-400";
					return (
						<li key={idx} className="w-full">
							<div className="flex items-center gap-2 px-10">
								<Dot className={dotClass} />
								<span className="text-sm text-foreground/90">{name}</span>
							</div>
						</li>
					);
				})}
			</ul>
		</Card>
	);
}

export default function Skills() {
	const { legend, groups } = skillsContent;

	return (
		<Section id="skills" title="Skills">
			<SectionHeader legend={legend}></SectionHeader>
			<div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6">
				{groups.map(({ key, title, blurb, columns, items }) => (
					<SkillCard
						key={key}
						title={title}
						blurb={blurb}
						items={items}
						columns={columns}
					/>
				))}
			</div>
		</Section>
	);
}
