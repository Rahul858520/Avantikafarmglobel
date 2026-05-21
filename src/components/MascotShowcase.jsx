import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLeaf, 
  FaArrowRight, 
  FaShip, 
  FaGlobe, 
  FaTemperatureHigh, 
  FaTractor, 
  FaCheckCircle, 
  FaAward, 
  FaBoxOpen 
} from "react-icons/fa";

const mascotsData = [
  {
    id: "crate",
    name: "Spuddy the Ambassador",
    role: "Brand & Quality Ambassador",
    dept: "Quality",
    image: "/images/potato_crate_trans.png",
    bgText: "QUALITY",
    tagline: "Guaranteed Premium Standard",
    description: "Spuddy is the proud face of Avantika Farm Globe's high-grade potato export line. Sitting atop our signature export crates, Spuddy represents the peak quality, freshness, and global-ready grading that our international buyers count on for processing and retail.",
    theme: {
      accent: "#3E7C17",
      bgGradient: "from-[#8BC34A]/10 to-[#3E7C17]/5",
      badgeBg: "bg-[#3E7C17]/10",
      badgeText: "text-[#3E7C17]",
      border: "border-[#3E7C17]/20",
      glow: "rgba(139, 195, 74, 0.3)",
      shadow: "shadow-[#3E7C17]/10",
      buttonBg: "from-[#3E7C17] to-[#8BC34A]"
    },
    badges: [
      { text: "100% Premium", icon: FaAward },
      { text: "Optical Graded", icon: FaCheckCircle }
    ],
    features: [
      {
        title: "18-21% Starch Content",
        description: "Optimized sugar-to-starch ratios specifically measured for premium French fry and crisp processing plants.",
        icon: FaAward
      },
      {
        title: "Strict Optical Grading",
        description: "Computerized sorting ensures that only uniform size, shape, and thickness reach the shipping stage.",
        icon: FaCheckCircle
      },
      {
        title: "Premium Packaging",
        description: "Packed in moisture-resistant leno mesh bags and high-strength ventilated paper sacks to prevent spoilage.",
        icon: FaBoxOpen
      }
    ],
    stats: [
      { label: "Export Grades", value: "12+ Varieties" },
      { label: "Sorting Accuracy", value: "99.8% Grade A" },
      { label: "Starch Solids", value: "18% - 21% Ratio" }
    ]
  },
  {
    id: "farmer",
    name: "Farmer Spuddy",
    role: "Sourcing & Agriculture Ambassador",
    dept: "Harvest",
    image: "/images/potato_farmer_trans.png",
    bgText: "HARVEST",
    tagline: "Rooted in Sustainable Agriculture",
    description: "Farmer Spuddy represents our direct-to-farm procurement network. Sourced from the most fertile belts of Gujarat, Indore, and Punjab, we work side-by-side with local farmers to ensure sustainable soil practices, optimal fertilizer use, and perfect harvest timing.",
    theme: {
      accent: "#4E342E",
      bgGradient: "from-[#4E342E]/10 to-[#8BC34A]/5",
      badgeBg: "bg-[#4E342E]/10",
      badgeText: "text-[#4E342E]",
      border: "border-[#4E342E]/20",
      glow: "rgba(78, 52, 46, 0.3)",
      shadow: "shadow-[#4E342E]/10",
      buttonBg: "from-[#4E342E] to-[#8BC34A]"
    },
    badges: [
      { text: "Direct Sourced", icon: FaLeaf },
      { text: "Soil Inspected", icon: FaCheckCircle }
    ],
    features: [
      {
        title: "Direct Farm Sourcing",
        description: "100% direct-to-farm contracts bypass middlemen, ensuring fair trade practices and complete batch traceability.",
        icon: FaLeaf
      },
      {
        title: "Soil Health Monitoring",
        description: "Pre-sowing soil diagnostics and water quality tests ensure optimal nutrient content in every tuber.",
        icon: FaCheckCircle
      },
      {
        title: "Sustainable Agriculture",
        description: "GAP (Good Agricultural Practices) certified farming models reducing environmental footprint.",
        icon: FaTractor
      }
    ],
    stats: [
      { label: "Partner Farms", value: "450+ Farms" },
      { label: "Sourcing Belts", value: "Gujarat & Indore" },
      { label: "Soil Rating", value: "Grade A Organic" }
    ]
  },
  {
    id: "captain",
    name: "Captain Spuddy",
    role: "Global Logistics & Shipping Ambassador",
    dept: "Logistics",
    image: "/images/potato_captain_trans.png",
    bgText: "VOYAGE",
    tagline: "Navigating Global Trade Lanes",
    description: "Captain Spuddy guides our state-of-the-art logistics and maritime export processes. Sourcing is only half the battle; maintaining perfect temperature, ventilation, and relative humidity inside cold chains is what keeps our produce crisp across oceans.",
    theme: {
      accent: "#1E3A8A",
      bgGradient: "from-[#1E3A8A]/10 to-[#0EA5E9]/5",
      badgeBg: "bg-[#1E3A8A]/10",
      badgeText: "text-[#1E3A8A]",
      border: "border-[#1E3A8A]/20",
      glow: "rgba(30, 58, 138, 0.3)",
      shadow: "shadow-[#1E3A8A]/10",
      buttonBg: "from-[#1E3A8A] to-[#0EA5E9]"
    },
    badges: [
      { text: "Cold-Chain Ready", icon: FaTemperatureHigh },
      { text: "Export Certified", icon: FaGlobe }
    ],
    features: [
      {
        title: "Reefer Cold Chain",
        description: "Constant monitoring inside advanced refrigerated containers keeps temperatures between 7°C to 10°C.",
        icon: FaTemperatureHigh
      },
      {
        title: "Phytosanitary Guard",
        description: "Compliance with strict international export regulations, certified by APEDA and global food authorities.",
        icon: FaGlobe
      },
      {
        title: "Optimized Transit Routes",
        description: "Real-time GPS and temperature tracking from packaging units to major global ports.",
        icon: FaShip
      }
    ],
    stats: [
      { label: "Global Footprint", value: "20+ Countries" },
      { label: "Transit Freshness", value: "98.7% Index" },
      { label: "Shelf Life", value: "Up to 90 Days" }
    ]
  }
];

