"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalSection() {
  const [text, setText] = useState("");
  const fullText = `> whoami\nBug Bounty Hunter\n\n> focus\nWeb Application Security\n\n> mission\nFind vulnerabilities. Understand impact. Improve security.\n\n> status\nAlways Learning\n\n> _`;
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0a0a0a]"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-gray-500 font-bold tracking-widest uppercase">kahhar@security:~$</span>
            <div className="w-10"></div> {/* Spacer */}
          </div>
          
          {/* Terminal Body */}
          <div className="p-8 h-80 overflow-auto font-mono text-sm md:text-base leading-loose whitespace-pre-wrap">
            <span className="text-[var(--color-neon-green)]">{text}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
