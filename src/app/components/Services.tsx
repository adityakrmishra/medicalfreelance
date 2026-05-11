"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Thermometer,
  Wind,
  Pill,
  Bone,
  Droplets,
  Syringe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const CATEGORIES: { heading: string; accent: string; services: Service[] }[] = [
  {
    heading: "Cardiovascular Care",
    accent: "from-red-400 to-rose-400",
    services: [
      {
        icon: HeartPulse,
        title: "Heart Issues",
        desc: "Comprehensive cardiac evaluation, treatment, and ongoing management of heart conditions.",
      },
      {
        icon: Activity,
        title: "Blood Pressure",
        desc: "Hypertension screening, lifestyle guidance, and medication management for optimal BP control.",
      },
      {
        icon: Stethoscope,
        title: "Echocardiography",
        desc: "Non-invasive ultrasound imaging of the heart by a fellowship-trained specialist.",
      },
    ],
  },
  {
    heading: "General Medicine",
    accent: "from-cyan-400 to-blue-400",
    services: [
      {
        icon: Syringe,
        title: "Diabetes (Sugar)",
        desc: "Blood sugar management, insulin therapy, and long-term diabetic care plans.",
      },
      {
        icon: Thermometer,
        title: "Fever & Infections",
        desc: "Diagnosis and treatment of viral, bacterial fevers, cough, and seasonal infections.",
      },
      {
        icon: Wind,
        title: "Asthma & TB",
        desc: "Respiratory assessments, asthma management, and tuberculosis diagnosis and treatment.",
      },
    ],
  },
  {
    heading: "Specialized Treatment",
    accent: "from-emerald-400 to-green-400",
    services: [
      {
        icon: Pill,
        title: "Gastric & Liver",
        desc: "Treatment for gastric issues, abdominal pain, acidity, and liver-related disorders.",
      },
      {
        icon: Droplets,
        title: "Kidney Stones",
        desc: "Diagnosis, pain management, and referral coordination for kidney stone treatment.",
      },
      {
        icon: Bone,
        title: "Joint Pain",
        desc: "Musculoskeletal evaluation, arthritis management, and pain relief therapies.",
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="glow-line w-full absolute top-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            What We Treat
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Medical Services
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-base text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive healthcare spanning cardiovascular, general, and specialized
            medicine — all under one roof.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          />
        </motion.div>

        {/* ── Logo Plaque (left) + Service Cards (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column — Logo Plaque */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="lg:col-span-1 flex flex-col items-center lg:sticky lg:top-32"
          >
            {/* White plaque container — intentionally white to frame the logo */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-black/30 glow-emerald">
              <Image
                src="/images/Morari Medico logo.png"
                alt="Murari Medico Shield"
                width={280}
                height={280}
                className="w-56 h-auto object-contain"
                sizes="(max-width: 1024px) 200px, 280px"
              />
            </div>
            <p className="mt-6 text-sm text-slate-500 text-center max-w-[220px] leading-relaxed">
              Trusted healthcare &amp; authentic pharmacy since establishment
            </p>
          </motion.div>

          {/* Right Column — Service Categories & Cards */}
          <div className="lg:col-span-2 space-y-14">
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.heading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <motion.h3
                  variants={fadeUp}
                  custom={0}
                  className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-3"
                >
                  <span
                    className={`w-8 h-1 rounded-full bg-gradient-to-r ${cat.accent}`}
                  />
                  {cat.heading}
                </motion.h3>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {cat.services.map((svc, i) => (
                    <motion.div
                      key={svc.title}
                      variants={fadeUp}
                      custom={i + 1}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative p-5 rounded-2xl glass-card hover:border-emerald-500/30 transition-all cursor-default"
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
                        <svc.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{svc.title}</h4>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                        {svc.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
