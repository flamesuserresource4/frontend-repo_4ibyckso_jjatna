import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Rocket, Github, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function NeonParticles() {
  const canvasRef = useRef(null);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      setDpr(Math.min(window.devicePixelRatio || 1, 2));
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(ratio, ratio);
    };

    const init = () => {
      const count = Math.min(Math.floor((canvas.clientWidth * canvas.clientHeight) / 9000), 90);
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.8 + 0.4,
        h: 250 + Math.random() * 70,
      }));
    };

    const step = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `hsla(${p.h}, 90%, 70%, 0.9)`);
        grad.addColorStop(1, `hsla(${p.h}, 90%, 50%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(step);
    };

    resize();
    init();
    step();

    const onResize = () => { resize(); init(); };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
    };
  }, [dpr]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}

function ParallaxLayer({ children, speed = 0.2 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = rect.top - window.innerHeight / 2;
      el.style.transform = `translateY(${offset * speed}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);
  return (
    <div ref={ref} className="will-change-transform">{children}</div>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth);
    mouseY.set(e.clientY / innerHeight);
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),rgba(0,0,0,0))] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),rgba(0,0,0,0))] blur-3xl" />
      </div>

      <NeonParticles />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-24 flex flex-col items-start">
        <ParallaxLayer speed={-0.06}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Futuristic Portfolio
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">Creative Developer</span>
          </motion.h1>
        </ParallaxLayer>

        <ParallaxLayer speed={-0.03}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg text-zinc-300"
          >
            Immersive, interactive, and bold web experiences blending cutting-edge 3D visuals with elegant UI.
          </motion.p>
        </ParallaxLayer>

        <motion.div
          style={{ rotateX, rotateY }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <MotionButton href="#projects" icon={<Rocket className="h-5 w-5" />} variant="primary">Explore Projects</MotionButton>
          <MotionButton href="#contact" icon={<Mail className="h-5 w-5" />} variant="secondary">Get In Touch</MotionButton>
          <MotionButton href="https://github.com" icon={<Github className="h-5 w-5" />} variant="outline" target="_blank" rel="noreferrer">GitHub</MotionButton>
        </motion.div>
      </div>
    </section>
  );
}

function MotionButton({ children, icon, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)]',
    secondary: 'bg-white/10 text-white backdrop-blur border border-white/20',
    outline: 'bg-transparent text-white border border-white/30 hover:border-white/60',
  };

  return (
    <motion.a
      whileHover={{ y: -3, boxShadow: '0 12px 35px rgba(168,85,247,0.35)' }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 transition-colors ${variants[variant]}`}
      {...props}
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/0 via-violet-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
      {icon}
      <span className="font-medium">{children}</span>
    </motion.a>
  );
}
