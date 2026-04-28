import Link from 'next/link';
import Image from 'next/image';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-black">
      {/* Three.js Background Animation */}
      <ThreeBackground />
      
      {/* Background gradients for added depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white mb-6 leading-[1.1]">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Ankit.</span>
            <br className="hidden sm:block" />
            Full Stack Developer.
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed font-medium">
            I&apos;m a passionate full-stack developer dedicated to crafting beautiful, functional, and user-centric web applications that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-black text-lg text-center hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 bg-white text-black dark:bg-black dark:text-white border-2 border-zinc-200 dark:border-zinc-800 rounded-full font-bold text-lg text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Visual Content / Image Placeholder */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Decorative abstract shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900 rounded-[3rem] sm:rounded-[4rem] transform rotate-6 scale-105 opacity-80 border border-white/20 dark:border-white/5 backdrop-blur-sm transition-transform duration-700 hover:rotate-12" />
            
            {/* Main image container */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/80 rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-white/50 dark:border-zinc-700 shadow-2xl flex items-center justify-center group transform transition-transform duration-500 hover:-translate-y-2">
              <Image 
                src="/assest/ankit.jpeg" 
                alt="Ankit Profile"
                fill
                className="object-cover object-[center_15%] group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-inner">
                3+
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">Years</p>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
