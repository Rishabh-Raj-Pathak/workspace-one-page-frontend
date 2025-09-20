import React from "react";
import dropboxLogo from "../assets/DropBox.png";
import slackLogo from "../assets/SlackLogo.png";
import teamsLogo from "../assets/teams.png";
import { useHover } from "../context/HoverContext";

function LeftSection() {
  const { setAppHover, clearHover } = useHover();

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-start">
      {/* Container for Dropbox, Slack, Teams */}
      <div className="relative">
        {/* Slack div */}
        <div
          className="mb-16 translate-x-45 -translate-y-0 relative hover:scale-90 transition-all duration-900 ease-out"
          onMouseEnter={() => setAppHover("slack", "left")}
          onMouseLeave={clearHover}
        >
          <img
            src={slackLogo}
            alt="Slack"
            className="w-20 h-20 shadow-2xl rounded-xl p-2 rotate-6"
          />
          <svg
            className="absolute top-22 left-14 w-40 h-20 rotate-35 translate-y-3 -translate-x-5"
            viewBox="0 0 120 60"
          >
            <defs>
              <linearGradient
                id="slackGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#9B59B6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E91E63" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M 0 20 C 40 50, 80 10, 120 25"
              stroke="url(#slackGradient)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Dropbox div */}
        <div
          className="relative mb-24 translate-x-15 translate-y-5 hover:scale-90 transition-all duration-900 ease-out"
          onMouseEnter={() => setAppHover("dropbox", "left")}
          onMouseLeave={clearHover}
        >
          <img
            src={dropboxLogo}
            alt="Dropbox"
            className="w-20 h-20 shadow-2xl rounded-xl p-2 -rotate-10"
          />
          <svg
            className="absolute top-1 left-21 w-50 h-24"
            viewBox="0 0 300 80"
          >
            <defs>
              <linearGradient
                id="dropboxGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3498DB" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 0 40 C 40 0, 70 120, 400 60"
              stroke="url(#dropboxGradient)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Teams div */}
        <div
          className="relative translate-x-40 -translate-y-10 hover:scale-90 transition-all duration-900 ease-out"
          onMouseEnter={() => setAppHover("teams", "left")}
          onMouseLeave={clearHover}
        >
          <img
            src={teamsLogo}
            alt="Teams"
            className="w-20 h-20 shadow-2xl rounded-xl shadow-lg rotate-10"
          />
          <svg
            className="absolute top-5 left-20 w-32 h-16"
            viewBox="0 0 120 60"
          >
            <defs>
              <linearGradient
                id="teamsGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A29BFE" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M 0 30 C 50 20, 70 40, 120 60"
              stroke="url(#teamsGradient)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
