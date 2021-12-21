import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
    return (
      <section id="education">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <AcademicCapIcon className="inline block w-10 mb-4"/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Educational Background
              {/* <br className="hidden lg:inline-block" />I love to build amazing
              apps. */}
            </h1>
            {/* <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p> */}
            {/* <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div> */}
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div> */}
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-1">
          {education.map((education) => (
            <div key={education} className="p-2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-large text-white">
                  {education}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  }