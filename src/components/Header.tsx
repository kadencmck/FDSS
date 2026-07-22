"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-charcoal text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
          <span>Boise, Idaho &mdash; Serving the Treasure Valley</span>
          <a href="tel:+14407325083" className="hover:text-gold font-bold tracking-wide">
            (440) 732-5083
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-navy border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0 bg-white rounded-lg px-3 py-1.5">
              <Image
                src="/logo.png"
                alt="FDSS LLC"
                width={280}
                height={80}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold tracking-widest text-white/80 hover:text-gold hover:bg-white/5 px-5 py-7 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+14407325083"
                className="ml-4 bg-rust hover:bg-rust-dark text-white text-sm font-bold tracking-wider px-6 py-3 transition-colors"
              >
                CALL NOW
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <nav className="md:hidden border-t border-white/10 pb-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm font-bold tracking-widest text-white/80 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+14407325083"
                className="block mt-2 bg-rust text-white text-sm font-bold tracking-wider px-5 py-3 text-center"
              >
                CALL (440) 732-5083
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
