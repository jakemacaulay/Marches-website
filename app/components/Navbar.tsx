"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 rounded-full border border-white/20 bg-white/70 px-6 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
          <Image
            src="/logo.png"
            alt="Marchy's Custom Decks Inc. logo"
            width={60}
            height={60}
            className="h-10 w-auto"
          />

          <div className="hidden sm:block">
            <p className="text-base font-bold tracking-tight text-[#041033]">
              Marchy&apos;s Custom Decks
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d10f1a]">
              Locally Owned & Operated
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {[
            { name: "Services", href: "/#services" },
            { name: "Projects", href: "/projects" },
            { name: "Reviews", href: "/reviews" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-semibold text-slate-600 transition-colors hover:text-[#041033]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#d10f1a] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#d10f1a] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#a00c14] hover:shadow-lg active:scale-95 md:block"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-4 w-5 overflow-hidden">
              <span className={`absolute left-0 block h-0.5 w-5 bg-[#041033] transition-all duration-300 ${menuOpen ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-[#041033] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-[#041033] transition-all duration-300 ${menuOpen ? "top-2 -rotate-45" : "top-3"}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full mt-4 w-full origin-top animate-fade-in rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {[
              { name: "Services", href: "/#services" },
              { name: "Projects", href: "/projects" },
              { name: "Reviews", href: "/reviews" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold text-slate-700 transition-colors hover:text-[#d10f1a]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-2xl bg-[#d10f1a] py-3 text-center font-bold text-white"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}