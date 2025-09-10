import { Link as RouterLink } from "react-router-dom";
import { cx } from "../../utils/cx";

export default function ButtonLink({
	href,
	children,
	icon: Icon,
	internal = false,
	className = "",
}) {
	const baseClasses = cx("btn btn-primary", className);

	if (internal) {
		return (
			<RouterLink to={href} className={baseClasses}>
				{Icon ? <Icon size={18} /> : null}
				<span className="text-sm font-medium">{children}</span>
			</RouterLink>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className={baseClasses}
		>
			{Icon ? <Icon size={18} /> : null}
			<span className="text-sm font-medium">{children}</span>
		</a>
	);
}
