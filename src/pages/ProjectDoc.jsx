import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CONFIG from "../content/site";
import Card from "../components/ui/Card";
import Pill from "../components/ui/Pill";
import TableOfContent from "../components/TableOfContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "../utils/date";
import { slugify } from "../utils/slug";

export default function ProjectDoc() {
	const { slug } = useParams();
	const project = useMemo(
		() => CONFIG.projects.find((p) => p.slug === slug),
		[slug]
	);
	const [md, setMd] = useState("");

	useEffect(() => {
		if (!slug) return;
		import(`../content/projects/${slug}.md?raw`)
			.then((mod) => setMd(mod.default || ""))
			.catch(() => setMd("# Coming soon\nDesign notes are on the way."));
	}, [slug]);

	if (!project) {
		return (
			<section className="max-w-3xl mx-auto px-4 py-10">
				<Card className="p-6">
					<h1 className="text-xl font-semibold text-rose-900">
						Project not found
					</h1>
					<p className="mt-2 text-rose-900/80">
						We couldn't find a project with slug “{slug}”.
					</p>
				</Card>
			</section>
		);
	}

	const headings = useMemo(() => {
		const rx = /^(#{1,3})\s+(.+)$/gm;
		const out = [];
		let m;
		while ((m = rx.exec(md))) {
			const level = m[1].length;
			const text = m[2].replace(/#+\s*$/, "").trim();
			const id = slugify(text);
			out.push({ level, text, id });
		}
		return out;
	}, [md]);

	const heading =
		(Tag) =>
		({ children }) => {
			const plain = Array.isArray(children)
				? children
						.map((c) => (typeof c === "string" ? c : c?.props?.children ?? ""))
						.join("")
				: String(children ?? "");

			const id = slugify(String(plain));
			const cls =
				Tag === "h1"
					? "text-3xl font-semibold tracking-tight text-rose-800"
					: Tag === "h2"
					? "text-2xl font-semibold text-rose-800 mt-8"
					: "text-xl font-semibold text-rose-800 mt-6";

			return (
				<Tag id={id} className={`${cls} scroll-mt-24`}>
					{children}
				</Tag>
			);
		};

	return (
		<section className="max-w-3xl mx-auto px-4 py-10">
			{/* Post header */}
			<header className="mb-4">
				<h1 className="text-3xl font-semibold tracking-tight text-rose-800">
					{project.title}
				</h1>
				<div className="mt-2 flex flex-wrap items-center gap-3 text-rose-900/70">
					<span>{formatDate(project.date)}</span>
					{project.design ? <Pill>Design: {project.design}</Pill> : null}
				</div>
			</header>

			{/* Inline TOC at the beginning of the blog post */}
			<div className="mb-6">
				<TableOfContent headings={headings} />
			</div>

			{/* Markdown content */}
			<article className="prose prose-rose max-w-none">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					components={{
						h1: heading("h1"),
						h2: heading("h2"),
						h3: heading("h3"),
						img: (props) => (
							<figure className="my-6">
								<img
									{...props}
									className="rounded-xl border border-rose-100 mx-auto"
								/>
								{props.alt ? (
									<figcaption className="text-xs text-rose-900/60 mt-2 text-center">
										{props.alt}
									</figcaption>
								) : null}
							</figure>
						),
						a: (props) => (
							<a
								{...props}
								className="text-rose-700 underline hover:no-underline"
							/>
						),
						code: ({ inline, className, children, ...rest }) => {
							if (inline)
								return <code className="px-1 py-0.5 rounded">{children}</code>;
							return (
								<pre className="rounded-xl border border-rose-100 p-4 overflow-auto">
									<code className={className} {...rest}>
										{children}
									</code>
								</pre>
							);
						},
					}}
				>
					{md}
				</ReactMarkdown>
			</article>
		</section>
	);
}
