"use client";

import { motion } from "framer-motion";
import { ExternalLink, TerminalSquare } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { config } from "@/data/config";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-gray-700 rounded-full font-mono text-xs uppercase tracking-widest text-gray-400">
            04. Build & Break
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-blue)] to-purple-500">Research</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl cyber-border flex flex-col h-full group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-[var(--color-electric-blue)] transition-colors">
                  <TerminalSquare className="w-6 h-6 text-[var(--color-electric-blue)]" />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-electric-blue)] transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-gray-500 px-2 py-1 bg-black rounded border border-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
