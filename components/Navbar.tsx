
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-teal-500/20 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="font-orbitron text-xl font-bold tracking-tighter flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
            <span className="text-slate-950 text-xs font-bold">CP</span>
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent uppercase">CHARUKA</span>
        </a>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors uppercase tracking-widest cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            className="px-5 py-2 bg-teal-500/10 border border-teal-500/50 text-teal-400 rounded-full text-xs font-orbitron uppercase tracking-widest hover:bg-teal-500 hover:text-slate-950 transition-all shadow-[0_0_10px_rgba(20,184,166,0.2)]"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
