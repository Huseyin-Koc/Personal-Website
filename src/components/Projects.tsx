import React from 'react';
import { motion } from 'framer-motion';

const featured = {
  title: "Smart Match Analysis",
  desc: "Smart Match Analysis is a professional football analytics platform that deeply examines and visualizes the complete statistics of a selected team and referee, then delivers AI-driven predictions for the upcoming match.",
  link: "https://www.akillimacanalizi.com/",
  linkText: "Visit Website",
  image: "/logo.png", // Veya bir görsel ekleyebilirsin
};

const others = [
  {
    title: "Smart Parking App",
    desc: "A mobile app to find, reserve, and pay with QR code for parking spaces in urban areas.",
    link: "https://github.com/Huseyin-Koc/Smart-Parking-App",
    linkText: "View on GitHub",
    delay: 0.2,
  },
  {
    title: "StepTrackPro",
    desc: "A smart Android app for tracking steps, calories, and statistics.",
    link: "https://github.com/Huseyin-Koc/StepTrackPro",
    linkText: "View on GitHub",
    delay: 0.3,
  },
  {
    title: "Appointment System",
    desc: "A web app for patient appointment booking, doctor approvals, and admin monitoring.",
    link: "https://github.com/Huseyin-Koc/Appointment-System",
    linkText: "View on GitHub",
    delay: 0.4,
  },
];

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 32px 0 rgba(80,0,255,0.25), 0 0 32px 8px #a78bfa",
            borderColor: "#a78bfa",
          }}
          className="relative bg-dark-800/90 border-2 border-primary-500/40 rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-8 mb-20 overflow-hidden group transition-all duration-300"
        >
          {/* Görsel veya animasyonlu badge */}
          <div className="flex-shrink-0 w-40 h-40 rounded-xl bg-gradient-to-br from-primary-500/30 to-purple-500/30 flex items-center justify-center overflow-hidden shadow-lg">
            {/* Örnek görsel veya animasyon */}
            <img src={featured.image} alt="Featured Project" className="w-full h-full object-cover" />
          </div>
          {/* Bilgi */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{featured.title}</h3>
            <p className="text-gray-300 mb-4">{featured.desc}</p>
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
            >
              {featured.linkText}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" /></svg>
            </motion.a>
          </div>
          {/* Sağdan sola animasyonlu çizgi */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Bağlantı çizgisi (SVG) */}
        <div className="relative flex justify-center mb-[-32px]">
          <svg width="420" height="40" viewBox="0 0 420 40" fill="none" className="absolute left-1/2 -translate-x-1/2">
            <motion.path
              d="M 210 0 Q 210 40 0 40"
              stroke="#a78bfa"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.path
              d="M 210 0 Q 210 40 420 40"
              stroke="#38bdf8"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </svg>
        </div>

        {/* Other Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3 mt-20">
          {others.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="bg-dark-800/80 border border-primary-500/30 rounded-2xl shadow-xl p-6 flex flex-col items-start justify-between min-h-[220px] transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 60, scale: 0.96, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: proj.delay }}
              whileHover={{
                scale: 1.06,
                rotate: 2,
                boxShadow: "0 8px 32px 0 rgba(80,0,255,0.25), 0 0 16px 4px #a78bfa",
                borderColor: "#a78bfa",
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.98,
                boxShadow: "0 4px 16px 0 rgba(80,0,255,0.15)",
                borderColor: "#38bdf8",
              }}
            >
              {/* Dönen ikon */}
              <motion.span
                className="absolute top-4 right-4"
                initial={{ rotate: 0, opacity: 0.7 }}
                animate={{ rotate: 360, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              >
                <svg className="w-7 h-7 text-primary-400 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
                </svg>
              </motion.span>
              <h3 className="text-xl font-bold text-primary-400 mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{proj.desc}</p>
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
              >
                {proj.linkText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7h-6m6 0v6" /></svg>
              </motion.a>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500/30 to-purple-500/30 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;