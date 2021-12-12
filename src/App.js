// import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import React, { Component } from "react";
import {GrLinkedinOption} from "react-icons/gr";

class App extends Component {
  render() {
      return (
          <div>
              <GrLinkedinOption color="blue"/> 
          </div>
      );
  }
}

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
