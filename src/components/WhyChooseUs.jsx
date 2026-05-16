
import { motion } from 'framer-motion';
import { FaAward, FaSearchDollar, FaBoxes, FaBalanceScale, FaUserShield, FaHandshake } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaAward,
      title: 'Legacy-Backed Expertise',
      desc: 'Backed by Shree Mangalmurti Traders (Est. 1985), bringing over 40 years of agricultural mastery and market authority to international trade.',
    },
    {
      icon: FaSearchDollar,
      title: 'Export-Grade Quality Control',
      desc: 'Rigorous multi-stage sorting, optical grading, and strict adherence to international phytosanitary standards for zero-defect shipments.',
    },
    {
      icon: FaBoxes,
      title: 'Reliable Supply & Volumes',
      desc: 'Massive procurement capacity from 1,500+ farmers and advanced cold storage infrastructure ensuring year-round volume consistency.',
    },
    {
      icon: FaBalanceScale,
      title: 'Transparent Trade Practices',
      desc: '100% transparency in grading, pricing, and documentation. No hidden surprises, just straightforward ethical business transactions.',
    },
    {
      icon: FaUserShield,
      title: 'Buyer-Centric Approach',
      desc: 'Tailored packaging sizes, customized trial shipment flexibility, and dedicated multilingual account managers for seamless communication.',
    },
    {
      icon: FaHandshake,
      title: 'End-to-End Logistics',
      desc: 'Partnered with leading global shipping lines and freight forwarders to guarantee timely port-to-port delivery under perfect transit conditions.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-[#F8F5EC] relative overflow-hidden">
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
            The Avantika Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight">
            Why Global Buyers <span className="text-[#3E7C17]">Choose Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-normal leading-relaxed">
            Delivering excellence across every shipment through our robust supply chain, transparent operations, and uncompromising quality standards.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative group overflow-hidden hover:-translate-y-2"
            >
              {/* Animated Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8BC34A] rounded-3xl transition-colors duration-500 pointer-events-none shadow-[0_0_25px_rgba(139,195,74,0)] group-hover:shadow-[0_0_25px_rgba(139,195,74,0.3)]" />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#F8F5EC] border border-[#8BC34A]/30 flex items-center justify-center text-[#3E7C17] group-hover:bg-[#3E7C17] group-hover:text-white transition-all duration-500 shadow-md group-hover:scale-110">
                  <feature.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-[#4E342E] group-hover:text-[#3E7C17] transition-colors leading-snug">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>

              {/* Bottom decorative arrow */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#3E7C17] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>INTERNATIONAL EXPORT STANDARD</span>
                <span className="w-2 h-2 rounded-full bg-[#8BC34A]"></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
