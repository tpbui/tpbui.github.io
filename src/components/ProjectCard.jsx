import Card from "./ui/Card";
import Pill from "./ui/Pill";
import { Calendar, ChevronRight } from "lucide-react";
import { formatDate } from "../utils/date";

export default function ProjectCard({ project, onOpen }) {
	return (
		<Card className="overflow-hidden group">
			<button
				onClick={() => onOpen(project)}
				className="text-left w-full bg-transparent p-0 appearance-none"
			>
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className="w-full aspect-video object-cover"
					/>
				) : null}
				<div className="p-4">
					<div className="flex items-center justify-between">
						<h3 className="font-semibold text-rose-900 group-hover:underline flex items-center gap-2">
							{project.title}
							<ChevronRight size={16} />
						</h3>
						<span className="text-xs text-rose-900/60 flex items-center gap-1">
							<Calendar size={14} /> {formatDate(project.date)}
						</span>
					</div>
					<p className="mt-2 text-sm text-rose-900/80">{project.summary}</p>
					<div className="mt-3">
						<Pill className="bg-rose-100 text-rose-700 border-rose-200">
							Design: {project.design}
						</Pill>
					</div>
				</div>
			</button>
		</Card>
	);
}
