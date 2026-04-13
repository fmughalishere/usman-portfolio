"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/usman-ghanni", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    { 
      name: "Behance", 
      href: "#", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 12h7"/><path d="M13 8h7"/><path d="M8 7a3 3 0 0 1 3 3a2 2 0 0 1-2 2a2 2 0 0 1 2 2a3 3 0 0 1-3 3h-5v-10h5z"/><path d="M6 12h2"/></svg>
      )
    },
  ];

  return (
    <footer id="contact" className="relative bg-[#050505] pt-32 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6"
          >
            Available for worldwide projects
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none"
          >
            Let's build your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Vision.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/10 py-16 mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Mail className="text-gray-600 mb-4" />
            <h5 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Email Me</h5>
            <a href="mailto:Usmanghanni003@gmail.com" className="text-xl font-medium hover:text-gray-400 transition break-all">
              Usmanghanni003@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Phone className="text-gray-600 mb-4" />
            <h5 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Call Me</h5>
            <a href="tel:+971553755069" className="text-xl font-medium hover:text-gray-400 transition">
              +971 55 375 5069
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <MapPin className="text-gray-600 mb-4" />
            <h5 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Location</h5>
            <p className="text-xl font-medium">Dubai, United Arab Emirates</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="group flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition"
              >
                <span className="group-hover:rotate-12 transition-transform duration-300">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-medium">
            © 2024 M. Usman Ghanni — All Rights Reserved
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20rem] font-black leading-none translate-y-20 translate-x-20">UG</h1>
      </div>
    </footer>
  );
}