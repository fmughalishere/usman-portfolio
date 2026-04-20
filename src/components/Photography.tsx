"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "./galleryData";
import { FaPlus } from "react-icons/fa";

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
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const allImages = galleryData[activeTab] || [];
  const displayedImages = allImages.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activeTab]);

  const handleLoadMore = () => {
    // Is line ko update kiya gaya hai taake click pe saari images load hon
    setVisibleCount(allImages.length);
  };

  return (
    <section
      id="photography"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto bg-[#050505] text-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12 gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter border-l-4 border-[#1F9A71] pl-4">
          Photography
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 sm:px-5 py-2 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeTab === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "border-white/10 text-gray-500 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 min-h-[300px]"
      >
        <AnimatePresence mode="popLayout">
          {displayedImages.map((src: string, i: number) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedImage(src)}
                className="relative group overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer rounded-sm"
              >
                <img
                  src={src}
                  alt={activeTab}
                  loading="lazy"
                  className="w-full h-auto max-h-[400px] md:max-h-none object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="text-[10px] uppercase tracking-widest border border-white/50 px-3 py-1">View Full</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {visibleCount < allImages.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-3 px-8 py-3 bg-zinc-900 border border-white/10 hover:border-white/40 text-white text-[10px] uppercase tracking-[0.3em] transition-all duration-500 group"
          >
            <FaPlus className="group-hover:rotate-90 transition-transform duration-300 text-[#1F9A71]" />
            Explore More
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-3 sm:p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-4xl z-[110] hover:scale-110 transition-transform"
            >
              &times;
            </button>

            <div
              className="absolute inset-0"
              onClick={() => setSelectedImage(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="preview"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
