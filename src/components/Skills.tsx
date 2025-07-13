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
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 glass-effect rounded-xl card-hover"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        {/* Removed Other Skills section as requested */}
      </div>
    </section>
  );
};

export default Skills; 