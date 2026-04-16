"use client";
import { motion } from "framer-motion";
import { galleryData } from "./galleryData";

export default function ArtistGallery() {
  const artistImages = galleryData.Artist || [];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-blue-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
            The Visionary
          </span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            Behind <br /> <span className="text-zinc-800">The Lens</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {artistImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group ${
                i === 2 ? "md:col-span-2 md:row-span-2" : "" 
              }`}
            >
              <img
                src={src}
                alt="M. Usman Ghanni Professional"
                className="w-full h-full object-cover aspect-square md:aspect-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-end">
           <p className="max-w-md text-right text-gray-500 text-sm leading-relaxed italic">
             "Capturing the essence of the moment, whether it's on a high-fashion set or in the heat of a sports event."
           </p>
        </div>
      </div>
    </section>
  );
}