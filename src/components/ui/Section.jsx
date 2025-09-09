export default function Section({ id, title, children }) {
	return (
		<section id={id} className="scroll-mt-24">
			<div className="max-w-5xl mx-auto px-4 py-10">
				<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-rose-700">
					{title}
				</h2>
				<div className="space-y-6">{children}</div>
			</div>
		</section>
	);
}
