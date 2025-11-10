import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { name: 'Google Cloud', color: '#10B981' },
  { name: 'AWS Architect', color: '#F59E0B' },
  { name: 'OpenAI', color: '#A78BFA' },
  { name: 'Kubernetes', color: '#06B6D4' },
  { name: 'Meta React', color: '#60A5FA' },
  { name: 'DeepLearning.AI', color: '#F472B6' },
];

export default function CertsMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#080810] py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 bg-gradient-to-r from-fuchsia-600/10 via-cyan-400/10 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="flex min-w-max gap-6"
          >
            {[...certs, ...certs].map((c, i) => (
              <div
                key={i}
                className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90"
                style={{ boxShadow: `0 0 24px ${c.color}22` }}
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="font-medium" style={{ color: c.color }}>{c.name}</span>
                <span className="text-white/60">• Certified</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
