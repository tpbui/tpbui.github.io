import { cx } from "../../utils/cx";

export default function Pill({ children, className = "" }) {
	return <span className="chip">{children}</span>;
}
