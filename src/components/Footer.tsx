"use client";

import { config } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 py-12">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <h3 className="font-bold text-white text-lg mb-1">{config.personal.name}</h3>
          <p className="text-gray-500 text-sm font-mono">{config.personal.title}</p>
        </div>
        
        <div className="text-gray-600 text-sm italic">
          &quot;Built with curiosity. Secured with knowledge.&quot;
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-500 font-mono uppercase tracking-wider">
          <p>&copy; 2026 {config.personal.name}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--color-neon-green)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-neon-green)] transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-[var(--color-neon-green)] transition-colors">Responsible Disclosure</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
