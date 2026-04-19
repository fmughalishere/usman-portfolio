"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "./galleryData";

export default function Cinematography() {
  const videoLinks = galleryData.motionVideos;
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="work" className="py-16 md:py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase mb-8 md:mb-12 border-l-4 border-white pl-4 tracking-tighter">
          Motion Portfolio
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {videoLinks.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(src)}
              className="
                relative 
                w-full 
                /* Mobile height choti kar di hai (h-[200px]) */
                h-[200px] sm:h-[280px] md:h-[260px] lg:h-[300px]
                bg-zinc-900 
                overflow-hidden 
                group 
                border border-white/5 
                rounded-md 
                shadow-xl 
                cursor-pointer
              "
            >
              <video
                src={src}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-white/80 font-bold">
                  Cinematography // {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-1 h-[1px] w-full sm:w-0 sm:group-hover:w-full bg-white/40 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white text-4xl font-light hover:rotate-90 transition duration-300 z-[110]"
            >
              &times;
            </button>

            <div
              className="absolute inset-0"
              onClick={() => setSelectedVideo(null)}
            ></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-auto aspect-video bg-black shadow-2xl overflow-hidden rounded-md"
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}