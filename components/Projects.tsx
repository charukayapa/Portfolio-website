
import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Smart Health Monitor",
      year: "2024",
      status: "In Progress",
      category: "IoT & Web",
      desc: "Developed a React-based dashboard that visualizes real-time heart rate data from an IoT sensor module.",
      img: "https://picsum.photos/seed/health/600/400"
    },
    {
      title: "Hospital Inventory System",
      year: "2023",
      status: "Completed",
      category: "Database Systems",
      desc: "Designed a SQL-based system to manage biomedical equipment maintenance schedules and medical supplies.",
      img: "https://picsum.photos/seed/inventory/600/400"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-16">
          <span className="text-teal-500 mr-4">04.</span> RESEARCH & PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-slate-900 border border-teal-500/10 rounded-3xl overflow-hidden hover:border-teal-500/40 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Meta Tags Overlay */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500 text-slate-950 text-[10px] font-orbitron font-bold rounded uppercase tracking-widest">
                    {project.year}
                  </span>
                  
                  {/* Status Indicator */}
                  <span className={`px-3 py-1 bg-slate-950/90 backdrop-blur text-[10px] font-orbitron border rounded uppercase tracking-widest flex items-center gap-2 ${
                    project.status === 'In Progress' ? 'border-amber-500/50 text-amber-400' : 'border-teal-500/30 text-teal-400'
                  }`}>
                    {project.status === 'In Progress' && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                    )}
                    {project.status}
                  </span>

                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur text-[10px] font-orbitron text-slate-400 border border-slate-700 rounded uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-100 font-orbitron mb-4 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-1 bg-teal-500/50 group-hover:w-16 group-hover:bg-teal-500 transition-all duration-500"></div>
                   <span className="text-xs font-orbitron text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">
                     Academic Prototype
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
