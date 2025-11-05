import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-inter bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Future.Dev — Built for the web of tomorrow.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="hover:text-white transition-colors">Top</a>
            <span className="opacity-30">•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
