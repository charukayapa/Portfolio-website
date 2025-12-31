
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Programming",
      items: ["JavaScript (ES6+)", "React.js", "Python", "Java", "C++"],
      color: "from-teal-500/20 to-teal-500/5",
      accent: "text-teal-400",
      border: "border-teal-500/30"
    },
    {
      title: "Web Tech",
      items: ["HTML5", "CSS3", "Tailwind CSS", "Node.js", "REST APIs"],
      color: "from-cyan-500/20 to-cyan-500/5",
      accent: "text-cyan-400",
      border: "border-cyan-500/30"
    },
    {
      title: "Biomedical",
      items: ["Biosensors", "Medical Imaging Fundamentals", "Arduino-based Medical Prototypes", "Bio-Signal Processing"],
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-400",
      border: "border-emerald-500/30"
    },
    {
      title: "Tools",
      items: ["Git/GitHub", "VS Code", "MATLAB", "Proteus (Circuit Simulation)"],
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-400",
      border: "border-blue-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-500 text-[10px] font-orbitron tracking-[0.3em] mb-4 uppercase"
          >
            Capabilities Matrix
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center">
            <span className="text-teal-500">02.</span> TECHNICAL STACK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-transparent mt-6 rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative group p-8 rounded-3xl bg-gradient-to-br ${group.color} border ${group.border} backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.1)]`}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-tr-3xl -z-10"></div>
              
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-2 h-2 rounded-full bg-current ${group.accent} animate-pulse`}></div>
                <h3 className={`font-orbitron text-sm uppercase tracking-[0.2em] font-bold ${group.accent}`}>
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-slate-950/40 text-slate-300 text-[11px] font-medium rounded-lg border border-slate-800 transition-colors hover:border-teal-500/30 hover:text-white"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              
              {/* Bottom detail line */}
              <div className="absolute bottom-6 left-8 right-8 h-[1px] bg-slate-800 group-hover:bg-teal-500/20 transition-colors"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-slate-500 text-[10px] font-orbitron tracking-widest uppercase"
        >
          Continuous Learning Sequence Active // Last Updated: March 2024
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
