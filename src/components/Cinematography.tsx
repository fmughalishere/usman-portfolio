"use client";
import { motion } from "framer-motion";

export default function Cinematography() {
  const videos = Array.from(
    { length: 16 },
    (_, i) => `/images/videos/v${i + 1}.mp4`
  );

  return (
    <section id="work" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black italic uppercase mb-12 border-l-4 border-white pl-4 tracking-tighter">
          Motion Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {videos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] md:aspect-video bg-zinc-900 overflow-hidden group border border-white/5 rounded-sm shadow-2xl"
            >
              <video
                src={src}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"   // ✅ performance fix
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-in-out"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/70 font-bold">
                  Cinematography Production // {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-2 h-[1px] w-0 group-hover:w-full bg-white/50 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}