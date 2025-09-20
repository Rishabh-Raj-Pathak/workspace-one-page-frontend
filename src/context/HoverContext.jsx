import React, { createContext, useContext, useState } from "react";

const HoverContext = createContext();

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useHover must be used within a HoverProvider");
  }
  return context;
};

export const HoverProvider = ({ children }) => {
  const [hoveredApp, setHoveredApp] = useState(null);
  const [hoverSide, setHoverSide] = useState(null); // 'left' or 'right'

  // Define color gradients for each app
  const appColors = {
    slack: {
      textGradient: "linear-gradient(90deg, #9B59B6 0%, #E91E63 100%)",
      bgGradient:
        "linear-gradient(135deg, rgba(155, 89, 182, 0.3) 0%, rgba(233, 30, 99, 0.2) 100%)",
      colors: ["#9B59B6", "#E91E63"],
    },
    dropbox: {
      textGradient: "linear-gradient(90deg, #3498DB 0%, #00BCD4 100%)",
      bgGradient:
        "linear-gradient(135deg, rgba(52, 152, 219, 0.3) 0%, rgba(0, 188, 212, 0.2) 100%)",
      colors: ["#3498DB", "#00BCD4"],
    },
    teams: {
      textGradient: "linear-gradient(90deg, #6C5CE7 0%, #A29BFE 100%)",
      bgGradient:
        "linear-gradient(135deg, rgba(108, 92, 231, 0.3) 0%, rgba(162, 155, 254, 0.2) 100%)",
      colors: ["#6C5CE7", "#A29BFE"],
    },
    notion: {
      textGradient: "linear-gradient(90deg, #2C3E50 0%, #95A5A6 100%)",
      bgGradient:
        "linear-gradient(135deg, rgba(44, 62, 80, 0.3) 0%, rgba(149, 165, 166, 0.2) 100%)",
      colors: ["#2C3E50", "#95A5A6"],
    },
    gmail: {
      textGradient: "linear-gradient(90deg, #E74C3C 0%, #F39C12 100%)",
      bgGradient:
        "linear-gradient(135deg, rgba(231, 76, 60, 0.3) 0%, rgba(243, 156, 18, 0.2) 100%)",
      colors: ["#E74C3C", "#F39C12"],
    },
    calendar: {
      textGradient: "linear-gradient(90deg, #3498DB 0%, #74B9FF 100%)",
      bgGradient:
        "linear-gradient(135deg, rgba(52, 152, 219, 0.3) 0%, rgba(116, 185, 255, 0.2) 100%)",
      colors: ["#3498DB", "#74B9FF"],
    },
  };

  const setAppHover = (appName, side = null) => {
    setHoveredApp(appName);
    setHoverSide(side);
  };

  const clearHover = () => {
    setHoveredApp(null);
    setHoverSide(null);
  };

  const getCurrentColors = () => {
    if (!hoveredApp) return null;
    return appColors[hoveredApp];
  };

  return (
    <HoverContext.Provider
      value={{
        hoveredApp,
        hoverSide,
        setAppHover,
        clearHover,
        getCurrentColors,
        appColors,
      }}
    >
      {children}
    </HoverContext.Provider>
  );
};
