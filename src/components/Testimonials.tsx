"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Marketing Director",
    content: "Usman has an incredible eye for detail. The brand film he produced for us exceeded our expectations and significantly boosted our engagement.",
  },
  {
    name: "James Wilson",
    role: "Real Estate Broker",
    content: "Professional, punctual, and highly creative. His property videos have a cinematic touch that really makes our listings stand out.",
  },
  {
    name: "Elena Rodriguez",
    role: "Fashion Designer",
    content: "The best photographer I've worked with in Dubai. He perfectly captured the essence of my latest collection.",
  }
];

const brands = ["GEMS ESM", "ATP STEM", "VOSTRO WORLD", "HAMILTON", "REAL ESTATE"];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-12">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {brands.map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black italic tracking-tighter text-white hover:opacity-100 transition duration-500 cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl group hover:border-[#1F9A71]/30 transition-all duration-500"
            >
              <Quote className="text-[#1F9A71] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="text-zinc-400 leading-relaxed mb-8 italic">
                "{item.content}"
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.name}</h4>
                <p className="text-[#1F9A71] text-[10px] uppercase tracking-tighter mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}