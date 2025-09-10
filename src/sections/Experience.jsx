import CONFIG from "../content/site";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { Briefcase } from "lucide-react";
import { dateRange } from "../utils/date";

export default function Experience() {
	return (
		<Section id="experience" title="Experience">
			<Card className="p-5">
				<div className="flex items-center gap-2 text-rose-900 mb-3">
					<Briefcase size={18} /> <h3 className="font-medium">Internships</h3>
				</div>
				<ol className="space-y-3">
					{CONFIG.internships.map((w, idx) => (
						<li key={idx} className="border-l-2 border-rose-200 pl-3">
							<div className="flex items-center justify-between">
								<span className="font-medium text-rose-900">
									{w.title} @ {w.company}
								</span>
								<span className="text-sm text-rose-900/70">
									{dateRange(w.start, w.end)}
								</span>
							</div>
							<ul className="list-disc list-inside text-sm text-rose-900/80 mt-2 space-y-1">
								{w.points?.map((p, i) => (
									<li key={i}>{p}</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</Card>
			<Card className="p-5">
				<div className="flex items-center gap-2 text-rose-900 mb-3">
					<Briefcase size={18} /> <h3 className="font-medium">Academic Work</h3>
				</div>
				<ol className="space-y-3">
					{CONFIG.academic.map((w, idx) => (
						<li key={idx} className="border-l-2 border-rose-200 pl-3">
							<div className="flex items-center justify-between">
								<span className="font-medium text-rose-900">
									{w.title} @ {w.company}
								</span>
								<span className="text-sm text-rose-900/70">
									{dateRange(w.start, w.end)}
								</span>
							</div>
							<ul className="list-disc list-inside text-sm text-rose-900/80 mt-2 space-y-1">
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
