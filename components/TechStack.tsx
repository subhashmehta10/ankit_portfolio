"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiMongodb, 
  SiReact, SiDocker, SiGraphql, SiVuedotjs, SiAngular, SiDjango
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const stackRow1 = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "React", icon: <SiReact />, color: "text-sky-400" },
];

const stackRow2 = [
  { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
  { name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-400" },
  { name: "Angular", icon: <SiAngular />, color: "text-red-500" },
  { name: "Django", icon: <SiDjango />, color: "text-green-800" },
];

const TechRow = ({ items, direction = 1 }: { items: typeof stackRow1, direction?: number }) => {
  return (
    <div className="flex overflow-hidden select-none gap-4 py-2 relative px-10 sm:px-20 lg:px-40">
      {/* Left and Right Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-80 z-10 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-80 z-10 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none" />
      
      <motion.div
        animate={{
          x: direction > 0 ? [-1000, 0] : [0, -1000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-none gap-4 min-w-full"
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900/40 border border-zinc-800 rounded-full backdrop-blur-sm hover:border-zinc-700 transition-colors group cursor-default"
          >
            <span className={`text-xl ${item.color} group-hover:scale-110 transition-transform`}>
              {item.icon}
            </span>
            <span className="text-zinc-300 font-bold text-xs tracking-tight whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TechStack() {
  return (
    <section className="py-12 bg-black overflow-hidden relative">
      {/* Decorative center gradients to match the image's feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
          Capabilities
        </h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Technologies We <span className="text-blue-500">Master</span>
        </h3>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <TechRow items={stackRow1} direction={-1} />
        <TechRow items={stackRow2} direction={1} />
      </div>
    </section>
  );
}
