import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-4 py-3">
          <a href="#home" className="text-white font-semibold tracking-tight">FUTURE<span className="text-cyan-400">.DEV</span></a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="relative rounded-xl px-3 py-2 text-sm text-zinc-300 hover:text-white">
                <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm text-white border border-white/10"
          >
            Let’s talk
          </motion.a>
        </div>
      </div>
    </div>
  );
}
