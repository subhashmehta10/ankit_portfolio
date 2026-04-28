"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaShareAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function SocialSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { name: "GitHub", href: "https://github.com", icon: <FaGithub size={20} />, color: "hover:text-zinc-900 dark:hover:text-white" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ankit-kumar-583bb0325", icon: <FaLinkedinIn size={20} />, color: "hover:text-blue-600" },
    { name: "Twitter", href: "https://twitter.com", icon: <FaTwitter size={20} />, color: "hover:text-sky-500" },
    { name: "Instagram", href: "https://www.instagram.com/raj12_155", icon: <FaInstagram size={20} />, color: "hover:text-pink-600" },
  ];

  return (
    <>
      {/* Desktop Sidebar (Always Visible on LG) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 items-center">
        <div className="w-[1px] h-20 bg-gradient-to-t from-zinc-300 dark:from-zinc-700 to-transparent" />
        <div className="flex flex-col gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-400 dark:text-zinc-500 transition-all duration-300 hover:translate-x-1 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-300 dark:from-zinc-700 to-transparent" />
      </div>

      {/* Mobile Toggle Button (Visible only on small screens) */}
      <div className="fixed right-6 bottom-8 z-50 lg:hidden text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all outline-none"
          aria-label="Toggle Socials"
        >
          {isOpen ? <IoClose size={24} /> : <FaShareAlt size={20} />}
        </button>

        {/* Floating Icons (Mobile) */}
        <div 
          className={`absolute bottom-16 right-0 flex flex-col gap-4 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible"
          }`}
        >
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`w-10 h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center shadow-md text-zinc-600 dark:text-zinc-400 ${social.color}`}
              onClick={() => setIsOpen(false)}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
