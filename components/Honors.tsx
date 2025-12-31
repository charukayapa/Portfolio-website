
import React from 'react';
import { motion } from 'framer-motion';

const Honors: React.FC = () => {
  const awards = [
    {
      title: "Dean’s List - Semester 2",
      org: "University of Moratuwa",
      category: "Academic Excellence"
    },
    {
      title: "Top 10 Finalist",
      org: "Health-Tech Hackathon 2023",
      category: "Innovation Competition"
    }
  ];

  return (
    <section id="honors" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-16 text-center">
          <span className="text-teal-500 mr-4">05.</span> RECOGNITION
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/30 border-l-4 border-teal-500 rounded-r-2xl flex items-center justify-between"
            >
              <div>
                <p className="text-teal-500 font-orbitron text-[10px] uppercase tracking-[0.2em] mb-2">{award.category}</p>
                <h3 className="text-xl font-bold text-slate-100">{award.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{award.org}</p>
              </div>
              <div className="text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                🏆
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
