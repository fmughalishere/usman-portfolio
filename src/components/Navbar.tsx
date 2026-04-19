"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logoUrl =
    "https://res.cloudinary.com/drscfltaf/image/upload/q_auto/f_auto/v1776314428/logo_tvftsz.png";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="
        fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4
        flex justify-between items-center
        backdrop-blur-md transition-colors duration-300
        bg-white/80 border-b border-zinc-200 text-black
        dark:bg-black/50 dark:border-white/10 dark:text-white
      "
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={logoUrl}
          alt="Logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
        <span className="text-sm sm:text-xl font-bold tracking-tight uppercase hidden sm:block">
          M. Usman Ghanni
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold">
        <a href="#about" className="hover:text-[#1F9A71] transition">
          About
        </a>
        <a href="#work" className="hover:text-[#1F9A71] transition">
          Work
        </a>
        <a href="#contact" className="hover:text-[#1F9A71] transition">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute top-full left-0 w-full
            bg-white dark:bg-black
            border-t border-zinc-200 dark:border-white/10
            flex flex-col items-center gap-6 py-6
            text-sm uppercase tracking-widest font-bold
          "
        >
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}