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
    <div className="flex flex-col h-[775px] bg-[#F7F7F7] border-2 border-gray-200 shadow-md rounded-2xl sm:rounded-3xl lg:rounded-4xl mx-2 sm:mx-4 lg:mx-5 relative mb-4 sm:mb-6 lg:mb-10 overflow-hidden">
      {/* Dynamic background overlay */}
      {currentColors && (
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1200 ease-out"
          style={getBackgroundOverlay()}
        />
      )}

      {/* Header content section */}
      <div className="flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-15 px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-600 ease-out pb-2 sm:pb-3 lg:pb-5 text-center ${
            currentColors ? "" : "text-[#888B90]"
          }`}
          style={getTextStyle()}
        >
          Every App. Every Task.
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-2">
          One Workspace.
        </div>
        <div className="text-[#747474] mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-md max-w-xs sm:max-w-md lg:max-w-lg text-center">
          Your tasks, reminders, and messages, flow together into a single,
          seamless workspace.
        </div>
      </div>

      {/* Middle section with Button - this will grow to fill available space */}
      <div className="flex items-center justify-center mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 lg:mb-8">
        <Button />
      </div>

      {/* Parent flex container for left, middle, and right sections */}
      <div className="flex flex-col lg:flex-row flex-1 w-full items-center justify-center px-2 sm:px-4 lg:px-0">
        {/* Mobile/Tablet: Stack vertically, Desktop: Side by side */}

        {/* Left section */}
        <div className="w-full lg:flex-1 flex items-center justify-center pb-6 lg:pb-12 lg:ml-4 xl:ml-10 order-1 lg:order-1 min-h-[200px] sm:min-h-[250px] lg:min-h-[400px]">
          <LeftSection />
        </div>

        {/* Middle section for TaskDesign - constrained to stay within hero div */}
        <div className="w-full lg:flex-1 flex items-center justify-center pb-6 lg:pb-12 order-3 lg:order-2 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
          <div className="relative">
            <TaskDesign />
          </div>
        </div>

        {/* Right section placeholder */}
        <div className="w-full lg:flex-1 flex items-center justify-center pb-6 lg:pb-12 lg:mr-4 xl:mr-10 order-2 lg:order-3 min-h-[200px] sm:min-h-[250px] lg:min-h-[400px]">
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
