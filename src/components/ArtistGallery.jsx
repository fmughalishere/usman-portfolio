"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    company: "GEMS Owned Brands (ESM) (Hamilton)",
    role: "Cinematographer/Editor",
    duration: "10/2024 – Present",
    location: "Dubai",
    points: [
      "Boosted audience engagement by 25% through visually compelling storytelling.",
      "Managed multiple shoots and edits for multiple brands, delivering high-quality content."
    ]
  },
  {
    company: "ATP STEM",
    role: "Multimedia Designer",
    duration: "09/2023 – 10/2024",
    location: "Dubai",
    points: [
      "Created and edited videos, reels, and event content for ATP STEM.",
      "Enhanced social media engagement through consistent, high-quality visuals."
    ]
  },
  {
    company: "Vostro World",
    role: "Cinematographer/Photographer",
    duration: "02/2022 – 07/2023",
    location: "Islamabad",
    points: [
      "Produced gym promotional videos to drive memberships and showcase success stories."
    ]
  },
  {
    company: "Freelance",
    role: "Videographer / Photographer – Real Estate",
    duration: "03/2019 – 08/2025",
    location: "International",
    points: [
      "Produced high-quality personal branding videos and podcasts for real estate brokers.",
      "Shot and edited property showcase videos to highlight unique features.",
      "Captured professional property photography for online listings.",
      "Collaborated with brokers to ensure content aligned with brand identity."
    ]
  }
];

export default function ArtistGallery() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-[#1F9A71] uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
            The Visionary
          </span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            Professional <br /> <span className="text-zinc-800">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-[#0f0f0f] hover:border-[#1F9A71]/30 transition-colors duration-500 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#1F9A71] transition-colors uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-zinc-400 text-sm italic">
                      <FaBriefcase className="text-[#1F9A71] text-xs" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-zinc-500">
                    <FaCalendarAlt className="text-[#1F9A71]" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-zinc-500">
                    <FaMapMarkerAlt className="text-[#1F9A71]" />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-3 mt-auto">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                      <FaCheckCircle className="mt-1 text-[#1F9A71] flex-shrink-0 text-[10px]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-end">
          <p className="max-w-md text-right text-zinc-600 text-sm leading-relaxed italic border-r-2 border-[#1F9A71] pr-4">
            "5+ years of delivering impactful visual content through professional videography and photography across Dubai and Pakistan."
          </p>
        </div>
      </div>
    </section>
  );
}