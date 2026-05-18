import { useEffect, useRef, useState } from 'react';

const PEEL_FRAMES = 20;
const CUT_FRAMES = 20;

// Preload helper
const preloadImages = (paths) => {
  paths.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

export default function PotatoScrollSection() {
  const sectionRef = useRef(null);
  const [currentSrc, setCurrentSrc] = useState('/images/potato_hero.png');
  const [phase, setPhase] = useState('hero'); // 'hero' | 'peel' | 'cut' | 'steam'
  const [textVisible, setTextVisible] = useState(false);

  const peelPaths = Array.from({ length: PEEL_FRAMES }, (_, i) =>
    `/images/peel_${String(i + 1).padStart(2, '0')}.png`
  );
  const cutPaths = Array.from({ length: CUT_FRAMES }, (_, i) =>
    `/images/cut_${String(i + 1).padStart(2, '0')}.png`
  );

  useEffect(() => {
    // Preload all frames immediately
    preloadImages(peelPaths);
    preloadImages(cutPaths);

    let ctx;
    let timers = [];

    // Dynamic GSAP import (avoids SSR issues, works cleanly with Vite)
    import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom', // Scrubs exactly across the 500vh section height
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;

              // 0.0 to 0.15: Hero
              if (progress < 0.15) {
                setPhase('hero');
                setCurrentSrc('/images/potato_hero.png');
                setTextVisible(progress > 0.02);
              } 
              // 0.15 to 0.55: Peel sequence (20 frames)
              else if (progress >= 0.15 && progress < 0.55) {
                const subProgress = (progress - 0.15) / 0.40;
                const idx = Math.min(Math.floor(subProgress * PEEL_FRAMES), PEEL_FRAMES - 1);
                setPhase('peel');
                setCurrentSrc(peelPaths[idx]);
                setTextVisible(true);
              } 
              // 0.55 to 0.90: Cut sequence (20 frames)
              else if (progress >= 0.55 && progress < 0.90) {
                const subProgress = (progress - 0.55) / 0.35;
                const idx = Math.min(Math.floor(subProgress * CUT_FRAMES), CUT_FRAMES - 1);
                setPhase('cut');
                setCurrentSrc(cutPaths[idx]);
                setTextVisible(true);
              } 
              // 0.90 to 1.0: Steam / Reveal
              else {
                setPhase(progress > 0.95 ? 'steam' : 'cut');
                setCurrentSrc(cutPaths[CUT_FRAMES - 1]);
                setTextVisible(true);
              }
            }
          });
        }, sectionRef);

        // Force refresh after DOM settles and loading screen unmounts
        timers.push(setTimeout(() => ScrollTrigger.refresh(), 300));
        timers.push(setTimeout(() => ScrollTrigger.refresh(), 1000));
        timers.push(setTimeout(() => ScrollTrigger.refresh(), 2500));
      });
    });

    return () => {
      if (ctx) ctx.revert();
      timers.forEach(t => clearTimeout(t));
    };
  }, []);

  // Phase-based contextual text
  const phaseText = {
    hero: {
      headline: 'Each Potato Has Its Own Story',
      body: 'We source directly from India\'s most trusted farmer networks across Nashik, Agra, and Gujarat regions.',
    },
    peel: {
      headline: 'Graded. Sorted. Perfected.',
      body: 'Every lot is graded for size, skin quality, moisture, firmness, and shelf life before dispatch.',
    },
    cut: {
      headline: 'From Farm to Global Table.',
      body: 'Packed and shipped to global standards. Fresh, safe, and on time — every single shipment.',
    },
    steam: {
      headline: 'Taste the Difference.',
      body: 'Crispy golden fries start with the right potato. See our full product portfolio below.',
    },
  };

  const text = phaseText[phase] || phaseText.hero;

  return (
    <section id="potato-scroll" ref={sectionRef} className="relative h-[500vh] bg-[#F8F5EC] w-full">
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#F8F5EC]">
        {/* Background transition: cream → warm golden on 'cut' phase */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${phase === 'cut' || phase === 'steam' ? 'bg-[#F8F5EC]/40 bg-gradient-to-br from-[#F8F5EC] via-[#f4eedb] to-[#e8e1cf]' : 'bg-[#F8F5EC]'}`} />

        {/* Decorative left stripe (matches brochure motif) */}
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 flex flex-col z-20">
          <div className="h-1/3 bg-[#3E7C(17)]" />
          <div className="h-1/3 bg-[#8BC34A]" />
          <div className="h-1/3 bg-[#4E342E]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-16">
          {/* Potato image — left side */}
          <div className="relative flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[70vh] w-full max-w-[600px] mx-auto">
            {/* Shadow base */}
            <img 
              src="/images/shadow_base.png" 
              alt="" 
              className="absolute bottom-4 sm:bottom-8 lg:bottom-12 w-[70%] max-w-[400px] object-contain opacity-70 transform -translate-x-1/2 left-1/2 pointer-events-none transition-opacity duration-500" 
            />

            {/* Main potato / fries image */}
            <img 
              src={currentSrc} 
              alt="Avantika Premium Potato Sequence" 
              className="absolute inset-0 w-full h-full object-contain filter drop-shadow-2xl transition-all duration-75 pointer-events-none select-none" 
            />

            {/* Steam overlay — only on 'steam' phase */}
            {phase === 'steam' && (
              <img 
                src="/images/steam_overlay.png" 
                alt="Steam" 
                className="absolute inset-0 w-full h-full object-contain animate-pulse opacity-80 pointer-events-none select-none transition-opacity duration-1000" 
              />
            )}
          </div>

          {/* Text — right side */}
          <div className="flex flex-col justify-center text-center lg:text-left px-4 sm:px-0">
            {/* Section eyebrow label */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8BC34A] animate-ping" />
              <span className="text-xs sm:text-sm font-extrabold text-[#8BC34A] tracking-widest uppercase">
                {phase === 'hero' ? 'Our Sourcing' :
                 phase === 'peel' ? 'Quality Control' :
                 phase === 'cut' ? 'Export Ready' : 'Product Reveal'}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4E342E] tracking-tight leading-none mb-6 transition-all duration-500 transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {text.headline}
            </h2>

            <p className={`text-lg sm:text-xl text-[#1A1A1A]/80 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 transition-all duration-500 delay-100 transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {text.body}
            </p>

            {/* Progress dots */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {['hero', 'peel', 'cut', 'steam'].map((p) => (
                <div 
                  key={p} 
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${phase === p ? 'bg-[#3E7C17] w-8 shadow-[0_0_10px_rgba(62,124,23,0.5)]' : 'bg-[#8BC34A]/30'}`} 
                />
              ))}
            </div>

            {/* CTA — only on steam/final phase */}
            {phase === 'steam' && (
              <div className="pt-4 animate-fade-in">
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3E7C17] via-[#558b2f] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white px-8 py-4 rounded-full font-extrabold text-base sm:text-lg shadow-[0_10px_30px_rgba(62,124,23,0.4)] hover:shadow-[0_15px_40px_rgba(139,195,74,0.6)] transition-all hover:scale-105 group"
                >
                  <span>Explore Our Products</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Vertical scroll progress bar — right edge */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-1/3 w-1 bg-[#4E342E]/10 rounded-full hidden sm:block z-20 overflow-hidden">
          <div 
            className="w-full bg-[#8BC34A] transition-all duration-300" 
            style={{ 
              height: `${phase === 'hero' ? '25%' : phase === 'peel' ? '50%' : phase === 'cut' ? '75%' : '100%'}` 
            }} 
          />
        </div>
      </div>
    </section>
  );
}
