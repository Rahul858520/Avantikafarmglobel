
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaCheckCircle, FaUserFriends, FaShieldAlt, FaSeedling } from 'react-icons/fa';

const VisionMission = () => {
  const missionPoints = [
    { icon: FaSeedling, title: 'Direct Sourcing', desc: 'Direct sourcing from trusted farmers to ensure freshness and fair trade.' },
    { icon: FaCheckCircle, title: 'Strict Quality Protocols', desc: 'Scientific grading and advanced optical sorting to guarantee export-grade produce.' },
    { icon: FaShieldAlt, title: 'Safe & Compliant Exports', desc: 'Adhering strictly to international phytosanitary and packaging standards.' },
    { icon: FaUserFriends, title: 'Long-Term Buyer Relationships', desc: 'Fostering trust through transparent communication and trial shipment flexibility.' },
  ];

  return (
    <section className="py-24 bg-[#4E342E] relative overflow-hidden bg-soil-texture">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#8BC34A] font-bold text-sm tracking-widest uppercase bg-[#8BC34A]/20 px-4 py-1.5 rounded-full border border-[#8BC34A]/30">
            Our Purpose & Ambition
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
            Vision & <span className="text-[#8BC34A]">Mission</span>
          </h2>
          <p className="mt-4 text-lg text-[#F8F5EC]/80 font-light">
            Guiding our journey from the fertile soils of India to supermarket shelves across the globe.
          </p>
        </motion.div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#3E7C17] to-[#1b380a] p-10 rounded-3xl shadow-2xl border border-[#8BC34A]/40 flex flex-col justify-center relative overflow-hidden group hover:shadow-emerald-900/50 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#8BC34A]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#8BC34A] mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <FaEye className="text-3xl" />
            </div>
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-6">Our Vision</h3>
            <blockquote className="text-xl sm:text-2xl text-[#F8F5EC] font-medium italic leading-relaxed relative z-10">
              “To become a globally trusted Indian agri-export brand delivering premium-quality fresh produce with consistency and transparency.”
            </blockquote>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-[#8BC34A] animate-ping" />
              <span className="text-sm font-bold text-[#8BC34A] uppercase tracking-wider">Global Excellence</span>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col justify-between relative overflow-hidden group hover:border-[#8BC34A]/50 transition-all duration-500 hover:-translate-y-2"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#8BC34A]/20 border border-[#8BC34A]/40 flex items-center justify-center text-[#8BC34A] shadow-lg group-hover:scale-110 transition-transform">
                  <FaBullseye className="text-3xl" />
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">Our Mission</h3>
              </div>

              {/* Mission Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-black/30 border border-white/10 p-6 rounded-2xl hover:border-[#8BC34A]/40 transition-all hover:bg-black/50 group/item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3E7C17]/40 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] mb-4 group-hover/item:scale-110 transition-transform">
                      <point.icon className="text-xl" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{point.title}</h4>
                    <p className="text-[#F8F5EC]/70 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-[#F8F5EC]/60 font-medium">Committed to sustainable agricultural global trade</span>
              <span className="text-xs font-bold text-[#8BC34A] uppercase tracking-widest bg-[#8BC34A]/10 px-3 py-1 rounded-full border border-[#8BC34A]/20">Est. 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
