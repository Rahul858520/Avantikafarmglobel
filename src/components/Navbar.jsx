import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp, FaGlobe } from "react-icons/fa";

const Navbar = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Export Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#4E342E]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#8BC34A]/20"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#3E7C17] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <FaGlobe className="text-xl animate-spin-slow" />
          </div>
          <div>
            <span className="block text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none">
              AVANTIKA <span className="text-[#8BC34A]">FARM GLOBE</span>
            </span>
            <span className="block text-[10px] sm:text-xs text-[#F8F5EC]/80 font-medium tracking-widest mt-0.5 uppercase">
              Shree Mangalmurti Traders (Est. 1985)
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#F8F5EC] hover:text-[#8BC34A] font-medium text-sm lg:text-base transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span>Inquire Now</span>
          </button>

          <a
            href="https://wa.me/91777588949"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110"
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-2xl" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#4E342E] border-b border-[#8BC34A]/20 px-4 pt-4 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#F8F5EC] hover:text-[#8BC34A] font-semibold text-lg py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full mt-2 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] text-white py-3 rounded-xl font-bold text-center shadow-lg"
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
