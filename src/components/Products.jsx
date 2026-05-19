import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "../data/productsData";
import { FaInfoCircle, FaShoppingBag } from "react-icons/fa";

const Products = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState("Potatoes");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter(
    (p) => p.category === activeCategory,
  );

  return (
    <section
      id="products"
      className="py-24 bg-[#4E342E] relative overflow-hidden bg-soil-texture"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#8BC34A] font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#8BC34A]/20 px-4 py-1.5 rounded-full border border-[#8BC34A]/30 backdrop-blur-md shadow-lg">
            Premium Export Catalog
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
            Our Export{" "}
            <span className="text-[#8BC34A]">Product Categories</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F5EC]/80 font-light leading-relaxed">
            Meticulously graded potatoes and onions matching strict global
            phytosanitary, commercial storage, and processing requirements.
          </p>
        </motion.div>

        {/* Two Main Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Potatoes Category Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveCategory("Potatoes")}
            className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer border-2 transition-all duration-500 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] flex flex-col justify-end ${
              activeCategory === "Potatoes"
                ? "border-[#8BC34A] ring-4 ring-[#8BC34A]/20 shadow-[#8BC34A]/20"
                : "border-white/15 hover:border-white/40"
            }`}
          >
            {/* Full-image background */}
            <div className="absolute inset-0 overflow-hidden bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1200&auto=format&fit=crop"
                alt="Premium Indian Potatoes Export"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:via-black/40 transition-all duration-500" />
            </div>

            {/* Category Card Content */}
            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#3E7C17] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg border border-[#8BC34A]/40 backdrop-blur-md">
                  Export Category
                </span>
                {activeCategory === "Potatoes" && (
                  <span className="bg-[#8BC34A] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2 shadow-lg animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />{" "}
                    Active Category
                  </span>
                )}
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#8BC34A] transition-colors duration-300">
                Premium Potatoes
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#F8F5EC]/80 font-light max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                Freshly harvested from pristine Indian farms, meticulously
                graded, and packed in specialized mesh bags and reefer
                containers for crisping, French fries, and table export.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-[#8BC34A] font-bold uppercase tracking-wider">
                <span>Explore 12 Export Varieties</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1">
                  View Grid &darr;
                </span>
              </div>
            </div>
          </motion.div>

          {/* Onions Category Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setActiveCategory("Onions")}
            className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer border-2 transition-all duration-500 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] flex flex-col justify-end ${
              activeCategory === "Onions"
                ? "border-[#8BC34A] ring-4 ring-[#8BC34A]/20 shadow-[#8BC34A]/20"
                : "border-white/15 hover:border-white/40"
            }`}
          >
            {/* Full-image background */}
            <div className="absolute inset-0 overflow-hidden bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop"
                alt="Premium Indian Red Onions Export"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:via-black/40 transition-all duration-500" />
            </div>

            {/* Category Card Content */}
            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#3E7C17] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg border border-[#8BC34A]/40 backdrop-blur-md">
                  Export Category
                </span>
                {activeCategory === "Onions" && (
                  <span className="bg-[#8BC34A] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2 shadow-lg animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />{" "}
                    Active Category
                  </span>
                )}
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#8BC34A] transition-colors duration-300">
                Premium Onions
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#F8F5EC]/80 font-light max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                Pungent, dark red Indian onions sourced from Nashik's renowned
                Garva storage belts. Cured and graded to perfection for extended
                ocean transit and global wholesale.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-[#8BC34A] font-bold uppercase tracking-wider">
                <span>Explore 3 Export Varieties</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1">
                  View Grid &darr;
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Varieties Grid Section Header */}
        <div className="bg-gradient-to-r from-[#3E2723] to-[#271714] p-8 rounded-3xl border border-white/15 shadow-2xl mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#8BC34A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 rounded-full bg-[#8BC34A] animate-pulse" />
              <span className="text-xs font-bold text-[#8BC34A] uppercase tracking-widest bg-[#8BC34A]/10 px-3 py-1 rounded-full border border-[#8BC34A]/30 backdrop-blur-md">
                Certified Export Varieties & Specifications
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Export-Quality{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BC34A] to-[#aed581]">
                {activeCategory} Varieties
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F5EC]/70 mt-1 font-light">
              Click &lsquo;Full Specs&rsquo; for detailed dry matter, reducing
              sugars, and packing configurations.
            </p>
          </div>
          <div className="relative z-10 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 self-start sm:self-center text-center shadow-inner">
            <span className="block text-[10px] text-[#F8F5EC]/60 uppercase tracking-wider font-bold mb-0.5">
              Active Catalog Count
            </span>
            <span className="text-2xl font-extrabold text-[#8BC34A]">
              {filteredProducts.length}
            </span>
            <span className="text-xs text-white font-medium ml-1">
              Varieties
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-[#3E2723]/90 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-between group hover:border-[#8BC34A] hover:shadow-[0_20px_50px_rgba(139,195,74,0.15)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 uppercase tracking-wider">
                    {product.category}
                  </span>

                  {/* Variety Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
                    <h4 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-[#8BC34A] transition-colors duration-300">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#8BC34A] font-semibold mt-1 tracking-wide uppercase">
                      {product.purpose}
                    </p>
                  </div>
                </div>

                {/* Specs List & Actions */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  {/* Dedicated Specs Box */}
                  <div className="bg-black/30 rounded-2xl p-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm border border-white/5 shadow-inner">
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium text-[11px] uppercase tracking-wider mb-0.5">
                        Shape
                      </span>
                      <span className="text-white font-bold">
                        {product.shape}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium text-[11px] uppercase tracking-wider mb-0.5">
                        Size
                      </span>
                      <span className="text-white font-bold">
                        {product.size}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium text-[11px] uppercase tracking-wider mb-0.5">
                        Skin Type
                      </span>
                      <span className="text-white font-bold">
                        {product.skinType}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium text-[11px] uppercase tracking-wider mb-0.5">
                        Shelf Life
                      </span>
                      <span className="text-white font-bold">
                        {product.shelfLife}
                      </span>
                    </div>
                    {product.dryMatter && (
                      <div className="col-span-2 pt-2 mt-1 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[#F8F5EC]/60 font-medium text-[11px] uppercase tracking-wider">
                          Dry Matter / Solids
                        </span>
                        <span className="text-[#8BC34A] font-extrabold bg-[#8BC34A]/10 px-2.5 py-0.5 rounded-full border border-[#8BC34A]/30">
                          {product.dryMatter}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description snippet */}
                  <p className="text-[#F8F5EC]/80 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light px-1">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 bg-white/5 hover:bg-white/15 text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-2 shadow-inner group/btn"
                    >
                      <FaInfoCircle className="text-[#8BC34A] group-hover/btn:scale-110 transition-transform" />
                      <span>Full Specs</span>
                    </button>
                    <button
                      onClick={() => onOpenInquiry(product)}
                      className="flex-1 bg-gradient-to-r from-[#3E7C17] via-[#558b2f] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-xl hover:shadow-[#8BC34A]/30 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <FaShoppingBag className="group-hover/btn:scale-110 transition-transform" />
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-[#F8F5EC] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col lg:flex-row text-[#4E342E]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lg:w-1/2 relative aspect-[4/3] lg:aspect-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 text-white lg:hidden">
                  <h4 className="text-2xl font-bold">{selectedProduct.name}</h4>
                  <p className="text-xs text-[#8BC34A]">
                    {selectedProduct.purpose}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 flex flex-col justify-between gap-6 overflow-y-auto max-h-[80vh]">
                <div>
                  <div className="hidden lg:block mb-6 border-b border-gray-200 pb-4">
                    <span className="text-xs font-bold text-[#3E7C17] uppercase tracking-widest bg-[#3E7C17]/10 px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <h4 className="text-3xl font-extrabold text-[#4E342E] mt-3">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-sm text-[#3E7C17] font-semibold mt-1">
                      {selectedProduct.purpose}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-3 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                    <h5 className="font-bold text-base text-[#4E342E] border-b border-gray-100 pb-2 mb-3">
                      Export Specifications
                    </h5>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">Shape:</span>
                      <span className="font-bold text-[#4E342E]">
                        {selectedProduct.shape}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">Size:</span>
                      <span className="font-bold text-[#4E342E]">
                        {selectedProduct.size}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">
                        Skin Type:
                      </span>
                      <span className="font-bold text-[#4E342E]">
                        {selectedProduct.skinType}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">
                        Shelf Life:
                      </span>
                      <span className="font-bold text-[#4E342E]">
                        {selectedProduct.shelfLife}
                      </span>
                    </div>
                    {selectedProduct.dryMatter && (
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-500 font-medium">
                          Dry Matter:
                        </span>
                        <span className="font-bold text-[#3E7C17]">
                          {selectedProduct.dryMatter}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-bold text-sm transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const prod = selectedProduct;
                      setSelectedProduct(null);
                      onOpenInquiry(prod);
                    }}
                    className="flex-1 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] text-white py-3 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FaShoppingBag />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
