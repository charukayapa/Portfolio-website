
import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      institution: "University of Moratuwa",
      degree: "B.Sc. (Hons) in Information Technology",
      period: "2022 – Present",
      desc: "Specializing in Software Engineering and Systems Design.",
      icon: "💻"
    },
    {
      institution: "GWUIM, Sri Lanka",
      degree: "Diploma in Biomedical Technology",
      period: "2023 – Present",
      desc: "Focusing on Medical Instrumentation, Clinical Engineering, and Bio-Signal Processing.",
      icon: "🧬"
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-16">
          <span className="text-teal-500 mr-4">03.</span> ACADEMIC PATH
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900/50 border border-teal-500/10 p-8 rounded-3xl hover:border-teal-500/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center text-3xl border border-teal-500/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-teal-500 font-orbitron text-xs tracking-widest">{item.period}</span>
                    <h3 className="text-2xl font-bold text-slate-100 mt-1">{item.institution}</h3>
                    <p className="text-teal-400 font-medium">{item.degree}</p>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
