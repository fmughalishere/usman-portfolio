"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://res.cloudinary.com/drscfltaf/image/upload/v1776314470/me2_bxnmim.jpg"
            alt="Usman Ghanni"
            className="
              w-full 
              aspect-square 
              object-cover 
              rounded-md
              transition duration-700

              grayscale-0
              md:grayscale
              md:hover:grayscale-0
            "
          />
        </motion.div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 italic uppercase">
            M. Usman Ghanni
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Media Studies (Film & TV) graduate with 5+ years of experience.
            I specialize in capturing impactful visual stories across Dubai and beyond.
          </p>

          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-500 uppercase text-[10px] sm:text-xs">
                Based in
              </span>
              <span className="text-xs sm:text-sm">
                Dubai, UAE
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-500 uppercase text-[10px] sm:text-xs">
                Speciality
              </span>
              <span className="text-xs sm:text-sm">
                Fashion & Commercial
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}