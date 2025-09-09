import { Link as RouterLink } from "react-router-dom";

export default function ButtonLink({
	href,
	children,
	icon: Icon,
	internal = false,
}) {
	const baseClasses =
		"inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-600 px-3 py-2 text-white hover:text-[#535bf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600";

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
