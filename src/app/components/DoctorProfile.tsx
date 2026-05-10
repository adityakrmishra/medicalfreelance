"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

const DOCTOR_IMAGES = [
  { src: "/images/Dr A.K GHOSH.jpeg", alt: "Dr. A.K. Ghosh Portrait", w: 500, h: 600 },
  { src: "/images/A.K GHOSH consulting to patience.jpeg", alt: "Dr. Ghosh consulting a patient", w: 500, h: 500 },
  { src: "/images/Ak ghosh secondary image.jpeg", alt: "Dr. A.K. Ghosh", w: 400, h: 400 },
];

const CREDENTIALS = [
  { icon: GraduationCap, label: "M.D., FIC, FIEC Physician" },
  { icon: Award, label: "Fellowship in Cardiology & Echocardiography" },
  { icon: BadgeCheck, label: "Trained at PMCH — Reg. #52826" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function DoctorProfile() {
  return (
    <section id="doctor" className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="glow-line w-full absolute top-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Meet the Specialist
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Dr. A.K. Ghosh
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Overlapping image cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative h-[480px] sm:h-[540px]"
          >
            {/* Primary image */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/40 z-10"
            >
              <Image
                src={DOCTOR_IMAGES[0].src}
                alt={DOCTOR_IMAGES[0].alt}
                width={DOCTOR_IMAGES[0].w}
                height={DOCTOR_IMAGES[0].h}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/40 z-20"
            >
              <Image
                src={DOCTOR_IMAGES[1].src}
                alt={DOCTOR_IMAGES[1].alt}
                width={DOCTOR_IMAGES[1].w}
                height={DOCTOR_IMAGES[1].h}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Tertiary accent */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="absolute top-[15%] right-[5%] w-[35%] h-[35%] rounded-xl overflow-hidden border-2 border-white/10 shadow-xl shadow-black/40 z-30"
            >
              <Image
                src={DOCTOR_IMAGES[2].src}
                alt={DOCTOR_IMAGES[2].alt}
                width={DOCTOR_IMAGES[2].w}
                height={DOCTOR_IMAGES[2].h}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 30vw, 15vw"
              />
            </motion.div>

            {/* PMCH badge */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="absolute bottom-8 left-6 z-40 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/20"
            >
              <p className="text-2xl font-extrabold leading-none">PMCH</p>
              <p className="text-xs font-medium text-emerald-100 mt-0.5">Trained</p>
            </motion.div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              Decades of Expertise in{" "}
              <span className="text-emerald-400">Cardiology &amp; Medicine</span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-5 text-base text-slate-400 leading-relaxed"
            >
              Dr.&nbsp;A.K.&nbsp;Ghosh is a distinguished physician with an M.D. degree and
              dual fellowships in Cardiology (FIC) and Echocardiography (FIEC). Trained at
              the prestigious Patna Medical College and Hospital (PMCH), he brings extensive
              clinical experience in diagnosing and treating cardiovascular, respiratory, and
              metabolic disorders to the Gopalganj community.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-base text-slate-400 leading-relaxed"
            >
              His patient-first approach, combined with modern diagnostic capabilities,
              ensures every patient receives world-class care close to home.
            </motion.p>

            {/* Credentials */}
            <motion.div variants={fadeUp} custom={3} className="mt-8 space-y-4">
              {CREDENTIALS.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-emerald-500/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <cred.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{cred.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
