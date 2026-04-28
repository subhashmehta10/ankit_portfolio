"use client";

import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
            Get In <span className="text-white">Touch</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed opacity-80">
            Have a project in mind or want to discuss a potential collaboration? I&apos;m 
            currently available for freelance work and new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-stretch">
          {/* Contact Info Cards */}
          <div className="grid grid-rows-3 gap-6">
            <div className="bg-[#11141b] border border-zinc-800/30 p-8 rounded-2xl flex flex-col items-start hover:border-purple-500/30 transition-all duration-300">
              <div className="w-10 h-10 bg-purple-500/5 rounded-lg flex items-center justify-center mb-6 border border-purple-500/10 text-purple-500">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Email Me</h4>
                <p className="text-zinc-500 text-sm font-medium">ankitmahi2020@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#11141b] border border-zinc-800/30 p-8 rounded-2xl flex flex-col items-start hover:border-purple-500/30 transition-all duration-300">
              <div className="w-10 h-10 bg-purple-500/5 rounded-lg flex items-center justify-center mb-6 border border-purple-500/10 text-purple-500">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Call Me</h4>
                <p className="text-zinc-500 text-sm font-medium">+91 8969537691</p>
              </div>
            </div>

            <div className="bg-[#11141b] border border-zinc-800/30 p-8 rounded-2xl flex flex-col items-start hover:border-purple-500/30 transition-all duration-300">
              <div className="w-10 h-10 bg-purple-500/5 rounded-lg flex items-center justify-center mb-6 border border-purple-500/10 text-purple-500">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Location</h4>
                <p className="text-zinc-500 text-sm font-medium">Ratnagiri, Bhopal, MP, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#11141b] border border-zinc-800/30 p-8 sm:p-12 rounded-[2.5rem]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Your Name"
                  className="w-full bg-[#0a0c10] border border-zinc-800/50 rounded-xl px-5 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter Your Email"
                  className="w-full bg-[#0a0c10] border border-zinc-800/50 rounded-xl px-5 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project details..."
                  className="w-full bg-[#0a0c10] border border-zinc-800/50 rounded-xl px-5 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#7c56ff] hover:bg-[#6b44ff] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-950/20"
              >
                <span className="text-lg">Send Message</span>
                <FiSend className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
