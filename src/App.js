import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SplashScreen from "./components/SplashScreen";
import "./index.css";
const App = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen overflow-x-hidden">
        {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
        {splashDone && (
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
