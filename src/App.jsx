import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hireme" element={<HireMe />} /> 
          </Routes>         
        </main>

        <Footer />
      </div>
    </Router>
  );
}