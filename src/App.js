// import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import Coursework from "./components/Coursework";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import React from "react";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Education/>
      <Coursework/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}
