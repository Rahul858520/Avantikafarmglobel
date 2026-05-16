import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHistory, FaLeaf, FaTemperatureHigh, FaHandshake } from 'react-icons/fa';

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    farmers: 0,
    exportVolume: 0,
    countries: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        experience: prev.experience < 40 ? prev.experience + 1 : 40,
        farmers: prev.farmers < 1500 ? prev.farmers + 50 : 1500,
        exportVolume: prev.exportVolume < 25000 ? prev.exportVolume + 1000 : 25000,
        countries: prev.countries < 25 ? prev.countries + 1 : 25,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: FaLeaf, title: 'Farmer-Network Sourcing', desc: 'Direct sourcing from over 1,500 dedicated farmers.' },
    { icon: FaCheckCircle, title: 'Scientific Grading', desc: 'Automated optical sorting & precision manual inspection.' },
    { icon: FaTemperatureHigh, title: 'Controlled Temp Storage', desc: 'Advanced cold storage maintaining perfect shelf-life.' },
    { icon: FaHandshake, title: 'Transparent Trade Practices', desc: 'Clear documentation, fair pricing & ethical business.' },
    { icon: FaHistory, title: 'Reliable Export Volumes', desc: 'Steady round-the-year supply capabilities.' },
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F5EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#3E7C17] font-bold text-sm tracking-widest uppercase bg-[#3E7C17]/10 px-4 py-1.5 rounded-full">
            Legacy Meets Global Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight">
            About <span className="text-[#3E7C17]">Avantika Farm Globe</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-normal leading-relaxed">
            Avantika Farm Globe represents the new generation of Indian agri-exports, where 40+ years of legacy expertise meets global standards of quality, consistency, and transparency.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Imagery & Counters */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1592982537447-67582417a9c3?q=80&w=1200&auto=format&fit=crop"
                alt="Indian Agriculture Export"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-bold">Shree Mangalmurti Traders</h4>
                <p className="text-sm text-[#F8F5EC]/90 mt-1">Our parent company, established in 1985 in Nashik, Maharashtra.</p>
              </div>
            </div>

            {/* Glassmorphism Counter Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glassmorphism p-6 rounded-2xl shadow-xl border border-white/50 text-center">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#3E7C17]">
                  {counters.experience}+ <span className="text-lg text-[#4E342E]">Yrs</span>
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 uppercase tracking-wider">Combined Legacy</p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl shadow-xl border border-white/50 text-center">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#3E7C17]">
                  {counters.farmers}+
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 uppercase tracking-wider">Trusted Farmers</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] leading-snug">
                Rooted in Experience. Growing Globally.
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                Established in 2026, Avantika Farm Globe exports premium-grade potatoes and onions meeting international quality norms. Backed by Shree Mangalmurti Traders (Est. 1985) with over four decades of deep-rooted agricultural supply chain experience across major Indian wholesale markets.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-[#8BC34A]/20 border border-[#8BC34A]/40 flex items-center justify-center text-[#3E7C17] flex-shrink-0 group-hover:bg-[#3E7C17] group-hover:text-white transition-all shadow-md">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4E342E] text-base group-hover:text-[#3E7C17] transition-colors">{item.title}</h4>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Company History Timeline */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mt-4">
              <h4 className="text-lg font-bold text-[#4E342E] mb-6 flex items-center gap-2">
                <FaHistory className="text-[#3E7C17]" />
                <span>Our Evolutionary Timeline</span>
              </h4>
              <div className="relative border-l-2 border-[#8BC34A] ml-4 pl-6 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#3E7C17] border-4 border-white shadow"></span>
                  <h5 className="font-bold text-base text-[#4E342E]">1985 - Shree Mangalmurti Traders</h5>
                  <p className="text-xs text-gray-500 mt-1">Founding of our parent company in Nashik, establishing strong farmer ties and domestic trade mastery.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#8BC34A] border-4 border-white shadow"></span>
                  <h5 className="font-bold text-base text-[#4E342E]">2026 - Avantika Farm Globe</h5>
                  <p className="text-xs text-gray-500 mt-1">Inception of our specialized export division to deliver premium fresh produce directly to global markets.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
