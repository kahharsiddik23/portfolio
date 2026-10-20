"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { config } from "@/data/config";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-neon-green)] opacity-[0.02] bg-grid-pattern pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto bg-gray-900 rounded-2xl flex items-center justify-center border-2 border-[var(--color-electric-blue)] mb-8 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <Mail className="w-8 h-8 text-[var(--color-electric-blue)]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Secure The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-blue)] to-[var(--color-neon-green)]">Internet.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12">
            Have a security collaboration, research opportunity, project, or just want to connect?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href={`mailto:${config.personal.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-neon-green)] text-black font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a 
              href={config.social.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:border-[#0a66c2] hover:text-[#0a66c2] transition-colors flex items-center justify-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a 
              href={config.social.hackerone}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:border-white transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" /> HackerOne
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-[#1da1f2] hover:border-[#1da1f2] transition-all">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-[#ff0000] hover:border-[#ff0000] transition-all">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
