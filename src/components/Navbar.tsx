"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const logoUrl = "https://res.cloudinary.com/drscfltaf/image/upload/q_auto/f_auto/v1776314428/logo_tvftsz.png";

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-3">
        <img 
          src={logoUrl} 
          alt="M. Usman Ghanni Logo" 
          className="h-10 w-auto object-contain" 
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