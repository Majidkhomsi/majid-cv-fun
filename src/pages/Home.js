import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import BackgroundImage from "../assets/mirande.jpg"

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      {/* Contenu principal */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold glow-text">
          <Typewriter
            options={{
              strings: [
                "Bienvenue sur MON CV FUN ! 🚀",
                "Data, IA & Sécurité 🔥",
                " Recherche de stage de 4 à 6 mois en Data / IA / Cloud"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="text-2xl mt-4">
          Je suis <span className="text-blue-500 font-semibold">Abdelmajid Khomsi</span>, un passionné de Data & IA 🤖
        </p>

        <p className="text-xl mt-2 font-medium text-yellow-400">
          🎯 Actuellement à la recherche d'un stage de 4 à 6 mois en Data / IA / Cloud !
        </p>

        <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <p className="text-lg">💡 Ingénieur Data & Machine Learning en devenir</p>
          <p className="text-lg">🎓 Master 2 Informatique - BDIA, Université de Bourgogne</p>
          <p className="text-lg">🛠️ Expert en Python, IA & Sécurité</p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xl">✨ <strong>Pourquoi moi ?</strong></p>
          <ul className="list-disc text-lg mt-2 text-left">
            <li>💡 Je comprends le Machine Learning comme un magicien 🧙‍♂️</li>
            <li>🐍 Python est mon meilleur ami (et non, pas un serpent 🐍)</li>
            <li>💀 Quand un bug arrive... moi : <code>git blame</code> 😈</li>
          </ul>
        </div>

        <a
          href="/CV_Abdelmajid_Khomsi.pdf"
          download
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          📄 Télécharger mon CV
        </a>
      </div>
      <div className="relative w-full min-h-screen overflow-hidden">
  {/* Arrière-plan avec zoom */}
  <div className="absolute inset-0 bg-cover bg-center animate-zoom backdrop-brightness-50 z-0" style={{ backgroundImage: "url('/universite.png')" }} />

  {/* Contenu au-dessus */}
  <motion.div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
    {/* ... ton contenu ici ... */}
  </motion.div>
</div>

    </motion.div>
  );
};

export default Home;
