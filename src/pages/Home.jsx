// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import XRScene from "../components/XRScene";
import Contact from "../components/Contact";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <XRScene />
      <SectionDivider />

      <Contact />
    </div>
  );
}
