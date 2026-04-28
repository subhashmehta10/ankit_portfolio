"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "E-Commerce Ultra",
    description: "A high-performance e-commerce platform with real-time inventory and AI-driven recommendations.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    github: "#",
    demo: "#",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    title: "AI SaaS Dashboard",
    description: "An analytics dashboard for AI models, featuring complex data visualizations and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Crypto Wallet v2",
    description: "A secure, decentralized cryptocurrency wallet supporting multiple chains and real-time swap functionality.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb6200404a?auto=format&fit=crop&q=80&w=1000",
    tags: ["Ether.js", "Solidity", "Tailwind", "Vite"],
    github: "#",
    demo: "#",
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description: "Premium property listing site with 3D virtual tours and integrated mortgage calculators.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Firebase", "Framer Motion", "Maps API"],
    github: "#",
    demo: "#",
    color: "from-orange-600 to-red-600"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            SELECTED <span className="text-blue-500">WORKS.</span>
          </motion.h1>
          <div className="flex flex-col items-center gap-10">
            <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
              I specialize in building production-ready applications with a focus on 
              performance and user experience. Here are some of my favorite projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-full text-sm font-black border border-white hover:bg-zinc-200 transition-all uppercase tracking-widest">
                All Systems
              </button>
              <button className="px-8 py-3 bg-transparent text-zinc-500 rounded-full text-sm font-black border border-zinc-800 hover:border-zinc-600 transition-all uppercase tracking-widest">
                Web Apps
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-zinc-950">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Project Image */}
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Content (Hidden by default, showing on Mobile or Subtle on Hover) */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="flex gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 font-medium line-clamp-2 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 flex gap-4">
                    <Link 
                      href={project.demo}
                      className="p-3 bg-white text-black rounded-xl hover:scale-110 transition-transform shadow-xl"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </Link>
                    <Link 
                      href={project.github}
                      className="p-3 bg-zinc-900 text-white rounded-xl hover:scale-110 transition-transform border border-zinc-800"
                    >
                      <FiGithub className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 text-center p-20 bg-zinc-900/10 border border-zinc-900 rounded-[3rem]">
          <h2 className="text-4xl font-black text-white mb-6">Have a unique idea?</h2>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            I&apos;m always looking for interesting projects to work on. 
            Let&apos;s build something that stands out.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all hover:scale-105"
          >
            Start a Conversation <FiArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
