
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "IT Undergraduate & Biomedical Technology Researcher";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            I'm <span className="text-neon bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Y.M. Charuka Pathum</span>
          </h1>
          <div className="h-12 flex items-center mb-8">
            <p className="text-lg md:text-xl font-light text-slate-300">
              {text}<span className="inline-block w-1 h-6 bg-teal-500 ml-1 animate-pulse"></span>
            </p>
          </div>
          <p className="text-slate-400 max-w-lg text-lg mb-10 leading-relaxed">
            Bridging Information Technology and Bio-Medical Technology. Specializing in Software Engineering, Systems Design, and Bio-Signal Processing.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-8 py-4 bg-teal-500 text-slate-950 rounded font-orbitron font-bold uppercase tracking-wider shadow-lg neon-glow cursor-pointer"
            >
              Academic Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-4 bg-transparent border border-teal-500 text-teal-500 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-teal-500/10 transition-colors cursor-pointer"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-teal-500/20 rounded-[2rem] rotate-3 blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full border-2 border-teal-500/30 p-4 rounded-[2.5rem]">
              <div className="w-full h-full overflow-hidden rounded-[2rem] bg-slate-900 flex items-center justify-center">
                <img 
                  src="https://picsum.photos/seed/charuka/600/600" 
                  alt="Y.M. Charuka Pathum" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-teal-500"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-teal-500"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;