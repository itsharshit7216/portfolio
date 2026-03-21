import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'Java', level: 90, color: 'bg-orange-500' },
  { name: 'Machine Learning', level: 85, color: 'bg-blue-500' },
  { name: 'Data Structures & Algorithms', level: 88, color: 'bg-purple-500' },
  { name: 'Python', level: 80, color: 'bg-yellow-500' },
  { name: 'HTML / CSS / JavaScript', level: 75, color: 'bg-pink-500' },
  { name: 'Git & GitHub', level: 85, color: 'bg-slate-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A blend of strong fundamentals, object-oriented design, and intelligent systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-end mb-2">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="text-slate-400 font-medium text-sm">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-darker/50 rounded-full h-3 border border-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                  className={`h-full rounded-full ${skill.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
