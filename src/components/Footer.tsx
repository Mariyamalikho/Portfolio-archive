"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-24 px-6 md:px-12 lg:px-24 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold tracking-tight mb-8">Education.</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors duration-300 pl-6">
              <h4 className="text-xl font-semibold mb-1">Bachelor of Science in Information Technology</h4>
              <p className="text-white/40 text-sm mb-3 font-mono">2021 – 2025</p>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Thesis and final-year project on &quot;Personal Finance Tracker&quot;. Designed and developed a web-based application that empowers users to manage their income, expenses, and financial trends with ease.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold tracking-tight mb-8">Get in touch.</h3>
          <p className="text-white/50 text-lg max-w-md leading-relaxed mb-8">
            Currently based in Pakistan, but open to relocation. Always interested in discussing digital innovation, IT systems, and visual communication.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300 w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5a4.7 4.7 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-7 0C7.8 1 6.7 1.3 6.7 1.3a4.7 4.7 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-4 1-5-2-5-2"></path></svg>
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300 w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors" aria-label="Website">
              <Globe className="w-5 h-5 text-neutral-300" />
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
