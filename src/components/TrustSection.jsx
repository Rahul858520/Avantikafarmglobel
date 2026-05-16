import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaAward,
  FaBuilding,
  FaComments,
  FaHandshake,
  FaGlobe,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const TrustSection = () => {
  const trustPillars = [
    {
      icon: FaAward,
      title: "40+ Years Legacy",
      desc: "Backed by Shree Mangalmurti Traders (Est. 1985), providing four decades of steady supply chain credibility.",
    },
    {
      icon: FaBuilding,
      title: "Physical Presence",
      desc: "Direct operations and packhouses in major Indian agricultural hubs like Nashik.",
    },
    {
      icon: FaComments,
      title: "Transparent Communication",
      desc: "Real-time updates, clear grading reports, and honest documentation at every stage.",
    },
    {
      icon: FaHandshake,
      title: "Trial Shipment Flexibility",
      desc: "Flexible initial container volumes to establish mutual confidence and quality verification.",
    },
    {
      icon: FaGlobe,
      title: "Long-Term Mindset",
      desc: "Dedicated to building enduring, win-win global partnerships rather than one-off trades.",
    },
  ];

  const certs = [
    { name: "APEDA Certified", code: "Export Promotion Council" },
    { name: "GLOBALG.A.P.", code: "Good Agricultural Practices" },
    { name: "ISO 9001:2015", code: "Quality Management System" },
    { name: "FSSAI Approved", code: "Food Safety Standard" },
    { name: "Phytosanitary Compliant", code: "Plant Quarantine Standard" },
  ];

  const testimonials = [
    {
      quote:
        "Avantika Farm Globe has been our most reliable onion exporter from India. Their Garva onions arrive in Dubai with zero spoilage. The grading is absolutely flawless.",
      client: "Ahmed Al-Mansoor",
      company: "Al-Mansoor Agri Import, UAE",
      rating: 5,
    },
    {
      quote:
        "We import Lady Rosetta potatoes for our potato chips factory in Malaysia. Avantika's dry matter consistency and timely shipment have significantly boosted our production yield.",
      client: "David Tan",
      company: "CrispTech Foods, Malaysia",
      rating: 5,
    },
    {
      quote:
        "The trial shipment flexibility allowed us to test their quality first. Now we order 10 containers every month. A truly transparent and professional Indian export partner.",
      client: "Elena Rostova",
      company: "EuroFresh Produce, Netherlands",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#4E342E] relative overflow-hidden bg-soil-texture">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

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
            Proven Reliability
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
            Why Global Buyers <span className="text-[#8BC34A]">Trust Us</span>
          </h2>
          <p className="mt-4 text-lg text-[#F8F5EC]/80 font-light">
            Building enduring international partnerships founded on four decades
            of agricultural integrity.
          </p>
        </motion.div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl group hover:border-[#8BC34A]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#3E7C17]/40 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <pillar.icon className="text-2xl" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#8BC34A] transition-colors">
                {pillar.title}
              </h4>
              <p className="text-[#F8F5EC]/70 text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Badges */}
        <div className="bg-gradient-to-r from-[#3E7C17]/40 via-[#8BC34A]/20 to-[#3E7C17]/40 backdrop-blur-xl border border-[#8BC34A]/30 rounded-3xl p-8 mb-20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FaShieldAlt className="text-3xl text-[#8BC34A]" />
                <h3 className="text-2xl font-extrabold text-white">
                  Global Compliance & Certifications
                </h3>
              </div>
              <p className="text-[#F8F5EC]/80 text-sm mt-1">
                Guaranteed adherence to international food safety and
                phytosanitary standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-end">
              {certs.map((cert, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-white/20 px-5 py-3 rounded-2xl text-center shadow-md hover:border-[#8BC34A] transition-colors group"
                >
                  <span className="block font-extrabold text-white text-sm group-hover:text-[#8BC34A] transition-colors">
                    {cert.name}
                  </span>
                  <span className="block text-[10px] text-[#F8F5EC]/60 uppercase tracking-widest mt-0.5">
                    {cert.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Client Satisfaction & Testimonials
            </h3>
            <p className="text-[#F8F5EC]/70 text-sm mt-1">
              What our international importing partners say about our quality
              and commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-between relative group hover:border-[#8BC34A]/60 transition-all duration-500 hover:-translate-y-2"
              >
                <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-[#8BC34A]/20 group-hover:text-[#8BC34A]/40 transition-colors" />

                <div>
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-[#F8F5EC]/90 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3E7C17] to-[#8BC34A] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testi.client.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">
                      {testi.client}
                    </h5>
                    <p className="text-[#8BC34A] text-xs font-semibold mt-0.5">
                      {testi.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
