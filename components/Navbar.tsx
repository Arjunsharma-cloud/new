"use client";

import { useEffect, useState } from "react";

const sections = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-white/20 bg-white/70 py-3 backdrop-blur-lg transition-all ${
        shadow ? "shadow-xl" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-700">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1">
            IIIT LOGO HERE
          </div>
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap text-sm font-medium text-slate-600">
          <div className="hidden items-center gap-2 md:flex">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1">
              <img src="D:\CODE\new\images\GDG.png" alt="GDG Logo" />
            </div>
          </div>
          <nav className="flex items-center gap-4">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
