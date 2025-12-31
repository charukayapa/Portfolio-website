
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-8 flex items-center">
              <span className="text-teal-500 mr-4">01.</span> PROFILE
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a passionate <span className="text-teal-400 font-semibold">IT Undergraduate</span> at the University of Moratuwa with a deep fascination for <span className="text-cyan-400 font-semibold">Biomedical Technology</span>. My work focuses on creating synergies between advanced software engineering and medical hardware.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-5 bg-slate-900/50 border border-teal-500/20 rounded-xl">
                  <h4 className="font-orbitron text-teal-400 text-sm mb-3 uppercase tracking-wider">Research Interests</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>Bio-informatics</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>AI in Diagnostics</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>Telemedicine</li>
                  </ul>
                </div>
                <div className="p-5 bg-slate-900/50 border border-cyan-500/20 rounded-xl">
                  <h4 className="font-orbitron text-cyan-400 text-sm mb-3 uppercase tracking-wider">Personal Interests</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Open Source Contribution</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Tech Blogging</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>Software Engineering</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-slate-500 text-xs font-orbitron uppercase mb-1">Languages</p>
                  <p className="text-sm text-slate-200">English (Professional) / Sinhala (Native)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-square bg-slate-900 rounded-3xl p-8 border border-teal-500/20 flex items-center justify-center overflow-hidden">
               <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                <motion.path
                  d="M100 20 C100 20 160 60 160 100 C160 140 100 180 100 180 C100 180 40 140 40 100 C40 60 100 20 100 20"
                  stroke="#14b8a6"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {[...Array(12)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={70 + Math.sin(i) * 20}
                    y1={40 + i * 10}
                    x2={130 - Math.sin(i) * 20}
                    y2={40 + i * 10}
                    stroke="#14b8a6"
                    strokeWidth="1"
                    animate={{ x1: [70 + Math.sin(i) * 20, 130 - Math.sin(i) * 20, 70 + Math.sin(i) * 20] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="text-5xl font-bold font-orbitron text-teal-500">IT+BIO</span>
                <span className="text-sm font-orbitron tracking-widest uppercase text-slate-300 mt-2">Researcher</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
