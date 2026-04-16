"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Intro({ setFinish }: { setFinish: (val: boolean) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => setFinish(false), 4500);
    return () => clearTimeout(timer);
  }, [setFinish]);

  // Tip: Aap yahan Cloudinary ke direct links bhi daal sakti hain
  const gearImages = ["camera", "gimble", "Canon R6", "editing", "Photography"];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* Background Images - Opacity increased from 20 to 45 for better visibility */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 opacity-45 gap-1 p-1">
        {[...gearImages, ...gearImages].slice(0, 10).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="w-full h-full relative"
          >
            <img
              src={`/images/${img}.jpg`} // Yahan Cloudinary link bhi laga sakti hain
              alt="Gear"
              className="w-full h-full object-cover grayscale brightness-110 contrast-110" 
            />
            {/* Soft overlay to blend images */}
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center px-6 w-full max-w-4xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-2xl p-6 py-10 md:p-16 rounded-[2rem] md:rounded-full border border-white/10 inline-block w-full sm:w-auto"
        >
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none"
          >
            M <span className="text-[#1F9A71]">Usman Ghanni</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-[2px] bg-[#1F9A71] mt-6 mx-auto max-w-[250px] md:max-w-md"
          />
          
          <p className="text-gray-300 mt-4 tracking-[0.2em] md:tracking-[0.5em] text-[7px] md:text-[10px] uppercase font-bold">
            Professional Visual Storytellers
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div 
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 4, ease: "linear" }}
               className="w-full h-full bg-[#1F9A71] shadow-[0_0_10px_#1F9A71]"
            />
        </div>
      </div>

      {/* Optimized Vignette - Taaki corners bohat dark na ho jayein */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,black_85%)]" />
    </motion.div>
  );
}