const MascotShowcase = () => {
  const [activeMascotId, setActiveMascotId] = useState("crate");

  const activeMascot = mascotsData.find((m) => m.id === activeMascotId) || mascotsData[0];

  return (
    <section 
      id="mascots" 
      className="py-24 bg-[#F8F5EC] relative overflow-hidden"
    >
      {/* Background blobs and lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#8BC34A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#4E342E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#3E7C17] font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#3E7C17]/10 px-4 py-2 rounded-full inline-block border border-[#3E7C17]/20"
          >
            Meet Our Brand Ambassadors
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight uppercase"
          >
            Meet Our <span className="text-[#3E7C17]">Mascot Family</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm text-gray-500 font-bold tracking-widest uppercase"
          >
            Interactive Showcase • Sourcing, Quality & Global Logistics
          </motion.p>
        </div>

        {/* Mascot Interactive Showcase Dashboard */}
        <div className="relative bg-white rounded-[3.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12 md:p-14 overflow-hidden transition-all duration-500">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40" />

          {/* Mascot Selector Tabs */}
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 mb-12 relative z-20 snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {mascotsData.map((mascot) => {
              const isSelected = activeMascotId === mascot.id;
              return (
                <button
                  key={mascot.id}
                  onClick={() => setActiveMascotId(mascot.id)}
                  className={`relative flex items-center gap-3.5 p-4 rounded-3xl border transition-all duration-500 text-left overflow-hidden group cursor-pointer flex-shrink-0 snap-start w-[240px] md:w-auto ${
                    isSelected
                      ? "bg-white border-transparent shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                      : "bg-white/40 border-gray-200/60 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  {/* Selected Backdrop Light */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-to-br -z-10 pointer-events-none opacity-40"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${mascot.theme.accent}0d, ${mascot.theme.accent}1a)`
                      }}
                    />
                  )}
                  
                  {/* Selected Bottom Indicator Line */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-6 right-6 h-1 rounded-t-full -z-10 pointer-events-none"
                      style={{ backgroundColor: mascot.theme.accent }}
                    />
                  )}

                  {/* Thumbnail circular frame */}
                  <div 
                    className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center border-2 transition-all duration-500 bg-gray-50/50 ${
                      isSelected 
                        ? "scale-105 shadow-md" 
                        : "border-transparent group-hover:scale-105"
                    }`}
                    style={{ borderColor: isSelected ? mascot.theme.accent : 'transparent' }}
                  >
                    <img 
                      src={mascot.image} 
                      alt={mascot.name} 
                      className="w-10 h-10 object-contain mt-1 transform group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>

                  {/* Text descriptions */}
                  <div className="min-w-0">
                    <span 
                      className="text-[9px] font-extrabold uppercase tracking-widest block transition-colors duration-300"
                      style={{ color: isSelected ? mascot.theme.accent : '#9CA3AF' }}
                    >
                      {mascot.dept}
                    </span>
                    <span 
                      className={`text-xs sm:text-sm font-extrabold block tracking-tight mt-0.5 transition-colors duration-300 truncate ${
                        isSelected ? "text-[#4E342E]" : "text-gray-500 group-hover:text-[#4E342E]"
                      }`}
                    >
                      {mascot.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Split layout: Mascot on the left, specs/details on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* LEFT COLUMN: POTATO MASCOT PANEL (lg:col-span-6) */}
            <div 
              className="lg:col-span-6 relative rounded-[2.5rem] p-8 sm:p-12 border flex flex-col justify-between min-h-[380px] sm:min-h-[460px] overflow-hidden group transition-all duration-500 z-10"
              style={{
                borderColor: `${activeMascot.theme.accent}15`,
                background: `linear-gradient(135deg, ${activeMascot.theme.accent}05 0%, ${activeMascot.theme.accent}10 100%)`
              }}
            >
              {/* Radial backdrop light */}
              <div 
                className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl transition-all duration-1000 pointer-events-none opacity-50 z-0"
                style={{
                  background: `radial-gradient(circle, ${activeMascot.theme.glow} 0%, transparent 70%)`
                }}
              />

              {/* Faded background typography */}
              <div className="absolute left-8 top-8 pointer-events-none select-none z-0">
                <span 
                  className="text-7xl sm:text-8xl font-black tracking-widest leading-none block select-none uppercase transition-colors duration-500"
                  style={{ color: `${activeMascot.theme.accent}0a` }}
                >
                  {activeMascot.bgText}
                </span>
              </div>

              {/* Content top */}
              <div className="relative z-10 self-start">
                <span 
                  className="text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-md transition-colors duration-500"
                  style={{ backgroundColor: activeMascot.theme.accent }}
                >
                  {activeMascot.dept} Partner
                </span>
              </div>

              {/* Mascot Area */}
              <div className="relative h-80 sm:h-[28rem] lg:h-[30rem] my-4 flex items-center justify-center z-10">
                {/* 3D shadow */}
                <div className="absolute bottom-2 w-[85%] h-6 bg-black/15 rounded-full blur-[12px] z-0" />

                {/* Floating Mascot Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMascot.id}
                    initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotate: 3 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="w-72 sm:w-[22rem] lg:w-[25rem] h-auto object-contain z-10 cursor-pointer filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)] flex items-center justify-center"
                  >
                    <img 
                      src={activeMascot.image} 
                      alt={activeMascot.name} 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Spec Badge 1 */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`${activeMascot.id}-badge-0`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0]
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      y: {
                        repeat: Infinity,
                        duration: 3.5,
                        ease: "easeInOut"
                      },
                      default: { duration: 0.3 }
                    }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-150 shadow-lg flex items-center gap-2.5 z-20"
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full animate-ping" 
                      style={{ backgroundColor: activeMascot.theme.accent }}
                    />
                    <span className="text-[10px] font-extrabold text-[#4E342E] tracking-wider uppercase">
                      {activeMascot.badges[0].text}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Spec Badge 2 */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`${activeMascot.id}-badge-1`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, 10, 0]
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      y: {
                        repeat: Infinity,
                        duration: 4.2,
                        ease: "easeInOut",
                        delay: 0.5
                      },
                      default: { duration: 0.3 }
                    }}
                    className="absolute bottom-20 right-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-150 shadow-lg flex items-center gap-2.5 z-20"
                  >
                    {(() => {
                      const Icon = activeMascot.badges[1].icon;
                      return <Icon className="text-sm animate-pulse" style={{ color: activeMascot.theme.accent }} />;
                    })()}
                    <span className="text-[10px] font-extrabold text-[#4E342E] tracking-wider uppercase">
                      {activeMascot.badges[1].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Attributes Chips */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-gray-200/50">
                <span className="text-[10px] font-bold text-[#4E342E] bg-white border border-gray-150 px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Gujarat / Indore Belts
                </span>
                <span className="text-[10px] font-bold text-[#4E342E] bg-white border border-gray-150 px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {activeMascot.id === 'captain' ? 'Global Reefer Transit' : 'Strict Optical Grading'}
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTENT, DETAILS, STATS & CTA (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8 sm:gap-10">
              
              <div>
                <span 
                  className={`font-extrabold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-4 transition-colors duration-500 ${activeMascot.theme.badgeBg} ${activeMascot.theme.badgeText}`}
                >
                  {activeMascot.role}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#4E342E] tracking-tight transition-colors duration-300">
                  Meet {activeMascot.name}
                </h3>
                <p 
                  className="text-xs sm:text-sm font-extrabold tracking-widest uppercase mt-2 transition-colors duration-300"
                  style={{ color: activeMascot.theme.accent }}
                >
                  {activeMascot.tagline}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base transition-all duration-300">
                  {activeMascot.description}
                </p>
              </div>

              {/* Core Features List */}
              <div className="space-y-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMascot.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {activeMascot.features.map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={idx} className="flex gap-4 items-start group/item">
                          <div 
                            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 border transition-all duration-300 group-hover/item:scale-110 shadow-sm"
                            style={{
                              backgroundColor: `${activeMascot.theme.accent}12`,
                              borderColor: `${activeMascot.theme.accent}33`,
                              color: activeMascot.theme.accent
                            }}
                          >
                            <FeatureIcon className="text-base" />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#4E342E] tracking-tight transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-150">
                {activeMascot.stats.map((stat, idx) => (
                  <motion.div
                    key={`${activeMascot.id}-stat-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-[#F8F5EC]/70 backdrop-blur-md border border-gray-200/40 p-4 rounded-2xl text-center sm:text-left hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-[9px] sm:text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block">
                      {stat.label}
                    </span>
                    <span 
                      className="text-sm sm:text-base font-extrabold mt-1 block transition-colors duration-300"
                      style={{ color: activeMascot.theme.accent }}
                    >
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA button */}
              <div className="pt-4 self-start">
                <a
                  href="#products"
                  className="flex items-center gap-3 text-white px-8 py-4 rounded-full font-extrabold text-base shadow-lg transition-all hover:scale-105 group"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${activeMascot.theme.accent}, ${activeMascot.id === 'captain' ? '#0EA5E9' : '#8BC34A'})`,
                    boxShadow: `0 10px 25px ${activeMascot.theme.glow}`
                  }}
                >
                  <span>Explore Products</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MascotShowcase;
