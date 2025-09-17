import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#F7F7F7] border-2 border-gray-200 shadow-md rounded-4xl mx-5 relative">
      <div className="text-6xl font-bold mt-30 text-[#888B90]">
        Every App. Every Task.
      </div>
      <div className="text-6xl font-bold pr-6">One Workspace.</div>
      <div className="text-[#747474] mt-5 mr-7 text-lg max-w-lg text-center">
        Your tasks, reminders, and messages, flow together into a single,
        seamless workspace.
      </div>
      <div className="mt-5">
        <Button />
      </div>
    </div>
  );
}

export default Hero;
