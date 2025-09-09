export function formatDate(iso) {
	try {
		return new Date(iso).toLocaleDateString(undefined, {
			year: "numeric",
			month: "short",
		});
	} catch {
		return iso;
	}
}

export function dateRange(start, end) {
	const s = start ? formatDate(start) : "";
	const e = end ? formatDate(end) : "Present";
	return `${s} — ${e}`;
}
