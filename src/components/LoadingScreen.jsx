import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-[#4E342E] flex flex-col items-center justify-center p-4 bg-soil-texture"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
        {/* Animated Brand Logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#3E7C17] flex items-center justify-center text-white shadow-2xl mb-8 border-2 border-white/20"
        >
          <FaGlobe className="text-5xl" />
        </motion.div>

        {/* Brand Headline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          AVANTIKA <span className="text-[#8BC34A]">FARM GLOBE</span>
        </h1>
        <p className="text-xs text-[#F8F5EC]/80 font-medium uppercase tracking-widest mb-8">
          Shree Mangalmurti Traders (Est. 1985)
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden border border-white/10 mb-4 p-0.5 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3E7C17] to-[#8BC34A] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="flex justify-between w-full text-xs font-bold text-[#F8F5EC]/70 uppercase tracking-wider">
          <span>Preparing Export Infrastructure...</span>
          <span className="text-[#8BC34A]">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
