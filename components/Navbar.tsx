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
      className={`fixed top-0 z-50 w-full border-b border-white/25 bg-white/80 py-2 backdrop-blur-lg transition-all ${
        shadow ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
          <img
            src="/images/IIITkotaicon.png"
            alt="IIIT Kota Icon"
            className="h-24 w-56 object-contain"
          />
        </div>
        <div className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-slate-600">
          <div className="hidden items-center gap-2 md:flex">
            <img
              src="/images/GDGicon.png"
              alt="GDG Icon"
              className="h-20 w-44 object-contain"
            />
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
