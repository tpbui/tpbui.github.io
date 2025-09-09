import { cx } from "../../utils/cx";

export default function Pill({ children, className = "" }) {
	return (
		<span
			className={cx(
				"inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-700",
				className
			)}
		>
			{children}
		</span>
	);
}
