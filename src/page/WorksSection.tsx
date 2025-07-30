import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { MdDeveloperMode, MdPhoneIphone } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WorksSection = () => {
  return (
   <div className="min-h-screen bg-gray-900 text-white font-mono relative p-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/code-bg.png')] bg-cover bg-center opacity-10" />

      {/* Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center pt-10">
        <div className="w-8 h-8 rounded-full bg-teal-400 text-center flex items-center justify-center font-bold">
          0
        </div>
        <div className="h-10 w-px bg-white mt-1" />
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mt-6 mb-4">
        <h2 className="text-3xl font-bold text-teal-400">Works</h2>
        <p className="text-xs text-gray-400 mt-1">
          I had the pleasure of working with these awesome projects
        </p>
      </div>

      {/* Project Showcase */}
      <div className="relative z-10 flex items-center justify-center mt-10">
        <button className="absolute left-2 md:left-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600">
          <FiChevronLeft className="text-2xl" />
        </button>

        <div className="flex gap-6 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
            alt="Code View"
            className="w-48 h-64 object-contain bg-black rounded-md"
          />
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Website Preview"
              className="w-72 h-48 object-cover rounded-md shadow-md"
            />
            <a
              href="#"
              className="text-teal-400 text-sm mt-2 underline hover:text-teal-300"
            >
              View Website ↗
            </a>
          </div>
        </div>

        <button className="absolute right-2 md:right-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600">
          <FiChevronRight className="text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default WorksSection
