export default function ButtonLink({ href, children, icon: Icon }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-600 px-3 py-2 text-white hover:text-[#535bf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600"
		>
			{Icon ? <Icon size={18} /> : null}
			<span className="text-sm font-medium">{children}</span>
		</a>
	);
}
