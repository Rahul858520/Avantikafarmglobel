
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { FaArrowRight, FaPhoneAlt, FaAward, FaUserCheck, FaShippingFast, FaSeedling } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop',
    title: 'Sprawling Indian Agri Farms',
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    title: 'Global Export Containers & Logistics',
  },
  {
    image: 'https://images.unsplash.com/photo-1615451664124-749e491cbb67?q=80&w=2000&auto=format&fit=crop',
    title: 'State-of-the-Art Cold Storage & Grading',
  },
  {
    image: 'https://images.unsplash.com/photo-1592982537447-67582417a9c3?q=80&w=2000&auto=format&fit=crop',
    title: 'Modern Mechanized Harvesting',
  },
];

const stats = [
  { icon: FaAward, title: '40+ Years Experience', desc: 'Legacy since 1985' },
  { icon: FaSeedling, title: 'Export Quality Products', desc: '100% Certified Produce' },
  { icon: FaUserCheck, title: 'Trusted Farmer Network', desc: 'Direct Sourcing Model' },
  { icon: FaShippingFast, title: 'Global Supply Capability', desc: 'Timely Delivery Worldwide' },
];

const Hero = ({ onOpenInquiry }) => {
  return (
    <>
      <section id="home" className="relative min-h-[75vh] lg:min-h-[70vh] w-full overflow-hidden bg-black flex items-center justify-center py-24 lg:py-32">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-10000"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#8BC34A]/20 border border-[#8BC34A]/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8BC34A] animate-ping" />
            <span className="text-xs sm:text-sm font-bold text-[#8BC34A] tracking-wider uppercase">
              Four Decades of Agricultural Expertise. One Global Export Vision.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl"
          >
            Premium Indian <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BC34A] to-[#3E7C17]">Potatoes & Onions</span> Exported Worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-[#F8F5EC]/90 font-light max-w-2xl"
          >
            Rooted in Experience. Growing Globally. Backed by the 40+ year legacy of Shree Mangalmurti Traders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5"
          >
            <a
              href="#products"
              className="flex items-center gap-3 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>Explore Products</span>
              <FaArrowRight />
            </a>
            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <FaPhoneAlt className="text-[#8BC34A]" />
              <span>Contact Us</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Export Stats Cards (Moved Under Hero Section) */}
      <section className="bg-[#4E342E] py-8 border-b border-[#8BC34A]/20 shadow-xl relative z-20 bg-soil-texture">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/15 flex items-center gap-5 hover:border-[#8BC34A] transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-[#3E7C17]/40 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">{stat.title}</h4>
                  <p className="text-[#F8F5EC]/70 text-xs sm:text-sm mt-0.5">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
