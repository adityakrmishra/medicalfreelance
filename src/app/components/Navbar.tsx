"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919955793186?text=Hello%20Morari%20Medico,%20I%20want%20to%20book%20a%20slot%20with%20Dr.%20A.K.%20Ghosh.";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Doctor", href: "#doctor" },
  { label: "Medical Services", href: "#services" },
  { label: "Clinic Tour", href: "#gallery" },
  { label: "Verification", href: "#verification" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-white/10 py-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        {/* Brand Logo */}
        <a href="#home" className="flex items-center group">
          <Image
            src="/images/Morari Medico logo.png"
            alt="Morari Medico Logo"
            width={240}
            height={64}
            className="h-16 sm:h-20 w-auto object-contain brightness-110"
            priority
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-slate-950 text-sm font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-105 active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4" />
          Book Slot
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-300"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden glass-dark mt-2 mx-4 rounded-2xl"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Book Slot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
