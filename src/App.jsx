import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ProjectDoc from "./pages/ProjectDoc";
import { Routes, Route } from "react-router-dom";

function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</>
	);
}

export default function App() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-white text-rose-950">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project/:slug" element={<ProjectDoc />} />
			</Routes>
			<Footer />
		</div>
	);
}
