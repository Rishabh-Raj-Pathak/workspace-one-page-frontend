import React from "react";

function Button() {
  return (
    <div>
      {/* CTA */}
      <a
        href="#"
        className="
          group relative inline-flex items-center justify-center
          px-8 py-4 rounded-full font-semibold text-white
          bg-gradient-to-r from-[#097CFA] via-[#1885FA] via-[#228AFB] via-[#4CA0FC] via-[#59A7FC] via-[#489EFB] via-[#288EFB] via-[#1885FA] to-[#097CFA]
          shadow-[0_12px_28px_rgba(14,110,253,0.35),0_4px_10px_rgba(0,0,0,0.08)]
          before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
          before:w-24 before:h-24 before:bg-gradient-radial before:from-white/5 before:to-transparent
          before:rounded-full before:pointer-events-none before:z-0 before:blur-sm before:opacity-10
          transition-transform duration-200
          hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(14,110,253,0.45),0_8px_16px_rgba(0,0,0,0.1)]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300
          focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7]
          before:content-[''] before:absolute before:inset-px before:rounded-full
          before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-70
          before:pointer-events-none
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
          after:-bottom-6 after:h-8 after:w-[72%] after:rounded-full
          after:bg-sky-400/55 after:blur-[22px] after:opacity-80 after:pointer-events-none
          border-4 border-[#54A0FE]
        "
      >
        <span className="relative z-10">Get Free Demo</span>
        <svg
          className="relative z-10 ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default Button;
