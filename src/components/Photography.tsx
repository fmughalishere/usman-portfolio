"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { name: "Fashion", count: 40, prefix: "fashion" },
  { name: "Food / Menu", count: 61, prefix: "Menu" },
  { name: "Event", count: 7, prefix: "Event" },
  { name: "Sports", count: 18, prefix: "Sports" },
  { name: "Real Estate", count: 16, prefix: "Real-Estate" },
  { name: "Swimming", count: 13, prefix: "Swimming" },
];

export default function Photography() {
  const [activeTab, setActiveTab] = useState("Fashion");
  useEffect(() => {
    categories.forEach((cat) => {
      for (let i = 1; i <= cat.count; i++) {
        const img = new Image();
        img.src = `/images/Photos/${cat.prefix} (${i}).jpg`;
      }
    });
  }, []);

  const currentCategory = categories.find(c => c.name === activeTab);
    const images = Array.from({ length: currentCategory?.count || 0 }, (_, i) => 
    `/images/Photos/${currentCategory?.prefix} (${i + 1}).jpg`
  );

  return (
    <section id="photography" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Photography</h2>
                <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeTab === cat.name 
                ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                : "border-white/20 text-gray-500 hover:text-white hover:border-white/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 min-h-[500px]">
        <AnimatePresence mode="popLayout">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden bg-zinc-900 border border-white/5">
                <img 
                  src={src} 
                  alt="Gallery item" 
                  loading="eager" 
                  decoding="async"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}