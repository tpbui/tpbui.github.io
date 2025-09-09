import Card from "./ui/Card";
import ButtonLink from "./ui/ButtonLink";
import { X, Calendar, Link as LinkIcon, FileText} from "lucide-react";
import { formatDate } from "../utils/date";

export default function ProjectModal({ project, onClose }) {
	if (!project) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			<button
				className="absolute inset-0 bg-black/50"
				aria-label="Close overlay"
				onClick={onClose}
			/>
			<Card className="relative w-full max-w-2xl p-4 sm:p-6">
				<button
					className="absolute right-3 top-3 rounded-full p-2 hover:bg-rose-100"
					aria-label="Close"
					onClick={onClose}
				>
					<X size={18} />
				</button>
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className="w-full aspect-video object-cover rounded-xl"
					/>
				) : null}
				<div className="mt-4">
					<h3 className="text-xl font-semibold text-rose-900">
						{project.title}
					</h3>
					<div className="mt-1 text-sm text-rose-900/70 flex items-center gap-2">
						<Calendar size={16} /> {formatDate(project.date)} • Design:{" "}
						{project.design}
					</div>
					<p className="mt-3 text-rose-900/90">{project.summary}</p>
					<p className="mt-3 text-rose-900/90 whitespace-pre-line">
						{project.details}
					</p>
					{project.links?.length ? (
						<div className="mt-4 flex flex-wrap gap-3">
							{project.links.map((l) => (
								<ButtonLink
									key={l.href}
									href={l.href}
									icon={l.icon || LinkIcon}
								>
									{l.label}
								</ButtonLink>
							))}
							{project.slug ? (
								<ButtonLink
									href={`/project/${project.slug}`}
									internal
									icon={FileText}
									onClick={onClose}
								>
									Blog Post
								</ButtonLink>
							) : null}
						</div>
					) : null}
				</div>
			</Card>
		</div>
	);
}
