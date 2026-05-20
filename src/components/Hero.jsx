import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRight, FaPhoneAlt, FaArrowDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/herosection/hero1.jpeg";
import hero2 from "../assets/herosection/hero2.jpeg";
import hero3 from "../assets/herosection/hero3.jpeg";

const slides = [
  {
    image: hero1,
    title: "Premium Fresh Potato Harvesting",
    subtitle: "Global Processing & Table Exports",
  },
  {
    image: hero2,
    title: "Export-Grade Red Onion Grading",
    subtitle: "Sourced from Nashik Garva Belts",
  },
  {
    image: hero3,
    title: "Pristine Lady Rosetta Potatoes",
    subtitle: "High Dry Matter for Global Snack Brands",
  },
];

const Hero = ({ onOpenInquiry }) => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[85vh] lg:min-h-[80vh] w-full overflow-hidden bg-black flex items-center justify-center py-24 lg:py-32"
      >
        {/* Background Slider */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-10000 relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Premium Multi-layer Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Active Slide Indicator Overlay */}
                  <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-end text-right bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-2xl">
                    <span className="text-[10px] text-[#8BC34A] uppercase tracking-widest font-extrabold block mb-0.5 animate-pulse">
                      Live Infrastructure View
                    </span>
                    <h4 className="text-lg font-extrabold text-white tracking-tight">
                      {slide.title}
                    </h4>
                    <p className="text-xs text-[#F8F5EC]/70 font-medium mt-0.5">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-black/50 border border-[#8BC34A]/50 backdrop-blur-xl px-5 py-2 rounded-full mb-6 shadow-[0_0_30px_rgba(139,195,74,0.25)]"
          >
            <span className="w-3 h-3 rounded-full bg-[#8BC34A] animate-ping flex-shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold text-[#8BC34A] tracking-wider uppercase">
              Four Decades of Agricultural Expertise. One Global Export Vision.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none max-w-5xl"
          >
            Premium Indian{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BC34A] via-[#aed581] to-[#3E7C17]">
              Potatoes & Onions
            </span>{" "}
            Exported Worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#F8F5EC]/90 font-light max-w-3xl leading-relaxed"
          >
            Rooted in Experience. Growing Globally. Backed by the 40+ year
            legacy of Shree Mangalmurti Traders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
          >
            <a
              href="#products"
              className="flex items-center gap-3 bg-gradient-to-r from-[#3E7C17] via-[#558b2f] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white px-8 py-4 rounded-full font-extrabold text-base sm:text-lg shadow-[0_10px_30px_rgba(62,124,23,0.4)] hover:shadow-[0_15px_40px_rgba(139,195,74,0.6)] transition-all hover:scale-105 group"
            >
              <span>Explore Products</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-extrabold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <FaPhoneAlt className="text-[#8BC34A] group-hover:rotate-12 transition-transform" />
              <span>Contact Us</span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 flex flex-col items-center lg:items-start gap-3 cursor-pointer group"
            onClick={() => {
              const nextSection = document.getElementById("potato-scroll");
              if (nextSection)
                nextSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#8BC34A] tracking-widest uppercase">
              <span>Scroll to discover our journey</span>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-10 h-10 bg-[#8BC34A]/20 border border-[#8BC34A]/50 rounded-full flex items-center justify-center text-[#8BC34A] group-hover:bg-[#8BC34A] group-hover:text-white transition-colors shadow-[0_0_20px_rgba(139,195,74,0.3)]"
            >
              <FaArrowDown className="text-sm" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
