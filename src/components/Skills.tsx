"use client";

import { motion } from "framer-motion";
import { config } from "@/data/config";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d] relative border-y border-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-gray-700 rounded-full font-mono text-xs uppercase tracking-widest text-gray-400">
            02. Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[var(--color-electric-blue)]">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Web Security */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-xl cyber-border"
          >
            <h3 className="font-mono text-lg text-white mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="text-[var(--color-neon-green)]">&gt;</span> Web Security
            </h3>
            <ul className="space-y-3">
              {config.skills.webSecurity.map((skill, index) => (
                <motion.li key={index} variants={itemVariants} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-[var(--color-electric-blue)] mt-[2px]">•</span> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Reconnaissance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-xl cyber-border"
          >
            <h3 className="font-mono text-lg text-white mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="text-[var(--color-neon-green)]">&gt;</span> Reconnaissance
            </h3>
            <ul className="space-y-3">
              {config.skills.reconnaissance.map((skill, index) => (
                <motion.li key={index} variants={itemVariants} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-[var(--color-electric-blue)] mt-[2px]">•</span> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-xl cyber-border"
          >
            <h3 className="font-mono text-lg text-white mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="text-[var(--color-neon-green)]">&gt;</span> Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {config.skills.tools.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={itemVariants}
                  className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300 font-mono"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Programming */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-xl cyber-border"
          >
            <h3 className="font-mono text-lg text-white mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="text-[var(--color-neon-green)]">&gt;</span> Automation
            </h3>
            <div className="flex flex-wrap gap-2">
              {config.skills.programming.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={itemVariants}
                  className="px-2 py-1 bg-[var(--color-neon-green)] bg-opacity-10 border border-[var(--color-neon-green)] border-opacity-30 rounded text-xs text-[var(--color-neon-green)] font-mono"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
