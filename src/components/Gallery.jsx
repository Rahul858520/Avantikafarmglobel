import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
      title: 'Sprawling Agricultural Farms',
      category: 'Farms',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop',
      title: 'Premium Lady Rosetta Potatoes',
      category: 'Potatoes',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop',
      title: 'Export-Grade Red Onions',
      category: 'Onion Storage',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1591825729269-ca1015694200?q=80&w=1200&auto=format&fit=crop',
      title: 'Automated Packing & Mesh Bags',
      category: 'Packing Process',
      span: 'md:col-span-1 md:row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      title: 'Reefer Export Containers at Port',
      category: 'Export Containers',
      span: 'md:col-span-2 md:row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1200&auto=format&fit=crop',
      title: 'Dedicated Farmer Sourcing Network',
      category: 'Farmers',
      span: 'md:col-span-1 md:row-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#4E342E] relative overflow-hidden bg-soil-texture">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

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
            Visual Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
            Our Infrastructure <span className="text-[#8BC34A]">& Farms</span>
          </h2>
          <p className="mt-4 text-lg text-[#F8F5EC]/80 font-light">
            A glimpse into our sprawling fields, automated packhouses, and global logistics operations.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row-dense">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden shadow-2xl bg-black group cursor-pointer border border-white/20 aspect-[4/3] md:aspect-auto min-h-[250px] ${item.span}`}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-[#3E7C17] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#8BC34A]/40 shadow-lg">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <FaExpand />
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-extrabold text-xl tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                  <p className="text-[#8BC34A] text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to expand visual</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-[#4E342E] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-md border border-white/20"
              >
                <FaTimes />
              </button>

              <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full object-contain max-h-[75vh]" />
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#4E342E] to-[#2d1e1a] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-[#8BC34A] text-xs font-bold uppercase tracking-widest">{selectedImage.category}</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl font-bold text-sm border border-white/20 transition-all self-start sm:self-auto"
                >
                  Close Lightbox
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
