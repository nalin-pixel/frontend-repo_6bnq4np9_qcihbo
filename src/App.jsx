import React from 'react';
import Hero3D from './components/Hero3D';
import NeonAbout from './components/NeonAbout';
import Showcase from './components/Showcase';
import CertsMarquee from './components/CertsMarquee';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#05050a] text-white">
      <Hero3D />
      <NeonAbout />
      <Showcase />
      <CertsMarquee />

      <footer className="relative border-t border-fuchsia-500/20 bg-[#05050a] py-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fuchsia-600/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-fuchsia-100/70">© {new Date().getFullYear()} Sina Qasempour — Crafted in neon.</p>
            <div className="flex gap-4 text-sm text-fuchsia-100/70">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#showcase" className="hover:text-white">Work</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
