import React from "react";
import Button from "./Button";
import TaskDesign from "./TaskDesign";

function Hero() {
  return (
    <div className="flex flex-col h-screen bg-[#F7F7F7] border-2 border-gray-200 shadow-md rounded-4xl mx-5 relative mb-10 min-h-[700px]">
      {/* Header content section */}
      <div className="flex flex-col items-center pt-10 lg:pt-20">
        <div className="text-5xl font-bold text-[#888B90]">
          Every App. Every Task.
        </div>
        <div className="text-5xl font-bold pr-6">One Workspace.</div>
        <div className="text-[#747474] mt-5 mr-7 text-md max-w-lg text-center">
          Your tasks, reminders, and messages, flow together into a single,
          seamless workspace.
        </div>
      </div>

      {/* Middle section with Button - this will grow to fill available space */}
      <div className="flex-1 flex flex-col items-center justify-center pb-8">
        <Button />
      </div>

      {/* Bottom section for TaskDesign - constrained to stay within hero div */}
      <div
        className="flex-shrink-0 w-full flex items-center justify-center pb-12 overflow-hidden"
        style={{ height: "280px" }}
      >
        <div className="relative">
          <TaskDesign />
        </div>
      </div>
    </div>
  );
}

export default Hero;
