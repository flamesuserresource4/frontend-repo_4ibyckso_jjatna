import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),rgba(0,0,0,0))] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
        >
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-3 text-zinc-300">
              <User className="h-5 w-5 text-cyan-400" />
              <span className="uppercase tracking-widest text-xs">About Me</span>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Designing the future, one pixel at a time</h2>
          </div>

          <div className="md:col-span-2 text-zinc-300 leading-relaxed">
            <p>
              I craft immersive web experiences that blend aesthetics, performance, and micro-interactions. My work focuses on motion, detail, and storytelling—creating interfaces that feel alive.
            </p>
            <p className="mt-4">
              From landing pages to complex product interfaces, I bring ideas to life using modern web technologies, 3D scenes, and thoughtful UX.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Node.js', 'FastAPI', 'Tailwind', 'Spline'].map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-white/90"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
