import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productOfInterest: "Potatoes (General)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productOfInterest: "Potatoes (General)",
        message: "",
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4E342E] mt-6 tracking-tight leading-tight">
            Initiate <span className="text-[#3E7C17]">Global Trade</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-normal leading-relaxed">
            Reach out for bulk import inquiries, custom packaging
            specifications, or trial shipment quotations.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col gap-8">
              <h3 className="text-2xl font-extrabold text-[#4E342E]">
                Corporate Headquarters
              </h3>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F5EC] border border-[#8BC34A]/30 flex items-center justify-center text-[#3E7C17] flex-shrink-0 group-hover:bg-[#3E7C17] group-hover:text-white transition-all shadow-md">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4E342E] text-base">
                    Office Address
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    B-308, Business Plaza, Panchvati Road, Nashik, Maharashtra,
                    India
                  </p>
                  <p className="text-xs text-[#3E7C17] font-bold mt-1 uppercase tracking-wider">
                    Parent Co: Shree Mangalmurti Traders (Est. 1985)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F5EC] border border-[#8BC34A]/30 flex items-center justify-center text-[#3E7C17] flex-shrink-0 group-hover:bg-[#3E7C17] group-hover:text-white transition-all shadow-md">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4E342E] text-base">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 flex flex-col gap-0.5">
                    <a
                      href="tel:+91777588949"
                      className="hover:text-[#3E7C17] transition-colors"
                    >
                      +91 777588949
                    </a>
                    <a
                      href="tel:+919272099049"
                      className="hover:text-[#3E7C17] transition-colors"
                    >
                      +91 9272099049
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F5EC] border border-[#8BC34A]/30 flex items-center justify-center text-[#3E7C17] flex-shrink-0 group-hover:bg-[#3E7C17] group-hover:text-white transition-all shadow-md">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4E342E] text-base">
                    Email Inquiries
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    <a
                      href="mailto:contact@avantikafarmglobe.com"
                      className="hover:text-[#3E7C17] transition-colors"
                    >
                      contact@avantikafarmglobe.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href="https://wa.me/91777588949"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-2xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            {/* Google Map Visual Placeholder */}
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden aspect-[16/9] relative group">
              <iframe
                title="Avantika Farm Globe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38545598155!2d73.70149021870636!3d19.9911053429302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb720c5885c3%3A0x67a14e1f727878!2sPanchavati%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 rounded-2xl filter grayscale contrast-125 group-hover:filter-none transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4E342E]">
                Export Inquiry Form
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Fill out the details below and our export sales team will
                contact you within 12 hours.
              </p>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 border-l-4 border-[#3E7C17] p-6 rounded-2xl mb-8 shadow-md"
              >
                <h4 className="font-extrabold text-[#3E7C17] text-lg">
                  Inquiry Submitted Successfully!
                </h4>
                <p className="text-sm text-emerald-800 mt-1">
                  Thank you for choosing Avantika Farm Globe. A dedicated
                  account manager has been assigned to your request.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#F8F5EC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@importcompany.com"
                    className="w-full bg-[#F8F5EC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 890"
                    className="w-full bg-[#F8F5EC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Global Fresh Import Ltd."
                    className="w-full bg-[#F8F5EC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Product of Interest *
                </label>
                <select
                  name="productOfInterest"
                  value={formData.productOfInterest}
                  onChange={handleChange}
                  className="w-full bg-[#F8F5EC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors"
                >
                  <option value="Potatoes (General)">
                    Potatoes (General / Bulk)
                  </option>
                  <option value="Lady Rosetta Potatoes">
                    Lady Rosetta Potatoes
                  </option>
                  <option value="Chipsona Potatoes">Chipsona Potatoes</option>
                  <option value="Onions (Red Onion)">Onions (Red Onion)</option>
                  <option value="Onions (Garva Onion)">
                    Onions (Garva Onion)
                  </option>
                  <option value="Shallot Onions">Shallot Onions</option>
                  <option value="Both Potatoes & Onions">
                    Both Potatoes & Onions
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Specific Requirements / Estimated Volume *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please specify packaging preferences, target port of discharge, and monthly container volume required..."
                  className="w-full bg-[#F8F5EC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                <span>Submit Export Inquiry</span>
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Connect on Professional Networks
              </span>
              <div className="flex items-center gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#social"
                      className="w-10 h-10 rounded-full bg-[#F8F5EC] hover:bg-[#3E7C17] hover:text-white text-[#4E342E] flex items-center justify-center transition-all shadow-md hover:scale-110"
                    >
                      <Icon className="text-base" />
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
