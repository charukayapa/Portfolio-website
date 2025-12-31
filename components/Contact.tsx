
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 border border-teal-500/20 rounded-[3rem] p-12 relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] -z-10"></div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-8">
                <span className="text-teal-500 mr-4">04.</span> LET'S CONNECT
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Interested in collaborating on a Bio-Tech project or hiring a specialized engineer who understands the medical field? Reach out via the terminal or contact me directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 border border-teal-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs font-orbitron text-teal-500 uppercase">Email System</p>
                    <p className="text-slate-200">charukapaathum11@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 border border-teal-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs font-orbitron text-teal-500 uppercase">Direct Uplink</p>
                    <p className="text-slate-200">0715408316</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-orbitron uppercase text-slate-500 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-teal-500/20 rounded-xl px-4 py-4 text-slate-200 focus:outline-none focus:border-teal-500/60 transition-colors" placeholder="Identification..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-orbitron uppercase text-slate-500 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-950 border border-teal-500/20 rounded-xl px-4 py-4 text-slate-200 focus:outline-none focus:border-teal-500/60 transition-colors" placeholder="Protocol..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-orbitron uppercase text-slate-500 ml-1">Message Body</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-teal-500/20 rounded-xl px-4 py-4 text-slate-200 focus:outline-none focus:border-teal-500/60 transition-colors resize-none" placeholder="Transmission payload..."></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-teal-500 text-slate-950 font-orbitron font-bold uppercase tracking-widest rounded-xl neon-glow transition-all"
              >
                Execute Transmission
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
