import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Projects
          </h2>
        </motion.div>
        {/* Project Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-dark-800/80 border border-primary-500/30 rounded-2xl shadow-xl p-6 flex flex-col items-start justify-between min-h-[220px] transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-2">Akıllı Makine Analizi</h3>
            <p className="text-gray-300 mb-4 flex-1">A web platform for smart machine data analysis and visualization.</p>
            <a
              href="https://www.akillimacanalizi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
            >
              Visit Website
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" /></svg>
            </a>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark-800/80 border border-primary-500/30 rounded-2xl shadow-xl p-6 flex flex-col items-start justify-between min-h-[220px] transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-2">Smart Parking App</h3>
            <p className="text-gray-300 mb-4 flex-1">A mobile app to find, reserve, and pay for parking spaces in urban areas.</p>
            <a
              href="https://github.com/Huseyin-Koc/Smart-Parking-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
            >
              View on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" /></svg>
            </a>
          </motion.div>
          {/* Project 3 */}
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-dark-800/80 border border-primary-500/30 rounded-2xl shadow-xl p-6 flex flex-col items-start justify-between min-h-[220px] transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-2">StepTrackPro</h3>
            <p className="text-gray-300 mb-4 flex-1">A smart Android app for tracking daily steps, calories, and task goals.</p>
            <a
              href="https://github.com/Huseyin-Koc/StepTrackPro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
            >
              View on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" /></svg>
            </a>
          </motion.div>
          {/* Project 4 */}
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-dark-800/80 border border-primary-500/30 rounded-2xl shadow-xl p-6 flex flex-col items-start justify-between min-h-[220px] transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-2">Appointment System</h3>
            <p className="text-gray-300 mb-4 flex-1">A web-based appointment scheduling and management system.</p>
            <a
              href="https://github.com/Huseyin-Koc/Appointment-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
            >
              View on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" /></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 