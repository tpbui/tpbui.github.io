import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-white text-rose-950">
			<Navbar />
			<Hero />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}
