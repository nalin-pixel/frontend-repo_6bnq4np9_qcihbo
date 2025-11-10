import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, Github } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#07070b]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-black/40 px-4 py-1 text-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            <span className="tracking-wide text-fuchsia-200/90">Future Gadget Lab</span>
          </motion.div>

          <h1 className="mx-auto max-w-5xl font-[900] leading-[1.05] tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,0,255,0.35)]" style={{
            fontSize: 'clamp(2.6rem, 6vw, 5rem)'
          }}>
            Sina Qasempour
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto max-w-3xl text-balance text-lg text-fuchsia-100/80"
          >
            Building meaningful software with neon-soaked imagination — where AI, culture, and code collide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-fuchsia-400/40 bg-black/40 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-fuchsia-300/70 hover:shadow-[0_0_25px_rgba(255,0,255,0.35)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-600/0 via-fuchsia-600/10 to-fuchsia-600/0 transition-opacity duration-500 group-hover:opacity-100" />
              <Github className="h-4 w-4 text-fuchsia-300" />
              <span>GitHub</span>
            </a>
            <a
              href="#showcase"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fuchsia-600/80 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.45)] transition hover:bg-fuchsia-500"
            >
              <Rocket className="h-4 w-4" />
              <span>See the Work</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
