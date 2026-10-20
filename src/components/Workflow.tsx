"use client";

import { motion } from "framer-motion";
import { config } from "@/data/config";

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10 hidden md:block" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-gray-700 rounded-full font-mono text-xs uppercase tracking-widest text-gray-400">
            03. Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hunting For <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Weakness</span>
          </h2>
        </div>

        {/* Workflow Timeline */}
        <div className="relative mb-24 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-800 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {config.workflow.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-[#0a0a0a] md:bg-transparent"
              >
                <div className="md:mt-12 flex flex-col items-center text-center">
                  <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-[var(--color-neon-green)] mb-6 shadow-[0_0_10px_rgba(57,255,20,0.3)]" />
                  <h4 className="font-mono text-sm text-[var(--color-electric-blue)] mb-2 whitespace-nowrap">{item.step}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[150px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24">
          <div className="text-center glass-panel p-6 rounded-xl cyber-border group hover:border-[var(--color-neon-green)] transition-colors">
            <h4 className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-[var(--color-neon-green)] transition-colors">{config.stats.reports}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Valid Reports</p>
          </div>
          <div className="text-center glass-panel p-6 rounded-xl cyber-border group hover:border-[var(--color-neon-green)] transition-colors">
            <h4 className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-[var(--color-neon-green)] transition-colors">{config.stats.programs}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Programs Tested</p>
          </div>
          <div className="text-center glass-panel p-6 rounded-xl cyber-border group hover:border-red-500 transition-colors">
            <h4 className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-red-500 transition-colors">{config.stats.criticals}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Critical Findings</p>
          </div>
          <div className="text-center glass-panel p-6 rounded-xl cyber-border group hover:border-[var(--color-electric-blue)] transition-colors">
            <h4 className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-[var(--color-electric-blue)] transition-colors">{config.stats.hours}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Research Hours</p>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center glass-panel p-8 rounded-2xl cyber-border">
          <ShieldIcon />
          <p className="text-gray-400 italic mt-4 text-sm md:text-base">
            &quot;I believe responsible disclosure is one of the most effective ways security researchers and organizations can work together to make the internet safer.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-12 h-12 mx-auto text-[var(--color-neon-green)] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}
