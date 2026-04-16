"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "./galleryData";

type Category = keyof typeof galleryData;

const categories: Category[] = [
  "Fashion",
  "Food / Menu",
  "Event",
  "Sports",
  "Real Estate",
  "Swimming",
];

export default function Photography() {
  const [activeTab, setActiveTab] = useState<Category>("Fashion");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = galleryData[activeTab];

  return (
    <section
      id="photography"
      className="py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto bg-[#050505] text-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12 gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter">
          Photography
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeTab === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "border-white/20 text-gray-400 hover:text-white hover:border-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 min-h-[400px]"
      >
        <AnimatePresence mode="popLayout">
          {images.map((src: string, i: number) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.01 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedImage(src)}
                className="relative group overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer"
              >
                <img
                  src={src}
                  alt={activeTab}
                  loading="lazy"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl z-[110]"
            >
              &times;
            </button>

            {/* CLICK OUTSIDE */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
            >
              <img
                src={selectedImage}
                alt="preview"
                className="w-full h-auto max-h-[90vh] object-contain rounded-md shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}