import React from 'react';
import { motion } from 'framer-motion';

export default function NeonAbout() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-[#05050a] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[100px]" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-6 bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-4xl"
        >
          Future Gadget Lab — where neon ideas crystallize
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center text-fuchsia-100/80"
        >
          A playground where AI, design, and software fuse into immersive experiences. The mission: craft legendary systems that outlive trend cycles. Less talk — more luminous craft.
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'AI Systems',
              text: 'Autonomous agents, reasoning systems, and human-in-the-loop tools that amplify creative power.',
            },
            {
              title: 'Interactive Worlds',
              text: 'WebGL, real‑time visuals, and reactive UI that feels alive and responsive.',
            },
            {
              title: 'Legend Engineering',
              text: 'Architectures designed to scale from small sparks to city‑sized ideas.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-xl border border-fuchsia-400/20 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-fuchsia-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-lg"
            >
              <div className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition group-hover:opacity-100" style={{
                background: 'conic-gradient(from 180deg at 50% 50%, rgba(217,70,239,0.35) 0deg, rgba(34,211,238,0.35) 120deg, rgba(147,51,234,0.35) 240deg, transparent 360deg)'
              }} />
              <h3 className="relative z-10 mb-2 text-lg font-semibold text-white">{card.title}</h3>
              <p className="relative z-10 text-sm text-fuchsia-100/80">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
