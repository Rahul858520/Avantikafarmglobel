import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaShoppingBag } from "react-icons/fa";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    volume: "1 Container (20ft / 40ft Reefer)",
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
      onClose();
    }, 4000);
  };

  if (!isOpen) return null;

  const productName = product ? product.name : "Premium Export Produce";
  const productCat = product ? product.category : "Agri Produce";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          className="bg-[#F8F5EC] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col text-[#4E342E] relative my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4E342E] to-[#3E7C17] p-6 sm:p-8 text-white relative flex items-center justify-between">
            <div>
              <span className="bg-[#8BC34A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Direct Export Inquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 flex items-center gap-2">
                <FaShoppingBag className="text-[#8BC34A]" />
                <span>{productName}</span>
              </h3>
              <p className="text-xs text-[#F8F5EC]/80 mt-1">
                Specify your bulk order preferences below for {productCat}.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors backdrop-blur-md border border-white/20 self-start"
            >
              <FaTimes />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border-2 border-[#3E7C17] p-8 rounded-2xl text-center shadow-lg my-4"
              >
                <h4 className="font-extrabold text-[#3E7C17] text-2xl mb-2">
                  Inquiry Received!
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed mb-6">
                  Our commercial export sales team has received your inquiry for{" "}
                  <strong className="text-[#4E342E]">{productName}</strong>. We
                  will send the Proforma Invoice and latest FOB/CIF pricing to
                  your email shortly.
                </p>
                <div className="w-12 h-12 rounded-full bg-[#3E7C17] text-white flex items-center justify-center mx-auto text-xl shadow-md animate-bounce">
                  ✓
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@importcompany.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors shadow-xs"
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
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Estimated Initial Volume *
                  </label>
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors shadow-xs"
                  >
                    <option value="1 Container (20ft / 40ft Reefer)">
                      1 Container (20ft / 40ft Reefer Trial)
                    </option>
                    <option value="2-5 Containers Monthly">
                      2-5 Containers Monthly
                    </option>
                    <option value="10+ Containers Monthly">
                      10+ Containers Monthly (Bulk Contract)
                    </option>
                    <option value="Custom / Sample Request">
                      Custom Packaging / Sample Request
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Destination Port & Packaging Notes *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Please specify target discharge port (e.g., Jebel Ali, Rotterdam), mesh bag / box sizes (e.g., 10kg, 25kg, 50kg), and any specific grading requirements..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#4E342E] focus:outline-none focus:border-[#3E7C17] transition-colors resize-none shadow-xs"
                  />
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    <span>Request Quotation</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
