import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub } from "react-icons/fi";

export default function Contact() {
  const contactMethods = [
    {
      icon: <FiMail size={24} />,
      label: "",
      link: "mailto:afolabiolamilekan44@gmail.com",
      value: "Afolabiolamilekan44@gmail.com",
    },
    {
      icon: <FiPhone size={24} />,
      label: "",
      link: "tel:+2348000000000",
      value: "+234 814 679 7235",
    },
    {
      icon: <FiGithub size={24} />,
      label: "",
      link: "https://github.com/afolabiOlamilekan",
      value: "Afolabi Olamilekan Ayomide",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        Let's Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-300 max-w-xl text-center mb-12"
      >
        Interested in data intelligence or immersive XR experiences? Reach
        out through any of the channels below.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-transform cursor-pointer"
          >
            <div className="text-purple-400 mb-2">{method.icon}</div>
            <span className="text-white font-medium mb-1">{method.value}</span>
            <span className="text-gray-400 text-sm">{method.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
