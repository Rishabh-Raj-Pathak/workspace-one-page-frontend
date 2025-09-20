import React from "react";
import notionLogo from "../assets/notion.png";
import gmailLogo from "../assets/mail.png";
import calendarLogo from "../assets/calendar.png";
import { useHover } from "../context/HoverContext";

function RightSection() {
  const { setAppHover, clearHover } = useHover();

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center lg:items-end">
      {/* Container for Notion, Gmail, Calendar */}
      <div className="relative scale-75 sm:scale-85 md:scale-95 lg:scale-100">
        {/* Notion div */}
        <div
          className="relative mb-8 sm:mb-12 lg:mb-16 -translate-x-12 sm:-translate-x-18 lg:-translate-x-25 hover:scale-90 transition-all duration-900 ease-out"
          onMouseEnter={() => setAppHover("notion", "right")}
          onMouseLeave={clearHover}
        >
          <svg
            className="absolute top-14 sm:top-16 lg:top-20 right-14 sm:right-16 lg:right-20 w-36 sm:w-42 lg:w-50 h-18 sm:h-20 lg:h-24 -rotate-35 z-0"
            viewBox="0 0 240 100"
          >
            <defs>
              <linearGradient
                id="notionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#2C3E50" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#95A5A6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 C 60 0, 180 100, 240 50"
              stroke="url(#notionGradient)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <img
            src={notionLogo}
            alt="Notion"
            className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 shadow-2xl rounded-xl p-1.5 sm:p-2 -rotate-6 mr-6 sm:mr-8 lg:mr-10 z-10 translate-x-0.5 sm:translate-x-1 -translate-y-2 sm:-translate-y-2.5 lg:-translate-y-3"
          />
        </div>

        {/* Gmail div */}
        <div
          className="relative mb-12 sm:mb-18 lg:mb-24 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 hover:scale-90 transition-all duration-900 ease-out"
          onMouseEnter={() => setAppHover("gmail", "right")}
          onMouseLeave={clearHover}
        >
          <svg
            className="absolute top-7 sm:top-8 lg:top-10 right-18 sm:right-20 lg:right-24 w-40 sm:w-48 lg:w-56 h-18 sm:h-20 lg:h-24"
            viewBox="0 0 300 80"
          >
            <defs>
              <linearGradient
                id="gmailGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#E74C3C" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F39C12" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M 0 40 C 60 0, 160 80, 300 40"
              stroke="url(#gmailGradient)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <img
            src={gmailLogo}
            alt="Gmail"
            className="w-18 sm:w-20 lg:w-25 h-11 sm:h-12 lg:h-15 shadow-2xl rounded-xl p-1.5 sm:p-2 rotate-6 translate-y-7 sm:translate-y-8 lg:translate-y-10 translate-x-5 sm:translate-x-6 lg:translate-x-7"
          />
        </div>

        {/* Calendar div */}
        <div
          className="relative -translate-x-18 sm:-translate-x-24 lg:-translate-x-30 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10 hover:scale-90 transition-all duration-900 ease-out"
          onMouseEnter={() => setAppHover("calendar", "right")}
          onMouseLeave={clearHover}
        >
          <svg
            className="absolute top-3 sm:top-4 lg:top-5 right-14 sm:right-16 lg:right-20 w-28 sm:w-32 lg:w-40 h-14 sm:h-16 lg:h-20"
            viewBox="0 0 160 80"
          >
            <defs>
              <linearGradient
                id="calendarGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3498DB" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#74B9FF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 0 40 C 50 20, 100 60, 160 40"
              stroke="url(#calendarGradient)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <img
            src={calendarLogo}
            alt="Calendar"
            className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 shadow-2xl rounded-xl p-1.5 sm:p-2 -rotate-3 translate-y-3 sm:translate-y-4 lg:translate-y-5 translate-x-6 sm:translate-x-8 lg:translate-x-10"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
