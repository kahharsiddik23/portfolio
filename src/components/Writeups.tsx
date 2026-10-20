"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { config } from "@/data/config";

export default function Writeups() {
  return (
    <section id="writeups" className="py-24 relative border-t border-gray-900 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-gray-700 rounded-full font-mono text-xs uppercase tracking-widest text-gray-400">
            05. Knowledge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-green)] to-yellow-500">Writeups</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {config.writeups.map((writeup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-panel p-6 md:p-8 rounded-xl cyber-border hover:bg-[#151515] transition-colors cursor-pointer block"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                <span className="text-xs font-mono text-[var(--color-neon-green)] px-2 py-1 border border-[var(--color-neon-green)] border-opacity-30 rounded bg-[var(--color-neon-green)] bg-opacity-10 self-start">
                  {writeup.category}
                </span>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {writeup.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {writeup.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-neon-green)] transition-colors line-clamp-2">
                {writeup.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                {writeup.summary}
              </p>
              
              <div className="flex items-center text-sm font-mono font-bold text-gray-300 group-hover:text-white transition-colors">
                Read Writeup <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform group-hover:text-[var(--color-neon-green)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
