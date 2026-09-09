import { Project, ServiceItem } from '../types';

export const CREATIONS_DATA: Project[] = [
  {
    id: 'kinetic-void',
    title: 'KINETIC VOID',
    category: 'Spatial',
    client: 'Venice Art Biennale',
    year: '2025',
    tagline: '48-channel spatial acoustical pavilion and dynamic dark-field light sculpture.',
    description: 'An immersive 48-channel spatial acoustical pavilion exploring psychoacoustics and darkness.',
    fullOverview: 'Commissioned for the 60th International Art Exhibition, Kinetic Void combines low-frequency haptic subwoofers with bespoke volumetric lighting rods. The pavilion reacts in real-time to visitor density, modulating atmospheric white noise and resonant binaural tones.',
    deliverables: ['Custom 48.4 Spatial Audio Rig', 'Volumetric Strobe Array', 'Procedural Sound Architecture', 'Exhibition Catalog & Film'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    accolades: 'Golden Lion Nominee / Spatial Design Honor 2025'
  },
  {
    id: 'sonic-monolith',
    title: 'SONIC MONOLITH',
    category: 'Sonic',
    client: 'Aethel Audio Systems',
    year: '2025',
    tagline: 'Comprehensive acoustic branding, hardware signature Chime, and modular UI sound engine.',
    description: 'Hardware brand soundscape and generative audio branding for an audiophile system.',
    fullOverview: 'Noise Dept engineered an unrepeatable sonic DNA for Aethel. Crafting custom analogue oscillator tones recorded at Abbey Road Studios, our team created tactile feedback sounds, physical turn-on motifs, and acoustic brand architecture.',
    deliverables: ['Global Audio Brand Guidelines', 'Hardware Tactile Sound Suite', 'Mastered Soundmark (C-Clef 432Hz)', 'Interactive Web Showcase'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    accolades: 'D&AD Yellow Pencil / Sound Identity'
  },
  {
    id: 'echo-chamber',
    title: 'ECHO CHAMBER',
    category: 'Direction',
    client: 'Maison Noir Edition',
    year: '2024',
    tagline: 'Art direction, physical vinyl fabrication, and brutalist monochrome visual identity.',
    description: 'Full art direction, visual system, and embossed matte packaging for an ambient record.',
    fullOverview: 'Conceived as an antidote to disposable streaming graphics, Echo Chamber paired ultra-heavyweight 200g recycled black carbon vinyl with silk-screened foil typography and a 64-page photobook capturing analog film grain in high-altitude observatory outposts.',
    deliverables: ['Art Direction & Identity', 'Deluxe Boxset Packaging', '35mm Monochrome Photobook', 'Generative Typography System'],
    image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=80',
    accolades: 'Tokyo TDC Annual Book Winner 2024'
  },
  {
    id: 'sub-frequency',
    title: 'SUB-FREQUENCY',
    category: 'Visual',
    client: 'Noveau Digital Pavilion',
    year: '2024',
    tagline: 'Real-time WebGL waveform synthesizer translating environmental acoustics into reactive typography.',
    description: 'Generative interactive installation mapping live urban noise into sculpted typography.',
    fullOverview: 'Operating continuously over 90 days in central Berlin, Sub-Frequency harvested decibel peaks from passing metro trains and traffic, dynamically distorting custom variable typography into undulating liquid silver meshes on a 30-meter LED facade.',
    deliverables: ['Custom WebGL Engine', 'Environmental Acoustic Sensors', 'Variable Kinetic Typography', 'Permanent Archive Exhibition'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    accolades: 'FWA of the Month / Awwwards Site of the Day'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sonic-architecture',
    code: 'SRV-01',
    title: 'Sonic Architecture',
    subtitle: 'Brand Audio & Sound Design',
    description: 'Creating unmistakable audio signatures, product acoustics, haptic feedback, and multi-sensory brand voice that commands emotional resonance.',
    deliverables: ['Acoustic Brand Guidelines', 'Hardware & Software UI Sounds', 'Mastered Soundmarks & Themes', 'Generative Audio Engines'],
    timeline: '3 - 6 Weeks',
    focus: ['Brand Memorability', 'Haptic Cohesion', 'Psychoacoustics']
  },
  {
    id: 'creative-direction',
    code: 'SRV-02',
    title: 'Creative Direction',
    subtitle: 'Identity & Editorial Systems',
    description: 'Uncompromising visual narratives, brutalist & editorial typography, high-concept photography art direction, and physical print fabrication.',
    deliverables: ['Art & Editorial Direction', 'Monochrome Visual Identities', 'Custom Typography Pairing', 'Physical Packaging & Boxsets'],
    timeline: '4 - 8 Weeks',
    focus: ['Tactile Luxury', 'Editorial Rigor', 'Counter-Culture Aesthetic']
  },
  {
    id: 'spatial-installations',
    code: 'SRV-03',
    title: 'Spatial Experience',
    subtitle: 'Audiovisual & Architecture',
    description: 'Large-scale museum pavilions, exhibition spatialization, reactive LED environments, and multi-channel surround sound engineering.',
    deliverables: ['Spatial Audio Calibration (Dolby Atmos/Ambisonics)', 'Interactive Lighting Arrays', 'Sensor-Driven Environmental Control', 'On-Site Technical Supervision'],
    timeline: '6 - 12 Weeks',
    focus: ['Volumetric Immersion', 'Physical Architecture', 'Live Adaptation']
  },
  {
    id: 'creative-technology',
    code: 'SRV-04',
    title: 'Digital & Kinetic Web',
    subtitle: 'WebGL & Generative Systems',
    description: 'Ultra-fast, fluid digital showcases with custom shaders, audio-reactive interfaces, and bespoke motion interactions that elevate digital portfolios.',
    deliverables: ['Custom Interactive WebGL / Shaders', 'Audio-Synchronized Interfaces', 'Headless Portfolio Architectures', 'Bespoke Micro-Interactions'],
    timeline: '4 - 7 Weeks',
    focus: ['60FPS Performance', 'Tactile Motion', 'Algorithmic Aesthetics']
  }
];

export const STUDIO_OFFICES = [
  { city: 'London', address: '14 Shoreditch High St, E1 6PG', tz: 'Europe/London', status: 'Active' },
  { city: 'New York', address: '488 Broadway, Soho, NY 10013', tz: 'America/New_York', status: 'Active' },
  { city: 'Berlin', address: 'Torstraße 112, 10119 Mitte', tz: 'Europe/Berlin', status: 'Active' }
];
