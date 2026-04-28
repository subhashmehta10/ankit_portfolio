"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white mb-6 block">
              ANKIT<span className="text-blue-500">.</span>
            </Link>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-6">
              Building high-quality digital experiences with modern technologies.
              Dedicated to crafting performant and user-centric web applications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-zinc-900/50 text-zinc-400 hover:text-white rounded-xl transition-all hover:scale-110">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-583bb0325" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900/50 text-zinc-400 hover:text-white rounded-xl transition-all hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-zinc-900/50 text-zinc-400 hover:text-white rounded-xl transition-all hover:scale-110">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/raj12_155" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900/50 text-zinc-400 hover:text-white rounded-xl transition-all hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-zinc-500 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-500 hover:text-white transition-colors">About Me</Link>
              </li>
              <li>
                <Link href="#tech" className="text-zinc-500 hover:text-white transition-colors">Tech Stack</Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-500 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services/Focus */}
          <div>
            <h4 className="text-white font-bold mb-6">Focus</h4>
            <ul className="space-y-4">
              <li className="text-zinc-500">Web Development</li>
              <li className="text-zinc-500">UI/UX Design</li>
              <li className="text-zinc-500">App Development</li>
              <li className="text-zinc-500">Performance Optimization</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm italic">
            © {currentYear} Ankit. All rights reserved.
          </p>
          <Link
            href="/admin"
            className="text-zinc-700 hover:text-blue-500 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
