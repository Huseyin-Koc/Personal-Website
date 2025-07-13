import React from "react";
import { Mail, MapPin, User, CheckCircle, Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-transparent flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mx-auto mb-8">
        {/* Profile Icon */}
        <div className="flex-shrink-0 flex justify-center items-center w-48 h-48 rounded-full bg-green-600/90 shadow-lg">
          <User size={120} className="text-white" />
        </div>
        {/* Info Card */}
        <div className="flex-1">
          <div className="bg-dark-800/80 border border-gray-600 rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-green-400 mb-2">
              Hüseyin Koç
            </h1>
            <h2 className="text-xl text-gray-200 mb-4">
              Computer Engineering Student
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
              <span className="flex items-center gap-1">
                <Mail size={18} className="text-green-400" />{" "}
                kochuseyin@hotmail.fr
              </span>
              <span className="flex items-center gap-1">
                <Phone size={18} className="text-green-400" /> (+90) 5415700509
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-dark-800/80 border border-gray-600 rounded-2xl shadow-xl p-8 mt-0">
          <p className="text-gray-200 mb-4">
            I'm a computer engineering student at Ege University, passionate
            about technology and the world of computers. I am constantly
            striving to improve myself and make the most of the opportunities
            technology offers. My career goal is to specialize in software
            development and produce innovative solutions. I am committed to
            continuous learning and self-improvement, aiming to play an
            important role in the tech world in the future.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle size={20} />
              <span className="text-gray-200">
                Python, C#, Java, MySQL, ASP.NET MVC, PL/SQL, Oracle DB
              </span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Globe size={20} />
              <span className="text-gray-200">
                Turkish, French (native), English (B1-B2)
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
