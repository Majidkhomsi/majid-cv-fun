import React, { useRef } from "react";
import { Mail, Phone, Linkedin, Github, SendHorizonal } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qpz4v5u",         // Ton Service ID
        "template_k4xvms4",        // Ton Template ID
        formRef.current,
        "skyBjnBMg_lU6kqRn"        // Ta Public Key
      )
      .then(
        () => {
          toast.success("✅ Message envoyé avec succès !");
          formRef.current.reset(); // Réinitialise le formulaire
        },
        (error) => {
          toast.error("❌ Une erreur est survenue !");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="p-10 text-center">
      <ToastContainer position="top-center" />
      <h2 className="text-4xl font-bold mb-6 glow-text">📬 Restons en contact</h2>

      <p className="text-xl mb-4">
        Une mission data ? Une question ? Une blague geek à partager ? Écris-moi 💌 :
      </p>

      <div className="flex flex-col items-center gap-3 text-lg">
        <p className="flex items-center gap-2 justify-center">
          <Mail className="w-5 h-5 text-blue-400" />
          <a href="mailto:khomsi.majid@gmail.com" className="text-blue-500 hover:underline">
            khomsi.majid@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-2 justify-center">
          <Phone className="w-5 h-5 text-blue-400" /> +33 7 66 50 52 85
        </p>
        <p className="flex items-center gap-2 justify-center">
          <Linkedin className="w-5 h-5 text-blue-400" />
          <a
            href="https://linkedin.com/in/abdelmajid-khomsi"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="flex items-center gap-2 justify-center">
          <Github className="w-5 h-5 text-blue-400" />
          <a
            href="https://github.com/Majidkhomsi"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      <p className="mt-6 text-sm italic text-gray-400">
        Et non, je n’ai pas encore fait de TikTok sur les jointures SQL… mais ça viendra peut-être 🤓
      </p>

      {/* Formulaire stylé connecté à EmailJS */}
      <div className="mt-10 max-w-md mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ton nom"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Ton email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Ton message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300"
          >
            <SendHorizonal className="w-4 h-4" /> Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
