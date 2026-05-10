"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/shop interior view.jpeg",
    alt: "Morari Medico Pharmacy Interior",
    label: "Pharmacy Interior",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/reciponist area.jpeg",
    alt: "Reception Area",
    label: "Reception Area",
    w: 800,
    h: 600,
  },
  {
    src: "/images/waiting &entry area.jpeg",
    alt: "Waiting & Entry Area",
    label: "Waiting & Entry",
    w: 800,
    h: 600,
  },
  {
    src: "/images/front view.jpeg",
    alt: "Morari Medico Front View",
    label: "Front View",
    w: 800,
    h: 600,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="glow-line w-full absolute top-0" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-3"
          >
            Clinic Tour
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Inside Our Facility
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-base text-slate-400 max-w-2xl mx-auto"
          >
            Take a virtual walk through our modern, clean, and welcoming clinic and
            pharmacy space.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/30 hover:border-emerald-500/30 transition-all ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  i === 0 ? "h-[320px] sm:h-full" : "h-[240px] lg:h-[260px]"
                }`}
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <div className="flex items-center gap-2 text-white">
                  <Camera className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
