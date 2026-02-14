// src/components/SectionDivider.jsx
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="w-full h-1 rounded-full mb-12"
      style={{
        background: "linear-gradient(270deg, #8b5cf6, #ec4899, #3b82f6, #06b6d4, #fb923c)",
        backgroundSize: "600% 600%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  );
}
