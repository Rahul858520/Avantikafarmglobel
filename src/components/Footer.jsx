
import { FaGlobe, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white pt-20 pb-12 relative overflow-hidden bg-soil-texture border-t border-[#8BC34A]/20">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#3E7C17] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <FaGlobe className="text-2xl animate-spin-slow" />
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white tracking-tight leading-none">
                  AVANTIKA <span className="text-[#8BC34A]">FARM GLOBE</span>
                </span>
                <span className="block text-xs text-[#F8F5EC]/80 font-medium tracking-widest mt-0.5 uppercase">
                  Shree Mangalmurti Traders (Est. 1985)
                </span>
              </div>
            </a>
            <p className="text-[#F8F5EC]/80 text-sm leading-relaxed pr-6">
              “Four Decades of Agricultural Expertise. One Global Export Vision.” Delivering premium Indian potatoes and onions meeting strict international quality and phytosanitary standards.
            </p>
            <div className="flex items-center gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#social"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8BC34A] text-white flex items-center justify-center transition-all border border-white/20 shadow-md hover:scale-110"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-lg text-white mb-6 border-b border-[#8BC34A]/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#F8F5EC]/80">
              {['Home', 'About Us', 'Products', 'Export Process', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-[#8BC34A] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-extrabold text-lg text-white mb-6 border-b border-[#8BC34A]/30 pb-2 inline-block">Product Line</h4>
            <ul className="space-y-3 text-sm text-[#F8F5EC]/80">
              <li><a href="#products" className="hover:text-[#8BC34A] transition-colors block">LR (Lady Rosetta)</a></li>
              <li><a href="#products" className="hover:text-[#8BC34A] transition-colors block">Chipsona Varieties</a></li>
              <li><a href="#products" className="hover:text-[#8BC34A] transition-colors block">Kufri Jyoti & Pukhraj</a></li>
              <li><a href="#products" className="hover:text-[#8BC34A] transition-colors block">Indian Red Onions</a></li>
              <li><a href="#products" className="hover:text-[#8BC34A] transition-colors block">Garva Export Onions</a></li>
              <li><a href="#products" className="hover:text-[#8BC34A] transition-colors block">Gourmet Shallots</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-extrabold text-lg text-white mb-6 border-b border-[#8BC34A]/30 pb-2 inline-block">Global Inquiries</h4>
            <ul className="space-y-4 text-sm text-[#F8F5EC]/80">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#8BC34A] text-lg flex-shrink-0 mt-0.5" />
                <span>B-308, Business Plaza, Panchvati Road, Nashik, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#8BC34A] text-base flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+91777588949" className="hover:text-[#8BC34A] transition-colors">+91 777588949</a>
                  <a href="tel:+919272099049" className="hover:text-[#8BC34A] transition-colors">+91 9272099049</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#8BC34A] text-base flex-shrink-0" />
                <a href="mailto:contact@avantikafarmglobe.com" className="hover:text-[#8BC34A] transition-colors break-all">
                  contact@avantikafarmglobe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F5EC]/60">
          <p>© {new Date().getFullYear()} Avantika Farm Globe. All Rights Reserved. Backed by Shree Mangalmurti Traders (Est. 1985).</p>
          <div className="flex gap-6 font-medium">
            <a href="#privacy" className="hover:text-[#8BC34A] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#8BC34A] transition-colors">Terms of Trade</a>
            <a href="#compliance" className="hover:text-[#8BC34A] transition-colors">APEDA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
