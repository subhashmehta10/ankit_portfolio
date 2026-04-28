import Link from "next/link";

export default function About() {

  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image/Visual Part */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              {/* This is a placeholder for your actual image */}
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                 <svg className="w-24 h-24 text-zinc-300 dark:text-zinc-600 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Text Content Part */}
          <div className="flex-1">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">
              About Me
            </h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-8 tracking-tight">
              Crafting digital excellence with <span className="text-zinc-400">passion.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              <p>
                Hello! I&apos;m a full-stack developer based in India. I enjoy creating things that live on the internet, 
                whether that be websites, applications, or anything in between. My goal is to always build products 
                that provide pixel-perfect, performant user experiences.
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working on a wide range of projects, from 
                simple landing pages to complex web applications. My main focus these days is building 
                accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold hover:scale-105 transition-all shadow-lg text-center min-w-[160px]"
              >
                Download Resume
              </a>
              <Link
                href="/about"
                className="px-8 py-3 bg-transparent border-2 border-zinc-200 dark:border-zinc-800 text-black dark:text-white rounded-lg font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-center min-w-[160px]"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
