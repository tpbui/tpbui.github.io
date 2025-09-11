import SectionReveal from "../motion/SectionReveal";

export default function Section({
	id,
	title,
	children,
	reveal = false,
	twoWay = true,
	stagger = 80,
	variant = "up",
}) {
	const Inner = (
		<>
			<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-foreground">
				{title}
			</h2>
			<div className="space-y-6">{children}</div>
		</>
	);
	return (
		<section id={id} className="scroll-mt-24">
			<div className="max-w-5xl mx-auto px-4 py-10">
				{reveal ? (
					<SectionReveal twoWay={twoWay} stagger={stagger} variant={variant}>
						{Inner}
					</SectionReveal>
				) : (
					Inner
				)}
			</div>
		</section>
	);
}
