"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Activity, ChevronDown } from "lucide-react";
import { config } from "@/data/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-electric-blue)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[var(--color-neon-green)] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--color-neon-green)] animate-pulse" />
            <span className="font-mono text-sm tracking-widest text-[var(--color-neon-green)] uppercase">
              {config.personal.status}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            <span className="block text-gray-400 text-3xl md:text-4xl mb-2 font-mono uppercase tracking-wider">{config.personal.name}</span>
            I Find The Bugs <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-green)] to-[var(--color-electric-blue)]">
              Others Miss.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            {config.personal.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#projects" className="px-8 py-3 bg-[var(--color-neon-green)] text-black font-semibold rounded hover:bg-white hover:text-black transition-all">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-gray-700 text-white font-semibold rounded hover:border-[var(--color-neon-green)] hover:text-[var(--color-neon-green)] transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual / Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-panel rounded-xl overflow-hidden cyber-border">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#121212]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-gray-500">hunter@sec-terminal:~</span>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p className="text-[var(--color-neon-green)]">$ recon --target example.com</p>
              <p className="text-gray-400">[+] Initializing asset discovery...</p>
              <p className="text-gray-400">[+] Found 1,240 subdomains.</p>
              
              <p className="text-[var(--color-electric-blue)] mt-4">$ enumerate --subdomains --active</p>
              <p className="text-gray-400">[+] Probing live hosts...</p>
              <p className="text-gray-400">[+] 342 alive, mapping tech stack.</p>
              
              <p className="text-purple-400 mt-4">$ analyze --attack-surface</p>
              <p className="text-gray-400">[!] Exposing hidden API endpoints...</p>
              
              <p className="text-red-400 mt-4">$ hunt --vulnerabilities</p>
              <p className="text-white flex items-center gap-2">
                <span className="animate-pulse">_</span> hunting...
              </p>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -right-8 -top-8 glass-panel p-4 rounded-lg flex items-center gap-3 animate-[bounce_4s_infinite]">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <span className="text-sm font-bold font-mono">Bypass Found</span>
          </div>
          <div className="absolute -left-8 -bottom-8 glass-panel p-4 rounded-lg flex items-center gap-3 animate-[bounce_5s_infinite_reverse]">
            <Activity className="w-6 h-6 text-[var(--color-neon-green)]" />
            <span className="text-sm font-bold font-mono">System Securing</span>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[var(--color-neon-green)] transition-colors animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
