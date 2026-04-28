"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiAward, FiBookOpen, FiCode, FiCpu } from "react-icons/fi";

const certifications = [
  { id: 1, title: "Professional Certificate", issuer: "Tech Institute", date: "2023", image: "/assest/certificate 1.jpeg" },
  { id: 2, title: "Software Engineering", issuer: "Global Academy", date: "2023", image: "/assest/certificate 2.jpeg" },
  { id: 3, title: "Full Stack Mastery", issuer: "Dev University", date: "2023", image: "/assest/certificate 3.jpeg" },
  { id: 4, title: "Cloud Architecture", issuer: "Cloud Pros", date: "2023", image: "/assest/Certificate 4.jpeg" },
  { id: 5, title: "UI/UX Design", issuer: "Design Hub", date: "2023", image: "/assest/certificate 5.jpeg" },
  { id: 6, title: "Data Structures", issuer: "Code School", date: "2024", image: "/assest/certificate 6.jpeg" },
  { id: 7, title: "Advanced React", issuer: "Web Academy", date: "2024", image: "/assest/certificate 7.jpeg" },
  { id: 8, title: "Machine Learning", issuer: "AI Lab", date: "2024", image: "/assest/certificate 8.jpeg" },
  { id: 9, title: "System Design", issuer: "Arch Tech", date: "2024", image: "/assest/certificate 9.jpeg" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Cinematic Hero Section - Redesigned */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-zinc-900 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
              Hello, I&apos;m
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 tracking-tight">
              Ankit Kumar
            </h1>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-500 mb-8 lowercase sm:uppercase tracking-wide">
              Frontend-leaning Full Stack Developer
            </h3>
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-xl">
              Passionate about creating beautiful, functional web experiences. I bridge the gap 
              between design and engineering to build products that people love to use.
            </p>
          </motion.div>

          {/* Right Content - Visual Image Card (Reduced Size) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[300px] aspect-[4/5] bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-800 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/assest/ankit.jpeg" 
                alt="Ankit Kumar"
                fill
                priority
                className="object-cover object-[center_15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Biography */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              <p className="text-2xl sm:text-3xl text-white leading-relaxed font-bold tracking-tight">
                I am a <span className="text-blue-500">Software Engineer</span> based in India, 
                specializing in building exceptional digital experiences that are fast, 
                accessible, and visually stunning.
              </p>
            </div>

            <div className="space-y-8 text-lg sm:text-xl text-zinc-400 leading-relaxed font-medium">
              <p>
                My journey into the world of programming started when I first discovered the 
                <span className="text-zinc-200"> power of code</span> to transform ideas into reality. 
                What started as a curiosity quickly became a passion, leading me to dive deep into 
                modern web technologies and software architecture.
              </p>
              <p>
                Today, I focus on crafting <span className="text-zinc-200">scalable and performant full-stack applications</span>. 
                I believe that great software is not just about writing code, but about solving 
                complex problems and creating <span className="text-zinc-200">meaningful impact</span> for users.
              </p>
            </div>
          </div>

          {/* Quick Stats/Highlights */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-sm sticky top-32">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" /> Quick Highlights
              </h4>
              <ul className="space-y-4 text-zinc-400 text-sm font-medium">
                <li className="flex justify-between border-b border-zinc-800 pb-3">
                  <span>Location</span>
                  <span className="text-zinc-200">India</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-3">
                  <span>Experience</span>
                  <span className="text-zinc-200">3+ Years</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-3">
                  <span>Projects</span>
                  <span className="text-zinc-200">20+ Done</span>
                </li>
                <li className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-green-500">Freelance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rest of the content wrapped in same container */}
        <div className="mt-40">
          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-colors">
              <FiBookOpen className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Bachelor of Technology in Computer Science from OIST Bhopal.</p>
            </div>
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-purple-500/30 transition-colors">
              <FiAward className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Philosophy</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Simple designs, robust code, and continuous learning.</p>
            </div>
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-green-500/30 transition-colors">
              <FiCode className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Passionate about clean code and modern frameworks.</p>
            </div>
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-orange-500/30 transition-colors">
              <FiCpu className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Interests</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">AI/ML, Web3, and emerging technologies.</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="border-t border-zinc-900 pt-24 mb-32">
            <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Work Experience</h2>
            <div className="space-y-16">
              <div className="relative pl-12 border-l-2 border-zinc-900">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2" />
                <div className="mb-1 text-blue-500 font-bold uppercase tracking-widest text-xs">2022 - Present</div>
                <h4 className="text-white font-black text-2xl mb-4">Senior Software Engineer</h4>
                <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl">
                  Leading the development of complex web platforms, focusing on React and Node.js. 
                  Implementing scalable architectures and optimizing performance for high-traffic apps.
                </p>
              </div>
              <div className="relative pl-12 border-l-2 border-zinc-900">
                <div className="absolute w-4 h-4 bg-zinc-800 rounded-full -left-[9px] top-2" />
                <div className="mb-1 text-zinc-500 font-bold uppercase tracking-widest text-xs">2021 - 2022</div>
                <h4 className="text-white font-black text-2xl mb-4">Software Developer</h4>
                <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl">
                  Collaborated with cross-functional teams to build responsive frontend interfaces 
                  and maintain existing codebases while ensuring accessibility.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="border-t border-zinc-900 pt-24 mb-32">
            <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/20 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
                    <Image 
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-1 truncate">{cert.title}</h4>
                    <p className="text-blue-500 text-xs font-black mb-3 uppercase tracking-wider">{cert.issuer}</p>
                    <div className="flex items-center justify-between opacity-60">
                      <p className="text-[10px] italic text-zinc-400">{cert.date}</p>
                      <FiAward className="w-4 h-4 text-zinc-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-12 sm:p-16 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 border border-zinc-800 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full" />
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 relative z-10">Let&apos;s build something together</h3>
            <p className="text-zinc-500 mb-10 max-w-md mx-auto text-lg relative z-10">
              Currently open for freelance projects and full-time opportunities.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-tighter text-lg rounded-2xl hover:scale-105 transition-transform relative z-10 shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
