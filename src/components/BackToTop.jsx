import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);

      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#4E342E] hover:bg-[#3E7C17] text-white flex items-center justify-center shadow-2xl transition-colors group border border-[#8BC34A]/40 focus:outline-none"
          title="Back to Top"
        >
          {/* Progress ring background */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />

          {/* Progress ring active */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="transparent"
              stroke="#8BC34A"
              strokeWidth="2"
              strokeDasharray={163.36}
              strokeDashoffset={163.36 - (163.36 * scrollProgress) / 100}
              className="transition-all duration-150"
            />
          </svg>

          <FaArrowUp className="text-lg group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
