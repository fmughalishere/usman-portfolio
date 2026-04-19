"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const logoUrl = "https://res.cloudinary.com/drscfltaf/image/upload/q_auto/f_auto/v1776314428/logo_tvftsz.png";

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      className="
        fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center 
        backdrop-blur-md transition-colors duration-300
        /* Light Mode (System White) */
        bg-white/80 border-b border-zinc-200 text-black
        /* Dark Mode (System Black) */
        dark:bg-black/50 dark:border-white/10 dark:text-white
      "
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
      
      <div className="flex gap-8 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
        <a href="#about" className="hover:text-blue-500 dark:hover:text-gray-400 transition">About</a>
        <a href="#work" className="hover:text-blue-500 dark:hover:text-gray-400 transition">Work</a>
        <a href="#contact" className="hover:text-blue-500 dark:hover:text-gray-400 transition">Contact</a>
      </div>
    </motion.nav>
  );
}