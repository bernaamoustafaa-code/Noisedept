import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { CREATIONS_DATA, SERVICES_DATA, STUDIO_OFFICES } from '../data/agencyData';
import { Project } from '../types';
import bgExactWide from '../assets/images/noise_chatgpt_bg_1788945105572.jpg';
import bgExactVert from '../assets/images/noise_chatgpt_vert_1788945127703.jpg';

type ActiveModal = 'CREATIONS' | 'SERVICES' | 'CONTACT' | null;

export const ContentsScreen: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const menuItems = ['CREATIONS', 'SERVICES', 'CONTACT'] as const;

  return (
    <section
      id="contents-section"
      className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* BACKGROUND: Exactly the same background as the first page */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
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
      </div>

      {/* CENTER ROW OF ITEMS: "CREATIONS", "SERVICES", "CONTACT" in a row beside each other */}
      <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 max-w-6xl mx-auto flex items-center justify-center">
        <div className="w-full flex flex-row flex-wrap sm:flex-nowrap items-center justify-center sm:justify-around md:justify-between gap-8 sm:gap-10 md:gap-14 lg:gap-20">
          {menuItems.map((item) => (
            <button
              key={item}
              id={`menu-item-${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveModal(item)}
              className="group relative text-black font-arial-black uppercase tracking-tight text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center whitespace-nowrap transition-all duration-200 hover:scale-105 cursor-pointer focus:outline-none"
            >
              <span className="relative z-10">
                {item}
              </span>
              {/* Subtle underline hover effect */}
              <span className="block h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center mt-1.5" />
            </button>
          ))}
        </div>
      </div>

      {/* INTERACTIVE MODAL / DRAWER FOR CONTENT */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700/80 rounded-2xl overflow-hidden shadow-2xl my-auto text-neutral-200 max-h-[85vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <h3 className="font-arial-black text-xl uppercase tracking-tight text-white">
                    {activeModal}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setActiveModal(null);
                    setSelectedProject(null);
                  }}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-white hover:text-black text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* 1. CREATIONS */}
                {activeModal === 'CREATIONS' && (
                  <div className="space-y-4">
                    {selectedProject ? (
                      <div className="space-y-4">
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-xs font-mono uppercase text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer mb-2"
                        >
                          ← Back to all creations
                        </button>
                        <div className="h-48 sm:h-64 rounded-xl overflow-hidden bg-neutral-950 relative">
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover grayscale contrast-125"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-arial-black text-2xl uppercase text-white">
                          {selectedProject.title}
                        </h4>
                        <p className="font-mono text-xs text-neutral-400">
                          {selectedProject.client} // {selectedProject.year} // {selectedProject.category}
                        </p>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {selectedProject.fullOverview}
                        </p>
                        <div className="space-y-2 pt-2 border-t border-neutral-800">
                          <span className="font-mono text-xs uppercase text-neutral-400 block">
                            Key Deliverables
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.deliverables.map((d, i) => (
                              <span key={i} className="px-2 py-1 bg-neutral-800 text-xs font-mono rounded">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CREATIONS_DATA.map((project) => (
                          <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer space-y-2.5"
                          >
                            <div className="h-32 rounded-lg overflow-hidden relative">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white">
                                {project.category}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <h4 className="font-arial-black text-sm uppercase text-white group-hover:text-neutral-200">
                                {project.title}
                              </h4>
                              <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-white" />
                            </div>
                            <p className="text-xs text-neutral-400 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. SERVICES */}
                {activeModal === 'SERVICES' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      {SERVICES_DATA.map((srv) => (
                        <div
                          key={srv.id}
                          className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-arial-black text-base uppercase text-white">
                              {srv.title}
                            </h4>
                            <span className="font-mono text-xs text-neutral-400">{srv.code}</span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {srv.description}
                          </p>
                          <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-neutral-300">
                            {srv.deliverables.map((d, i) => (
                              <span key={i} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. CONTACT */}
                {activeModal === 'CONTACT' && (
                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                        Transmission Coordinates
                      </span>
                      <h4 className="font-arial-black text-xl uppercase text-white">
                        Direct Studio Inquiries
                      </h4>
                    </div>

                    <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-neutral-300 font-mono text-sm">
                        <Mail size={16} />
                        <span>studio@noisedept.agency</span>
                      </div>
                      <a
                        href="mailto:studio@noisedept.agency"
                        className="px-3 py-1 bg-white hover:bg-neutral-200 text-black font-arial-black text-xs uppercase rounded transition-colors"
                      >
                        Email
                      </a>
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                        Outposts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                        {STUDIO_OFFICES.map((office) => (
                          <div key={office.city} className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                            <div className="flex items-center gap-1.5 text-white font-bold uppercase mb-1">
                              <MapPin size={12} />
                              {office.city}
                            </div>
                            <span className="text-neutral-400 text-[11px] block">
                              {office.address}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between font-mono text-xs text-neutral-500">
                <span>NOISE DEPT ARCHIVE</span>
                <button
                  onClick={() => {
                    setActiveModal(null);
                    setSelectedProject(null);
                  }}
                  className="hover:text-white uppercase cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
