import React from "react";
import FloatingLogos from "./FloatingLogos";
import slackLogo from "../assets/SlackLogo.png";
import dropboxLogo from "../assets/DropBox.png";
import teamsLogo from "../assets/teams.png";
import notionLogo from "../assets/notion.png";
import gmailLogo from "../assets/mail.png";
import calendarLogo from "../assets/calendar.png";

function TaskDesign() {
  return (
    <div className="relative flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-64 sm:h-72 md:h-80">
      {/* shadow behind the task card */}
      <div className="absolute z-5 bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] shadow-lg w-80 sm:w-100 lg:w-130 h-32 sm:h-36 lg:h-40 mt-8 sm:mt-12 lg:mt-15"></div>

      {/* Background paper layers for depth effect */}
      <div className="absolute z-5 bg-white rounded-lg shadow-md w-56 sm:w-64 lg:w-72 h-32 sm:h-36 lg:h-40 transform -translate-x-12 sm:-translate-x-14 lg:-translate-x-18 -rotate-3 opacity-90 mt-24 sm:mt-28 lg:mt-35">
        <div className="p-3 sm:p-4 bg-white rounded-lg shadow w-40 sm:w-44 lg:w-48">
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-3/4"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-full"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-5/6"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-2/3"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-4/5"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-1/3"></div>
        </div>
      </div>
      <div className="absolute z-5 bg-white rounded-lg shadow-lg w-70 sm:w-80 lg:w-90 h-36 sm:h-40 lg:h-44 transform translate-x-10 sm:translate-x-12 lg:translate-x-15 rotate-2 opacity-90 mt-24 sm:mt-28 lg:mt-35">
        <div className="p-3 sm:p-4 bg-white rounded-lg shadow w-70 sm:w-80 lg:w-90">
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-5/6"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-5/6"></div>
          <div className="h-1.5 sm:h-2 bg-gray-300 rounded mb-1.5 sm:mb-2 w-5/6"></div>
        </div>
      </div>

      {/* Main task card container */}
      <div
        className="relative z-10 bg-white shadow-lg w-64 sm:w-72 lg:w-80 h-52 sm:h-58 lg:h-65 p-2 sm:p-3 overflow-hidden mb-3 sm:mb-4 lg:mb-5 rotate-2 mt-4 sm:mt-5 lg:mt-7"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 50px) 0, 100% 30px, 100% 100%, 0 100%)",
        }}
      >
        {/* Folded corner effect - Creates a paper-like folded corner visual */}
        <div className="absolute top-0 right-0 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 overflow-hidden z-50 shadow-lg">
          <div className="absolute top-0 right-1.5 sm:right-2 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-white origin-top-right shadow-lg overflow-hidden"></div>
        </div>

        {/* Task Item 1: New campaign */}
        <div className="relative flex mb-2 sm:mb-3 lg:mb-4 justify-between bg-[#F0F0F0] pt-1.5 sm:pt-2 pl-1.5 sm:pl-2 pr-1.5 sm:pr-2 rounded-lg">
          <div className="flex flex-col mb-1 w-24 sm:w-28 lg:w-34">
            <span className="text-blue-600 font-medium text-xs sm:text-sm">
              New campaign
            </span>
            <span className="text-gray-400 text-xs mt-1 sm:mt-2">Oct 22</span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-1 mt-6 sm:mt-7 lg:mt-8 ml-2 sm:ml-3 lg:ml-4">
            <div className="bg-blue-500 h-1 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Task Item 2: Design Tutorials */}
        <div className="relative flex mb-2 sm:mb-3 lg:mb-4 justify-between items-start bg-[#F0F0F0] pt-1.5 sm:pt-2 pl-1.5 sm:pl-2 pr-1.5 sm:pr-2 rounded-lg">
          <div className="flex flex-col mb-1 w-24 sm:w-28 lg:w-34">
            <span className="text-orange-600 font-medium text-xs sm:text-sm">
              Design Tutorials
            </span>
            <span className="text-gray-400 text-xs mt-1 sm:mt-2">Nov 8</span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-1 mt-6 sm:mt-7 lg:mt-8 ml-2 sm:ml-3 lg:ml-4 mr-2 sm:mr-3">
            <div className="bg-orange-500 h-1 rounded-full w-4/5"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-gray-300 rounded-full"></div>
            <span className="text-gray-500 text-xs mt-0.5 sm:mt-1">68%</span>
          </div>
        </div>

        {/* Task Item 3: Framer collab */}
        <div className="relative flex mb-2 sm:mb-3 lg:mb-4 justify-between items-start bg-[#F0F0F0] pt-1.5 sm:pt-2 pl-1.5 sm:pl-2 pr-1.5 sm:pr-2 rounded-lg">
          <div className="flex flex-col mb-1 w-24 sm:w-28 lg:w-34">
            <span className="text-green-600 font-medium text-xs sm:text-sm">
              Framer collab
            </span>
            <span className="text-gray-400 text-xs mt-1 sm:mt-2">Oct 30</span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-1 mt-6 sm:mt-7 lg:mt-8 ml-2 sm:ml-3 lg:ml-4 mr-2 sm:mr-3">
            <div className="bg-green-500 h-1 rounded-full w-5/6"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-gray-300 rounded-full"></div>
            <span className="text-gray-500 text-xs mt-0.5 sm:mt-1">85%</span>
          </div>
        </div>
      </div>

      {/* Blue "TODAY'S TASKS" overlay bar - MOVED OUTSIDE task card */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg px-4 sm:px-5 lg:px-6 pb-6 sm:pb-7 lg:pb-8 pt-1.5 sm:pt-2 w-80 sm:w-100 lg:w-130">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold text-sm sm:text-base lg:text-lg">
            TODAY'S TASKS
          </h2>
          <div className="flex space-x-2 sm:space-x-3 text-white">
            {/* Three dots menu icon */}
            <div className="flex space-x-0.5 sm:space-x-1 rotate-90">
              <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"></div>
              <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"></div>
              <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"></div>
            </div>
            {/* Settings gear icon */}
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDesign;
