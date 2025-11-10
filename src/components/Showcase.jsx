import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'Neon Agent Suite',
    tag: 'AI + Systems',
    href: '#',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Cyber UI Kit',
    tag: 'Design + Code',
    href: '#',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Holographic Docs',
    tag: 'DX + Tooling',
    href: '#',
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Ribbon Physics Demo',
    tag: 'WebGL + Motion',
    href: '#',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#06060c] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-[100px]" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-10 bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-4xl"
        >
          Selected Works & Experiments
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-xl border border-fuchsia-400/20 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full scale-[1.02] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />
              </div>
              <div className="relative flex items-center justify-between p-4">
                <div>
                  <h3 className="text-white">{item.title}</h3>
                  <p className="text-sm text-fuchsia-200/80">{item.tag}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-fuchsia-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition group-hover:opacity-100" style={{
                background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(217,70,239,0.25), transparent 40%)'
              }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
