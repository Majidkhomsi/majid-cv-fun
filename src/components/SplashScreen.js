import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2500); // Durée de l'intro (2.5 secondes)
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-32 h-32 drop-shadow-xl rounded-full"
      />
    </div>
  );
};

export default SplashScreen;
