import Card from "./ui/Card";
import ButtonLink from "./ui/ButtonLink";
import TagList from "./ui/TagList";
import { X, Calendar, Link as LinkIcon, FileText } from "lucide-react";
import { formatDate } from "../utils/date";

export default function ProjectModal({ project, onClose }) {
	if (!project) return null;

	const primaryLinks = project.links ?? [];
	const hasBlog = Boolean(project.slug);
	const hasAnyButtons = primaryLinks.length > 0 || hasBlog;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* backdrop */}
			<button
				className="absolute inset-0 bg-black/50"
				aria-label="Close overlay"
				onClick={onClose}
			/>

			{/* dialog */}
			<Card
				className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl
                   max-h-[90vh] overflow-hidden flex flex-col"
				role="dialog"
				aria-modal="true"
				aria-labelledby="project-modal-title"
			>
				{/* close */}
				<button
					className="absolute right-3 top-3 rounded-full p-2 hover:bg-rose-100"
					aria-label="Close"
					onClick={onClose}
				>
					<X size={18} />
				</button>

				{/* BODY */}
				<div className="p-4 sm:p-6 overflow-y-auto min-h-0 space-y-4">
					<div className="flex flex-col gap-2">
						<h3
							id="project-modal-title"
							className="text-xl font-semibold text-rose-900"
						>
							{project.title}
						</h3>

						<div className="flex flex-wrap items-center gap-2 text-sm text-rose-900/70">
							<Calendar size={16} />
							<span>{formatDate(project.date)}</span>
						</div>

						<TagList value={project.tags} />
					</div>

					{project.summary && (
						<p className="text-rose-900/90 italic">{project.summary}</p>
					)}

					{project.details && (
						<p className="text-rose-900/90 whitespace-pre-line">
							{project.details}
						</p>
					)}
				</div>

				{/* FOOTER */}
				{hasAnyButtons && (
					<div className="p-4 sm:p-6 border-t bg-white sticky bottom-0">
						<div className="flex flex-wrap gap-3">
							{primaryLinks.map((l) => (
								<ButtonLink
									key={l.href}
									href={l.href}
									icon={l.icon || LinkIcon}
								>
									{l.label}
								</ButtonLink>
							))}
							{hasBlog && (
								<ButtonLink
									href={`/project/${project.slug}`}
									internal
									icon={FileText}
									onClick={onClose}
								>
									Blog
								</ButtonLink>
							)}
						</div>
					</div>
				)}
			</Card>
		</div>
	);
}
