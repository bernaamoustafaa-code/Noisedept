import React from 'react';
import { Header } from './components/Header';
import { HeroLanding } from './components/HeroLanding';
import { ContentsScreen } from './components/ContentsScreen';

export default function App() {
  const handleScrollToContents = () => {
    const contentsElement = document.getElementById('contents-section');
    if (contentsElement) {
      contentsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0d0e11] text-white selection:bg-white selection:text-black">
      {/* Clean Minimal Header */}
      <Header />

      {/* Main Experience */}
      <main className="relative w-full">
        {/* Landing & First Page */}
        <HeroLanding onScrollToContents={handleScrollToContents} />

        {/* Contents Screen: ABOUT ME - CREATIONS - SERVICES - CONTACT in a row matching image 1 */}
        <ContentsScreen />
      </main>
    </div>
  );
}
