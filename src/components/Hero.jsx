import React from "react";
import Button from "./Button";
import TaskDesign from "./TaskDesign";

function Hero() {
  return (
    <div className="flex flex-col h-screen bg-[#F7F7F7] border-2 border-gray-200 shadow-md rounded-4xl mx-5 relative mb-10 min-h-[767px] overflow-hidden">
      {/* Header content section */}
      <div className="flex flex-col items-center pt-10 lg:pt-20">
        <div className="text-6xl font-bold text-[#888B90]">
          Every App. Every Task.
        </div>
        <div className="text-6xl font-bold pr-6">One Workspace.</div>
        <div className="text-[#747474] mt-5 mr-7 text-md max-w-lg text-center">
          Your tasks, reminders, and messages, flow together into a single,
          seamless workspace.
        </div>
      </div>

      {/* Middle section with Button - this will grow to fill available space */}
      <div className="flex items-center justify-center pb-4 mt-8 mb-8">
        <Button />
      </div>

      {/* Bottom section for TaskDesign - constrained to stay within hero div */}
      <div
        className="flex-shrink-0 w-full flex items-center justify-center pb-12 overflow-hidden"
        style={{ height: "400px" }}
      >
        <div className="relative">
          <TaskDesign />
        </div>
      </div>

      {/* Whitish fade effect from bottom and sides */}
      <div className="absolute inset-0 pointer-events-none z-100">
        {/* Bottom fade - strongest effect */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/50 via-white/20 via-white/10 to-transparent"></div>

        {/* Left fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white/60 via-white/25 to-transparent"></div>

        {/* Right fade */}
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white/60 via-white/25 to-transparent"></div>

        {/* Bottom corner fades for seamless blending */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/70 via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/70 via-white/30 to-transparent"></div>
      </div>
    </div>
  );
}

export default Hero;
