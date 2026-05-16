import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import ExportProcess from './components/ExportProcess';
import TrustSection from './components/TrustSection';
import GlobalExport from './components/GlobalExport';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenInquiry = (product = null) => {
    setSelectedProduct(product);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EC] text-[#1A1A1A] font-sans selection:bg-[#8BC34A] selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onFinish={() => setLoading(false)} />
        ) : (
          <div key="main-app" className="relative overflow-hidden">
            {/* Navbar */}
            <Navbar onOpenInquiry={() => handleOpenInquiry(null)} />

            {/* Hero Section */}
            <Hero onOpenInquiry={() => handleOpenInquiry(null)} />

            {/* About Us Section */}
            <About />

            {/* Vision & Mission Section */}
            <VisionMission />

            {/* Why Buyers Choose Us Section */}
            <WhyChooseUs />

            {/* Products Portfolio Section */}
            <Products onOpenInquiry={handleOpenInquiry} />

            {/* Export Process Flow Section */}
            <ExportProcess />

            {/* Trust Section */}
            <TrustSection />

            {/* Global Export Section */}
            <GlobalExport />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />

            {/* Floating Elements & Modals */}
            <FloatingWhatsApp />
            <BackToTop />
            <ProductModal
              isOpen={inquiryModalOpen}
              onClose={handleCloseInquiry}
              product={selectedProduct}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
