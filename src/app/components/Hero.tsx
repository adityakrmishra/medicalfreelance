"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919955793186?text=Hello%20Morari%20Medico,%20I%20want%20to%20book%20a%20slot%20with%20Dr.%20A.K.%20Ghosh.";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background hero image — uses next/image with priority for LCP */}
      <div className="absolute inset-0">
        <Image
          src="/images/waiting &entry area.jpeg"
          alt="Morari Medico Waiting & Entry Area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Subtle glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
              Government Verified
            </span>
          </motion.div>

          {/* Headline — cinematic fade + scale */}
          <motion.h1
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight"
          >
            <span className="text-white">Premium Healthcare</span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              &amp; Authentic Pharmacy
            </span>{" "}
            <span className="text-white">in Your Community.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed"
          >
            Trusted medical consultations and{" "}
            <span className="text-emerald-400 font-semibold">24/7 authentic pharmacy</span>{" "}
            services by Dr.&nbsp;A.K.&nbsp;Ghosh — M.D., Fellowship in Cardiology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-400 transition-all"
            >
              Consult Dr. A.K. Ghosh
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-slate-300 font-semibold text-base hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-white/5 transition-all"
            >
              Our Services
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex items-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>24/7 Pharmacy</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <span>Licensed &amp; Verified</span>
            <div className="w-px h-4 bg-slate-700" />
            <span>Reg. #52826</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
