import { Briefcase } from "lucide-react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { dateRange } from "../utils/date";
import CONFIG from "../content/site";

export default function Experience() {
	return (
		<Section id="experience" title="Experience">
			<Card className="p-5">
				<div className="flex items-center gap-2 text-foreground mb-3">
					<Briefcase size={18} className="text-primary" />
					<h3 className="font-medium">Internships</h3>
				</div>
				<ol className="space-y-3">
					{CONFIG.internships.map((w, idx) => (
						<li
							key={idx}
							className="border-l-2 border-border pl-3 will-change-[transform,opacity] animate-in fade-in slide-in-from-bottom-2 duration-400"
							style={{ animationDelay: `${idx * 60}ms` }}
						>
							<div className="flex items-center justify-between">
								<span className="font-medium text-foreground">
									{w.title} @ {w.company}
								</span>
								<span className="text-sm text-muted-foreground">
									{dateRange(w.start, w.end)}
								</span>
							</div>
							<ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
								{w.points?.map((p, i) => (
									<li key={i}>{p}</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</Card>

			<Card className="p-5">
				<div className="flex items-center gap-2 text-foreground mb-3">
					<Briefcase size={18} className="text-primary" />
					<h3 className="font-medium">Academic Work</h3>
				</div>
				<ol className="space-y-3">
					{CONFIG.academic.map((w, idx) => (
						<li
							key={idx}
							className="border-l-2 border-border pl-3 will-change-[transform,opacity] animate-in fade-in slide-in-from-bottom-2 duration-400"
							style={{ animationDelay: `${idx * 60}ms` }}
						>
							<div className="flex items-center justify-between">
								<span className="font-medium text-foreground">
									{w.title} @ {w.company}
								</span>
								<span className="text-sm text-muted-foreground">
									{dateRange(w.start, w.end)}
								</span>
							</div>
							<ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
								{w.points?.map((p, i) => (
									<li key={i}>{p}</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</Card>
		</Section>
	);
}
