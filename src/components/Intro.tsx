"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Intro({ setFinish }: { setFinish: (val: boolean) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => setFinish(false), 4500);
    return () => clearTimeout(timer);
  }, [setFinish]);

  const gearImages = ["camera", "gimble", "Canon R6", "editing", "Photography"];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 opacity-20 gap-1 p-1">
        {[...gearImages, ...gearImages].slice(0, 10).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.15 }}
            className="w-full h-full"
          >
            <img
              src={`/images/${img}.jpg`}
              alt="Gear"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-xl p-8 md:p-16 rounded-3xl md:rounded-full border border-white/5 inline-block"
        >
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-white text-3xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none"
          >
            M <span className="text-[#1F9A71]">Usman Ghanni</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-[2px] bg-[#1F9A71] mt-6 mx-auto"
          />
          
          <p className="text-gray-400 mt-4 tracking-[0.3em] md:tracking-[0.6em] text-[8px] md:text-[10px] uppercase font-bold">
            Professional Visual Storytellers
          </p>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 md:w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 4 }}
               className="w-full h-full bg-[#1F9A71]"
            />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
    </motion.div>
  );
}