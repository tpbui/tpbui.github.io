import { Tag as TagIcon } from "lucide-react";

function parseTags(input = "") {
	return input
		.replace(/^Design:\s*/i, "")
		.split(",")
		.map((t) => t.trim())
		.filter(Boolean);
}

export default function TagList({ value, onTagClick }) {
	const tags = parseTags(value);

	if (!tags.length) return null;

	return (
		<div className="flex items-start gap-2 text-sm text-muted-foreground">
			<TagIcon size={16} className="mt-[2px] shrink-0 text-primary" />
			<ul className="flex flex-wrap gap-x-1 gap-y-1">
				{tags.map((t) => (
					<li key={t} className="after:content-[','] last:after:content-['']">
						<span
							className={`text-foreground ${
								onTagClick
									? "cursor-pointer hover:text-primary hover:underline"
									: "cursor-default"
							}`}
							onClick={onTagClick ? () => onTagClick(t) : undefined}
						>
							{t}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
