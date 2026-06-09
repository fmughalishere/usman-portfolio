"use client";
import { motion } from "framer-motion";
import { Video, Camera, Film, Calendar, Play, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Sports Content",
    icon: <Play className="w-5 h-5" />,
    desc: "High-energy athletic storytelling.",
  },
  {
    id: "02",
    title: "Brand Films",
    icon: <Film className="w-5 h-5" />,
    desc: "Premium cinematic brand identity.",
  },
  {
    id: "03",
    title: "Event Coverage",
    icon: <Calendar className="w-5 h-5" />,
    desc: "Capturing moments as they happen.",
  },
  {
    id: "04",
    title: "Photography",
    icon: <Camera className="w-5 h-5" />,
    desc: "Professional visual stills.",
  },
  {
    id: "05",
    title: "Reels",
    icon: <Video className="w-5 h-5" />,
    desc: "Viral-ready short form content.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-40 px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 opacity-5 blur-[120px] bg-[#1F9A71] w-[300px] h-[300px] rounded-full"></div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="lg:col-span-5 relative group"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 aspect-[4/5]">
            <img
              src="https://res.cloudinary.com/dtbfahzvc/image/upload/v1781032780/DSC00003-2-6_kwuldh.jpg"
              alt="Usman Ghanni"
              className="w-full h-full object-cover md:grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#1F9A71]/20 rounded-2xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-700"></div>

          <div className="absolute bottom-8 left-8 z-20">
            <p className="text-[#1F9A71] font-mono text-xs tracking-[0.3em] uppercase mb-1">
              Cinematographer
            </p>
            <h3 className="text-white font-black italic text-xl uppercase tracking-tighter">
              Dubai Based
            </h3>
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#1F9A71]/30 text-[#1F9A71] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 bg-[#1F9A71]/5">
              About the Artist
            </span>

            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase leading-[0.9] tracking-tighter text-white">
              Usman <br />
              <span className="text-[#1F9A71] drop-shadow-[0_0_15px_rgba(31,154,113,0.3)]">
                Ghanni
              </span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              <p>
                I help businesses, brands, and creators build a strong digital
                presence through high-quality video production, photography, and
                creative content that actually delivers impact.
              </p>
              <p>
                In today’s fast-moving online world, low-quality visuals and
                inconsistent content can make even great brands go unnoticed.{" "}
                <span className="text-white italic">
                  That’s where I come in.
                </span>
              </p>
              <p>
                With years of experience in filmmaking and visual storytelling,
                every project is crafted with creativity, strategy, and a clear
                understanding of what works in today’s digital space.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 items-center border-t border-white/5 pt-10">
              <div className="flex flex-col">
                <span className="text-zinc-600 uppercase text-[9px] font-bold tracking-widest mb-1">
                  Expertise
                </span>
                <span className="text-white text-sm font-bold uppercase tracking-tight italic">
                  Fashion & Commercial
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="text-zinc-600 uppercase text-[9px] font-bold tracking-widest mb-1">
                  Experience
                </span>
                <span className="text-white text-sm font-bold uppercase tracking-tight italic">
                  05+ Years
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-40">
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-xs uppercase tracking-[0.6em] text-[#1F9A71] font-black mb-4">
            Core Services
          </h3>
          <div className="h-[2px] w-12 bg-white/20 mb-4"></div>
          <p className="text-zinc-500 text-sm max-w-xs font-medium">
            Elevating your brand through professional visual solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:bg-[#1F9A71]/5 hover:border-[#1F9A71]/20 overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-6xl font-black text-white/[0.02] italic group-hover:text-[#1F9A71]/10 transition-colors">
                {service.id}
              </div>

              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-[#1F9A71] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black">
                {service.icon}
              </div>

              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-[#1F9A71] transition-colors">
                {service.title}
              </h4>
              <p className="text-zinc-600 text-[10px] leading-tight font-medium uppercase tracking-tighter">
                {service.desc}
              </p>

              <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={14} className="text-[#1F9A71]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
