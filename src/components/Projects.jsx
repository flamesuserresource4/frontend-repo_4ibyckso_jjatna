import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nebula',
    desc: 'A WebGL-powered microsite with particles, parallax, and audio-reactive shaders.',
    tags: ['WebGL', 'Shaders', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Holographic UI',
    desc: 'Futuristic dashboard with glassmorphism, 3D interactions, and realtime charts.',
    tags: ['Three.js', 'React', 'UX'],
    link: '#',
  },
  {
    title: 'Spline Lab',
    desc: 'Interactive Spline scenes integrated in web experiences with custom controls.',
    tags: ['Spline', 'Animation', 'Vite'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="uppercase tracking-widest text-xs text-zinc-400">Projects</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Selected Work</h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="hidden sm:inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <Code2 className="h-4 w-4" /> View Source
          </motion.a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur shadow-[0_0_40px_rgba(99,102,241,0.15)]"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(0,0,0,0))] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] uppercase tracking-wide rounded-full border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
