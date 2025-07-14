import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import "./ProfileCard.css";

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
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl mx-auto mb-8">
        {/* Profile Card - sola yaslı ve daha küçük */}
        <div className="flex-shrink-0 w-full md:w-[320px]">
          <ProfileCard
            name="Hüseyin Koç"
            title="Software Developer"
            contactText="Contact Me"
            avatarUrl="/PP.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => window.open("mailto:kochuseyin@hotmail.fr")}
          />
        </div>
        {/* Açıklama kısmı - sağda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1 self-center bg-dark-800/80 border border-gray-600 rounded-2xl shadow-xl p-8 mt-0 glow-animated-bg ml-5"
        >
          <p className="text-gray-200 mb-4">
            From August 2021 to July 2025, I pursued a Bachelor of Science in
            Computer Engineering at Ege University, successfully defending my
            thesis on “Installation of ONAP and OSM Platforms and
            Component-Level Comparative Analysis” under the supervision of Prof.
            Orhan Dağdeviren. During the summer of 2024, I completed
            a hands-on internship at Probel Yazılım in İzmir, where I was
            immersed in ASP.NET MVC development and database design, gaining
            practical experience in enterprise software lifecycles and
            collaborative Agile workflows. My technical proficiency
            spans a diverse set of technologies—Python, C#, Java, MySQL, ASP.NET
            MVC, PL/SQL, Oracle DB, and Spring Boot—enabling me to architect and
            implement end-to-end solutions across multiple platforms
            . I am a native speaker of Turkish and French, and I hold
            an independent user level in English, with CEFR certifications of B1
            in listening and speaking and B2 in reading. Driven by a
            passion for emerging technologies and continuous self-improvement, I
            am committed to specializing in software development and delivering
            innovative, scalable, and sustainable solutions that contribute
            meaningfully to the evolving tech landscape.
          </p>
          {/* <div className="flex flex-col md:flex-row gap-6 mb-4">
            <span className="flex items-center gap-2 text-green-400">
              Turkish, French (native), English (B1-B2)
            </span>
          </div> */}
        </motion.div>
      </div>
      {/* Animasyonlu dil göstergesi */}
      <div className="flex flex-col items-center mt-10 select-none">
        <div className="flex gap-8">
          {[
            { code: "TR", name: "Turkish", level: "Native" },
            { code: "FR", name: "French", level: "Native" },
            { code: "EN", name: "English", level: "B1-B2" },
          ].map((lang, i) => (
            <motion.div
              key={lang.code}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-blue-400 p-1 shadow-lg w-44">
                <div className="flex flex-col items-center bg-dark-800/80 rounded-2xl px-7 py-5 min-w-[140px]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2 text-lg font-bold text-white shadow border border-white/20">
                    {lang.code}
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {lang.name}
                  </span>
                  <span className="text-cyan-200 text-xs mt-1">
                    {lang.level}
                  </span>
                </div>
              </div>
              {/* Animated line (ip) */}
              <motion.div
                animate={{
                  scaleX: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 8px 2px #38bdf8",
                    "0 0 16px 4px #38bdf8",
                    "0 0 8px 2px #38bdf8",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.2,
                }}
                className="h-1 w-16 bg-gradient-to-r from-purple-400 to-blue-300 rounded-full mt-3"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
