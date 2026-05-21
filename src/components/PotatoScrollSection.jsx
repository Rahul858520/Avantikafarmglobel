import { useEffect, useRef, useState } from "react";

const PEEL_FRAMES = 20;
const CUT_FRAMES = 20;

// Dynamic, phase-based shadow morphing on canvas
const drawDynamicShadow = (ctx, cx, cy, phase, progress) => {
  ctx.save();
  
  let shadowWidth = 240;
  let shadowHeight = 20;
  let shadowOpacity = 0.20;
  
  if (phase === "hero") {
    shadowWidth = 240;
  } else if (phase === "peel") {
    const t = (progress - 0.15) / 0.4;
    shadowWidth = 240 - t * 25;
  } else if (phase === "cut") {
    const t = (progress - 0.55) / 0.35;
    shadowWidth = 215 - t * 45;
    shadowHeight = 18 - t * 3;
    shadowOpacity = 0.18 - t * 0.04;
  } else if (phase === "steam") {
    // Multi-shadow for scattered fries heap
    ctx.fillStyle = "rgba(0, 0, 0, 0.13)";
    ctx.filter = "blur(6px)";
    
    // Left fry shadow
    ctx.beginPath();
    ctx.ellipse(cx - 30, cy, 60, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Right fry shadow
    ctx.beginPath();
    ctx.ellipse(cx + 40, cy + 2, 70, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Center fry shadow
    ctx.beginPath();
    ctx.ellipse(cx, cy - 1, 80, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
    return;
  }

  ctx.fillStyle = `rgba(0, 0, 0, ${shadowOpacity})`;
  ctx.filter = "blur(8px)";
  ctx.beginPath();
  ctx.ellipse(cx, cy, shadowWidth / 2, shadowHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
};

export default function PotatoScrollSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const loadedImagesRef = useRef({});
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);

  const [phase, setPhase] = useState("hero"); // 'hero' | 'peel' | 'cut' | 'steam'
  const [textVisible, setTextVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const peelPaths = Array.from(
    { length: PEEL_FRAMES },
    (_, i) => `/images/peel_${String(i + 1).padStart(2, "0")}.png`
  );
  const cutPaths = Array.from(
    { length: CUT_FRAMES },
    (_, i) => `/images/cut_${String(i + 1).padStart(2, "0")}.png`
  );
  
  const allPaths = ["/images/potato_hero.png", ...peelPaths, ...cutPaths];

  const scrollStateRef = useRef({
    progress: 0,
    phase: "hero",
    currentSrc: "/images/potato_hero.png",
    frameIdx: 0,
    lastFrameIdx: 0,
    shakeProgress: 0,
  });

  const spawnParticles = (type, count) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cx = canvas.width / 2 / (window.devicePixelRatio || 1);
    const cy = canvas.height / 2 / (window.devicePixelRatio || 1);

    for (let i = 0; i < count; i++) {
      if (type === "peel") {
        // Falling organic brown peel shards
        particlesRef.current.push({
          x: cx + (Math.random() - 0.5) * 160,
          y: cy + (Math.random() - 0.5) * 100,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * -3 - 2, // Bounce upwards slightly
          size: Math.random() * 8 + 6,
          color: Math.random() > 0.55 ? "#8D6E63" : "#5D4037",
          opacity: 1,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.12,
          gravity: 0.15,
          friction: 0.98,
          type: "peel",
          life: 1.0,
          decay: Math.random() * 0.015 + 0.01,
        });
      } else if (type === "starch") {
        // Golden sparks flying out on cuts
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 4;
        particlesRef.current.push({
          x: cx + (Math.random() - 0.5) * 50,
          y: cy + (Math.random() - 0.5) * 50,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: Math.random() * 3 + 2.5,
          color: ["#FBC02D", "#FFEB3B", "#FFF59D", "#FFFDE7"][Math.floor(Math.random() * 4)],
          opacity: 1,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.25,
          gravity: 0.1,
          friction: 0.93,
          type: "starch",
          life: 1.0,
          decay: Math.random() * 0.02 + 0.015,
        });
      }
    }
  };

  // Preload all assets in memory
  useEffect(() => {
    let loadedCount = 0;
    allPaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedCount++;
        loadedImagesRef.current[path] = img;
        if (loadedCount === allPaths.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === allPaths.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // GSAP ScrollTrigger Sequence
  useEffect(() => {
    if (!imagesLoaded) return;

    let ctx;
    let timers = [];

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const state = scrollStateRef.current;
              state.progress = progress;

              let currentSrc = "/images/potato_hero.png";
              let phase = "hero";
              let frameIdx = 0;

              if (progress < 0.15) {
                phase = "hero";
                currentSrc = "/images/potato_hero.png";
                frameIdx = 0;
                setTextVisible(progress > 0.02);
              } else if (progress >= 0.15 && progress < 0.55) {
                const subProgress = (progress - 0.15) / 0.4;
                const idx = Math.min(
                  Math.floor(subProgress * PEEL_FRAMES),
                  PEEL_FRAMES - 1
                );
                phase = "peel";
                currentSrc = peelPaths[idx];
                frameIdx = idx + 1;
                setTextVisible(true);
              } else if (progress >= 0.55 && progress < 0.9) {
                const subProgress = (progress - 0.55) / 0.35;
                const idx = Math.min(
                  Math.floor(subProgress * CUT_FRAMES),
                  CUT_FRAMES - 1
                );
                phase = "cut";
                currentSrc = cutPaths[idx];
                frameIdx = idx + PEEL_FRAMES + 1;
                setTextVisible(true);
              } else {
                const isSteam = progress > 0.95;
                phase = isSteam ? "steam" : "cut";
                currentSrc = cutPaths[CUT_FRAMES - 1];
                frameIdx = CUT_FRAMES + PEEL_FRAMES + 1;
                setTextVisible(true);
              }

              // Detect frame transitions during scrubbing
              if (frameIdx !== state.frameIdx) {
                if (phase === "cut" && frameIdx > state.frameIdx) {
                  state.shakeProgress = 1.0; // Trigger camera shake
                  spawnParticles("starch", 12); // Starch burst
                } else if (phase === "peel" && frameIdx > state.frameIdx) {
                  spawnParticles("peel", 6); // Peels peeling off
                }
              }

              state.phase = phase;
              state.currentSrc = currentSrc;
              state.frameIdx = frameIdx;
              setPhase(phase);
            },
          });
        }, sectionRef);

        timers.push(setTimeout(() => ScrollTrigger.refresh(), 300));
        timers.push(setTimeout(() => ScrollTrigger.refresh(), 1000));
      });
    });

    return () => {
      if (ctx) ctx.revert();
      timers.forEach((t) => clearTimeout(t));
    };
  }, [imagesLoaded]);

  // Canvas Continuous Render Loop (60 FPS particles, wiggles, and float)
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const ctx = canvas.getContext("2d");
      if (!ctx || rect.width === 0 || rect.height === 0) {
        animationFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);

      const state = scrollStateRef.current;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      
      // 1. Draw dynamic shadow
      drawDynamicShadow(ctx, cx, cy + (rect.height * 0.28), state.phase, state.progress);

      // 2. Wiggle/Shake calculations
      let shakeX = 0;
      let shakeY = 0;
      if (state.shakeProgress > 0) {
        const amp = state.shakeProgress * 8;
        shakeX = (Math.random() - 0.5) * amp;
        shakeY = (Math.random() - 0.5) * amp;
        state.shakeProgress -= 0.08; // Decay shake
      }

      // 3. Hover Floating simulation
      const time = performance.now();
      let floatY = Math.sin(time / 800) * 5;
      if (state.phase === "cut") {
        floatY = Math.sin(time / 800) * 1.5; // Dampen hover while slicing
      }

      // 4. Zoom factor calculations
      let zoom = 1.0;
      if (state.phase === "hero") {
        zoom = 1.04 - (state.progress * 0.2); 
      } else if (state.phase === "steam") {
        const t = Math.max(0, (state.progress - 0.9) / 0.1);
        zoom = 1.0 + t * 0.08; // Slow cinematic zoom-in on steam phase
      }

      // 5. Draw active image frame
      const activeImg = loadedImagesRef.current[state.currentSrc];
      if (activeImg) {
        ctx.save();
        ctx.translate(cx + shakeX, cy + shakeY + floatY);
        ctx.scale(zoom, zoom);
        
        const aspect = activeImg.width / activeImg.height;
        let drawWidth = rect.width * 0.85;
        let drawHeight = drawWidth / aspect;
        if (drawHeight > rect.height * 0.85) {
          drawHeight = rect.height * 0.85;
          drawWidth = drawHeight * aspect;
        }

        ctx.drawImage(activeImg, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
        ctx.restore();
      }

      // 6. Draw and Update Active Particles (Peels, Starch, Salt, Herbs)
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity || 0;
        p.vx *= p.friction || 1;
        p.vy *= p.friction || 1;
        p.rotation += p.rotSpeed || 0;
        p.life -= p.decay || 0.01;

        if (p.life <= 0 || p.y > rect.height + 20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.life * p.opacity);

        if (p.type === "peel") {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size / 2.2, 0.4, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "starch") {
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "salt") {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else if (p.type === "herb") {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.height / 2, p.size, p.height);
        }

        ctx.restore();
      }

      // 7. Ambient seasoning falling in Steam Phase
      if (state.phase === "steam") {
        // Continuous salt crystals
        if (Math.random() < 0.14) {
          particles.push({
            x: Math.random() * rect.width,
            y: -10,
            vx: (Math.random() - 0.5) * 0.6,
            vy: Math.random() * 1.5 + 1.2,
            size: Math.random() * 1.8 + 1.6,
            color: "#FFFFFF",
            opacity: 0.95,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.05,
            gravity: 0,
            friction: 1.0,
            type: "salt",
            life: 1.0,
            decay: 0.005,
          });
        }
        // Continuous green herbs flakes (parsley)
        if (Math.random() < 0.08) {
          particles.push({
            x: Math.random() * rect.width,
            y: -10,
            vx: (Math.random() - 0.5) * 1.0,
            vy: Math.random() * 1.1 + 0.7,
            size: Math.random() * 3 + 2,
            height: Math.random() * 4 + 4,
            color: ["#4CAF50", "#2E7D32", "#81C784", "#66BB6A"][Math.floor(Math.random() * 4)],
            opacity: 0.88,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.08,
            gravity: 0.015,
            friction: 0.99,
            type: "herb",
            life: 1.0,
            decay: 0.004,
          });
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [imagesLoaded]);

  // Phase texts
  const phaseText = {
    hero: {
      headline: "Each Potato Has Its Own Story",
      body: "We source directly from India's most trusted farmer networks across Nashik, Agra, and Gujarat regions.",
    },
    peel: {
      headline: "Graded. Sorted. Perfected.",
      body: "Every lot is graded for size, skin quality, moisture, firmness, and shelf life before dispatch.",
    },
    cut: {
      headline: "From Farm to Global Table.",
      body: "Packed and shipped to global standards. Fresh, safe, and on time — every single shipment.",
    },
    steam: {
      headline: "Taste the Difference.",
      body: "Crispy golden fries start with the right potato. See our full product portfolio below.",
    },
  };

  const text = phaseText[phase] || phaseText.hero;

  return (
    <section
      id="potato-scroll"
      ref={sectionRef}
      className="relative h-[500vh] bg-[#F8F5EC] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#F8F5EC]">
        {/* Dynamic cream → warm golden transition background */}
        <div
          className={`absolute inset-0 transition-colors duration-1000 ${phase === "cut" || phase === "steam" ? "bg-[#F8F5EC]/40 bg-gradient-to-br from-[#F8F5EC] via-[#f4eedb] to-[#e8e1cf]" : "bg-[#F8F5EC]"}`}
        />

        {/* Decorative left stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 flex flex-col z-20">
          <div className="h-1/3 bg-[#3E7C17]" />
          <div className="h-1/3 bg-[#8BC34A]" />
          <div className="h-1/3 bg-[#4E342E]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-16">
          
          {/* Potato Canvas — left side */}
          <div className="relative flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[70vh] w-full max-w-[600px] mx-auto">
            
            {!imagesLoaded ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-[#8BC34A] border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading Sequence...</span>
              </div>
            ) : (
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain pointer-events-none select-none z-10"
              />
            )}

            {/* Wispy Hot Steam Animation Effect (layered over canvas) */}
            {phase === "steam" && (
              <div className="absolute inset-0 z-20 pointer-events-none select-none flex items-center justify-center">
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes riseAndFade {
                    0% {
                      transform: translateY(20px) scaleX(0.85);
                      opacity: 0;
                    }
                    15% {
                      opacity: 0.5;
                    }
                    50% {
                      transform: translateY(-20px) scaleX(1.1) skewX(2deg);
                      opacity: 0.35;
                    }
                    100% {
                      transform: translateY(-80px) scaleX(0.7) skewX(-2deg);
                      opacity: 0;
                    }
                  }
                  .steam-path-1 {
                    animation: riseAndFade 4.8s ease-in-out infinite;
                  }
                  .steam-path-2 {
                    animation: riseAndFade 3.9s ease-in-out infinite 0.9s;
                  }
                  .steam-path-3 {
                    animation: riseAndFade 5.5s ease-in-out infinite 1.8s;
                  }
                  .steam-path-4 {
                    animation: riseAndFade 4.4s ease-in-out infinite 2.7s;
                  }
                `}} />
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-[60%] h-[80%] overflow-visible filter blur-[5px] opacity-80"
                >
                  <path 
                    d="M 35 85 Q 22 55 38 25 T 28 0" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.55)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    className="steam-path-1"
                  />
                  <path 
                    d="M 50 90 Q 62 60 48 30 T 58 0" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.65)" 
                    strokeWidth="4.5" 
                    strokeLinecap="round" 
                    className="steam-path-2"
                  />
                  <path 
                    d="M 65 85 Q 52 50 68 20 T 58 0" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.55)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    className="steam-path-3"
                  />
                  <path 
                    d="M 43 90 Q 32 65 45 35 T 35 5" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.5)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    className="steam-path-4"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Text — right side */}
          <div className="flex flex-col justify-center text-center lg:text-left px-4 sm:px-0">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8BC34A] animate-ping" />
              <span className="text-xs sm:text-sm font-extrabold text-[#8BC34A] tracking-widest uppercase">
                {phase === "hero"
                  ? "Our Sourcing"
                  : phase === "peel"
                    ? "Quality Control"
                    : phase === "cut"
                    ? "Export Ready"
                    : "Product Reveal"}
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4E342E] tracking-tight leading-none mb-6 transition-all duration-500 transform ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {text.headline}
            </h2>

            <p
              className={`text-lg sm:text-xl text-[#1A1A1A]/80 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 transition-all duration-500 delay-100 transform ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {text.body}
            </p>

            {/* Progress dots */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {["hero", "peel", "cut", "steam"].map((p) => (
                <div
                  key={p}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${phase === p ? "bg-[#3E7C17] w-8 shadow-[0_0_10px_rgba(62,124,23,0.5)]" : "bg-[#8BC34A]/30"}`}
                />
              ))}
            </div>

            {/* CTA — only on steam/final phase */}
            {phase === "steam" && (
              <div className="pt-4 animate-fade-in">
                <a
                  href="#products"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3E7C17] via-[#558b2f] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white px-8 py-4 rounded-full font-extrabold text-base sm:text-lg shadow-[0_10px_30px_rgba(62,124,23,0.4)] hover:shadow-[0_15px_40px_rgba(139,195,74,0.6)] transition-all hover:scale-105 group"
                >
                  <span>Explore Our Products</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
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
              height: `${phase === "hero" ? "25%" : phase === "peel" ? "50%" : phase === "cut" ? "75%" : "100%"}`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
