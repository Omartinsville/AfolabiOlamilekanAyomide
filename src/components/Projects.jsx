// src/components/Projects.jsx
import { motion } from "framer-motion";

function ProjectCard({ title, description, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8b5cf6, 0 0 40px #ec4899" }}
      className="border border-white/10 p-6 rounded-xl bg-white/5 backdrop-blur cursor-pointer transition-transform"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      )}
      <h3 className="text-white text-xl mb-2 drop-shadow-[0_0_10px_#8b5cf6]">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Data Intelligence Dashboard",
      description: "Interactive analytics platform for workforce monitoring.",
      image: "/assets/dashboard.png",
    },
    {
      title: "XR Immersive Environment",
      description: "Web-based immersive 3D space built with React Three Fiber.",
      image: "/assets/xr-demo.jpg",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl text-neonPurple font-bold mb-10 drop-shadow-[0_0_15px_#8b5cf6]">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

// // src/components/Projects.jsx

// import { motion } from "framer-motion";

// function ProjectCard({ title, description, image }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className="border border-white/10 p-6 rounded-xl bg-white/5 backdrop-blur transition-transform cursor-pointer"
//     >
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="rounded-lg mb-4 w-full h-48 object-cover"
//         />
//       )}

//       <h3 className="text-white text-xl mb-2">{title}</h3>
//       <p className="text-gray-400 text-sm">{description}</p>
//     </motion.div>
//   );
// }

// export default function Projects() {
//   const projects = [
//     {
//       title: "Data Intelligence Dashboard",
//       description:
//         "Interactive analytics platform for workforce monitoring.",
//       image: "/assets/dashboard.png", // replace with your screenshot
//     },
//     {
//       title: "XR Immersive Environment",
//       description:
//         "Web-based immersive 3D space built with React Three Fiber.",
//       image: "/assets/xr-demo.jpg", // replace with your screenshot
//     },
//     {
//       title: "Portfolio Website",
//       description: "Personal portfolio showcasing 3D XR and data projects.",
//       image: "/assets/portfolio.png",
//     },
//   ];

//   return (
//     <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl text-white font-semibold mb-10">Projects</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((p) => (
//           <ProjectCard key={p.title} {...p} />
//         ))}
//       </div>
//     </section>
//   );
// }
