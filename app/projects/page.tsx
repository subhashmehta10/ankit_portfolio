"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Smart Waste Segregation",
    description: "An automated waste management system using IoT sensors and ML models to categorize and recycle waste efficiently.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
    tags: ["IoT", "Machine Learning", "Python", "React"],
    github: "#",
    demo: "#",
    color: "from-green-600 to-emerald-600"
  },
  {
    id: 2,
    title: "Tourist Safety System",
    description: "A comprehensive safety monitoring platform providing real-time incident response and location tracking for travelers.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000",
    tags: ["React Native", "Node.js", "MongoDB", "Auth0"],
    github: "#",
    demo: "#",
    color: "from-orange-600 to-amber-600"
  },
  {
    id: 3,
    title: "Offline Social Media",
    description: "A unique social platform with map integration and offline payment capabilities, designed for connectivity in remote areas.",
    image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1000",
    tags: ["PWA", "Mapbox", "IndexedDB", "WebPay"],
    github: "#",
    demo: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: "GPS Vehicle Tracker",
    description: "An advanced tracking solution for vehicles using GPS hardware chips and a real-time monitoring mobile application.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
    tags: ["GPS", "IoT", "React Native", "Firebase"],
    github: "#",
    demo: "#",
    color: "from-zinc-700 to-black"
  },
  {
    id: 5,
    title: "Crop Detection ML",
    description: "A machine learning based system to detect crop health and conditions in real-time using computer vision.",
    image: "https://images.unsplash.com/photo-1560617544-b4f287e85abc?auto=format&fit=crop&q=80&w=1000",
    tags: ["Machine Learning", "Python", "OpenCV", "Flask"],
    github: "#",
    demo: "#",
    color: "from-yellow-600 to-green-600"
  }
];

const participations = [
  {
    id: 1,
    event: "Smart India Hackathon",
    role: "Full Stack Lead",
    date: "2023",
    description: "Developed a secure portal for real-time tracking of medicinal supplies using Blockchain and React.",
    highlight: "Grand Finalist"
  },
  {
    id: 2,
    event: "Google Solution Challenge",
    role: "Backend Contributor",
    date: "2022",
    description: "Built scalable APIs for an environmental monitoring system focused on water purity levels.",
    highlight: "Top 50 Regional"
  },
  {
    id: 3,
    event: "College Tech Fest (OIST)",
    role: "Event Organizer",
    date: "2023",
    description: "Led the development branch for the college's annual tech symposium website and registration portal.",
    highlight: "Lead Organizer"
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
                  unoptimized={true}
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

        {/* Participations Section */}
        <div className="mt-40">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl font-black text-white tracking-tighter">PARTICIPATIONS.</h2>
            <div className="h-[2px] flex-1 bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {participations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-zinc-900/20 border border-zinc-900 rounded-[2rem] hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-900 rounded-xl text-blue-500">
                    <FiArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                  <span className="text-zinc-600 font-bold text-xs uppercase tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.event}
                </h3>
                <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-4">
                  {item.role}
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                  {item.highlight}
                </div>
              </motion.div>
            ))}
          </div>
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
