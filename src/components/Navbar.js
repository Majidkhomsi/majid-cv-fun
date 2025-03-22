import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png"; // Ton logo stylé

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  // Appliquer le thème au chargement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-md">
      {/* Logo + nom */}
      <div className="flex items-center space-x-2">
      <img
  src={logo}
  alt="Logo"
  className="w-10 h-10 rounded-full logo-animated logo-hover"
/>

<h1 className="text-xl font-bold glow-text-cycle">Abdelmajid 🚀</h1>

      </div>

      {/* Navigation */}
      <ul className="flex gap-6 text-lg">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Bouton dark mode */}
      <button
  onClick={() => setIsDark(!isDark)}
  className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/50"
>
  <div className="drop-shadow-md glow-icon transition-transform duration-300 hover:scale-110">
    {isDark ? (
      <SunIcon className="h-6 w-6 text-yellow-400" />
    ) : (
      <MoonIcon className="h-6 w-6 text-white" />
    )}
  </div>
</button>
    </nav>
  );
};

export default Navbar;
