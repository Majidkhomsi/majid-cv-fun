import React, { useState } from "react";
import profilePic from "../assets/photo.jpg";
import setupPic from "../assets/setupmajid.png"
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Typewriter from "typewriter-effect";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="p-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Titre animé */}
      <h2 className="text-4xl font-bold mb-4 glow-text">🙋‍♂️ À propos de moi</h2>

      {/* Typewriter name */}
      <div className="text-2xl font-semibold text-blue-400 mb-6">
        <Typewriter
          options={{
            strings: [
              "Abdelmajid Khomsi",
              "Passionné de Data & IA 🚀",
              "Toujours curieux 🔍",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      {/* Portrait */}
      <div className="flex justify-center mb-6">
        <motion.img
          src={profilePic}
          alt="Abdelmajid Khomsi"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ rotate: 2 }}
        />
      </div>

      {/* Texte de présentation */}
      <p className="text-xl mb-2">
        Je m'appelle <span className="text-blue-400 font-semibold">Abdelmajid Khomsi</span>, 
        étudiant en Master 2 Informatique (BDIA) à Dijon 🇫🇷.
      </p>
      <p className="text-lg mb-2">
        Passionné par la Data, l'IA et la cybersécurité, j’adore découvrir de nouvelles technologies et relever des défis.
      </p>
      <p className="text-lg mb-2">
        <strong className="text-pink-400">📌 Pourquoi moi ?</strong> Parce que je suis curieux, créatif et toujours motivé à apprendre 🤓
      </p>
      <p className="text-lg mb-2">
        Ma spécialité ? Transformer les données en or avec du Machine Learning, de la Data Science, un peu de Cloud ☁️ et beaucoup de passion 🔥.
      </p>
      <p className="text-lg mb-4">
        J’ai aussi un petit faible pour l’IA symbolique (parce que c’est classe 😎) et je garde un œil sur la cybersécurité 🕵️‍♂️.
      </p>
      <p className="text-lg italic text-gray-300">
        Bref, je suis sérieux, curieux, toujours prêt à apprendre, surtout si ça implique un clavier ⌨️ et du café ☕️.
      </p>

      {/* Parcours */}
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl mt-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">🎓 Parcours académique</h3>
        <ul className="text-left space-y-2">
          <li>📍 Master 2 Informatique (BDIA), Université de Bourgogne</li>
          <li>📌 Spécialité : Data Engineering, Machine Learning, Cloud, IA symbolique</li>
          <li>🗖️ Expérience avec Spark, Python, SQL, MongoDB, Cybersécurité</li>
        </ul>
      </div>

      {/* Fun Facts */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">🎉 3 Fun Facts sur moi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-900 rounded-xl shadow hover:scale-105 transition duration-300">
            <p>🧙‍♂️ J'explique le Machine Learning avec des métaphores de magie</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-xl shadow hover:scale-105 transition duration-300">
            <p>☕️ Mon code tourne mieux avec du café… ou du thé 🍵</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-xl shadow hover:scale-105 transition duration-300">
            <p>🐍 Python est mon langage préféré, même si j’ai peur des vrais serpents 😅</p>
          </div>
        </div>
      </div>

      {/* Setup Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-10 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-600 transition"
      >
        🖥️ Voir mon setup
      </button>

      {/* Modal setup */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-black text-white rounded-lg p-6 max-w-2xl w-full shadow-xl">
            <Dialog.Title className="text-2xl font-bold text-blue-400 mb-4">
              🚀 Mon setup de rêve
            </Dialog.Title>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={setupPic}
                alt="Setup Dev Abdelmajid"
                className="w-72 rounded-xl shadow-lg border-4 border-blue-500 hover:scale-105 transition duration-300"
              />
              <p className="text-lg text-left">
                Mon PC fixe, c’est mon QG de code 👨‍💻 ! Avec double écran, une RTX 🔥 (presque magique pour le deep learning),
                et un setup RGB qui fait briller mes idées 💡.
                <br /><br />
                C’est là que naissent mes projets les plus fous 🤘.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-medium"
              >
                Fermer
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Citation */}
<div className="mt-10 italic text-yellow-400 text-lg mb-20">
  "La donnée est le nouveau pétrole... et moi, je suis là pour le raffiner ⛽"
</div>

    </motion.div>
  );
};

export default About;