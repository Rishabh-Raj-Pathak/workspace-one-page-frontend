import React from "react";
import dropboxLogo from "../assets/DropBox.png";
import slackLogo from "../assets/SlackLogo.png";
import teamsLogo from "../assets/teams.png";

function LeftSection() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-start">
      {/* Container for Dropbox, Slack, Teams */}
      <div className="relative">
        {/* Slack div */}
        <div className="mb-16 translate-x-45 -translate-y-0 relative">
          <img
            src={slackLogo}
            alt="Slack"
            className="w-20 h-20 shadow-lg rounded-xl p-2 rotate-6"
          />
          <svg
            className="absolute top-22 left-13 w-33 h-20 rotate-35"
            viewBox="0 0 120 60"
          >
            <path
              d="M 0 20 C 40 50, 80 10, 120 25"
              stroke="#60A5FA"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Dropbox div */}
        <div className="relative mb-24 -translate-x-4">
          <img
            src={dropboxLogo}
            alt="Dropbox"
            className="w-20 h-20 shadow-lg rounded-xl p-2 -rotate-10"
          />
          <svg
            className="absolute top-1 left-21 w-63 h-24"
            viewBox="0 0 300 80"
          >
            <path
              d="M 0 40 C 40 0, 70 120, 400 60"
              stroke="#60A5FA"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Teams div */}
        <div className="relative translate-x-40 -translate-y-10">
          <img
            src={teamsLogo}
            alt="Teams"
            className="w-20 h-20 shadow-lg rounded-xl shadow-lg rotate-10"
          />
          <svg
            className="absolute top-5 left-20 w-32 h-16"
            viewBox="0 0 120 60"
          >
            <path
              d="M 0 30 C 50 20, 70 40, 120 60"
              stroke="#60A5FA"
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
