import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/productsData';
import { FaInfoCircle, FaShoppingBag } from 'react-icons/fa';

const Products = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeTab === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-[#4E342E] relative overflow-hidden bg-soil-texture">
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
          <span className="text-[#8BC34A] font-bold text-sm tracking-widest uppercase bg-[#8BC34A]/20 px-4 py-1.5 rounded-full border border-[#8BC34A]/30">
            Premium Export Catalog
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
            Our Export <span className="text-[#8BC34A]">Product Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-[#F8F5EC]/80 font-light">
            Meticulously graded potatoes and onions matching strict global phytosanitary and processing requirements.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {['All', 'Potatoes', 'Onions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] text-white shadow-emerald-900/50 scale-105 border border-[#8BC34A]/50'
                  : 'bg-white/10 hover:bg-white/20 text-[#F8F5EC] border border-white/20 backdrop-blur-md'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col justify-between group hover:border-[#8BC34A]/60 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#3E7C17] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-[#8BC34A]/40">
                    {product.category}
                  </span>

                  {/* Variety Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-extrabold tracking-tight">{product.name}</h3>
                    <p className="text-xs text-[#8BC34A] font-medium mt-0.5">{product.purpose}</p>
                  </div>
                </div>

                {/* Specs List */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm border-b border-white/10 pb-6">
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium">Shape</span>
                      <span className="text-white font-bold">{product.shape}</span>
                    </div>
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium">Size</span>
                      <span className="text-white font-bold">{product.size}</span>
                    </div>
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium">Skin Type</span>
                      <span className="text-white font-bold">{product.skinType}</span>
                    </div>
                    <div>
                      <span className="text-[#F8F5EC]/60 block font-medium">Shelf Life</span>
                      <span className="text-white font-bold">{product.shelfLife}</span>
                    </div>
                    {product.dryMatter && (
                      <div className="col-span-2 pt-1">
                        <span className="text-[#F8F5EC]/60 block font-medium">Dry Matter</span>
                        <span className="text-[#8BC34A] font-bold">{product.dryMatter}</span>
                      </div>
                    )}
                  </div>

                  {/* Description snippet */}
                  <p className="text-[#F8F5EC]/80 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      <FaInfoCircle className="text-[#8BC34A]" />
                      <span>Full Specs</span>
                    </button>
                    <button
                      onClick={() => onOpenInquiry(product)}
                      className="flex-1 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#3E7C17] text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <FaShoppingBag />
                      <span>Inquire</span>
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
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 text-white lg:hidden">
                  <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                  <p className="text-xs text-[#8BC34A]">{selectedProduct.purpose}</p>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 flex flex-col justify-between gap-6 overflow-y-auto max-h-[80vh]">
                <div>
                  <div className="hidden lg:block mb-6 border-b border-gray-200 pb-4">
                    <span className="text-xs font-bold text-[#3E7C17] uppercase tracking-widest bg-[#3E7C17]/10 px-3 py-1 rounded-full">{selectedProduct.category}</span>
                    <h3 className="text-3xl font-extrabold text-[#4E342E] mt-3">{selectedProduct.name}</h3>
                    <p className="text-sm text-[#3E7C17] font-semibold mt-1">{selectedProduct.purpose}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedProduct.description}</p>

                  <div className="space-y-3 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                    <h4 className="font-bold text-base text-[#4E342E] border-b border-gray-100 pb-2 mb-3">Export Specifications</h4>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">Shape:</span>
                      <span className="font-bold text-[#4E342E]">{selectedProduct.shape}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">Size:</span>
                      <span className="font-bold text-[#4E342E]">{selectedProduct.size}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">Skin Type:</span>
                      <span className="font-bold text-[#4E342E]">{selectedProduct.skinType}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500 font-medium">Shelf Life:</span>
                      <span className="font-bold text-[#4E342E]">{selectedProduct.shelfLife}</span>
                    </div>
                    {selectedProduct.dryMatter && (
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-500 font-medium">Dry Matter:</span>
                        <span className="font-bold text-[#3E7C17]">{selectedProduct.dryMatter}</span>
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
                    className="flex-1 bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] text-white py-3 rounded-xl font-bold text-sm shadow-lg transition-all"
                  >
                    Inquire Now
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
