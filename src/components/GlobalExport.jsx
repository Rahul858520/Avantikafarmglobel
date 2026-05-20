import { motion } from "framer-motion";
import {
  FaShip,
  FaGlobeAmericas,
  FaAnchor,
  FaCheckCircle,
  FaRoute,
} from "react-icons/fa";
import coldChainContainer from "../assets/index/Cold-Chain Container.jpeg";

const GlobalExport = () => {
  const stats = [
    { value: "40+", label: "Years Legacy", sub: "Since 1985" },
    { value: "1,500+", label: "Farmers Network", sub: "Direct Sourcing" },
    { value: "15+", label: "Product Categories", sub: "Premium Varieties" },
    {
      value: "100%",
      label: "Export Readiness",
      sub: "APEDA & Global Standards",
    },
  ];

  const destinations = [
    {
      country: "Middle East & GCC",
      ports: "Jebel Ali, Dammam, Shuwaikh, Hamad",
    },
    {
      country: "Southeast Asia",
      ports: "Port Klang, Singapore, Colombo, Manila",
    },
    {
      country: "Europe & UK",
      ports: "Rotterdam, Felixstowe, Hamburg, Antwerp",
    },
    { country: "Far East & Beyond", ports: "Tokyo, Busan, Hong Kong" },
  ];

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
            International Reach
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight">
            Our Global <span className="text-[#3E7C17]">Export Footprint</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-normal leading-relaxed">
            Connecting Indian agricultural excellence with major maritime ports
            and wholesale markets across the globe.
          </p>
        </motion.div>

        {/* Container Shipping Visuals & World Map Style Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-20 border-4 border-white aspect-[21/9] max-h-[450px] bg-black/60"
        >
          <img
            src={coldChainContainer}
            alt="Global Container Ship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E]/90 via-[#4E342E]/60 to-transparent flex items-center p-8 sm:p-14">
            <div className="max-w-xl text-white">
              <div className="inline-flex items-center gap-2 bg-[#8BC34A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow">
                <FaShip className="animate-pulse" />
                <span>Maritime Transit Mastery</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Flawless Cold-Chain Container Shipments
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#F8F5EC]/90 font-light leading-relaxed">
                Partnered with premier global shipping lines to ensure our
                potatoes and onions maintain perfect temperature and humidity
                from our Nashik packhouse to your destination port.
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs font-bold text-[#8BC34A] uppercase tracking-wider">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <FaRoute /> <span>Optimized Routes</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <FaAnchor /> <span>Port-to-Port Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-500 hover:border-[#8BC34A]"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-[#3E7C17] group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </h3>
              <h4 className="text-[#4E342E] font-bold text-base sm:text-lg mt-3">
                {stat.label}
              </h4>
              <p className="text-gray-500 text-xs mt-1 font-medium uppercase tracking-wider">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global Destinations Grid */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
            <FaGlobeAmericas className="text-3xl text-[#3E7C17]" />
            <div>
              <h3 className="text-2xl font-extrabold text-[#4E342E]">
                Major Export Destinations
              </h3>
              <p className="text-gray-500 text-sm mt-0.5">
                We maintain active trading corridors with leading importers in
                these key maritime sectors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-[#F8F5EC] p-6 rounded-2xl border border-gray-200/60 hover:border-[#8BC34A] transition-colors group"
              >
                <div className="flex items-center gap-2 text-[#3E7C17] mb-3">
                  <FaCheckCircle className="text-lg group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[#4E342E] text-lg">
                    {dest.country}
                  </h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  <span className="font-semibold block text-gray-500 mb-1 uppercase tracking-wider text-[10px]">
                    Key Ports of Discharge:
                  </span>
                  {dest.ports}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExport;
