"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagra..com/_thatboy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/usman-ghanni",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-[#050505] pt-32 pb-10 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1F9A71] text-xs uppercase tracking-[0.5em] font-bold mb-6"
          >
            Ready to collaborate?
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12"
          >
            Let's tell <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">
              your story.
            </span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <a
              href="mailto:Usmanghanni003@gmail.com"
              className="group relative px-10 py-5 bg-[#1F9A71] text-black font-black uppercase tracking-[0.2em] text-sm italic rounded-full overflow-hidden hover:pr-14 transition-all duration-500"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/10 py-16 mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-6 border border-white/5">
              <Mail className="text-[#1F9A71]" size={18} />
            </div>
            <h5 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
              Email Me
            </h5>
            <a
              href="mailto:Usmanghanni003@gmail.com"
              className="text-xl font-bold hover:text-[#1F9A71] transition break-all"
            >
              Usmanghanni003@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-6 border border-white/5">
              <Phone className="text-[#1F9A71]" size={18} />
            </div>
            <h5 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
              Call Me
            </h5>
            <a
              href="tel:+971553755069"
              className="text-xl font-bold hover:text-[#1F9A71] transition"
            >
              +971 55 375 5069
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-6 border border-white/5">
              <MapPin className="text-[#1F9A71]" size={18} />
            </div>
            <h5 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
              Location
            </h5>
            <p className="text-xl font-bold">Dubai, UAE</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-[#1F9A71] transition-all"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-bold">
            © 2026 Usman Ghanni — All Rights Reserved
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[25rem] font-black leading-none translate-y-24 translate-x-24">
          USMAN
        </h1>
      </div>
    </footer>
  );
}
