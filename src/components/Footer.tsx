"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full py-24 px-6 md:px-12 lg:px-24 text-white relative border-t border-white/5">
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
            <div className="border-l border-purple-500/30 pl-6">
              <h4 className="text-xl font-semibold mb-1">Bachelor of Science in Information Technology</h4>
              <p className="text-white/40 text-sm mb-3">Mar 2021 – Sep 2025</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Thesis and final-year project on "Personal Finance Tracker". Designed and developed a web-based application that empowers users to manage their income, expenses, and financial trends with ease.
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
          <p className="text-white/50 text-lg max-w-md leading-relaxed">
            Currently based in Pakistan, but open to relocation. Always interested in discussing digital innovation, IT systems, and visual communication.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
