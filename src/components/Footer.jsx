export default function Footer() {
	return (
		<footer className="border-t border-rose-100 py-8 mt-8">
			<div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-rose-900/70">
				<span>© {new Date().getFullYear()} Tra Bui. All rights reserved.</span>
				<a href="#home" className="hover:underline">
					Back to top
				</a>
			</div>
		</footer>
	);
}
