"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Bug Bounty", href: "#workflow" },
    { name: "Projects", href: "#projects" },
    { name: "Writeups", href: "#writeups" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Shield className="w-8 h-8 text-[var(--color-neon-green)] group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all" />
          <span className="font-mono font-bold text-xl tracking-tight">KS</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-neon-green)] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-mono font-semibold border border-[var(--color-neon-green)] text-[var(--color-neon-green)] rounded hover:bg-[var(--color-neon-green)] hover:text-black transition-all cyber-border"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-gray-800 py-4 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white uppercase tracking-wider text-sm w-full text-center py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
