import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:px-14">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-6 h-8 sm:w-7 sm:h-10" />
        <span className="text-xl sm:text-2xl font-bold ml-2 tracking-tightest">
          Oneflow
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-7 text-neutral-600 text-sm xl:text-base">
        <span className="hover:text-neutral-800 cursor-pointer transition-colors">
          Solutions
        </span>
        <span className="hover:text-neutral-800 cursor-pointer transition-colors">
          Features
        </span>
        <span className="hover:text-neutral-800 cursor-pointer transition-colors">
          Services
        </span>
        <span className="hover:text-neutral-800 cursor-pointer transition-colors">
          Pricing
        </span>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4 font-semibold text-sm lg:text-base">
        <span className="hover:text-neutral-700 cursor-pointer transition-colors">
          Log in
        </span>
        <span className="border border-black px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-sm border-neutral-500 hover:bg-neutral-50 cursor-pointer transition-colors text-sm lg:text-base">
          Get Demo
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-neutral-200 md:hidden z-50">
          <div className="flex flex-col p-4 space-y-4">
            <span className="text-neutral-600 py-2 border-b border-neutral-100 cursor-pointer hover:text-neutral-800 transition-colors">
              Solutions
            </span>
            <span className="text-neutral-600 py-2 border-b border-neutral-100 cursor-pointer hover:text-neutral-800 transition-colors">
              Features
            </span>
            <span className="text-neutral-600 py-2 border-b border-neutral-100 cursor-pointer hover:text-neutral-800 transition-colors">
              Services
            </span>
            <span className="text-neutral-600 py-2 border-b border-neutral-100 cursor-pointer hover:text-neutral-800 transition-colors">
              Pricing
            </span>
            <div className="flex flex-col space-y-3 pt-4">
              <span className="font-semibold py-2 cursor-pointer hover:text-neutral-700 transition-colors">
                Log in
              </span>
              <span className="border border-black px-4 py-2 rounded-xl shadow-sm border-neutral-500 text-center font-semibold hover:bg-neutral-50 cursor-pointer transition-colors">
                Get Demo
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
