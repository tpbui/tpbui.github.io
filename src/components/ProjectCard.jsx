import Card from "./ui/Card";
import ButtonLink from "./ui/ButtonLink";
import { Calendar, ChevronRight, FileText } from "lucide-react";
import { formatDate } from "../utils/date";

export default function ProjectCard({ project, onOpen }) {
	return (
		<Card className="card overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			<button
				onClick={() => onOpen(project)}
				className="text-left w-full bg-transparent p-0 appearance-none rounded-xl focus:outline-none focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background"
			>
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
					/>
				) : null}
				<div className="p-5">
					<div className="flex items-center justify-between">
						<h3 className="font-semibold text-foreground flex items-center gap-2 transition-colors group-hover:text-primary">
							{project.title}
							<ChevronRight
								size={16}
								className="transition-transform group-hover:translate-x-0.5"
							/>
						</h3>
						<span className="text-xs text-muted-foreground flex items-center gap-1">
							<Calendar size={14} /> {formatDate(project.date)}
						</span>
					</div>
					<p className="mt-2 text-sm text-muted-foreground italic">
						{project.summary}
					</p>

					{project.links?.length ? (
						<div className="mt-4 flex flex-wrap gap-3">
							{project.links.map((l) => (
								<ButtonLink
									key={l.href}
									href={l.href}
									icon={l.icon || LinkIcon}
									className="btn btn-secondary"
								>
									{l.label}
								</ButtonLink>
							))}
						</div>
					) : null}

					{project.slug ? (
						<div className="mt-4 flex flex-wrap gap-3">
							<ButtonLink
								href={`/project/${project.slug}`}
								internal
								icon={FileText}
								className="btn btn-primary"
							>
								Blog
							</ButtonLink>
						</div>
					) : null}
				</div>
			</button>
		</Card>
	);
}
