import { ArrowRightIcon } from "@heroicons/react/solid";
// import React from "react";
// import reactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

import React, { Component } from "react";
import {GrLinkedinOption} from "react-icons/gr";

class Navbar extends Component {
  render() {
      return (
          <div>
              <GrLinkedinOption color="blue"/> 
          </div>
      );
  }
}

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Mansi Vakharia
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Education
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Coursework
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Contact Me
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
          {/* <SocialIcon className="w-4 h-4 ml-1"></SocialIcon> */}
        </a>
        <SocialIcon url="https://twitter.com/jaketrent" className="w-2 h-2 ml-1"/>
      </div>
    </header>
  );
}