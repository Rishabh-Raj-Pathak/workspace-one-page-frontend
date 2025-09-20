import React from "react";
import Button from "./Button";
import TaskDesign from "./TaskDesign";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useHover } from "../context/HoverContext";

function Hero() {
  const { hoveredApp, hoverSide, getCurrentColors } = useHover();
  const currentColors = getCurrentColors();

  // Generate dynamic styles for the text
  const getTextStyle = () => {
    if (currentColors) {
      return {
        background: currentColors.textGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      };
    }
    return {};
  };

  // Generate background overlay styles based on hover side
  const getBackgroundOverlay = () => {
    if (!currentColors || !hoverSide) return null;

    const baseGradient = currentColors.bgGradient;

    if (hoverSide === "left") {
      return {
        background: `linear-gradient(135deg, 
          ${currentColors.colors[0]}40 0%, 
          ${currentColors.colors[1]}30 25%, 
          ${currentColors.colors[0]}20 50%, 
          transparent 75%, 
          transparent 100%)`,
      };
    } else if (hoverSide === "right") {
      return {
        background: `linear-gradient(225deg, 
          ${currentColors.colors[0]}40 0%, 
          ${currentColors.colors[1]}30 25%, 
          ${currentColors.colors[0]}20 50%, 
          transparent 75%, 
          transparent 100%)`,
      };
    }

    return { background: baseGradient };
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F7] border-2 border-gray-200 shadow-md rounded-4xl mx-5 relative mb-10 min-h-[751px] overflow-hidden">
      {/* Dynamic background overlay */}
      {currentColors && (
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1200 ease-out"
          style={getBackgroundOverlay()}
        />
      )}

      {/* Header content section */}
      <div className="flex flex-col items-center pt-8 lg:pt-15 relative z-10">
        <div
          className={`text-6xl font-bold transition-all duration-600 ease-out pb-5 ${
            currentColors ? "" : "text-[#888B90]"
          }`}
          style={getTextStyle()}
        >
          Every App. Every Task.
        </div>
        <div className="text-6xl font-bold pr-6">One Workspace.</div>
        <div className="text-[#747474] mt-5 mr-7 text-md max-w-lg text-center">
          Your tasks, reminders, and messages, flow together into a single,
          seamless workspace.
        </div>
      </div>

      {/* Middle section with Button - this will grow to fill available space */}
      <div className="flex items-center justify-center mt-8 mb-8">
        <Button />
      </div>

      {/* Parent flex container for left, middle, and right sections */}
      <div className="flex flex-1 w-full items-center justify-center">
        {/* Left section */}
        <div
          className="flex-1 flex items-center justify-center pb-12 ml-10"
          style={{ height: "400px" }}
        >
          <LeftSection />
        </div>

        {/* Middle section for TaskDesign - constrained to stay within hero div */}
        <div
          className="flex-1 flex items-center justify-center pb-12 "
          style={{ height: "400px" }}
        >
          <div className="relative">
            <TaskDesign />
          </div>
        </div>

        {/* Right section placeholder */}
        <div
          className="flex-1 flex items-center justify-center pb-12 mr-10"
          style={{ height: "400px" }}
        >
          <RightSection />
        </div>
      </div>

      {/* Enhanced fade effect with dynamic colors */}
      <div className="absolute inset-0 pointer-events-none z-100">
        {/* Bottom fade - only show when hovering with app colors */}
        {currentColors && hoverSide && (
          <div
            className="absolute bottom-0 left-0 right-0 h-40 transition-all duration-1000 ease-out"
            style={{
              background: `linear-gradient(to top, 
                ${currentColors.colors[0]}25 0%, 
                ${currentColors.colors[1]}15 20%, 
                ${currentColors.colors[0]}08 40%, 
                transparent 70%, 
                transparent 100%)`,
            }}
          />
        )}

        {/* Left fade - only show when hovering left side */}
        {currentColors && hoverSide === "left" && (
          <div
            className="absolute top-0 bottom-0 left-0 w-16 transition-all duration-1000 ease-out"
            style={{
              background: `linear-gradient(to right, 
                ${currentColors.colors[0]}30 0%, 
                ${currentColors.colors[1]}20 50%, 
                transparent 100%)`,
            }}
          />
        )}

        {/* Right fade - only show when hovering right side */}
        {currentColors && hoverSide === "right" && (
          <div
            className="absolute top-0 bottom-0 right-0 w-16 transition-all duration-1000 ease-out"
            style={{
              background: `linear-gradient(to left, 
                ${currentColors.colors[0]}30 0%, 
                ${currentColors.colors[1]}20 50%, 
                transparent 100%)`,
            }}
          />
        )}

        {/* Bottom corner fades for seamless blending - only show when hovering */}
        {/* {currentColors && hoverSide === "left" && (
          <div
            className="absolute bottom-0 left-0 w-32 h-32 transition-all duration-1000 ease-out"
            style={{
              background: `linear-gradient(45deg, 
                ${currentColors.colors[0]}30 0%, 
                ${currentColors.colors[1]}20 50%, 
                transparent 100%)`,
            }}
          />
        )} */}
        {/* {currentColors && hoverSide === "right" && (
          <div
            className="absolute bottom-0 right-0 w-32 h-32 transition-all duration-1000 ease-out"
            style={{
              background: `linear-gradient(-45deg, 
                ${currentColors.colors[0]}30 0%, 
                ${currentColors.colors[1]}20 50%, 
                transparent 100%)`,
            }}
          />
        )} */}
      </div>
    </div>
  );
}

export default Hero;
