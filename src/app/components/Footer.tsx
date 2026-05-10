"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919955793186?text=Hello%20Morari%20Medico,%20I%20want%20to%20book%20a%20slot%20with%20Dr.%20A.K.%20Ghosh.";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Doctor", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Clinic Tour", href: "#gallery" },
  { label: "Verification", href: "#verification" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
      {/* Glow line separator */}
      <div className="glow-line w-full" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-1">
            {/* Brand Logo */}
            <div className="mb-4">
              <Image
                src="/images/Morari Medico logo.png"
                alt="Morari Medico Logo"
                width={160}
                height={44}
                className="h-9 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Premium healthcare and authentic pharmacy services trusted by the
              Gopalganj community.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href="tel:+919955793186"
                  className="text-sm text-slate-500 hover:text-emerald-400 transition-colors"
                >
                  +91 9955-793186
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-500">
                  Karmaini Road, Kuchaikot,
                  <br />
                  Gopalganj — 841501
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-500">Pharmacy open 24/7</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Book Appointment
            </h4>
            <p className="text-sm text-slate-500 mb-4">
              Chat with us on WhatsApp for instant appointment booking.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-sm font-semibold hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Now
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Morari Medico. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Proprietor: Murari Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  );
}
