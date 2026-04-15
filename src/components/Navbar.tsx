"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  // Aap ki Logo File ID yahan hai:
  const logoID = "11XqpFHmhH2vADBS_-Yqmo9uiUUoPiwg6";
  const logoUrl = `https://lh3.googleusercontent.com/d/${logoID}`;

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-3">
        <img 
          src={logoUrl} 
          alt="Logo" 
          className="h-10 w-auto object-contain" 
          // Ye line block honay se bachati hai
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Agar pehla link fail ho to backup link
            e.currentTarget.src = `https://docs.google.com/uc?export=view&id=${logoID}`;
          }}
        />
        <span className="text-xl font-bold tracking-tighter uppercase hidden sm:block">
          M. Usman Ghanni
        </span>
      </div>
      
      <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
        <a href="#about" className="hover:text-gray-400 transition">About</a>
        <a href="#work" className="hover:text-gray-400 transition">Work</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>
    </motion.nav>
  );
}