"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Verification() {
  return (
    <section
      id="verification"
      className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="glow-line w-full absolute top-0" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Trust &amp; Verification
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Licensed &amp; Government Verified
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-base text-slate-400 max-w-2xl mx-auto"
          >
            Murari Medico is a fully licensed, government-verified pharmacy and clinic
            operated by proprietor{" "}
            <span className="font-semibold text-slate-200">Murari Kumar Singh</span>.
            Every medicine we dispense is authentic, properly stored, and sourced directly
            from authorized distributors.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          />
        </motion.div>

        {/* Proprietor card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
          className="max-w-xl mx-auto mb-14 p-6 rounded-2xl glass-card flex items-center gap-5"
        >
          <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <p className="font-bold text-white">Murari Kumar Singh</p>
            <p className="text-sm text-slate-400">
              Proprietor &amp; Owner — Murari Medico
            </p>
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {["/images/Certificate.png", "/images/Certificate1.png"].map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden glass-card hover:border-emerald-500/30 transition-all"
            >
              {/* Label */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Official License {i + 1}
                </span>
              </div>
              <div className="p-4">
                <Image
                  src={src}
                  alt={`Official License Certificate ${i + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg object-contain"
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
