import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="p-4 bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Nom */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full logo-animated logo-hover" />
          <h1 className="text-xl font-bold glow-text-cycle">Abdelmajid 🚀</h1>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Bouton dark mode */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/50 ml-4"
        >
          {isDark ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Menu hamburger (mobile) */}
        <div className="md:hidden ml-3">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 px-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>À propos</Link></li>
            <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projets</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
