"use client";
import { motion } from "framer-motion";
export default function About() {
return (
<section id="about" className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">

<motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <img
        src="/images/profile-pictures/me2.jpg"
        alt="Usman Ghanni"
        className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition duration-700 rounded-sm"
      />
    </motion.div>

    <div>
      <h2 className="text-5xl font-bold mb-6 italic uppercase">
        M. Usman Ghanni
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        Media Studies (Film & TV) graduate with 5+ years of experience.
        I specialize in capturing impactful visual stories across Dubai and beyond.
      </p>

      <div className="space-y-4">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-500 uppercase text-xs">Based in</span>
          <span className="text-sm">Dubai, UAE</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-500 uppercase text-xs">Speciality</span>
          <span className="text-sm">Fashion & Commercial</span>
        </div>
      </div>
    </div>

  </div>
</section>
);
}