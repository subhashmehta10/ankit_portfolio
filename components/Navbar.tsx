"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="flex-1">
          <Link 
            href="/" 
            className="text-2xl font-black tracking-tighter text-black dark:text-white"
          >
            ANKIT<span className="text-blue-600">.</span>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-black uppercase tracking-widest transition-all hover:text-blue-600 ${
                pathname === link.href 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button (Right) */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white bg-black dark:bg-white dark:text-black rounded-full hover:scale-105 transition-all shadow-lg"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-none origin-top transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pb-6 border-b border-zinc-200 dark:border-zinc-800 shadow-lg"
            : "opacity-0 scale-y-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${
                pathname === link.href 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 mt-2 text-base font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
