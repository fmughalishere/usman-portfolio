"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import ArtistGallery from "../components/ArtistGallery";
import Cinematography from "../components/Cinematography";
import Photography from "../components/Photography";
import Contact from "../components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Intro key="intro-screen" setFinish={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <Navbar />
          
          <div className="pt-20 space-y-20 md:space-y-32">
            <About />
            <ArtistGallery />
            <Cinematography />
            <Photography />
            <Contact />
          </div>
        </motion.div>
      )}
    </main>
  );
}