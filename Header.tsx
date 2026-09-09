import React from 'react';

export const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContents = () => {
    const el = document.getElementById('contents-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-5 flex items-center justify-between mix-blend-difference pointer-events-auto text-white transition-all select-none"
    >
      <button
        onClick={scrollToTop}
        id="nav-brand-logo"
        className="font-arial-black tracking-tighter text-lg sm:text-xl uppercase hover:opacity-80 transition-opacity cursor-pointer text-left"
      >
        Noise Dept.
      </button>

      <nav className="flex items-center gap-6 sm:gap-8 text-xs tracking-widest uppercase font-mono">
        <button
          onClick={scrollToContents}
          className="hover:underline underline-offset-4 decoration-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        >
          Menu
        </button>
      </nav>
    </header>
  );
};
