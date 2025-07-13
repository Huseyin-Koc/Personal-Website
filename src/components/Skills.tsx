import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 65, color: 'from-blue-500 to-purple-600' },
        { name: 'C#', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'Java', level: 70, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 70, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', level: 75, color: 'from-orange-500 to-red-500' },
      ]
    },
    {
      category: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Oracle DB', level: 60, color: 'from-red-500 to-orange-500' },
        { name: 'PL/SQL', level: 70, color: 'from-orange-600 to-blue-800' },
        { name: 'Git', level: 65, color: 'from-purple-600 to-purple-800' },
        { name: 'Docker', level: 60, color: 'from-green-500 to-green-700' },
        {name: 'Kubernetes', level: 50, color: 'from-yellow-500 to-red-700' },
      ]
    }

  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Skills
          </h2>
          {/* Hareketli gradient glow */}
          <span className="block mx-auto w-24 h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 blur-md animate-pulse-glow2"></span>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white text-center tracking-wide"
              >
                {category.category}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 8px 32px 0 rgba(80,0,255,0.18), 0 0 16px 4px #a78bfa",
                      borderColor: "#a78bfa",
                    }}
                    className="p-6 glass-effect rounded-xl card-hover border-2 border-transparent transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
                  >
                    {/* Animasyonlu arka plan glow */}
                    <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/30 to-purple-500/30 blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-300 pointer-events-none"></span>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full relative animate-gradient-move"
                        style={{
                          background: "linear-gradient(90deg, #38bdf8 0%, #a78bfa 50%, #f472b6 100%)",
                          boxShadow: "0 0 16px 2px #a78bfa88, 0 0 32px 8px #38bdf888",
                        }}
                      >
                        {/* Bar ucunda animasyonlu dot */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + skillIndex * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-primary-400 shadow-lg flex items-center justify-center"
                          style={{
                            boxShadow: "0 0 12px 4px #a78bfa88, 0 0 8px 2px #38bdf888",
                          }}
                        >
                          <span className="block w-2 h-2 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 animate-pulse"></span>
                        </motion.span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;