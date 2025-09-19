import React from "react";
import notionLogo from "../assets/notion.png";
import gmailLogo from "../assets/mail.png";
import calendarLogo from "../assets/calendar.png";

function RightSection() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-end">
      {/* Container for Notion, Gmail, Calendar */}
      <div className="relative">
        {/* Notion div */}
        <div className="relative mb-16 -translate-x-20 ">
          <svg
            className="absolute top-20 right-20 w-50 h-24 -rotate-35 z-0"
            viewBox="0 0 240 100"
          >
            <path
              d="M 0 50 C 60 0, 180 100, 240 50"
              stroke="#60A5FA"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <img
            src={notionLogo}
            alt="Notion"
            className="w-20 h-20 shadow-lg rounded-xl p-2 -rotate-6 mr-10 z-10 translate-x-1 translate-y-[-12px]"
          />
        </div>

        {/* Gmail div */}
        <div className="relative mb-24 -translate-x-16">
          <svg
            className="absolute top-10 right-24 w-56 h-24"
            viewBox="0 0 300 80"
          >
            <path
              d="M 0 40 C 60 0, 160 80, 300 40"
              stroke="#60A5FA"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <img
            src={gmailLogo}
            alt="Gmail"
            className="w-25 h-15 shadow-lg rounded-xl p-2 rotate-6 translate-y-10 translate-x-7"
          />
        </div>

        {/* Calendar div */}
        <div className="relative -translate-x-30 -translate-y-10">
          <svg
            className="absolute top-5 right-20 w-40 h-20"
            viewBox="0 0 160 80"
          >
            <path
              d="M 0 40 C 50 20, 100 60, 160 40"
              stroke="#60A5FA"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <img
            src={calendarLogo}
            alt="Calendar"
            className="w-20 h-20 shadow-lg rounded-xl p-2 -rotate-3 translate-y-5 translate-x-10"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
