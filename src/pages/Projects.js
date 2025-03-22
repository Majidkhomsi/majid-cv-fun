import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Projet Data Warehouse",
    icon: "📊",
    description:
      "Projet de Data Warehouse avec Spark, Oracle et Metabase, permettant une analyse avancée des avis Yelp.",
    technologies: ["Spark", "Oracle", "Metabase"],
    github: "https://github.com/Majidkhomsi/projet-info-decisionnelle"
  },
  {
    title: "Application Bibliothèque en Angular",
    icon: "📚",
    description:
      "Développement d'une application de gestion de bibliothèque avec Angular, incluant des opérations CRUD.",
    technologies: ["Angular", "HTML", "CSS"],
    github: "https://github.com/Majidkhomsi/ProjetBibliothequeAngular"
  },
  {
    title: "Jeu de Couleur (Java)",
    icon: "🎮",
    description:
      "Un jeu interactif de couleurs codé en Java. Logique simple et fun pour manipuler les événements utilisateurs.",
    technologies: ["Java", "Swing"],
    github: "https://github.com/Majidkhomsi/JeuDeCouleur"
  },
  {
    title: "Site Guerre HTML/CSS/JS",
    icon: "🌐",
    description:
      "Site web statique sur le thème de la guerre, réalisé avec HTML, CSS et un peu de JavaScript.",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Majidkhomsi/SiteGuerre"
  },
  {
    title: "Portfolio CV Fun",
    icon: "💼",
    description:
      "CV interactif en ligne avec React, animations, dark mode et effet WOW garanti.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Majidkhomsi/majid-cv-fun"
  },
  {
    title: "Projet CWA (API Covid)",
    icon: "🦠",
    description:
      "Visualisation de données liées au COVID à l'aide d'APIs ouvertes. Front-end dynamique avec HTML/JS.",
    technologies: ["HTML", "JavaScript", "API"],
    github: "https://github.com/Majidkhomsi/projet-CWA"
  }
];

const Projects = () => {
  return (
    <motion.div
      className="p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8">🚀 Mes Projets Épiques</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">
              <span className="mr-2">{project.icon}</span>
              {project.title}
            </h3>
            <p className="text-base mb-3 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              🔗 Voir sur GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;