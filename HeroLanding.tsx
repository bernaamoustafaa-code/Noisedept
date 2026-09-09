import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import bgExactWide from '../assets/images/noise_chatgpt_bg_1788945105572.jpg';
import bgExactVert from '../assets/images/noise_chatgpt_vert_1788945127703.jpg';

interface HeroLandingProps {
  onScrollToContents: () => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({ onScrollToContents }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.05]);
  const contentY = useTransform(scrollY, [0, 800], [0, 90]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative w-full h-[100vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* BACKGROUND: Matching reference 1 with heavy monochrome film grain & blurry atmospheric silhouettes */}
      <motion.div
        id="landing-bg-container"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ scale: bgScale }}
      >
        <picture>
          <source media="(max-width: 768px)" srcSet={bgExactVert} />
          <img
            src={bgExactWide}
            alt="Noise Dept Background Grain"
            className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Tactile analog 35mm grain overlay */}
        <div className="absolute inset-0 film-grain opacity-85 mix-blend-overlay pointer-events-none" />
        
        {/* Soft subtle vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/35 pointer-events-none" />
      </motion.div>

      {/* CENTERPIECE: "Noise Dept." first, then "Portfolio", intersected like image 2, both in black, not glowy, and centered */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-7xl mx-auto my-auto text-center"
      >
        <div className="relative inline-flex flex-col items-center justify-center w-full">
          {/* 1. "Noise Dept." FIRST - Arial Black, extra bold, black, centered, kept on the same line */}
          <h1
            id="hero-title-noise-dept"
            className="font-arial-black text-black text-[10.5vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] xl:text-[8.5rem] leading-[0.9] tracking-[-0.05em] uppercase text-center font-black select-none m-0 p-0 whitespace-nowrap max-w-full"
          >
            Noise Dept.
          </h1>

          {/* 2. "Portfolio" SECOND - Bickham Script Pro, pure black, NOT glowy, intersecting like image 2 in reference */}
          <div
            id="hero-subtitle-portfolio-container"
            className="relative z-30 -mt-[1.08em] sm:-mt-[1.05em] md:-mt-[1.1em] lg:-mt-[1.12em] xl:-mt-[1.15em] pointer-events-none select-none flex items-center justify-center w-full"
          >
            <p
              id="hero-subtitle-portfolio"
              className="font-bickham text-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5vw] xl:text-[12rem] leading-[0.75] tracking-wide whitespace-nowrap text-center transform -rotate-[7deg] select-none"
            >
              Portfolio
            </p>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM SCROLL-DOWN PROMPT */}
      <div className="absolute bottom-8 sm:bottom-12 z-20 flex flex-col items-center justify-center">
        <button
          id="hero-scroll-btn"
          onClick={onScrollToContents}
          className="group flex flex-col items-center gap-2 text-black font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase transition-all cursor-pointer focus:outline-none"
          aria-label="Scroll down to explore contents"
        >
          <span className="opacity-75 group-hover:opacity-100 font-semibold tracking-widest text-black">
            Scroll to explore
          </span>
          <div className="w-8 h-8 rounded-full border border-black/40 flex items-center justify-center group-hover:border-black group-hover:bg-black/10 transition-all">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-black" />
            </motion.div>
          </div>
        </button>
      </div>
    </section>
  );
};
