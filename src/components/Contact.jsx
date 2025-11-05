import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 900);
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="uppercase tracking-widest text-xs text-zinc-400">Contact</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Let’s build something futuristic</h2>
          <p className="mt-3 text-zinc-300">Have an idea, project, or opportunity? I’d love to hear about it.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:ring-2 ring-fuchsia-400/40 placeholder:text-zinc-400" placeholder="Your name" required />
            <input type="email" className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:ring-2 ring-cyan-400/40 placeholder:text-zinc-400" placeholder="Email address" required />
          </div>
          <textarea rows="5" className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none focus:ring-2 ring-violet-400/40 placeholder:text-zinc-400" placeholder="Tell me about your project" required />
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-medium shadow-[0_0_25px_rgba(99,102,241,0.5)]"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/0 via-violet-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
            <Send className="h-4 w-4" /> Send Message
          </motion.button>
          {status && <p className="text-sm text-zinc-300">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
