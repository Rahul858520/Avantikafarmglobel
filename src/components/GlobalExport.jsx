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
          <span className="inline-flex items-center gap-2 text-[#3E7C17] font-extrabold text-xs sm:text-sm tracking-widest uppercase bg-[#3E7C17]/15 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8BC34A] animate-ping" />
            International Reach
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight">
            Our Global <span className="text-[#3E7C17]">Export Footprint</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Connecting Indian agricultural excellence with major maritime ports
            and wholesale markets across the globe.
          </p>
        </motion.div>

        {/* Container Shipping Visuals & World Map Style Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-20 border-4 border-white min-h-[480px] lg:min-h-[420px] flex items-center bg-black/90"
        >
          {/* Background Image */}
          <img
            src={coldChainContainer}
            alt="Global Container Ship"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Responsive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30 lg:bg-gradient-to-r lg:from-[#4E342E]/95 lg:via-[#4E342E]/70 lg:to-transparent z-10" />

          <div className="relative z-20 w-full p-6 sm:p-10 lg:p-14 flex items-center">
            <div className="max-w-xl bg-black/40 lg:bg-[#4E342E]/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-[#8BC34A]/20 text-[#aed581] border border-[#8BC34A]/35 text-[10px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                <FaShip className="animate-pulse text-[#8BC34A] text-sm" />
                <span>Maritime Transit Mastery</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                Flawless <span className="text-[#8BC34A]">Cold-Chain</span>{" "}
                Container Shipments
              </h3>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-[#F8F5EC]/90 font-light leading-relaxed">
                Partnered with premier global shipping lines to ensure our
                potatoes and onions maintain perfect temperature and humidity
                from our Nashik packhouse to your destination port.
              </p>

              {/* Detailed Features */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#8BC34A]/25 border border-[#8BC34A]/40 flex items-center justify-center text-[#8BC34A] group-hover/item:bg-[#8BC34A] group-hover/item:text-white transition-colors duration-300">
                    <FaRoute className="text-base" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-[#8BC34A] uppercase tracking-wider">
                      Optimized
                    </span>
                    <span className="block text-[10px] sm:text-xs text-white/70 font-medium">
                      Transit Routes
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#8BC34A]/25 border border-[#8BC34A]/40 flex items-center justify-center text-[#8BC34A] group-hover/item:bg-[#8BC34A] group-hover/item:text-white transition-colors duration-300">
                    <FaAnchor className="text-base" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-[#8BC34A] uppercase tracking-wider">
                      Port-to-Port
                    </span>
                    <span className="block text-[10px] sm:text-xs text-white/70 font-medium">
                      Real-time Tracking
                    </span>
                  </div>
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
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-500 hover:border-[#8BC34A]/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8BC34A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <h3 className="text-4xl sm:text-5xl font-extrabold text-[#3E7C17] group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </h3>
              <h4 className="text-[#4E342E] font-bold text-base sm:text-lg mt-3">
                {stat.label}
              </h4>
              <p className="text-gray-500 text-xs mt-1.5 font-semibold uppercase tracking-widest text-[10px]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global Destinations Grid */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#3E7C17]/10 flex items-center justify-center text-[#3E7C17]">
              <FaGlobeAmericas className="text-2xl animate-pulse" />
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-[#F8F5EC]/50 p-6 rounded-2xl border border-gray-200/80 hover:bg-white hover:border-[#8BC34A] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 text-[#3E7C17] mb-4">
                  <FaCheckCircle className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-extrabold text-[#4E342E] text-lg">
                    {dest.country}
                  </h4>
                </div>
                <div>
                  <span className="font-bold block text-gray-400 mb-2 uppercase tracking-wider text-[9px]">
                    Key Ports of Discharge:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.ports.split(", ").map((port, portIndex) => (
                      <span
                        key={portIndex}
                        className="bg-white border border-gray-300/40 text-gray-700 text-[10px] px-2 py-0.5 rounded-md font-semibold shadow-xs group-hover:bg-[#8BC34A]/10 group-hover:border-[#8BC34A]/25 group-hover:text-[#3E7C17] transition-colors duration-300"
                      >
                        {port}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExport;
