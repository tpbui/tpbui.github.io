import { cx } from "../../utils/cx";

export default function Card({ children, className }) {
	return (
		<div
			className={cx(
				"rounded-2xl bg-white shadow-sm ring-1 ring-rose-100",
				className
			)}
		>
			{children}
		</div>
	);
}
