"use client";

import { profile } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070a] py-6 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-300 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-white font-extrabold text-[10px]">
            U
          </div>
          <span className="font-bold text-white">
            Umair <span className="text-emerald-400">Asrar</span>
          </span>
          <span className="text-slate-400">• Laravel Developer</span>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap items-center justify-center gap-5 font-medium">
          <li>
            <a href="#about" className="transition hover:text-emerald-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="transition hover:text-emerald-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="transition hover:text-emerald-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="transition hover:text-emerald-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="transition hover:text-emerald-400">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-emerald-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Right side: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-slate-400">© 2026 {profile.name}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 font-medium text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
          >
            <span>Back to top</span>
            <svg className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
