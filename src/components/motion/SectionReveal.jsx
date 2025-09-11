import {
	Children,
	cloneElement,
	isValidElement,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

export default function SectionReveal({
	as: Tag = "div",
	children,
	twoWay = true,
	threshold = 0.15,
	rootMargin = "0px 0px -10% 0px",
	stagger = 80,
	variant = "up",
	className = "",
	...props
}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const io = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setInView(true);
					if (!twoWay) io.unobserve(el);
				} else if (twoWay) {
					setInView(false);
				}
			},
			{ threshold, rootMargin }
		);

		io.observe(el);
		return () => io.disconnect();
	}, [twoWay, threshold, rootMargin]);

	const wrapped = useMemo(() => {
		const arr = Children.toArray(children);
		return arr.map((child, i) => {
			const style = { "--i": i };
			if (isValidElement(child)) {
				return cloneElement(child, {
					style: { ...(child.props?.style || {}), ...style },
				});
			}
			return (
				<div key={i} style={style}>
					{child}
				</div>
			);
		});
	}, [children]);

	return (
		<Tag
			ref={ref}
			data-reveal-children=""
			data-variant={variant}
			className={`${className} ${inView ? "in-view" : ""}`}
			style={{ "--stagger": `${stagger}ms` }}
			{...props}
		>
			{wrapped}
		</Tag>
	);
}
