import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';

const Hero: React.FC = () => {
  // Scroll to About section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary-400 font-mono text-lg mb-2"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold gradient-text mb-4"
        >
          Hüseyin Koç
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-4xl text-gray-300 font-light mb-6"
        >
          Software Developer
        </motion.h2>

      </div>
    </motion.section>
  );
};

export default Hero; 