"use client";

import { motion } from "framer-motion";
import { config } from "@/data/config";
import { Crosshair, Code, Zap, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="glass-panel p-8 rounded-2xl cyber-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-electric-blue)] opacity-10 rounded-bl-full group-hover:scale-110 transition-transform" />
              
              <div className="w-24 h-24 rounded-full bg-gray-800 mb-6 flex items-center justify-center border-2 border-[var(--color-neon-green)] terminal-glow">
                <span className="text-3xl font-mono font-bold text-white">KS</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{config.personal.name}</h3>
              <p className="text-[var(--color-neon-green)] font-mono text-sm mb-6 pb-6 border-b border-gray-800">
                {config.personal.title.split("|")[0]?.trim()} <br/>
                <span className="text-gray-400">{config.personal.title.split("|")[1]?.trim() ?? ""}</span>
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Crosshair className="w-4 h-4 text-[var(--color-electric-blue)]" /> Security Research
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Database className="w-4 h-4 text-[var(--color-electric-blue)]" /> Web Security
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-[var(--color-electric-blue)]" /> Recon
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Code className="w-4 h-4 text-[var(--color-electric-blue)]" /> Automation
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Right: Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-gray-700 rounded-full font-mono text-xs uppercase tracking-widest text-gray-400">
              01. Identity
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Behind The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-green)] to-[var(--color-electric-blue)]">Hunt</span>
            </h2>
            
            <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed space-y-6 font-sans">
              <p>
                I&apos;m Kahhar Siddik, a cybersecurity enthusiast and bug bounty hunter focused on discovering vulnerabilities in modern web applications and digital systems.
              </p>
              <p>
                My approach combines systematic reconnaissance, creative security testing, vulnerability analysis, and automation. I don&apos;t just run tools—I dive deep into business logic to understand how complex systems fail.
              </p>
              <p>
                I continuously learn, experiment, document findings, and improve my methodology to become a better security researcher. Whether it&apos;s mapping a massive attack surface or chaining small bugs for critical impact, I am driven by the puzzle of breaking systems to make them stronger.
              </p>
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
