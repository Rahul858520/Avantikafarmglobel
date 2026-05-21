import { motion } from "framer-motion";
import {
  FaTractor,
  FaFilter,
  FaBoxOpen,
  FaUserCheck,
  FaFileContract,
  FaShip,
} from "react-icons/fa";
import qualityImage from "../assets/index/quality_image.jpeg";

const ExportProcess = () => {
  const steps = [
    {
      icon: FaTractor,
      title: "1. Sourcing",
      desc: "Direct procurement from 1,500+ trusted farmers in Nashik and major agricultural belts.",
    },
    {
      icon: FaFilter,
      title: "2. Grading",
      desc: "Scientific grading to categorize potatoes and onions by exact size, shape, and maturity.",
    },
    {
      icon: FaBoxOpen,
      title: "3. Sorting & Packing",
      desc: "Automated sorting and customized mesh/jute/box packing tailored to buyer specifications.",
    },
    {
      icon: FaUserCheck,
      title: "4. Quality Check",
      desc: "Stringent phytosanitary inspection and quality certification by certified agronomists.",
    },
    {
      icon: FaFileContract,
      title: "5. Logistics & Docs",
      desc: "Flawless customs clearance, certificate of origin, and pre-shipment documentation.",
    },
    {
      icon: FaShip,
      title: "6. Shipment",
      desc: "Temperature-controlled reefer container loading and expedited maritime dispatch.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-[#F8F5EC] relative overflow-hidden"
    >
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
            Flawless Execution
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight">
            Our Export <span className="text-[#3E7C17]">Process Flow</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-normal leading-relaxed">
            A transparent, multi-stage workflow ensuring farm-fresh produce
            reaches global destinations in perfect condition.
          </p>
        </motion.div>

        {/* Warehouse Imagery Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-20 border-4 border-white min-h-[480px] lg:min-h-[420px] flex items-center bg-black/90"
        >
          {/* Background Image */}
          <img
            src={qualityImage}
            alt="Export Warehouse Facility"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Responsive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30 lg:bg-gradient-to-r lg:from-[#4E342E]/95 lg:via-[#4E342E]/70 lg:to-transparent z-10" />
          
          <div className="relative z-20 w-full p-6 sm:p-10 lg:p-14 flex items-center">
            {/* Text Content Card */}
            <div className="max-w-xl bg-black/40 lg:bg-[#4E342E]/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-[#8BC34A]/20 text-[#aed581] border border-[#8BC34A]/35 text-[10px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8BC34A] animate-ping" />
                <span>State-of-the-Art Packhouse</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                Where <span className="text-[#8BC34A]">Quality</span> Meets Global Compliance
              </h3>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-[#F8F5EC]/90 font-light leading-relaxed">
                Equipped with advanced cold storage and optical sorting machines to maintain zero-defect export standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Animated Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#3E7C17] via-[#8BC34A] to-[#3E7C17] -translate-y-1/2 hidden lg:block z-0"
          />

          {/* Timeline Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Step Number Badge */}
                <div className="absolute top-3 right-3 text-xs font-extrabold text-gray-300 group-hover:text-[#8BC34A] transition-colors">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#F8F5EC] border border-[#8BC34A]/30 flex items-center justify-center text-[#3E7C17] mb-6 group-hover:bg-[#3E7C17] group-hover:text-white transition-all duration-500 shadow-md group-hover:scale-110">
                  <step.icon className="text-3xl" />
                </div>

                <h4 className="text-lg font-bold text-[#4E342E] group-hover:text-[#3E7C17] transition-colors mb-2">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom Active Indicator */}
                <div className="w-full h-1 bg-transparent group-hover:bg-[#8BC34A] transition-colors duration-300 absolute bottom-0 left-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;
