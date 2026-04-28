"use client";

import { motion } from "framer-motion";
import { FiLayout, FiServer, FiDatabase, FiCloud } from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FiLayout className="w-6 h-6 text-blue-500" />,
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand", "HTML5 & CSS3"],
    color: "blue"
  },
  {
    title: "Backend Development",
    icon: <FiServer className="w-6 h-6 text-purple-500" />,
    skills: ["Node.js / Express", "Python / Django", "GraphQL / REST", "Microservices", "Auth (JWT / OAuth)", "Bun.js"],
    color: "purple"
  },
  {
    title: "Database Management",
    icon: <FiDatabase className="w-6 h-6 text-emerald-500" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma ORM", "Vector Databases"],
    color: "emerald"
  },
  {
    title: "DevOps & Cloud",
    icon: <FiCloud className="w-6 h-6 text-orange-500" />,
    skills: ["AWS / Vercel", "Docker", "CI/CD Pipelines", "Git / GitHub", "Nginx", "Linux Server"],
    color: "orange"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            TECHNICAL <span className="text-blue-500">EXPERTISE.</span>
          </motion.h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            A comprehensive list of the technologies and frameworks I use to bring complex digital ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] hover:border-zinc-700 transition-all group"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-zinc-950 rounded-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-white font-black text-sm uppercase tracking-widest">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}-500/50`} />
                    <span className="text-zinc-400 font-bold text-sm tracking-tight group-hover:text-zinc-200 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
