import React from "react";
import TaskDesign from "./TaskDesign";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function UnifiedTaskSection() {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">
      {/* Unified container with absolute positioning to maintain original layout */}
      <div className="relative w-full h-full">
        {/* Left section - positioned to create tree-like branch effect */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full flex items-center justify-center">
          <LeftSection />
        </div>

        {/* Center TaskDesign - anchored as the main reference point */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <TaskDesign />
        </div>

        {/* Right section - positioned to create tree-like branch effect */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full flex items-center justify-center">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default UnifiedTaskSection;
