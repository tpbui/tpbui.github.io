export default function Footer() {
	return (
		<footer className="bg-background/50 text-muted-foreground border-t border-border py-8 mt-8">
			<div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
				<span>© {new Date().getFullYear()} Tra Bui. All rights reserved.</span>
				<a
					href="#home"
					className="text-muted-foreground hover:text-foreground transition-colors
                     relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                     after:bg-primary hover:after:w-full after:transition-all
                     focus:outline-none focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background rounded"
				>
					Back to top
				</a>
			</div>
		</footer>
	);
}
