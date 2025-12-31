
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DNABackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 500]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-20">
      {/* Moving DNA strands (Visual representation) */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-[10%] w-px h-[200vh] bg-gradient-to-b from-transparent via-teal-500 to-transparent">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-4 h-4 rounded-full bg-teal-500 blur-sm" style={{ top: `${i * 100}px`, left: '-2px' }}></div>
        ))}
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute top-0 left-[5%] w-px h-[200vh] bg-gradient-to-b from-transparent via-cyan-500 to-transparent">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute w-3 h-3 rounded-full bg-cyan-500 blur-sm" style={{ top: `${i * 150}px`, left: '-1px' }}></div>
        ))}
      </motion.div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 bio-grid"></div>
    </div>
  );
};

export default DNABackground;
