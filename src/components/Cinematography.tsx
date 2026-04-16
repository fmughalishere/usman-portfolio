"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "./galleryData";

export default function Cinematography() {
  const videoLinks = galleryData.motionVideos;
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  return (
    <section id="work" className="py-20 md:py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase mb-10 md:mb-12 border-l-4 border-white pl-4 tracking-tighter">
          Motion Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videoLinks.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(src)}
              className="
                relative 
                w-full 
                h-[320px] sm:h-[380px] md:h-[260px] lg:h-[300px]
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
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 bg-gradient-to-t from-black/90 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold">
                  Cinematography // {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-2 h-[1px] w-full sm:w-0 sm:group-hover:w-full bg-white/50 transition-all duration-700"></div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl font-light hover:rotate-90 transition duration-300 z-[110]"
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
              className="relative w-full max-w-5xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-black shadow-2xl overflow-hidden rounded-md"
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