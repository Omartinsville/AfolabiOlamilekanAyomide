// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold text-neonPurple drop-shadow-[0_0_20px_#8b5cf6]"
      >
        Afolabi Olamilekan Ayomide
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-xl text-neonPink drop-shadow-[0_0_10px_#ec4899]"
      >
        Data Analysis Specialist & XR Studio Developer
      </motion.p>
    </section>
  );
}
