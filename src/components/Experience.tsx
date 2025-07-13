import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Probel Yazılım',
      period: '05/08/2024 - 02/09/2024',
      location: 'İzmir, Türkiye',
      description: [
        'Active role in software development processes',
        'Providing support and contributions in existing projects',
        'Team collaboration and project management experience',
        'Working in a professional software development environment'
      ],
      technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'Git', 'Visual Studio']
    },
    {
      title: 'Machine Technician',
      company: 'Watertracks Savoie',
      period: '2023 - 2024',
      location: 'France',
      description: [
        'Experience working with underwater machinery',
        'Maintenance before and after the machine enters the water',
        'Problem solving and troubleshooting technical issues',
        'Machine management and piloting'
      ],
      technologies: ['Technical Maintenance', 'Problem Solving', 'Equipment Management', 'Security']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My career journey and professional experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-dark-800"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 glass-effect rounded-xl card-hover"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-primary-400 font-medium mb-2">
                        {exp.company}
                      </h4>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <span className="text-primary-400 mt-1">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-400 mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center mb-10">
            <span className="mb-2">
              {/* Graduation Cap Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0c-4.418 0-8-1.79-8-4" /></svg>
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold font-sans gradient-text text-center mb-2 tracking-tight">
              Education
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse mb-2"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="w-full max-w-xl p-8 glass-effect rounded-2xl card-hover shadow-2xl border border-primary-500/30"
          >
            <h4 className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-sans">
              Computer Engineering
            </h4>
            <h5 className="text-lg md:text-xl text-blue-400 mb-1 font-medium font-sans">
              Ege University
            </h5>
            <p className="text-gray-400 text-base mb-2 font-mono">
              18/08/2021 – 11/07/2025
            </p>
            <p className="text-gray-300 text-base">
              Thesis: ONAP and OSM Platform Installation and Comparative Analysis at Component Level. My supervisor: Prof. Dr. Orhan Dağdeviren.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 