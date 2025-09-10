export function getTheme() {
	const saved = localStorage.getItem("theme");
	if (saved === "light" || saved === "dark") return saved;
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function setTheme(mode) {
	const root = document.documentElement;
	if (mode === "dark") root.classList.add("dark");
	else root.classList.remove("dark");
	localStorage.setItem("theme", mode);
}

export function toggleTheme() {
	const next = getTheme() === "dark" ? "light" : "dark";
	setTheme(next);
	return next;
}
