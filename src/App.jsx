import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import ProjectDoc from "./pages/ProjectDoc";

function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<Experience />
			<Contact />
		</>
	);
}

export default function App() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-background text-foreground">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project/:slug" element={<ProjectDoc />} />
			</Routes>
			<Footer />
		</div>
	);
}
