// src/components/Navbar.jsx

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects", "XR Studio", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-neonPurple font-bold text-5xl drop-shadow-[0_0_10px_#8b5cf6]">
          Afolabi Olamilekan Ayomide
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="hover:text-neonPink transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden px-6 pb-4 text-gray-300 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
