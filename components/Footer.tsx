
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-teal-500/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-orbitron">
          &copy; {new Date().getFullYear()} <span className="text-teal-500">CHARUKA PATHUM</span>. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors">ResearchGate</a>
        </div>

        <p className="text-slate-600 text-[10px] tracking-widest uppercase font-orbitron">
          Designed for Bio-Digital Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
